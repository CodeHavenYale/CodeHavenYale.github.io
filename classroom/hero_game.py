"""Small turn-based world. Python rules are independent of the pygame renderer."""
import asyncio
import copy
import json
import os
import random
import re
import sys

DIRECTIONS = {'right': (1, 0), 'left': (-1, 0), 'up': (0, -1), 'down': (0, 1)}
HOTBAR_ITEMS = ('sword', 'key', 'potion')
HOTBAR_SIZE = 5
ITEM_COLORS = {'red':'#f87171','blue':'#60a5fa','green':'#4ade80','purple':'#c084fc','gold':'#fde68a'}


APPEARANCE_KEY = 'codehaven.hero.appearance.v1'
DEFAULT_APPEARANCE = {'name': 'Hero', 'color': '#60a5fa', 'hat': 'cap'}


def load_appearance():
    appearance = DEFAULT_APPEARANCE.copy()
    if sys.platform != 'emscripten':
        return appearance
    try:
        from js import localStorage
        saved = json.loads(localStorage.getItem(APPEARANCE_KEY) or '{}')
        if not isinstance(saved, dict):
            return appearance
        name, color, hat = saved.get('name'), saved.get('color'), saved.get('hat')
        if isinstance(name, str) and name.isprintable() and 1 <= len(name.strip()) <= 16:
            appearance['name'] = name.strip()
        if isinstance(color, str) and re.fullmatch(r'#[0-9a-fA-F]{6}', color):
            appearance['color'] = color.lower()
        if isinstance(hat, str) and hat in ('cap', 'crown', 'helmet', 'none'):
            appearance['hat'] = hat
    except Exception:
        pass  # A browser that blocks storage can still keep choices during this visit.
    return appearance


_appearance = load_appearance()


class InventoryItem(str):
    """A named physical pickup; equal names can occupy separate list positions."""


def save_appearance(hero):
    _appearance.update(name=hero.name, color=hero.color, hat=hero.hat)
    if sys.platform == 'emscripten':
        try:
            from js import localStorage
            localStorage.setItem(APPEARANCE_KEY, json.dumps(_appearance))
        except Exception:
            pass


