"""Read decrypted teacher solutions on stdin and verify real runner behavior."""
import asyncio
import ast
import itertools
import json
import pathlib
import sys
from unittest.mock import patch

ROOT = pathlib.Path(__file__).parents[1]
sys.path.insert(0, str(ROOT))
import hero_game
import runner

levels = json.loads((ROOT / 'curriculum.js').read_text().split('const LEVELS = ')[1].rstrip(';\n'))
solutions = json.load(sys.stdin)


async def check():
    for level in levels:
        code = solutions[level['id']]['code']
        if level['week'] in (5,6):
            tree = ast.parse(code)
            assert not any(isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.Lambda))
                           for node in ast.walk(tree)), (level['id'], 'Only previously taught Python is needed')
            assert any(isinstance(node, ast.Subscript) and isinstance(node.value, ast.Attribute)
                       and node.value.attr == 'inventory' for node in ast.walk(tree)), level['id']
            assert level['starter'] == '' and level['example'] == '', level['id']
        hero_game.setup(level['world'])
        status = await runner.start(code, '/project/hero.py', True)
        assert status == 'finished', (level['id'], status)
        assert hero_game.hero.result()['passed'], level['id']
        assert hero_game.hero.health > 0
        if level['week'] in (5,6):
            frames = hero_game.hero.frames
            assert frames[0]['hotbar'] == [], level['id']
            assert all(len(f['hotbar']) <= 5 for f in frames), level['id']
            for previous, frame in zip(frames, frames[1:]):
                if frame['enemies'] != previous['enemies']:
                    assert frame['held'] == 'sword', level['id']
                if frame['doors'] != previous['doors']:
                    assert previous['held'].endswith(' key'), level['id']
                    assert frame['held'] is None, level['id']
                    assert len(frame['hotbar']) == len(previous['hotbar']) - 1, level['id']
                if frame['health'] > previous['health']:
                    assert previous['held'] == 'potion', level['id']
                    assert frame['held'] is None, level['id']
        for variant in level['world'].get('variants', []):
            with patch.object(hero_game.random, 'choice', return_value=variant):
                hero_game.setup(level['world'])
            status = await runner.start(solutions[level['id']]['code'], '/project/hero.py', True)
            assert status == 'finished', (level['id'], variant['width'], status)
            assert hero_game.hero.result()['passed'], (level['id'], variant['width'])
            assert hero_game.hero.health > 0
        if level['world'].get('number_clues'):
            for values in ([2,3,4,5],[9,8,7,6],[2,9,4,7],[8,3,7,2]):
                with patch.object(hero_game.random, 'sample', side_effect=lambda population, size: values[:size]):
                    hero_game.setup(level['world'])
                status = await runner.start(solutions[level['id']]['code'], '/project/hero.py', True)
                assert status == 'finished', (level['id'], values, status)
                assert hero_game.hero.result()['passed'], (level['id'], values)
                assert len(hero_game.hero.readings) == len(level['world']['number_clues'])
        if level['world'].get('enemy_health_choices'):
            for pattern in [(value,) for value in level['world']['enemy_health_choices']] + [tuple(level['world']['enemy_health_choices']), tuple(reversed(level['world']['enemy_health_choices']))]:
                values = itertools.cycle(pattern)
                with patch.object(hero_game.random, 'choice', side_effect=lambda choices: next(values)):
                    hero_game.setup(level['world'])
                status = await runner.start(solutions[level['id']]['code'], '/project/hero.py', True)
                assert status == 'finished', (level['id'], pattern, status)
                assert hero_game.hero.result()['passed'], (level['id'], pattern)
    print(f'{len(levels)} solutions passed through the Python runner.')


asyncio.run(check())
