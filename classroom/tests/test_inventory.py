import asyncio
import copy
import json
import pathlib
import sys
import unittest
from unittest.mock import patch

ROOT = pathlib.Path(__file__).parents[1]
sys.path.insert(0, str(ROOT))
import hero_game as game
import runner

WORLD = dict(width=8, height=4, path=[[x,y] for x in range(1,7) for y in (1,2)],
             start=[1,1], exit=[6,1], coins=[], keys=[[2,1],[3,1]],
             key_colors=[dict(x=2,y=1,color='red'),dict(x=3,y=1,color='blue')],
             doors=[[4,1]], door_colors=[dict(x=4,y=1,color='red')], potions=[[1,2]],
             items=[dict(x=2,y=2,item='sword'),dict(x=3,y=2,item='red gem')],
             deliveries=[dict(x=5,y=2,item='red gem')], enemies=[],
             requires_hotbar=True, inventory_mode=True)


class InventoryTests(unittest.TestCase):
    def setUp(self):
        game.setup(WORLD)
        self.hero = game.hero

    def keys(self):
        self.hero.move('right'); self.hero.collect()
        self.hero.move('right'); self.hero.collect()

    def test_actual_pickups_and_current_list_indexes(self):
        self.assertEqual(self.hero.inventory, [])
        self.keys()
        self.assertEqual(self.hero.inventory, ['red key','blue key'])
        self.hero.equip(self.hero.inventory[1])
        self.assertEqual((self.hero.held,self.hero.selected_slot),('blue key',1))
        self.assertEqual(self.hero.keys,2)
        self.assertEqual(self.hero.keys_left,set())
        self.assertEqual(self.hero.frames[0]['hotbar'],[])
        self.assertEqual(self.hero.frames[0]['ground'][(2,1)],['red key'])

    def test_matching_key_is_consumed_and_later_indexes_shift(self):
        self.keys()
        self.hero.equip(self.hero.inventory[1])
        before=copy.deepcopy(self.hero.frames[-1])
        with self.assertRaisesRegex(ValueError,'red key'):
            self.hero.unlock('right')
        self.assertEqual(self.hero.frames[-1],before)
        self.assertEqual(self.hero.keys,2)
        self.hero.equip(self.hero.inventory[0]); self.hero.unlock('right')
        self.assertEqual(self.hero.inventory,['blue key'])
        self.assertEqual(self.hero.keyring,{'blue':1})
        self.assertEqual(self.hero.keys,1)
        self.assertIsNone(self.hero.held)
        self.assertFalse(self.hero.doors)
        with self.assertRaises(IndexError):
            self.hero.equip(self.hero.inventory[1])
        self.hero.equip(self.hero.inventory[0])
        self.assertEqual(self.hero.held,'blue key')

    def test_drop_moves_item_to_ground_and_recollection_appends(self):
        self.keys()
        self.hero.equip(self.hero.inventory[0])
        self.hero.move('down'); self.hero.drop()
        self.assertEqual(self.hero.inventory,['blue key'])
        self.assertEqual(self.hero.ground[(3,2)],['red gem','red key'])
        self.assertEqual(self.hero.keys,1)
        self.assertIn((3,2),self.hero.keys_left)
        self.assertIsNone(self.hero.held)
        self.hero.collect()
        self.assertEqual(self.hero.inventory,['blue key','red gem','red key'])
        self.assertEqual(self.hero.keys,2)
        self.assertNotIn((3,2),self.hero.ground)
        self.hero.equip(self.hero.inventory[2])
        self.assertEqual(self.hero.held,'red key')

    def test_item_cannot_be_created_by_editing_a_list_or_equipping_a_name(self):
        with self.assertRaisesRegex(ValueError,'Collect items'):
            self.hero.set_hotbar(['sword'])
        inventory=self.hero.inventory
        inventory.append('sword')
        self.assertEqual(self.hero.inventory,[])
        for item in ('sword', 0, None, True, [], 'red key'):
            with self.assertRaises(ValueError): self.hero.equip(item)
        with self.assertRaises(ValueError): self.hero.drop()
        self.assertEqual(self.hero.frames[0]['hotbar'],[])

    def test_full_inventory_rejects_pickup_atomically_then_allows_space(self):
        world=copy.deepcopy(WORLD)
        world.update(keys=[],key_colors=[],potions=[],coins=[[2,1]],
                     items=[dict(x=1,y=1,item=c+' gem') for c in ('red','blue','green','purple','gold')]+[dict(x=2,y=1,item='potion')])
        game.setup(world)
        self.hero.collect(); self.hero.move('right')
        with self.assertRaisesRegex(ValueError,'holds 5'):
            self.hero.collect()
        self.assertEqual(self.hero.coins,0)
        self.assertIn((2,1),self.hero.coins_left)
        self.assertEqual(self.hero.ground[(2,1)],['potion'])
        self.hero.move('left'); self.hero.equip(self.hero.inventory[2]); self.hero.drop()
        self.hero.move('right'); self.hero.collect()
        self.assertEqual(self.hero.inventory,['red gem','blue gem','purple gem','gold gem','potion'])
        self.assertEqual(self.hero.coins,1)
        self.assertEqual(self.hero.potions,1)

    def test_sword_is_reusable_potion_is_consumed_and_wrong_actions_are_atomic(self):
        world=copy.deepcopy(WORLD)
        world.update(start=[1,2], enemies=[dict(x=3,y=2,health=9)])
        game.setup(world)
        self.hero.collect(); self.hero.move('right'); self.hero.collect()
        self.hero.equip(self.hero.inventory[0])
        with self.assertRaisesRegex(ValueError,'already full'): self.hero.heal()
        self.assertEqual(self.hero.potions,1)
        with self.assertRaisesRegex(ValueError,'sword'): self.hero.attack('right')
        self.assertEqual(self.hero.enemies[(3,2)],9)
        self.hero.equip(self.hero.inventory[1]); self.hero.attack('right',3)
        self.assertEqual(self.hero.inventory,['potion','sword'])
        self.assertEqual(self.hero.health,8)
        self.hero.equip(self.hero.inventory[0]); self.hero.heal()
        self.assertEqual(self.hero.inventory,['sword'])
        self.assertEqual(self.hero.health,10)
        self.assertEqual(self.hero.potions,0)
        self.assertIsNone(self.hero.held)

    def test_delivery_requires_item_on_correct_tile_and_can_be_picked_up_again(self):
        world=copy.deepcopy(WORLD)
        world.update(start=[3,2],exit=[5,2],keys=[],doors=[])
        game.setup(world)
        self.hero.collect(); self.hero.equip(self.hero.inventory[0]); self.hero.move('right',2)
        self.assertFalse(self.hero.result()['passed'])
        self.assertIn('Drop the red gem on its matching pad.',self.hero.result()['remaining'])
        self.hero.drop()
        self.assertTrue(self.hero.result()['passed'])
        self.hero.collect()
        self.assertFalse(self.hero.result()['passed'])

    def test_inventory_goal_checks_order_and_reset_restores_all_items(self):
        world=copy.deepcopy(WORLD)
        world.update(exit=[3,1],doors=[],deliveries=[],inventory_goal=['blue key','red key'])
        game.setup(world)
        self.keys()
        self.assertFalse(self.hero.result()['passed'])
        self.hero.equip(self.hero.inventory[0]); self.hero.drop(); self.hero.collect()
        self.assertTrue(self.hero.result()['passed'])
        self.hero.set_hat('crown')
        with patch.object(game,'draw'): game.reset_after_run()
        self.assertEqual(self.hero.inventory,[])
        self.assertEqual(self.hero.keys,0)
        self.assertEqual(self.hero.ground[(2,1)],['red key'])
        self.assertIsNone(self.hero.held)
        self.assertEqual(self.hero.hat,'crown')

    def test_duplicate_items_remain_individual_pickups(self):
        world=copy.deepcopy(WORLD)
        world['items']=[dict(x=1,y=1,item='red gem'),dict(x=1,y=1,item='red gem')]
        game.setup(world)
        self.hero.collect(); self.hero.equip(self.hero.inventory[1])
        self.assertEqual(self.hero.selected_slot,1)
        self.hero.drop()
        self.assertEqual(self.hero.inventory,['red gem'])
        self.assertEqual(self.hero.ground[(1,1)],['red gem'])
        self.hero.collect()
        self.assertEqual(self.hero.inventory,['red gem','red gem'])

    def test_blank_lesson_context_has_hero_without_prepending_source(self):
        self.assertEqual(asyncio.run(runner.start('', '/project/hero.py', True)), 'finished')
        self.assertFalse(self.hero.result()['passed'])
        code='hero.move("right")\nhero.collect()\nhero.equip(hero.inventory[0])'
        self.assertEqual(asyncio.run(runner.start(code, '/project/hero.py', True)), 'finished')
        self.assertEqual(self.hero.held,'red key')
        self.assertEqual(asyncio.run(runner.start('hero.move("right")\nhero.inventory[9]', '/project/hero.py', True)), 'error')
        self.assertEqual(json.loads(runner.error_details())['line'],2)
        self.assertEqual(asyncio.run(runner.start('assert "hero" not in globals()', '/project/main.py')), 'finished')


if __name__ == '__main__': unittest.main()