class Hero:
    def setup(self, config):
        self.config = copy.deepcopy(config)
        variants = self.config.pop('variants', None)
        if variants:
            self.config.update(random.choice(variants))
        config = self.config
        self.path = {tuple(p) for p in config['path']}
        self.x, self.y = config['start']
        self.exit = tuple(config['exit'])
        self.coins_left = {tuple(p) for p in config['coins']}
        health_choices = config.get('enemy_health_choices')
        self.enemies = {(e['x'], e['y']): random.choice(health_choices) if health_choices else e['health']
                        for e in config['enemies']}
        self.keys_left = {tuple(p) for p in config.get('keys', [])}
        self.doors = {tuple(p) for p in config.get('doors', [])}
        self.potions_left = {tuple(p) for p in config.get('potions', [])}
        self.key_colors = {(k['x'], k['y']): k['color'] for k in config.get('key_colors', [])}
        self.door_colors = {(d['x'], d['y']): d['color'] for d in config.get('door_colors', [])}
        self.keyring = {}
        self.switches = {(s['x'], s['y']): s['color'] for s in config.get('switches', [])}
        self.activated = set()
        self.gates = {(g['x'], g['y']): g['color'] for g in config.get('gates', [])}
        self.number_clues = {(c['x'], c['y']): c['label'] for c in config.get('number_clues', [])}
        self.clue_values = dict(zip(self.number_clues.values(), random.sample(range(2, 10), len(self.number_clues))))
        self.readings = {}
        self.code_doors = {(d['x'], d['y']): d for d in config.get('code_doors', [])}
        self.keys = 0
        self.potions = 0
        self.health = 10
        self.coins = 0
        self.hotbar = []
        self.selected_slot = None
        self.ground = {}
        if config.get('inventory_mode'):
            for pos in self.keys_left:
                self.ground.setdefault(pos, []).append(self.key_colors.get(pos, 'gold') + ' key')
            for pos in self.potions_left:
                self.ground.setdefault(pos, []).append('potion')
            for item in config.get('items', []):
                self.ground.setdefault((item['x'], item['y']), []).append(item['item'])
            self.ground = {pos: [InventoryItem(item) for item in items] for pos, items in self.ground.items()}
        self.name = _appearance['name']
        self.color = _appearance['color']
        self.hat = _appearance['hat']
        self.frames = []
        self.record('Your hero is ready.')

    def target(self, direction):
        if not isinstance(direction, str) or direction not in DIRECTIONS:
            raise ValueError('Use "up", "down", "left", or "right".')
        dx, dy = DIRECTIONS[direction]
        return self.x + dx, self.y + dy

    def record(self, message):
        if len(self.frames) >= self.config.get('max_turns', 450):
            raise RuntimeError('That is a lot of turns. Try a shorter plan.')
        self.frames.append({'x': self.x, 'y': self.y, 'health': self.health,
                            'coins': self.coins, 'remaining': list(self.coins_left),
                            'enemies': dict(self.enemies), 'keys_left': list(self.keys_left),
                            'doors': list(self.doors), 'potions_left': list(self.potions_left),
                            'keys': self.keys, 'potions': self.potions, 'message': message,
                            'name': self.name, 'color': self.color, 'hat': self.hat,
                            'hotbar': list(self.hotbar), 'selected_slot': self.selected_slot,
                            'ground': copy.deepcopy(self.ground),
                            'held': self.held,
                            'keyring': dict(self.keyring), 'gates': dict(self.gates), 'activated': set(self.activated),
                            'readings': dict(self.readings), 'code_doors': list(self.code_doors)})

    @property
    def held(self):
        return self.hotbar[self.selected_slot] if self.selected_slot is not None else None

    @property
    def inventory(self):
        """Read the current inventory as a Python list; pickups own its contents."""
        return list(self.hotbar)

    def set_hotbar(self, items):
        self.alive()
        if self.config.get('inventory_mode'):
            raise ValueError('Collect items on the map to fill your inventory. Select an item with hero.inventory[index].')
        if not isinstance(items, list) or not 1 <= len(items) <= HOTBAR_SIZE:
            raise ValueError('Use a list with 1 to 5 items, like ["sword", "key", "potion"].')
        if any(not isinstance(item, str) or item not in HOTBAR_ITEMS for item in items):
            raise ValueError('Hotbar items are "sword", "key", and "potion". Put each name in quotes.')
        self.hotbar = list(items)
        self.selected_slot = None
        self.record('Hotbar loaded. Use hero.equip(index) to hold an item.')

    def equip(self, index):
        self.alive()
        if self.config.get('inventory_mode'):
            slot = next((i for i, item in enumerate(self.hotbar) if item is index), None)
            if slot is None:
                raise ValueError('Choose an item you collected with hero.equip(hero.inventory[index]). Indexes start at 0.')
            index = slot
        if type(index) is not int or not 0 <= index < len(self.hotbar):
            raise ValueError('Choose a filled hotbar index, starting at 0. Load your list with hero.set_hotbar(hotbar) first.')
        self.selected_slot = index
        list_name = 'hero.inventory' if self.config.get('inventory_mode') else 'hotbar'
        self.record('Holding ' + self.held + ' from ' + list_name + '[' + str(index) + '].')

    def require_item(self, item):
        if self.config.get('inventory_mode'):
            matches = self.held and (self.held.endswith(' key') if item == 'key' else self.held == item)
            if not matches:
                raise ValueError('Hold the ' + item + ' first. Select it with hero.equip(hero.inventory[index]).')
            return
        if self.config.get('requires_hotbar') and self.held != item:
            raise ValueError('Hold the ' + item + ' first. Use hero.equip(index) with its hotbar slot (indexes start at 0).')

    def sync_inventory(self):
        self.keyring = {}
        for item in self.hotbar:
            if item.endswith(' key'):
                color = item.removesuffix(' key')
                self.keyring[color] = self.keyring.get(color, 0) + 1
        self.keys = sum(self.keyring.values())
        self.potions = self.hotbar.count('potion')
        self.keys_left = {pos for pos, items in self.ground.items() if any(i.endswith(' key') for i in items)}
        self.potions_left = {pos for pos, items in self.ground.items() if 'potion' in items}

    def remove_held(self):
        item = self.hotbar.pop(self.selected_slot)
        self.selected_slot = None
        self.sync_inventory()
        return item

    def drop(self):
        self.alive()
        if not self.config.get('inventory_mode') or self.held is None:
            raise ValueError('Hold a collected item with hero.equip(hero.inventory[index]) before dropping it.')
        item = self.held
        self.ground.setdefault((self.x, self.y), []).append(item)
        self.remove_held()
        self.record('Dropped ' + item + '. Later items shift left; the first index is 0.')

    def set_name(self, name):
        if not isinstance(name, str) or not 1 <= len(name.strip()) <= 16 or not name.isprintable():
            raise ValueError('Choose a name with 1 to 16 characters on one line.')
        self.name = name.strip()
        save_appearance(self)
        self.record('Your hero is called ' + self.name + '.')

    def set_color(self, color):
        colors = {'blue': '#60a5fa', 'red': '#f87171', 'green': '#4ade80',
                  'purple': '#c084fc', 'orange': '#fb923c', 'pink': '#f472b6',
                  'yellow': '#facc15', 'white': '#f8fafc'}
        if not isinstance(color, str):
            raise ValueError('Put your color in quotes, like "purple" or "#22aaff".')
        value = color.lower().strip()
        if value not in colors and not re.fullmatch(r'#[0-9a-f]{6}', value):
            raise ValueError('Choose blue, red, green, purple, orange, pink, yellow, white, or a hex color like "#22aaff".')
        self.color = colors.get(value, value)
        save_appearance(self)
        self.record('Changed your outfit color.')

    def set_hat(self, hat):
        if not isinstance(hat, str) or hat not in ('cap', 'crown', 'helmet', 'none'):
            raise ValueError('Choose "cap", "crown", "helmet", or "none" for your hat.')
        self.hat = hat
        save_appearance(self)
        self.record('Changed your hat.')

    def alive(self):
        if self.health <= 0:
            raise RuntimeError('Your hero is out of health. Run again to try a new plan.')

    def move(self, direction, count=1):
        if type(count) is not int or count < 1:
            raise ValueError("Use a positive whole number for the count, like 2 or 3.")
        for _ in range(count):
            self.alive()
            target = self.target(direction)
            if target not in self.path:
                raise ValueError('There is a wall that way. Look at the path and try another direction.')
            if target in self.gates:
                raise ValueError('The ' + self.gates[target] + ' gate is closed. Stand on its matching switch and use hero.activate().')
            if target in self.doors:
                raise ValueError('The ' + self.door_colors.get(target, 'gold') + ' door is locked. Collect its matching key and use hero.unlock(direction).')
            if target in self.code_doors:
                raise ValueError('Code door ' + self.code_doors[target]['label'] + ' is locked. Stand beside it and use hero.enter_code(direction, code).')
            if self.enemies.get(target, 0) > 0:
                raise ValueError('An enemy is blocking that tile. Attack before moving there.')
            self.x, self.y = target
            self.record('Moved ' + direction + '.')

    def enemy_at(self, direction):
        return self.enemies.get(self.target(direction), 0) > 0

    @property
    def on_coin(self):
        return (self.x, self.y) in self.coins_left

    @property
    def on_key(self):
        return (self.x, self.y) in self.keys_left

    @property
    def on_potion(self):
        return (self.x, self.y) in self.potions_left

    def door_at(self, direction):
        return self.target(direction) in self.doors

    def can_move(self, direction):
        target = self.target(direction)
        return target in self.path and target not in self.doors and target not in self.code_doors and target not in self.gates and not self.enemy_at(direction)

    def read(self):
        self.alive()
        label = self.number_clues.get((self.x, self.y))
        if label is None:
            raise ValueError('Stand on a lettered number sign before using hero.read().')
        value = self.clue_values[label]
        self.readings[label] = value
        self.record('Sign ' + label + ' reads ' + str(value) + '. Save it in a variable.')
        return value

    def enter_code(self, direction, code):
        self.alive()
        target = self.target(direction)
        door = self.code_doors.get(target)
        if door is None:
            raise ValueError('There is no code door beside you in that direction.')
        if type(code) is not int:
            raise ValueError('Use the number you saved from hero.read(), such as hero.enter_code("right", code).')
        expected = sum(self.clue_values[t['clue']] * t.get('multiplier', 1) for t in door['terms']) + door.get('offset', 0)
        if code != expected:
            raise ValueError('That code does not open door ' + door['label'] + '. Use the saved variable for its matching sign.')
        del self.code_doors[target]
        self.record('Opened code door ' + door['label'] + '.')

    def collect(self):
        self.alive()
        here = (self.x, self.y)
        if self.config.get('inventory_mode'):
            items = self.ground.get(here, [])
            if len(self.hotbar) + len(items) > HOTBAR_SIZE:
                raise ValueError('Your inventory holds 5 items. Drop an item on another tile to make room, then come back.')
            found = list(items)
            if here in self.coins_left:
                self.coins_left.remove(here)
                self.coins += 1
                found.append('coin')
            if not found:
                raise ValueError('There is nothing to collect here. Stand on an item first.')
            self.hotbar.extend(items)
            self.ground.pop(here, None)
            self.sync_inventory()
            self.record('Picked up: ' + ', '.join(found) + '. Items join the end of the list.')
            return
        found = []
        for cells, attribute, label in [(self.coins_left, 'coins', 'coin'),
                                         (self.keys_left, 'keys', 'key'),
                                         (self.potions_left, 'potions', 'potion')]:
            if here in cells:
                cells.remove(here)
                setattr(self, attribute, getattr(self, attribute) + 1)
                if attribute == 'keys':
                    color = self.key_colors.get(here, 'gold')
                    self.keyring[color] = self.keyring.get(color, 0) + 1
                    label = color + ' key'
                found.append(label)
        if not found:
            raise ValueError('There is nothing to collect here. Move onto a coin, key, or potion first.')
        self.record('Picked up: ' + ', '.join(found) + '.')

    def unlock(self, direction):
        self.alive()
        self.require_item('key')
        target = self.target(direction)
        if target not in self.doors:
            raise ValueError('There is no locked door in that direction.')
        color = self.door_colors.get(target, 'gold')
        if self.config.get('inventory_mode') and self.held != color + ' key':
            raise ValueError('Hold the ' + color + ' key for this door. Select its current inventory index.')
        if self.keyring.get(color, 0) < 1:
            raise ValueError('You need a ' + color + ' key for this ' + color + ' door. A different color will not work.')
        self.keyring[color] -= 1
        self.keys -= 1
        self.doors.remove(target)
        if self.config.get('inventory_mode'):
            self.remove_held()
        self.record('Opened the ' + color + ' door.')

    def activate(self):
        self.alive()
        here = (self.x, self.y)
        if here not in self.switches:
            raise ValueError('Stand on a switch before using hero.activate().')
        if here in self.activated:
            raise ValueError('This switch is already on.')
        color = self.switches[here]
        self.activated.add(here)
        self.gates = {pos: c for pos, c in self.gates.items() if c != color}
        self.record('Turned on the ' + color + ' switch.')

    def heal(self):
        self.alive()
        self.require_item('potion')
        if self.potions < 1:
            raise ValueError('You need a potion. Pick one up in a side room.')
        if self.health == 10:
            raise ValueError('Your health is already full. Save the potion for later.')
        self.potions -= 1
        self.health = min(10, self.health + 5)
        if self.config.get('inventory_mode'):
            self.remove_held()
        self.record('Used a potion. Health: ' + str(self.health) + '.')

    def attack(self, direction, count=1):
        if type(count) is not int or count < 1:
            raise ValueError("Use a positive whole number for the count, like 2 or 3.")
        for _ in range(count):
            self.alive()
            target = self.target(direction)
            self.require_item('sword')
            if not self.enemy_at(direction):
                raise ValueError('There is no enemy next to you in that direction.')
            self.enemies[target] = max(0, self.enemies[target] - 3)
            if self.enemies[target]:
                self.health -= 1
            self.record('Hit for 3.' if self.enemies[target] else 'Enemy defeated.')

    def result(self):
        checks = [self.health > 0, not self.coins_left, not any(self.enemies.values()), (self.x, self.y) == self.exit, not self.doors and not self.code_doors, len(self.activated) == len(self.switches) and not self.gates]
        remaining = []
        if self.health <= 0: remaining.append('Keep your hero alive.')
        if self.coins_left: remaining.append('Collect ' + str(len(self.coins_left)) + (' more coin.' if len(self.coins_left) == 1 else ' more coins.'))
        if any(self.enemies.values()): remaining.append('Defeat the remaining guards.')
        for color in sorted({self.door_colors.get(pos, 'gold') for pos in self.doors}):
            remaining.append('Open the ' + color + ' door with a matching key.')
        for door in self.code_doors.values():
            remaining.append('Open code door ' + door['label'] + ' using ' + door['formula'] + '.')
        for color in sorted({c for pos, c in self.switches.items() if pos not in self.activated}):
            remaining.append('Turn on the ' + color + ' switch.')
        for target in self.config.get('deliveries', []):
            delivered = target['item'] in self.ground.get((target['x'], target['y']), [])
            checks.append(delivered)
            if not delivered:
                remaining.append('Drop the ' + target['item'] + ' on its matching pad.')
        if 'inventory_goal' in self.config:
            ordered = self.hotbar == self.config['inventory_goal']
            checks.append(ordered)
            if not ordered:
                remaining.append('Finish with your inventory in this order: ' + ', '.join(self.config['inventory_goal']) + '.')
        if (self.x, self.y) != self.exit: remaining.append('Reach the green exit.')
        return {'passed': all(checks), 'checks': checks, 'remaining': remaining}


