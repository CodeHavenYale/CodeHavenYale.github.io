"""Review-specific regressions: a large world must remain navigable and replayable."""
import json
import pathlib
import sys
import unittest
from unittest.mock import patch

ROOT = pathlib.Path(__file__).parents[1]
sys.path.insert(0, str(ROOT))
import hero_game as game

LEVELS = json.loads((ROOT/'curriculum.js').read_text().split('const LEVELS = ')[1].rstrip(';\n'))
WORLD = next(level['world'] for level in LEVELS if level['week'] == 6)


class ReviewTests(unittest.TestCase):
    def setUp(self):
        game.setup(WORLD)

    def test_one_large_review_combines_all_previous_world_mechanics(self):
        self.assertEqual(len([l for l in LEVELS if l['week'] == 6]), 1)
        self.assertGreaterEqual(len(game.hero.path), 300)
        self.assertEqual(len(WORLD['regions']), 9)
        for feature in ('switches', 'gates', 'number_clues', 'code_doors', 'enemies',
                        'enemy_health_choices', 'items', 'deliveries', 'inventory_mode'):
            self.assertTrue(WORLD[feature], feature)

    def test_follow_keeps_every_walkable_tile_visible_including_world_edges(self):
        for x, y in game.hero.path:
            left, top = game.camera_bounds(dict(x=x, y=y))
            self.assertTrue(0 <= left <= WORLD['width']-16)
            self.assertTrue(0 <= top <= WORLD['height']-9)
            self.assertTrue(left <= x < left+16 and top <= y < top+9)

    @patch.object(game, 'draw')
    def test_pan_clamps_and_follow_returns_to_the_displayed_playback_frame(self, draw):
        game._last_frame = dict(game.hero.frames[0], x=40, y=27)
        game.set_map_view('pan', 1000, 1000)
        self.assertEqual(game.camera_bounds(game._last_frame), (33,24))
        game.set_map_view('pan', -1000, -1000)
        self.assertEqual(game.camera_bounds(game._last_frame), (0,0))
        game.set_map_view('follow')
        self.assertEqual(game.camera_bounds(game._last_frame), (32,23))
        draw.assert_called_with(game._last_frame)

    @patch.object(game, 'draw')
    def test_overview_click_focuses_map_but_hud_click_does_not(self, draw):
        game.set_map_view('overview')
        tile, ox, oy = game.overview_layout()
        self.assertGreaterEqual(ox, 0)
        self.assertLessEqual(ox+WORLD['width']*tile, 640)
        self.assertLessEqual(oy+WORLD['height']*tile, 364)
        self.assertFalse(game.focus_map(100, 430))
        self.assertEqual(game._map_mode, 'overview')
        self.assertTrue(game.focus_map(ox+40*tile+1, oy+27*tile+1))
        self.assertEqual(game.camera_bounds(game.hero.frames[0]), (32,23))
        game.setup(WORLD)
        self.assertEqual(game._map_mode, 'follow')
        self.assertIsNone(game._last_frame)

    def test_expedition_can_exceed_old_turn_limit_but_still_stops_runaway_plans(self):
        for _ in range(500): game.hero.record('Exploring')
        self.assertEqual(len(game.hero.frames), 501)
        game.hero.frames = [game.hero.frames[0]] * WORLD['max_turns']
        with self.assertRaisesRegex(RuntimeError, 'lot of turns'):
            game.hero.record('Too many')


if __name__ == '__main__':
    unittest.main()
