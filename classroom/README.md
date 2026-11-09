# CodeHaven

A Python IDE with an eight-week hero course and a separate free coding mode.

## Start

Run `npm run serve` from this directory, then open http://localhost:8000. No npm installation is needed. Python and pygame load from the Pyodide CDN, so the first load needs internet access.

Class code: `CodeH@ven123`. Teacher solutions code: `T3acher123`.

## Course

Week 2 has seven combined Variables & Numbers challenges. Week 6 is one large review expedition. Each other week has six challenges:

1. Sequences
2. Variables & Numbers
3. Conditionals
4. Loops
5. Lists
6. Review — The grand expedition
7. Combine your skills
8. Final challenge

Students control a hero with Python commands. Each run starts a fresh map, records their turns, then plays those turns with pygame. Routes include long straight stretches, with side rooms, connecting passages and backtracking. Walls, locked doors and enemies block movement. Coins, keys and potions are collected on their tile. Keys open adjacent doors. Potions restore 5 health, up to 10. A level is complete when the hero survives, collects all coins, defeats all enemies, opens every door, and reaches the exit. Later guards have up to 12 health. Playback has slow, normal and fast speeds. The canvas uses a stable 640 by 560 drawing area and scales only with panel width. Feedback and expanded details cannot change its size. The map and feedback occupy separate rows. The page scrolls on short screens so the feedback never overlays or clips the map. Lesson errors, line numbers and completion messages share the panel below the map. Full output and tracebacks are available under Output and error details. Different valid solutions are accepted; topic usage is taught rather than enforced through source matching.

The editor includes Python syntax colors and tab indentation. Ctrl/Cmd+Enter runs code. Stop cancels code or playback. While running, Run becomes Restart: it waits for the current run to stop and runs the latest editor contents. Edits during playback are saved for the next run. Pygame keyboard input is restricted to the canvas so it cannot block typing in the editor. Click the canvas for keyboard controls in free coding. Free coding retains its own files, separate from lesson drafts. Code and completion save in the current browser. There are no upload, download, or open-project controls.

Teacher solutions are encrypted with AES-GCM and unlocked locally using the teacher code. Signing out clears the unlocked solutions. The class login is a local access screen, not server authentication.

Python runs in the browser. Desktop GUI libraries and native system access are unavailable. Blocking native calls can require reloading. Runtime-created files are temporary and are not copied back into the editor.

## Variables & Numbers (Week 2)

All seven puzzles use `hero.read()` and `hero.enter_code()` to teach saving, reusing, and holding several variables at once. The progression is:

1. One code, one door.
2. Reuse one code for two doors.
3. Remember two codes and use them in a different order.
4. Carry two codes from side rooms through three doors.
5. Keep three codes for four doors.
6. Reuse three codes across five doors.
7. Solve a winding vault with four stored codes, six doors, and backtracking.

```python
code = hero.read()  # Stand on the sign first.
# Walk beside the matching code door.
hero.enter_code("right", code)
```

Use different names, such as `a`, `b`, `c`, and `d`, for different signs. Assigning a new reading to the same name replaces its previous value. Opening a door does not change the saved value. Sign codes are distinct numbers from 2 to 9, generated anew each run and stable within that run. Every level has updated hints and an encrypted teacher solution.

`hero.move(direction, count=1)` walks the requested number of tiles, checking each tile for obstacles. `hero.attack(direction, count=1)` repeats a fixed 3-damage attack; surviving guards retaliate after each hit. Counts must be positive integers. Attacking after an enemy is defeated raises an error. Week 2 teaches variables through code doors, with no combat or arithmetic requirements.

## Checks

Run `npm test` for syntax checks, interface state tests, Python runner/game tests, and all 44 decrypted teacher solutions through the real Python runner. Week 5 solutions are also checked for actual list indexing, blank starters, inventory capacity, and the correct held item before each attack, unlock, and heal. Interface tests use a small DOM stand-in; they do not verify browser rendering.

## Loops (Week 4)

Six challenges alternate `for` and `while` loops. Students identify a complete action sequence and repeat it, starting with two actions and building to a key-and-door routine:

1. **Four coins, one sequence:** repeat move-and-collect four times with `for` and `range(4)`.
2. **A trail that changes:** repeat the same sequence with `while hero.can_move("right")` on trails with 3 to 7 coins.
3. **Three staircase steps:** repeat right, right, collect, down, collect three times with a `for` loop.
4. **A staircase that grows:** use a `while` loop for the same sequence on staircases with 2 to 5 stairs.
5. **Three matching doorways:** repeat a complete key-door-coin sequence three times with a `for` loop.
6. **Doorways of any length:** repeat that sequence with a `while` loop on maps with 2 to 4 sections.

The `for` challenges have fixed counts. Each Run of a `while` challenge randomly chooses a layout, so students can test the same code at several widths (and heights for the staircase). A size can repeat on consecutive runs. The chosen layout stays fixed during execution, playback, and a failed-run reset. The accessible map description follows the chosen layout. Hints, starter comments, and encrypted teacher solutions match the new sequence-based lessons. Every solution is checked against every available layout.

The new Week 4 challenges have new IDs. Retired loop drafts remain saved, and old loop completions do not count toward these lessons.

## Lists (Week 5)

Six new maps teach indexing through collecting, carrying, using, and dropping physical items. Every Lists editor starts completely blank, with no movement plan or starter solution. `hero` is already available in curriculum runs, so no import is required. An optional command reference sits with the lesson instructions and is available on narrow screens too.

The hotbar is the current inventory, starting empty. Collecting a key, potion, sword, or gem adds that pickup to the end of the list. Each pickup occupies one of five slots. Coins are counted separately. Use Python indexing to select an actual item:

