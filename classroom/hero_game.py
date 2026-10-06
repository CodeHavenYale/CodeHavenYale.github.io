"""Small turn-based world. Python rules are independent of the pygame renderer."""
import asyncio
import copy
import json
import os
import random
import re
import sys

DIRECTIONS = {'right': (1, 0), 'left': (-1, 0), 'up': (0, -1), 'down': (0, 1)}


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
        self.path = {tuple(p) for p in config['path']}
        self.x, self.y = config['start']
        self.exit = tuple(config['exit'])
        self.coins_left = {tuple(p) for p in config['coins']}
        self.enemies = {(e['x'], e['y']): e['health'] for e in config['enemies']}
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
        if len(self.frames) >= 450:
            raise RuntimeError('That is a lot of turns. Try a shorter plan.')
        self.frames.append({'x': self.x, 'y': self.y, 'health': self.health,
                            'coins': self.coins, 'remaining': list(self.coins_left),
                            'enemies': dict(self.enemies), 'keys_left': list(self.keys_left),
                            'doors': list(self.doors), 'potions_left': list(self.potions_left),
                            'keys': self.keys, 'potions': self.potions, 'message': message,
                            'name': self.name, 'color': self.color, 'hat': self.hat,
                            'keyring': dict(self.keyring), 'gates': dict(self.gates), 'activated': set(self.activated),
                            'readings': dict(self.readings), 'code_doors': list(self.code_doors)})

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

    def move(self, direction):
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
        target = self.target(direction)
        if target not in self.doors:
            raise ValueError('There is no locked door in that direction.')
        color = self.door_colors.get(target, 'gold')
        if self.keyring.get(color, 0) < 1:
            raise ValueError('You need a ' + color + ' key for this ' + color + ' door. A different color will not work.')
        self.keyring[color] -= 1
        self.keys -= 1
        self.doors.remove(target)
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
        if self.potions < 1:
            raise ValueError('You need a potion. Pick one up in a side room.')
        if self.health == 10:
            raise ValueError('Your health is already full. Save the potion for later.')
        self.potions -= 1
        self.health = min(10, self.health + 5)
        self.record('Used a potion. Health: ' + str(self.health) + '.')

    def attack(self, direction):
        self.alive()
        target = self.target(direction)
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
        if (self.x, self.y) != self.exit: remaining.append('Reach the green exit.')
        return {'passed': all(checks), 'checks': checks, 'remaining': remaining}


hero = Hero()
_screen = None
_stopped = False


def setup(config):
    hero.setup(json.loads(config) if isinstance(config, str) else config)


