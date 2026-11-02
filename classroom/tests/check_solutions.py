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
        if level['week'] == 5:
            tree = ast.parse(code)
            assert not any(isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.Lambda))
                           for node in ast.walk(tree)), (level['id'], 'Functions are taught in Week 6')
            assert any(isinstance(node, ast.For) for node in ast.walk(tree)), level['id']
            assert any(isinstance(node, ast.While) for node in ast.walk(tree)), level['id']
        hero_game.setup(level['world'])
        status = await runner.start(code, '/project/hero.py')
        assert status == 'finished', (level['id'], status)
        assert hero_game.hero.result()['passed'], level['id']
        assert hero_game.hero.health > 0
        for variant in level['world'].get('variants', []):
            with patch.object(hero_game.random, 'choice', return_value=variant):
                hero_game.setup(level['world'])
            status = await runner.start(solutions[level['id']]['code'], '/project/hero.py')
            assert status == 'finished', (level['id'], variant['width'], status)
            assert hero_game.hero.result()['passed'], (level['id'], variant['width'])
            assert hero_game.hero.health > 0
        if level['world'].get('number_clues'):
            for values in ([2,3,4,5],[9,8,7,6],[2,9,4,7],[8,3,7,2]):
                with patch.object(hero_game.random, 'sample', side_effect=lambda population, size: values[:size]):
                    hero_game.setup(level['world'])
                status = await runner.start(solutions[level['id']]['code'], '/project/hero.py')
                assert status == 'finished', (level['id'], values, status)
                assert hero_game.hero.result()['passed'], (level['id'], values)
                assert len(hero_game.hero.readings) == len(level['world']['number_clues'])
        if level['world'].get('enemy_health_choices'):
            for pattern in ((3,), (6,), (3, 6)):
                values = itertools.cycle(pattern)
                with patch.object(hero_game.random, 'choice', side_effect=lambda choices: next(values)):
                    hero_game.setup(level['world'])
                status = await runner.start(solutions[level['id']]['code'], '/project/hero.py')
                assert status == 'finished', (level['id'], pattern, status)
                assert hero_game.hero.result()['passed'], (level['id'], pattern)
    print(f'{len(levels)} solutions passed through the Python runner.')


asyncio.run(check())