```python
hero.equip(hero.inventory[0])
```

Walking carries all inventory items; the selected one appears in the hero's hand. `hero.drop()` leaves the held item on the current tile, clears the hand, and removes it from the inventory. Later items shift left. Collecting it again adds it at the end. Used keys and potions also leave the list. A sword is reusable. Keys must be collected, held, and match the door's color. Copying or editing a Python list does not create supplies. Reading `hero.inventory` returns a snapshot of the current item list; read it again after pickups or removals. Identical-looking pickups remain separate items and selecting an index highlights that exact slot.

1. **Your first index:** pick up a key and select the first item at index 0.
2. **Choose it, carry it, drop it:** select between two gems and deliver them to matching pads.
3. **Watch the indexes shift:** use the first key, then select the remaining key at its new index.
4. **Drop it. Pick it up again.:** change list order by dropping and recollecting a gem.
5. **Make room for the key:** move five gems through a door while respecting the five-item capacity.
6. **The inventory expedition:** manage keys, a sword, a potion, and gem deliveries as indexes change.

Delivery goals require the correct gem to remain on its matching pad; merely carrying it across the pad does not count. The reorder challenge checks the final inventory order. Failed runs restore pickups, empty the inventory, and preserve student code and appearance.

IDs are `5-inventory-1` through `5-inventory-6`. Retired hotbar and route drafts remain saved, while their completions do not count for these redesigned lessons. Returning to a retired hotbar lesson selects its blank replacement. Other weeks keep their existing maps, drafts, and IDs. Teacher solutions remain encrypted. Week 6 is now a single review expedition.

## Review (Week 6)

**The grand expedition** (`6-review-1`) replaces the six Functions challenges with one continuous 49 × 33 map: nine connected districts, 303 walkable tiles, 35 coins, six code doors, six colored key doors, three switches and gates, six guards, and three gem deliveries. Open http://localhost:8001/#week-6 for the local review preview.

Students combine all five earlier weeks: sequences and switches, saved and reused sign variables, conditionals for changing guard health and healing, loops for repeated alcoves/doorways/stairs, and list indexing with a five-item physical inventory. Sign values and guards' 3/6/9 health change on each run. No functions or new Python topics are needed. The editor starts blank; an encrypted teacher solution is included. Topic usage is taught rather than enforced by source matching.

The map uses the existing 640 × 560 canvas and keeps the inventory and feedback separate. **Follow hero** displays a readable 16 × 9 window, **Whole map** shows all nine districts, and arrow buttons pan without moving the hero. Click the overview to inspect a district. Controls work before and after playback; a new run returns to following the hero. Coordinate labels and the accessible map description cover the whole map. The review allows 1,800 turns (its solution uses approximately 515); other lessons retain their 450-turn limit.

Old Functions drafts remain saved under their original IDs. Returning students open a fresh review draft, and old completions do not mark the review complete. Weeks 7 and 8 remain locked. There are 32 currently available challenges and 44 across the full course.

## GitHub Pages

This is a static site. Publish the contents of `codehaven/` together, with `index.html` at the publishing root. Keep `runner.py`, `hero_game.py`, `teacher-solutions.json`, and all JavaScript/CSS files alongside it. `.nojekyll` is included for plain static publishing. No backend, database, Node server, or Python server is needed on GitHub Pages. The local Python HTTP server is only for previewing the site on your computer.

All app asset paths are relative, so repository subpaths work. Python executes in the browser using Pyodide. The browser must be able to reach cdn.jsdelivr.net for Python and pygame. GitHub Pages HTTPS supports the Web Crypto APIs used to unlock teacher solutions.

Expanded levels use a separate v2 local save key so old small-map completions do not mark new challenges complete. Previous level drafts remain in the old browser storage key; free coding files are unchanged. Weeks 2, 4, and 5 have replacement lessons with new challenge IDs. Drafts from the replaced lessons remain in browser storage; their completions do not count toward the new lessons. Existing work in the other weeks keeps its original challenge IDs.

## Customize your hero

Put these after the import and before your moves:

```python
hero.set_name("Nova")
hero.set_color("purple")
hero.set_hat("crown")
```

Names can have 1 to 16 characters. Colors include blue, red, green, purple, orange, pink, yellow, white, or a six-digit hex color. Hats are cap, crown, helmet, and none. Run these commands once to save your choices in this browser. They survive reruns, level changes, sign-out and page reloads, even after you remove the commands. Running them again updates your saved appearance. Clearing browser data removes the saved choices.

Errors use a short message, a line number when available, and a suggestion for common Python errors. Full tracebacks stay under Output and error details.

After an unsuccessful or stopped curriculum run, the map resets to the start while keeping the hero appearance and failure feedback. Winning shows a level-complete screen with a Next challenge button. Student code is preserved in both cases.

## Release weeks

Weeks 1–6 are currently available locally, including Week 6: Review. To change availability, edit `course-settings.js`:

```js
const UNLOCKED_THROUGH_WEEK = 6;
```

Commit and publish that file to GitHub Pages. Setting 6 releases weeks 1 through 6, and 8 releases the entire course. Saved later-week selections and Next challenge buttons obey this setting. Free coding remains available.

Week 1 teaches sequences through six puzzles with matching colored keys and doors, switches, and gated rooms. Goals describe what to finish without providing a route. `hero.unlock(direction)` automatically uses a matching key; the wrong color cannot open a door. `hero.activate()` works while standing on a switch and opens gates of the same color. Teacher solutions have been updated for these puzzles. Old week 1 code is preserved, while completion of the old maps does not count for the new puzzles.
