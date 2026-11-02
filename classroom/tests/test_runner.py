import asyncio
import contextlib
import importlib.util
import io
import json
import pathlib
import unittest

spec = importlib.util.spec_from_file_location('runner',pathlib.Path(__file__).parents[1] / 'runner.py')
runner = importlib.util.module_from_spec(spec)
spec.loader.exec_module(runner)

class RunnerTests(unittest.IsolatedAsyncioTestCase):
    async def execute(self, source):
        output = io.StringIO()
        with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output):
            result = await runner.start(source,'/project/main.py')
        return result, output.getvalue()

    async def test_module_scope_and_order(self):
        result, output = await self.execute('x = 3\ndef value():\n    return x\nx = 9\nfor i in range(2):\n    print(value())\n')
        self.assertEqual(result,'finished')
        self.assertEqual(output,'9\n9\n')

    async def test_stop_infinite_loop(self):
        task = asyncio.create_task(runner.start('while True:\n    pass','/project/main.py'))
        await asyncio.sleep(.02)
        runner.stop()
        self.assertEqual(await asyncio.wait_for(task,1),'stopped')

    async def test_nested_sync_loop_watchdog(self):
        result, output = await self.execute('def stuck():\n    while True:\n        pass\nstuck()')
        self.assertEqual(result,'error')
        self.assertIn('loop ran too long',output)

    async def test_errors_keep_original_line_numbers(self):
        result, output = await self.execute('x = 1\nfor i in range(1):\n    print(missing)\n')
        self.assertEqual(result,'error')
        self.assertIn('line 3',output)
        self.assertIn('NameError',output)

    async def test_restart_does_not_leak_globals(self):
        await self.execute('secret = 1')
        result, output = await self.execute('print(secret)')
        self.assertEqual(result,'error')
        self.assertIn('NameError',output)

    async def test_async_task_is_awaited(self):
        result, output = await self.execute('import asyncio\nasync def main():\n    await asyncio.sleep(.01)\n    print("done")\nasyncio.ensure_future(main())')
        self.assertEqual(result,'finished')
        self.assertEqual(output,'done\n')

    async def test_syntax_and_system_exit(self):
        result, output = await self.execute('for')
        self.assertEqual(result,'error')
        self.assertIn('SyntaxError',output)
        result, _ = await self.execute('raise SystemExit')
        self.assertEqual(result,'finished')

    async def test_student_await_does_not_trip_watchdog(self):
        result, output = await self.execute('import asyncio\nawait asyncio.sleep(2.1)\nprint("awake")')
        self.assertEqual(result,'finished')
        self.assertEqual(output,'awake\n')

    async def test_structured_error_details_and_reset(self):
        result, _ = await self.execute('x = 1\nprint(missing)')
        error = json.loads(runner.error_details())
        self.assertEqual(result, 'error')
        self.assertEqual(error['line'], 2)
        self.assertIn('NameError', error['message'])
        await self.execute('if True print(1)')
        error = json.loads(runner.error_details())
        self.assertEqual(error['line'], 1)
        self.assertIn('SyntaxError', error['message'])
        await self.execute('print("ok")')
        self.assertIsNone(json.loads(runner.error_details()))

    async def test_error_categories_keep_clean_messages(self):
        cases = [('if True print(1)', 'SyntaxError'),
                 ('if True:\nprint(1)', 'IndentationError'),
                 ('1 / 0', 'ZeroDivisionError'),
                 ('[][2]', 'IndexError'),
                 ('{}["missing"]', 'KeyError'),
                 ('1 + "text"', 'TypeError'),
                 ('None.missing', 'AttributeError'),
                 ('import definitely_missing_module', 'ModuleNotFoundError'),
                 ('raise RuntimeError("Try again")', 'RuntimeError')]
        for source, kind in cases:
            with self.subTest(kind=kind):
                result, _ = await self.execute(source)
                error = json.loads(runner.error_details())
                self.assertEqual(result, 'error')
                self.assertEqual(error['type'], kind)
                self.assertEqual(error['file'], 'main.py')
                self.assertIsInstance(error['line'], int)
                self.assertNotIn('Traceback', error['message'])
                self.assertNotIn('/project/', error['message'])

if __name__ == '__main__': unittest.main()