def draw(frame):
    # Scope SDL keyboard events to the canvas before creating any SDL window.
    os.environ['SDL_EMSCRIPTEN_KEYBOARD_ELEMENT'] = '#canvas'
    import pygame
    global _screen
    if not pygame.get_init():
        pygame.init()
    if not pygame.display.get_surface() or pygame.display.get_surface().get_size() != (640, 560):
        _screen = pygame.display.set_mode((640, 560))
    else:
        _screen = pygame.display.get_surface()
    _screen.fill('#15252f')
    cols = hero.config.get('width', 8)
    rows = hero.config.get('height', 6)
    tile = min(56, 560 // cols, 432 // rows)
    ox, oy = (640 - cols * tile) // 2, 28
    font = pygame.font.Font(None, 22)
    small = pygame.font.Font(None, 17)
    for y in range(rows):
        _screen.blit(small.render(str(y), True, '#8ba5b3'), (ox-16, oy+y*tile+tile//2-6))
        for x in range(cols):
            if y == 0:
                _screen.blit(small.render(str(x), True, '#8ba5b3'), (ox+x*tile+tile//2-4, 9))
            rect = pygame.Rect(ox+x*tile, oy+y*tile, tile-3, tile-3)
            pygame.draw.rect(_screen, '#344e57' if (x, y) in hero.path else '#1c313b', rect, border_radius=4)
    def center(pos):
        return ox+pos[0]*tile+tile//2-1, oy+pos[1]*tile+tile//2-1
    ex, ey = center(hero.exit)
    pygame.draw.rect(_screen, '#34d399', (ex-tile//3, ey-tile//3, tile*2//3, tile*2//3), 2, border_radius=3)
    _screen.blit(small.render('E', True, '#a7f3d0'), (ex-4, ey-6))
    for pos in frame['remaining']:
        x,y=center(pos)
        pygame.draw.circle(_screen, '#fbbf24', (x-5,y+5), max(4,tile//7))
    item_colors = {'red':'#f87171','blue':'#60a5fa','green':'#4ade80','purple':'#c084fc','gold':'#fde68a'}
    for pos, label in hero.number_clues.items():
        x,y=center(pos)
        pygame.draw.rect(_screen, '#67e8f9', (x-12,y-13,24,21), 2, border_radius=3)
        value = frame['readings'].get(label, '?')
        _screen.blit(small.render(label + ':' + str(value), True, '#a5f3fc'), (x-12,y-8))
    for pos in frame['code_doors']:
        x,y=center(pos)
        door = next(d for d in hero.config['code_doors'] if (d['x'],d['y']) == pos)
        pygame.draw.rect(_screen, '#a78bfa', (x-tile//3,y-tile//3,tile*2//3,tile*2//3), border_radius=3)
        _screen.blit(small.render(door['label'], True, '#15252f'), (x-7,y-7))
    for pos in frame['keys_left']:
        x,y=center(pos)
        color = hero.key_colors.get(pos, 'gold')
        tint = item_colors[color]
        pygame.draw.circle(_screen, tint, (x-6,y-7), 5, 2)
        pygame.draw.line(_screen, tint, (x-2,y-7),(x+9,y-7), 3)
        pygame.draw.line(_screen, tint, (x+7,y-7),(x+7,y-2), 2)
        _screen.blit(small.render(color[0].upper(), True, tint),(x+6,y+2))
    for pos in frame['potions_left']:
        x,y=center(pos)
        pygame.draw.rect(_screen,'#c084fc',(x+5,y+2,7,11),border_radius=2)
        pygame.draw.rect(_screen,'#e9d5ff',(x+7,y,3,3))
    for pos in frame['doors']:
        x,y=center(pos)
        color=hero.door_colors.get(pos, 'gold')
        pygame.draw.rect(_screen,item_colors[color],(x-tile//3,y-tile//3,tile*2//3,tile*2//3),border_radius=3)
        _screen.blit(small.render(color[0].upper(),True,'#15252f'),(x-8,y-7))
        pygame.draw.circle(_screen,'#fde68a',(x+4,y),3)
    for pos, color in hero.switches.items():
        x,y=center(pos)
        pygame.draw.rect(_screen,item_colors[color],(x-11,y-11,22,22),2,border_radius=3)
        _screen.blit(small.render('ON' if pos in frame['activated'] else 'S',True,item_colors[color]),(x-8,y-6))
    for pos, color in frame['gates'].items():
        x,y=center(pos)
        for shift in (-9,0,9):
            pygame.draw.line(_screen,item_colors[color],(x+shift,y-14),(x+shift,y+14),3)
    for pos, health in frame['enemies'].items():
        if health <= 0:
            continue
        x,y=center(pos)
        pygame.draw.rect(_screen,'#f87171',(x-10,y-12,20,19),border_radius=5)
        pygame.draw.circle(_screen,'#15252f',(x-4,y-5),2)
        pygame.draw.circle(_screen,'#15252f',(x+4,y-5),2)
        _screen.blit(small.render(str(health),True,'white'),(x-4,y+6))
    x,y=center((frame['x'],frame['y']))
    pygame.draw.rect(_screen,frame['color'],(x-9,y-3,18,17),border_radius=4)
    pygame.draw.circle(_screen,'#fed7aa',(x,y-8),8)
    if frame['hat'] == 'cap':
        pygame.draw.rect(_screen,frame['color'],(x-9,y-16,20,6),border_radius=2)
    elif frame['hat'] == 'crown':
        pygame.draw.polygon(_screen,'#facc15',[(x-9,y-11),(x-10,y-21),(x-4,y-16),(x,y-23),(x+4,y-16),(x+10,y-21),(x+9,y-11)])
    elif frame['hat'] == 'helmet':
        pygame.draw.circle(_screen,'#cbd5e1',(x,y-10),10,3)
        pygame.draw.rect(_screen,'#cbd5e1',(x-10,y-15,20,5),border_radius=2)
    pygame.draw.circle(_screen,'#15252f',(x+3,y-9),2)
    stats = f"HP {frame['health']}/10    Coins {frame['coins']}/{len(hero.config['coins'])}    Keys {frame['keys']}    Potions {frame['potions']}"
    _screen.blit(font.render(frame['name'], True, frame['color']),(24,463))
    key_text = 'Keys: ' + ', '.join(c[0].upper()+':'+str(n) for c,n in sorted(frame['keyring'].items()) if n)
    _screen.blit(small.render(key_text if frame['keys'] else 'Keys: none', True, '#cbd5e1'),(225,466))
    _screen.blit(font.render(stats, True, '#cbd5e1'),(24,486))
    legend = 'Letters: code signs   Roman numerals: doors   E: exit' if hero.number_clues else 'Keys match door colors. S: switch   Bars: gate   E: exit'
    _screen.blit(small.render(legend,True,'#8ba5b3'),(24,511))
    _screen.blit(small.render(frame['message'],True,'#93c5fd'),(24,534))
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
