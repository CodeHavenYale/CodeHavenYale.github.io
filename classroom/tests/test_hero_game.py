import copy
import importlib.util
import json
import pathlib
import unittest
from unittest.mock import patch
from types import SimpleNamespace

ROOT = pathlib.Path(__file__).parents[1]
spec = importlib.util.spec_from_file_location('hero_game', ROOT / 'hero_game.py')
game = importlib.util.module_from_spec(spec)
spec.loader.exec_module(game)
levels = json.loads((ROOT / 'curriculum.js').read_text().split('const LEVELS = ', 1)[1].rstrip(';\n'))
FIXTURE = {'path': [[1,1],[2,1],[3,1],[3,2],[2,2],[1,2]], 'start':[1,1], 'exit':[3,2],
           'coins':[[2,2]], 'keys':[[2,2]], 'doors':[[3,2]], 'potions':[[1,2]],
           'enemies':[{'x':2,'y':1,'health':6}]}


class HeroTests(unittest.TestCase):
    def setUp(self):
        game._appearance.clear()
        game._appearance.update(game.DEFAULT_APPEARANCE)
        game.setup(copy.deepcopy(FIXTURE))

    def test_all_maps_are_connected_and_in_bounds(self):
        self.assertEqual(len(levels),49)
        self.assertEqual({l['week'] for l in levels},set(range(1,9)))
        for week in range(1,9):
            self.assertEqual({l['stage'] for l in levels if l['week']==week},set(range(1,8 if week==2 else 7)))
        layouts = [(level, world) for level in levels
                   for world in [level['world']] + level['world'].get('variants', [])]
        for level, world in layouts:
            with self.subTest(level=level['id'], width=world['width']):
                cells={tuple(p) for p in world['path']}
                seen={tuple(world['start'])};pending=list(seen)
                while pending:
                    x,y=pending.pop()
                    for dx,dy in game.DIRECTIONS.values():
                        neighbor=(x+dx,y+dy)
                        if neighbor in cells and neighbor not in seen:
                            seen.add(neighbor);pending.append(neighbor)
                self.assertEqual(cells,seen)
                self.assertGreaterEqual(len(cells),4 if level['week']==4 else 16)
                for x,y in cells:
                    self.assertTrue(0<=x<world['width'] and 0<=y<world['height'])
                objects=world['coins']+world['keys']+world['doors']+world['potions']+[world['exit']]
                objects += [[e['x'],e['y']] for e in world['enemies']]
                objects += [[e['x'],e['y']] for e in world.get('number_clues',[])+world.get('code_doors',[])]
                self.assertTrue(all(tuple(p) in cells for p in objects))
                self.assertEqual(len(world['keys']),len(world['doors']))

    def test_variable_loop_maps_choose_a_fresh_layout_without_mutating_curriculum(self):
        for level in (l for l in levels if l['world'].get('variants')):
            original = copy.deepcopy(level['world'])
            widths = []
            for variant in original['variants']:
                with patch.object(game.random, 'choice', return_value=variant):
                    game.setup(level['world'])
                self.assertEqual(game.hero.exit, tuple(variant['exit']))
                self.assertEqual(game.hero.path, {tuple(p) for p in variant['path']})
                self.assertEqual(json.loads(game.world_config()), variant)
                widths.append(game.hero.config['width'])
            self.assertEqual(len(set(widths)), len(widths))
            self.assertEqual(level['world'], original)

    def test_failed_loop_run_resets_the_same_layout_and_restores_items(self):
        for level in (l for l in levels if l['world'].get('variants')):
            variant = level['world']['variants'][-1]
            with patch.object(game.random, 'choice', return_value=variant) as choose:
                game.setup(level['world'])
                game.hero.move('right', 2 if level['stage']==4 else 1)
                game.hero.collect()
                with patch.object(game, 'draw'):
                    game.reset_after_run()
                self.assertEqual(choose.call_count, 1)
            self.assertEqual((game.hero.x, game.hero.y), tuple(variant['start']))
            self.assertEqual(game.hero.coins_left, {tuple(p) for p in variant['coins']})
            self.assertEqual(game.hero.keys_left, {tuple(p) for p in variant['keys']})
            self.assertEqual(json.loads(game.world_config()), variant)

    def test_walls_enemies_and_single_attacks(self):
        with self.assertRaises(ValueError): game.hero.move('up')
        with self.assertRaises(ValueError): game.hero.move('right')
        with self.assertRaises(ValueError): game.hero.collect()
        game.hero.attack('right')
        self.assertEqual(game.hero.health,9)
        self.assertTrue(game.hero.enemy_at('right'))
        game.hero.attack('right')
        self.assertTrue(game.hero.can_move('right'))
        game.hero.move('right')
        self.assertEqual(game.hero.x,2)

    def test_variable_guard_health_requires_checking_before_second_hit(self):
        world = copy.deepcopy(FIXTURE)
        world['enemy_health_choices'] = [3, 6]
        with patch.object(game.random, 'choice', return_value=3):
            game.setup(world)
        game.hero.attack('right')
        self.assertFalse(game.hero.enemy_at('right'))
        with self.assertRaisesRegex(ValueError, 'no enemy'):
            game.hero.attack('right')

        with patch.object(game.random, 'choice', return_value=6):
            game.setup(world)
        game.hero.attack('right')
        self.assertTrue(game.hero.enemy_at('right'))
        if game.hero.enemy_at('right'):
            game.hero.attack('right')
        self.assertFalse(game.hero.enemy_at('right'))

    def test_key_door_and_shared_supplies(self):
        game.hero.move('down');game.hero.collect()
        self.assertEqual(game.hero.potions,1)
        game.hero.move('right');game.hero.collect()
        self.assertEqual((game.hero.coins,game.hero.keys),(1,1))
        self.assertTrue(game.hero.door_at('right'))
        self.assertFalse(game.hero.can_move('right'))
        with self.assertRaises(ValueError): game.hero.move('right')
        game.hero.unlock('right')
        self.assertEqual(game.hero.keys,0)
        self.assertTrue(game.hero.can_move('right'))
        game.hero.move('right')
        self.assertFalse(game.hero.result()['passed'])  # Guard still alive.

    def test_locked_door_needs_a_key(self):
        game.hero.move('down');game.hero.move('right')
        with self.assertRaises(ValueError): game.hero.unlock('right')
        self.assertTrue(game.hero.door_at('right'))

    def test_healing_and_fresh_run(self):
        game.hero.move('down');game.hero.collect()
        with self.assertRaises(ValueError): game.hero.heal()
        game.hero.move('up');game.hero.attack('right')
        game.hero.heal()
        self.assertEqual((game.hero.health,game.hero.potions),(10,0))
        with self.assertRaises(ValueError): game.hero.heal()
        game.setup(FIXTURE)
        self.assertEqual((game.hero.coins,game.hero.keys,game.hero.potions),(0,0,0))
        self.assertTrue(game.hero.doors)
        self.assertEqual(game.hero.enemies[(2,1)],6)

    def test_action_limit(self):
        with self.assertRaises(RuntimeError):
            for _ in range(230):
                game.hero.move('down');game.hero.move('up')

    def test_hotbar_requires_switching_items_without_consuming_on_wrong_hand(self):
        game.setup({**FIXTURE, 'requires_hotbar': True})
        game.hero.set_hotbar(['sword', 'key', 'potion'])
        with self.assertRaisesRegex(ValueError, 'Hold the sword'):
            game.hero.attack('right')
        self.assertEqual(game.hero.enemies[(2,1)], 6)
        game.hero.equip(0)
        game.hero.attack('right')
        self.assertEqual(game.hero.health, 9)
        game.hero.move('down'); game.hero.collect()
        with self.assertRaisesRegex(ValueError, 'Hold the potion'):
            game.hero.heal()
        self.assertEqual((game.hero.health, game.hero.potions), (9,1))
        game.hero.equip(2); game.hero.heal()
        self.assertEqual((game.hero.health, game.hero.potions), (10,0))
        with self.assertRaisesRegex(ValueError, 'Hold the sword'):
            game.hero.attack('up')
        game.hero.move('right'); game.hero.collect()
        with self.assertRaisesRegex(ValueError, 'Hold the key'):
            game.hero.unlock('right')
        self.assertEqual(game.hero.keys, 1)
        self.assertTrue(game.hero.door_at('right'))
        game.hero.equip(1); game.hero.unlock('right')
        self.assertEqual(game.hero.keys, 0)
        self.assertFalse(game.hero.door_at('right'))

    def test_hotbar_slots_do_not_grant_free_keys_or_potions(self):
        game.setup({**FIXTURE, 'requires_hotbar': True})
        game.hero.set_hotbar(['sword', 'key', 'potion'])
        game.hero.equip(2)
        with self.assertRaisesRegex(ValueError, 'need a potion'):
            game.hero.heal()
        game.hero.move('down'); game.hero.move('right')
        game.hero.equip(1)
        with self.assertRaisesRegex(ValueError, 'need a gold key'):
            game.hero.unlock('right')

    def test_hotbar_loads_a_copy_and_playback_preserves_each_held_item(self):
        items = ['sword','key']
        game.hero.set_hotbar(items)
        game.hero.equip(0)
        sword_frame = copy.deepcopy(game.hero.frames[-1])
        items[0] = 'potion'
        items.append('sword')
        self.assertEqual(game.hero.held, 'sword')
        game.hero.equip(1)
        self.assertEqual(game.hero.frames[-1]['held'], 'key')
        self.assertEqual(game.hero.frames[-1]['selected_slot'], 1)
        game.hero.set_hotbar(items)
        self.assertIsNone(game.hero.held)
        self.assertIsNone(game.hero.selected_slot)
        game.hero.equip(0)
        self.assertEqual(game.hero.frames[-1]['held'], 'potion')
        self.assertEqual(game.hero.frames[2], sword_frame)
        self.assertEqual(sword_frame['hotbar'], ['sword','key'])

    def test_hotbar_rejects_bad_lists_and_indexes_without_changing_the_selection(self):
        game.hero.set_hotbar(['sword','key','potion'])
        game.hero.equip(1)
        for items in [None, [], 'sword', ('key',), ['sword'] * 6, ['axe'], [None], [[]]]:
            with self.assertRaises(ValueError): game.hero.set_hotbar(items)
            self.assertEqual(game.hero.held, 'key')
        for index in [-1, 3, 5, True, 1.0, '1', None]:
            with self.assertRaisesRegex(ValueError, 'index'): game.hero.equip(index)
            self.assertEqual(game.hero.held, 'key')

    def test_hotbar_resets_between_runs_and_preserves_appearance(self):
        game.setup({**FIXTURE, 'requires_hotbar': True})
        game.hero.set_hotbar(['sword','key','potion'])
        game.hero.equip(0)
        game.hero.set_hat('crown')
        game.hero.attack('right')
        with patch.object(game, 'draw'): game.reset_after_run()
        self.assertEqual(game.hero.hotbar, [])
        self.assertIsNone(game.hero.held)
        self.assertEqual(game.hero.frames[0]['hotbar'], [])
        self.assertEqual(game.hero.hat, 'crown')
        self.assertEqual(game.hero.health, 10)
        self.assertTrue(game.hero.config['requires_hotbar'])

    def test_hotbar_is_required_only_for_lists_and_all_starters_compile(self):
        for level in levels:
            compile(level['starter'], level['id'], 'exec')
            self.assertEqual(bool(level['world'].get('requires_hotbar')), level['week'] == 5)
        game.hero.attack('right')  # Earlier weeks still work without equipping.

    def test_move_and_attack_default_to_single_actions(self):
        game.hero.move('down')
        self.assertEqual((game.hero.x,game.hero.y),(1,2))
        self.assertEqual(game.hero.potions,0)
        game.hero.move('up')
        game.hero.attack('right')
        self.assertEqual(game.hero.enemies[(2,1)],3)
        self.assertEqual(game.hero.health,9)

    def test_counts_repeat_actions_and_record_each_turn(self):
        game.hero.attack('right', 2)
        self.assertEqual(game.hero.enemies[(2,1)], 0)
        self.assertEqual(game.hero.health, 9)
        game.hero.move('right', 2)
        self.assertEqual((game.hero.x, game.hero.y), (3,1))
        self.assertEqual(len(game.hero.frames), 5)
        self.assertEqual([(f['x'], f['y']) for f in game.hero.frames[-2:]], [(2,1),(3,1)])

    def test_counts_validate_before_acting(self):
        for count in [0, -1, True, 2.0, '2', None]:
            for action in [game.hero.move, game.hero.attack]:
                with self.assertRaisesRegex(ValueError, 'positive whole number'):
                    action('right', count)
        self.assertEqual(len(game.hero.frames), 1)

    def test_counted_moves_do_not_skip_obstacles_or_collect_items(self):
        game.hero.move('down')
        with self.assertRaisesRegex(ValueError, 'locked'):
            game.hero.move('right', 2)
        self.assertEqual((game.hero.x, game.hero.y), (2,2))
        self.assertEqual(game.hero.coins, 0)
        game.setup(FIXTURE)
        with self.assertRaisesRegex(ValueError, 'enemy'):
            game.hero.move('right', 2)
        game.setup(self.code_board())
        with self.assertRaisesRegex(ValueError, 'Code door'):
            game.hero.move('right', 7)
        self.assertEqual((game.hero.x, game.hero.y), (4,1))

    def test_every_variables_level_uses_codes_and_increasing_memory(self):
        week=[l for l in levels if l['week']==2]
        self.assertEqual([len(l['world']['code_doors']) for l in week],[1,2,2,3,4,5,6])
        self.assertEqual([len(l['world']['number_clues']) for l in week],[1,1,2,2,3,3,4])
        for level in week:
            self.assertIn('hero.read()',level['hint'])
            self.assertIn('hero.enter_code("right", code)',level['hint'])
            game.setup(level['world'])
            self.assertEqual(len(set(game.hero.clue_values.values())),len(game.hero.clue_values))

    def code_board(self):
        return {'path':[[x,1] for x in range(1,9)],'start':[1,1],'exit':[8,1],
                'coins':[],'enemies':[],
                'number_clues':[{'x':2,'y':1,'label':'A'},{'x':3,'y':1,'label':'B'}],
                'code_doors':[{'x':5,'y':1,'label':'I','formula':'B','terms':[{'clue':'B'}]},
                              {'x':7,'y':1,'label':'II','formula':'A','terms':[{'clue':'A'}]}]}

    def test_readings_are_saved_separately_and_doors_use_the_matching_value(self):
        with patch.object(game.random,'sample',return_value=[2,9]): game.setup(self.code_board())
        with self.assertRaisesRegex(ValueError,'Stand on'): game.hero.read()
        game.hero.move('right');a=game.hero.read()
        self.assertEqual(a,2)
        self.assertEqual(game.hero.read(),a)
        game.hero.move('right');b=game.hero.read()
        self.assertEqual((a,b),(2,9))
        game.hero.move('right')
        self.assertFalse(game.hero.can_move('right'))
        with self.assertRaisesRegex(ValueError,'Code door I'): game.hero.move('right')
        for code in [None,True,9.0,'9']:
            with self.assertRaisesRegex(ValueError,'saved from hero.read'): game.hero.enter_code('right',code)
        with self.assertRaisesRegex(ValueError,'does not open'): game.hero.enter_code('right',a)
        self.assertIn((5,1),game.hero.code_doors)
        game.hero.enter_code('right',b)
        self.assertTrue(game.hero.can_move('right'))
        self.assertIn((5,1),game.hero.frames[0]['code_doors'])
        self.assertNotIn((5,1),game.hero.frames[-1]['code_doors'])
        self.assertEqual(game.hero.frames[0]['readings'],{})
        self.assertEqual(game.hero.frames[-1]['readings'],{'A':2,'B':9})
        with self.assertRaisesRegex(ValueError,'no code door'): game.hero.enter_code('right',b)
        game.hero.move('right');game.hero.move('right')
        game.hero.enter_code('right',a)
        game.hero.move('right');game.hero.move('right')
        self.assertTrue(game.hero.result()['passed'])

    def test_new_run_rejects_the_previous_run_code(self):
        for values in [[2,3],[8,9]]:
            with patch.object(game.random,'sample',return_value=values): game.setup(self.code_board())
            game.hero.move('right');a=game.hero.read()
            game.hero.move('right');b=game.hero.read()
            game.hero.move('right')
            if b==9:
                with self.assertRaisesRegex(ValueError,'does not open'): game.hero.enter_code('right',3)
            game.hero.enter_code('right',b)

    def test_unopened_code_doors_prevent_completion(self):
        game.setup(self.code_board())
        game.hero.x,game.hero.y=game.hero.exit
        self.assertFalse(game.hero.result()['passed'])
        self.assertIn('Open code door I using B.',game.hero.result()['remaining'])

    def test_reset_restores_code_doors_and_clears_readings(self):
        with patch.object(game.random,'sample',return_value=[2,3]): game.setup(self.code_board())
        game.hero.move('right');a=game.hero.read()
        game.hero.move('right');b=game.hero.read()
        game.hero.move('right');game.hero.enter_code('right',b)
        with patch.object(game,'draw'),patch.object(game.random,'sample',return_value=[8,9]):
            game.reset_after_run()
        self.assertEqual(game.hero.readings,{})
        self.assertEqual(len(game.hero.code_doors),2)
        self.assertEqual(game.hero.clue_values,{'A':8,'B':9})
        self.assertEqual((game.hero.x,game.hero.y),(1,1))

    def test_customization_is_recorded_and_survives_reruns(self):
        first = game.hero.frames[0].copy()
        game.hero.set_name('Nova')
        game.hero.set_color('purple')
        game.hero.set_hat('crown')
        frame = game.hero.frames[-1]
        self.assertEqual((frame['name'], frame['color'], frame['hat']), ('Nova', '#c084fc', 'crown'))
        self.assertEqual(first['name'], 'Hero')
        self.assertEqual(first['color'], '#60a5fa')
        self.assertEqual(game.hero.health, 10)
        game.hero.set_color('#22AAFF')
        self.assertEqual(game.hero.color, '#22aaff')
        game.setup(FIXTURE)
        self.assertEqual((game.hero.name, game.hero.color, game.hero.hat), ('Nova', '#22aaff', 'crown'))

    def test_invalid_customization_and_directions_are_readable(self):
        for name in ['', 'x'*17, 'two\nlines', 42]:
            with self.assertRaisesRegex(ValueError, 'Choose a name'):
                game.hero.set_name(name)
        for color in [None, {}, 'invisible', '#123xyz']:
            with self.assertRaises(ValueError):
                game.hero.set_color(color)
        for hat in [[], 'spaceship', None]:
            with self.assertRaisesRegex(ValueError, 'Choose'):
                game.hero.set_hat(hat)
        with self.assertRaisesRegex(ValueError, 'Use'):
            game.hero.move([])

    def test_failure_reset_restores_world_and_keeps_appearance(self):
        game.hero.set_name('Nova')
        game.hero.set_color('purple')
        game.hero.set_hat('crown')
        game.hero.move('down')
        game.hero.collect()
        with patch.object(game, 'draw') as draw:
            game.reset_after_run()
            draw.assert_called_once()
        self.assertEqual((game.hero.x, game.hero.y), tuple(FIXTURE['start']))
        self.assertEqual((game.hero.health, game.hero.coins, game.hero.potions), (10, 0, 0))
        self.assertEqual(game.hero.name, 'Nova')
        self.assertEqual(game.hero.hat, 'crown')
        self.assertEqual(game.hero.frames[0]['color'], '#c084fc')
        self.assertEqual(game.hero.enemies[(2, 1)], 6)
        self.assertEqual(game.hero.doors, {(3, 2)})

    def test_wrong_color_key_does_not_open_or_consume(self):
        config = copy.deepcopy(FIXTURE)
        config['key_colors'] = [{'x': 2, 'y': 2, 'color': 'blue'}]
        config['door_colors'] = [{'x': 3, 'y': 2, 'color': 'red'}]
        game.setup(config)
        game.hero.move('down'); game.hero.move('right'); game.hero.collect()
        with self.assertRaisesRegex(ValueError, 'red key'):
            game.hero.unlock('right')
        self.assertEqual(game.hero.keyring, {'blue': 1})
        self.assertEqual(game.hero.keys, 1)
        self.assertTrue(game.hero.door_at('right'))

    def test_switch_opens_only_matching_gate_and_reset_restores_it(self):
        config = copy.deepcopy(FIXTURE)
        config['switches'] = [{'x': 1, 'y': 1, 'color': 'purple'}]
        config['gates'] = [{'x': 1, 'y': 2, 'color': 'purple'}, {'x': 2, 'y': 2, 'color': 'blue'}]
        game.setup(config)
        self.assertFalse(game.hero.can_move('down'))
        with self.assertRaisesRegex(ValueError, 'purple gate'): game.hero.move('down')
        game.hero.activate()
        self.assertTrue(game.hero.can_move('down'))
        self.assertIn((2, 2), game.hero.gates)
        with self.assertRaisesRegex(ValueError, 'already on'): game.hero.activate()
        game.hero.move('down')
        with self.assertRaisesRegex(ValueError, 'Stand on a switch'): game.hero.activate()
        game.setup(config)
        self.assertEqual(len(game.hero.gates), 2)
        self.assertFalse(game.hero.activated)

    def test_week_one_goals_include_interactions_not_just_walking(self):
        week = [l for l in levels if l['week'] == 1]
        for level in week:
            self.assertTrue(level['world']['key_colors'])
            self.assertTrue(level['goals'])
        self.assertGreaterEqual(len(week[1]['world']['key_colors']), 2)
        self.assertEqual(len(week[-1]['world']['switches']), 2)
        game.setup(week[-1]['world'])
        self.assertTrue(any('blue door' in item for item in game.hero.result()['remaining']))
        self.assertTrue(any('purple switch' in item for item in game.hero.result()['remaining']))

    def test_appearance_survives_new_module_and_changes_without_changing_game_progress(self):
        saved = {}
        storage = SimpleNamespace(getItem=lambda key: saved.get(key), setItem=lambda key, value: saved.__setitem__(key, value))
        with patch.object(game.sys, 'platform', 'emscripten'), patch.dict(game.sys.modules, {'js': SimpleNamespace(localStorage=storage)}):
            game.hero.set_name('Nova')
            game.hero.set_color('purple')
            game.hero.set_hat('crown')
            # A fresh module represents reloading the browser, not just rerunning code.
            fresh = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(fresh)
            fresh.setup(FIXTURE)
            self.assertEqual((fresh.hero.name, fresh.hero.color, fresh.hero.hat), ('Nova', '#c084fc', 'crown'))
            self.assertEqual((fresh.hero.x, fresh.hero.y), tuple(FIXTURE['start']))
            self.assertEqual(fresh.hero.health, 10)
            fresh.hero.set_hat('none')
            fresh.setup(levels[1]['world'])
            self.assertEqual((fresh.hero.name, fresh.hero.color, fresh.hero.hat), ('Nova', '#c084fc', 'none'))
            self.assertEqual(json.loads(saved[game.APPEARANCE_KEY])['hat'], 'none')

    def test_invalid_or_blocked_appearance_storage_keeps_game_usable(self):
        storage = SimpleNamespace(getItem=lambda key: '{bad json')
        with patch.object(game.sys, 'platform', 'emscripten'), patch.dict(game.sys.modules, {'js': SimpleNamespace(localStorage=storage)}):
            self.assertEqual(game.load_appearance(), game.DEFAULT_APPEARANCE)
            game.hero.set_name('Sky')  # No setItem method: memory persistence still works.
            game.setup(FIXTURE)
            self.assertEqual(game.hero.name, 'Sky')
            with self.assertRaises(ValueError): game.hero.set_hat('bad hat')
            self.assertEqual(game._appearance['hat'], 'cap')

if __name__=='__main__': unittest.main()