hero = Hero()
_screen = None
_stopped = False
_map_mode = 'follow'
_map_focus = None
_last_frame = None


def setup(config):
    global _map_mode, _map_focus, _last_frame
    hero.setup(json.loads(config) if isinstance(config, str) else config)
    _map_mode, _map_focus, _last_frame = 'follow', None, None


def camera_bounds(frame):
    """A readable 16 by 9 window, clamped to the same continuous world."""
    cols, rows = hero.config['width'], hero.config['height']
    x, y = _map_focus or (frame['x'], frame['y'])
    return max(0, min(cols-16, x-8)), max(0, min(rows-9, y-4))


def set_map_view(mode, dx=0, dy=0):
    global _map_mode, _map_focus
    if mode not in ('follow', 'overview', 'pan'):
        raise ValueError('Choose follow, overview, or pan.')
    frame = _last_frame or hero.frames[0]
    if mode == 'pan':
        left, top = camera_bounds(frame)
        _map_focus = (max(8, min(hero.config['width']-8, left+8+int(dx))),
                      max(4, min(hero.config['height']-5, top+4+int(dy))))
    else:
        _map_focus = None
    _map_mode = mode
    draw(frame)


def focus_map(x, y):
    """Click the overview to inspect that part of the map at full detail."""
    global _map_mode, _map_focus
    if _map_mode != 'overview' or not hero.config.get('large_map'):
        return False
    tile, ox, oy = overview_layout()
    col, row = int((x-ox)//tile), int((y-oy)//tile)
    if 0 <= col < hero.config['width'] and 0 <= row < hero.config['height'] and x >= ox and y >= oy:
        _map_focus, _map_mode = (col, row), 'pan'
        draw(_last_frame or hero.frames[0])
        return True
    return False


def overview_layout():
    cols, rows = hero.config['width'], hero.config['height']
    tile = min(576//cols, 324//rows)
    return tile, (640-cols*tile)//2, 40+(324-rows*tile)//2


def world_config():
    """Expose the chosen layout for the browser's accessible map description."""
    return json.dumps(hero.config)


def draw_item(pygame, surface, item, x, y, scale=1):
    """Use the same recognizable item in the hotbar and the hero's hand."""
    def point(dx, dy):
        return round(x + dx * scale), round(y + dy * scale)
    stroke = max(2, round(3 * scale))
    if item == 'sword':
        pygame.draw.polygon(surface, '#dbeafe', [point(-3,-9), point(0,-16), point(3,-9), point(3,5), point(-3,5)])
        pygame.draw.line(surface, '#67e8f9', point(0,-10), point(0,4), max(1, round(scale)))
        pygame.draw.line(surface, '#fbbf24', point(-7,5), point(7,5), stroke)
        pygame.draw.line(surface, '#b45309', point(0,6), point(0,13), stroke)
    elif item == 'key' or item.endswith(' key'):
        tint = ITEM_COLORS.get(item.split(' ')[0], '#fde68a')
        pygame.draw.circle(surface, tint, point(0,-7), max(3, round(6*scale)), max(1, round(2*scale)))
        pygame.draw.line(surface, tint, point(0,-1), point(0,13), stroke)
        pygame.draw.line(surface, tint, point(0,8), point(6,8), stroke)
        pygame.draw.line(surface, tint, point(0,12), point(5,12), stroke)
    elif item.endswith(' gem'):
        tint = ITEM_COLORS[item.split(' ')[0]]
        pygame.draw.polygon(surface, tint, [point(0,-13),point(10,0),point(0,13),point(-10,0)])
        pygame.draw.line(surface, '#f8fafc', point(-4,-2), point(0,-8), max(1,round(2*scale)))
    elif item == 'potion':
        left, top = point(-7,-3)
        pygame.draw.rect(surface, '#c084fc', (left,top,max(5,round(14*scale)),max(7,round(17*scale))), border_radius=3)
        pygame.draw.line(surface, '#e9d5ff', point(0,-8), point(0,-2), max(3,round(7*scale)))
        pygame.draw.line(surface, '#fbbf24', point(-3,-9), point(3,-9), stroke)
        pygame.draw.line(surface, '#f5d0fe', point(-3,2), point(-3,7), max(1,round(2*scale)))


def draw_world(pygame, surface, frame, tile, ox, oy, cols, rows):
    small = pygame.font.Font(None, 17)
    for y in range(rows):
        for x in range(cols):
            rect = pygame.Rect(ox+x*tile, oy+y*tile, tile-3, tile-3)
            pygame.draw.rect(surface, '#344e57' if (x, y) in hero.path else '#1c313b', rect, border_radius=4)
    def center(pos):
        return ox+pos[0]*tile+tile//2-1, oy+pos[1]*tile+tile//2-1
    ex, ey = center(hero.exit)
    pygame.draw.rect(surface, '#34d399', (ex-tile//3, ey-tile//3, tile*2//3, tile*2//3), 2, border_radius=3)
    surface.blit(small.render('E', True, '#a7f3d0'), (ex-4, ey-6))
    for pos in frame['remaining']:
        x,y=center(pos)
        pygame.draw.circle(surface, '#fbbf24', (x-5,y+5), max(4,tile//7))
    item_colors = ITEM_COLORS
    for target in hero.config.get('deliveries', []):
        x,y = center((target['x'], target['y']))
        tint = item_colors[target['item'].split(' ')[0]]
        pygame.draw.rect(surface, tint, (x-tile//2+3,y-tile//2+3,tile-6,tile-6), 2, border_radius=4)
        done = target['item'] in frame['ground'].get((target['x'], target['y']), [])
        surface.blit(small.render('OK' if done else target['item'][0].upper(), True, tint), (x-tile//2+6,y-tile//2+5))
    if hero.config.get('inventory_mode'):
        for pos, items in frame['ground'].items():
            x,y = center(pos)
            # Fan out stacked pickups so dropping on an occupied tile stays visible.
            for offset, item in enumerate(items):
                draw_item(pygame, surface, item, x+(offset-(len(items)-1)/2)*7, y, min(.85,tile/48))
            if len(items) > 1:
                surface.blit(small.render(str(len(items)),True,'white'),(x+8,y+8))
    for pos, label in hero.number_clues.items():
        x,y=center(pos)
        pygame.draw.rect(surface, '#67e8f9', (x-12,y-13,24,21), 2, border_radius=3)
        value = frame['readings'].get(label, '?')
        surface.blit(small.render(label + ':' + str(value), True, '#a5f3fc'), (x-12,y-8))
    for pos in frame['code_doors']:
        x,y=center(pos)
        door = next(d for d in hero.config['code_doors'] if (d['x'],d['y']) == pos)
        pygame.draw.rect(surface, '#a78bfa', (x-tile//3,y-tile//3,tile*2//3,tile*2//3), border_radius=3)
        surface.blit(small.render(door['label'], True, '#15252f'), (x-7,y-7))
    for pos in ([] if hero.config.get('inventory_mode') else frame['keys_left']):
        x,y=center(pos)
        color = hero.key_colors.get(pos, 'gold')
        tint = item_colors[color]
        pygame.draw.circle(surface, tint, (x-6,y-7), 5, 2)
        pygame.draw.line(surface, tint, (x-2,y-7),(x+9,y-7), 3)
        pygame.draw.line(surface, tint, (x+7,y-7),(x+7,y-2), 2)
        surface.blit(small.render(color[0].upper(), True, tint),(x+6,y+2))
    for pos in ([] if hero.config.get('inventory_mode') else frame['potions_left']):
        x,y=center(pos)
        pygame.draw.rect(surface,'#c084fc',(x+5,y+2,7,11),border_radius=2)
        pygame.draw.rect(surface,'#e9d5ff',(x+7,y,3,3))
    for pos in frame['doors']:
        x,y=center(pos)
        color=hero.door_colors.get(pos, 'gold')
        pygame.draw.rect(surface,item_colors[color],(x-tile//3,y-tile//3,tile*2//3,tile*2//3),border_radius=3)
        surface.blit(small.render(color[0].upper(),True,'#15252f'),(x-8,y-7))
        pygame.draw.circle(surface,'#fde68a',(x+4,y),3)
    for pos, color in hero.switches.items():
        x,y=center(pos)
        pygame.draw.rect(surface,item_colors[color],(x-11,y-11,22,22),2,border_radius=3)
        surface.blit(small.render('ON' if pos in frame['activated'] else 'S',True,item_colors[color]),(x-8,y-6))
    for pos, color in frame['gates'].items():
        x,y=center(pos)
        for shift in (-9,0,9):
            pygame.draw.line(surface,item_colors[color],(x+shift,y-14),(x+shift,y+14),3)
    for pos, health in frame['enemies'].items():
        if health <= 0:
            continue
        x,y=center(pos)
        pygame.draw.rect(surface,'#f87171',(x-10,y-12,20,19),border_radius=5)
        pygame.draw.circle(surface,'#15252f',(x-4,y-5),2)
        pygame.draw.circle(surface,'#15252f',(x+4,y-5),2)
        surface.blit(small.render(str(health),True,'white'),(x-4,y+6))
    x,y=center((frame['x'],frame['y']))
    pygame.draw.rect(surface,frame['color'],(x-9,y-3,18,17),border_radius=4)
    pygame.draw.circle(surface,'#fed7aa',(x,y-8),8)
    if frame['hat'] == 'cap':
        pygame.draw.rect(surface,frame['color'],(x-9,y-16,20,6),border_radius=2)
    elif frame['hat'] == 'crown':
        pygame.draw.polygon(surface,'#facc15',[(x-9,y-11),(x-10,y-21),(x-4,y-16),(x,y-23),(x+4,y-16),(x+10,y-21),(x+9,y-11)])
    elif frame['hat'] == 'helmet':
        pygame.draw.circle(surface,'#cbd5e1',(x,y-10),10,3)
        pygame.draw.rect(surface,'#cbd5e1',(x-10,y-15,20,5),border_radius=2)
    pygame.draw.circle(surface,'#15252f',(x+3,y-9),2)
    if frame['held']:
        pygame.draw.line(surface,frame['color'],(x+6,y+2),(x+14,y+7),4)
        draw_item(pygame, surface, frame['held'], x+17, y+2, .7)
        pygame.draw.circle(surface,'#fed7aa',(x+16,y+7),3)


def draw_large_map(pygame, frame):
    cols, rows = hero.config['width'], hero.config['height']
    small = pygame.font.Font(None, 17)
    # Draw symbols at a constant size; only the planning overview is reduced.
    surface = pygame.Surface((cols*36, rows*36))
    surface.fill('#15252f')
    draw_world(pygame, surface, frame, 36, 0, 0, cols, rows)
    if _map_mode == 'overview':
        tile, ox, oy = overview_layout()
        _screen.blit(pygame.transform.smoothscale(surface, (cols*tile, rows*tile)), (ox, oy))
        for col in range(0, cols, 5):
            _screen.blit(small.render(str(col), True, '#8ba5b3'), (ox+col*tile, oy-16))
        for row in range(0, rows, 5):
            _screen.blit(small.render(str(row), True, '#8ba5b3'), (ox-22, oy+row*tile))
        for region in hero.config.get('regions', []):
            label = small.render(region['name'], True, '#cbd5e1')
            # The wall bands between districts are reserved for overview labels.
            x = ox+(region['x']+region['width']/2)*tile-label.get_width()/2
            y = oy+(region['y']+region['height'])*tile
            _screen.blit(label, (x, y))
        x, y = ox+frame['x']*tile+tile//2, oy+frame['y']*tile+tile//2
        pygame.draw.circle(_screen, '#ffffff', (x, y), 6, 2)
        title = f'Whole map · {cols} × {rows} · Click a district to inspect'
    else:
        left, top = camera_bounds(frame)
        _screen.blit(surface, (40, 40), (left*36, top*36, 576, 324))
        for col in range(left, left+16):
            text = small.render(str(col), True, '#8ba5b3')
            _screen.blit(text, (40+(col-left)*36+18-text.get_width()//2, 23))
        for row in range(top, top+9):
            _screen.blit(small.render(str(row), True, '#8ba5b3'), (17, 40+(row-top)*36+12))
        region = next((r['name'] for r in hero.config.get('regions', [])
                       if r['x'] <= frame['x'] < r['x']+r['width'] and r['y'] <= frame['y'] < r['y']+r['height']), 'Connecting passage')
        title = f'{"Following" if _map_mode == "follow" else "Exploring"} · Hero ({frame["x"]}, {frame["y"]}) · {region}'
    _screen.blit(small.render(title, True, '#cbd5e1'), (40, 5))


def draw(frame):
    # Scope SDL keyboard events to the canvas before creating any SDL window.
    os.environ['SDL_EMSCRIPTEN_KEYBOARD_ELEMENT'] = '#canvas'
    import pygame
    global _screen, _last_frame
    _last_frame = frame
    if not pygame.get_init():
        pygame.init()
    if not pygame.display.get_surface() or pygame.display.get_surface().get_size() != (640, 560):
        _screen = pygame.display.set_mode((640, 560))
    else:
        _screen = pygame.display.get_surface()
    _screen.fill('#15252f')
    cols = hero.config.get('width', 8)
    rows = hero.config.get('height', 6)
    show_hotbar = hero.config.get('requires_hotbar') or bool(frame['hotbar'])
    tile = min(56, 560 // cols, (350 if show_hotbar else 432) // rows)
    ox, oy = (640 - cols * tile) // 2, 28
    font = pygame.font.Font(None, 22)
    small = pygame.font.Font(None, 17)
    if hero.config.get('large_map'):
        draw_large_map(pygame, frame)
    else:
        draw_world(pygame, _screen, frame, tile, ox, oy, cols, rows)
        for row in range(rows):
            _screen.blit(small.render(str(row), True, '#8ba5b3'), (ox-22, oy+row*tile+tile//2-6))
        for col in range(cols):
            _screen.blit(small.render(str(col), True, '#8ba5b3'), (ox+col*tile+tile//2-4, 9))
    stats = f"HP {frame['health']}/10    Coins {frame['coins']}/{len(hero.config['coins'])}    Keys {frame['keys']}    Potions {frame['potions']}"
    if hero.config.get('inventory_mode'):
        stats = f"HP {frame['health']}/10    Coins {frame['coins']}/{len(hero.config['coins'])}    Keys {frame['keys']}    Potions {frame['potions']}"
        targets = hero.config.get('deliveries', [])
        if targets:
            delivered = sum(t['item'] in frame['ground'].get((t['x'], t['y']), []) for t in targets)
            stats += f'    Delivered {delivered}/{len(targets)}'
    _screen.blit(font.render(frame['name'], True, frame['color']),(24,385 if show_hotbar else 463))
    key_text = 'Keys: ' + ', '.join(c[0].upper()+':'+str(n) for c,n in sorted(frame['keyring'].items()) if n)
    if show_hotbar:
        holding = f"Holding: {frame['held']} [{frame['selected_slot']}]" if frame['held'] else 'Empty hand'
        _screen.blit(small.render(holding, True, '#67e8f9'),(225,389))
        _screen.blit(small.render('hero.inventory' if hero.config.get('inventory_mode') else 'Hotbar',True,'#cbd5e1'),(24,420))
        _screen.blit(small.render(str(len(frame['hotbar'])) + ' / 5 items',True,'#8ba5b3'),(24,440))
        for index in range(HOTBAR_SIZE):
            left = 139 + index * 94
            selected = frame['selected_slot'] == index
            rect = pygame.Rect(left, 410, 86, 65)
            pygame.draw.rect(_screen, '#294b59' if selected else '#1c313b', rect, border_radius=6)
            pygame.draw.rect(_screen, '#67e8f9' if selected else '#48616d', rect, 3 if selected else 1, border_radius=6)
            _screen.blit(small.render(str(index), True, '#67e8f9' if selected else '#8ba5b3'),(left+6,414))
            if index < len(frame['hotbar']):
                item = frame['hotbar'][index]
                draw_item(pygame, _screen, item, left+43, 438, .8)
                label = small.render(item, True, '#f8fafc')
                _screen.blit(label,(left+(86-label.get_width())//2,457))
                if not hero.config.get('inventory_mode') and item in ('key','potion'):
                    count = frame['keys' if item == 'key' else 'potions']
                    amount = small.render('x'+str(count),True,'#cbd5e1')
                    _screen.blit(amount,(left+61-amount.get_width(),414))
            else:
                _screen.blit(small.render('empty',True,'#8ba5b3'),(left+27,457))
    else:
        _screen.blit(small.render(key_text if frame['keys'] else 'Keys: none', True, '#cbd5e1'),(225,466))
    _screen.blit(font.render(stats, True, '#cbd5e1'),(24,486))
    legend = 'Letters: code signs   Roman numerals: doors   E: exit' if hero.number_clues else 'Keys match door colors. S: switch   Bars: gate   E: exit'
    if show_hotbar:
        legend = 'Hotbar indexes start at 0. Sword: attack · Key: unlock · Potion: heal'
    if hero.config.get('inventory_mode'):
        legend = 'Collect: add to list   Equip: hold an item   Drop: leave on your tile'
    _screen.blit(small.render(legend,True,'#8ba5b3'),(24,511))
    message = frame['message']
    while small.size(message)[0] > 592:
        message = message[:-2]
    _screen.blit(small.render(message,True,'#93c5fd'),(24,534))
    pygame.event.pump()
    pygame.display.flip()


def preview(config):
    setup(config)
    draw(hero.frames[0])


async def play(delay=.12):
    global _stopped
    _stopped = False
    for frame in hero.frames:
        if _stopped:
            return
        draw(frame)
        await asyncio.sleep(delay)


def stop():
    global _stopped
    _stopped = True


def outcome():
    return json.dumps(hero.result())


def reset_after_run():
    """Reset the world while keeping this run's chosen appearance."""
    config = copy.deepcopy(hero.config)
    appearance = {'name': hero.name, 'color': hero.color, 'hat': hero.hat}
    setup(config)
    for key, value in appearance.items():
        setattr(hero, key, value)
    hero.frames[0].update(appearance)
    hero.frames[0]['message'] = 'Back at the start. Change your code and try again.'
    draw(hero.frames[0])
