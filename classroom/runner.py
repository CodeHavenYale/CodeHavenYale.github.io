"""Cooperative classroom runner. Preserves module scope and original source lines.

This helps with accidental Python loops; it is not a sandbox against hostile code
or a preemptive interrupt for blocking native extensions.
"""
import ast
import asyncio
import builtins
import inspect
import json
import linecache
import sys
import time
import traceback

_deadline = 0
_error_info = None


class ClassroomLoopError(RuntimeError):
    pass


def _guard():
    if time.monotonic() > _deadline:
        raise ClassroomLoopError(
            'A loop ran too long without giving the browser a turn. '
            'Check the loop condition, or use an async function with await asyncio.sleep(0).')


async def _yield():
    global _deadline
    await asyncio.sleep(0.001)
    _deadline = time.monotonic() + 2


class ClassroomTransformer(ast.NodeTransformer):
    def __init__(self):
        self.can_await = True
        self.depth = 0

    def visit_FunctionDef(self, node):
        return self._scope(node, False)

    def visit_AsyncFunctionDef(self, node):
        return self._scope(node, True)

    def visit_ClassDef(self, node):
        return self._scope(node, False)

    def _scope(self, node, can_await):
        previous = self.can_await, self.depth
        self.can_await, self.depth = can_await, 0
        self.generic_visit(node)
        self.can_await, self.depth = previous
        return node

    def _loop(self, node):
        outermost = self.depth == 0
        self.depth += 1
        self.generic_visit(node)
        self.depth -= 1
        name = '_codehaven_yield' if self.can_await and outermost else '_codehaven_guard'
        call = ast.Call(func=ast.Name(id=name, ctx=ast.Load()), args=[], keywords=[])
        if self.can_await and outermost:
            call = ast.Await(value=call)
        node.body.insert(0, ast.copy_location(ast.Expr(value=call), node))
        return node

    visit_For = _loop
    visit_While = _loop
    visit_AsyncFor = _loop


def _trace(frame, event, arg):
    if event == 'line' and frame.f_code.co_filename.startswith('/project/'):
        _guard()
    return _trace


async def run(source, filename):
    global _deadline, _last_error, _error_info
    _last_error = None
    _error_info = None
    existing_tasks = asyncio.all_tasks()
    original_input = builtins.input
    def classroom_input(prompt=''):
        from js import window
        value = window.prompt(str(prompt))
        if value is None:
            raise EOFError('Input cancelled')
        return str(value)
    builtins.input = classroom_input
    namespace = {'__name__':'__main__', '__file__':filename,
                 '_codehaven_yield':_yield, '_codehaven_guard':_guard}
    linecache.cache[filename] = (len(source), None, source.splitlines(True), filename)
    loop = asyncio.get_running_loop()
    heartbeat_handle = None
    def heartbeat():
        # A browser turn, including a student's own await, renews the budget.
        global _deadline
        nonlocal heartbeat_handle
        _deadline = time.monotonic() + 2
        heartbeat_handle = loop.call_later(0.25, heartbeat)
    try:
        tree = ClassroomTransformer().visit(ast.parse(source, filename))
        ast.fix_missing_locations(tree)
        compiled = compile(tree, filename, 'exec', flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
        _deadline = time.monotonic() + 2
        heartbeat_handle = loop.call_later(0.25, heartbeat)
        sys.settrace(_trace)
        result = eval(compiled, namespace)
        if inspect.isawaitable(result):
            await result
        # Await explicit student-created tasks instead of reporting completion early.
        pending = asyncio.all_tasks() - existing_tasks
        if pending:
            await asyncio.gather(*pending)
    except asyncio.CancelledError:
        return 'stopped'
    except SystemExit:
        return 'finished'
    except BaseException as error:
        message = error.msg if isinstance(error, SyntaxError) else str(error)
        _last_error = type(error).__name__ + ': ' + (message or 'The program stopped without a message.')
        frames = [f for f in traceback.extract_tb(error.__traceback__) if f.filename.startswith('/project/')]
        line = error.lineno if isinstance(error, SyntaxError) else frames[-1].lineno if frames else None
        filename = error.filename if isinstance(error, SyntaxError) else frames[-1].filename if frames else None
        _error_info = {'message': _last_error, 'line': line, 'type': type(error).__name__,
                       'file': filename.rsplit('/', 1)[-1] if filename else None}
        traceback.print_exc()
        return 'error'
    finally:
        sys.settrace(None)
        if heartbeat_handle:
            heartbeat_handle.cancel()
        builtins.input = original_input
        pending = asyncio.all_tasks() - existing_tasks
        for task in pending:
            task.cancel()
        if pending:
            await asyncio.gather(*pending, return_exceptions=True)
        pygame = sys.modules.get('pygame')
        if pygame:
            pygame.quit()
    return 'finished'


_active_task = None


async def start(source, filename):
    global _active_task
    _active_task = asyncio.create_task(run(source, filename))
    try:
        return await _active_task
    finally:
        _active_task = None


def stop():
    if _active_task:
        _active_task.cancel()


def error_details():
    return json.dumps(_error_info)
