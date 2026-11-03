# CodeHaven

A Python IDE with an eight-week hero course and a separate free coding mode.

## Start

Run `npm run serve` from this directory, then open http://localhost:8000. No npm installation is needed. Python and pygame load from the Pyodide CDN, so the first load needs internet access.

Class code: `CodeH@ven123`. Teacher solutions code: `T3acher123`.

## Course

Week 2 has seven combined Variables & Numbers challenges. Each other week has six challenges:

1. Sequences
2. Variables & Numbers
3. Conditionals
4. Loops
5. Lists
6. Functions
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

Run `npm test` for syntax checks, interface state tests, Python runner/game tests, and all 49 decrypted teacher solutions through the real Python runner. Week 5 solutions are also checked for both loop types, all three held items, and the correct held item at each attack, unlock, and heal. Interface tests use a small DOM stand-in; they do not verify browser rendering.

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

Lists is unlocked after Loops; Functions follows in Week 6 and remains locked. All six Lists challenges use an inventory hotbar. Students switch the item in their hero's hand with a zero-based list index. The selected slot has a cyan outline, and the sword, key, or potion is drawn in the hero's hand during playback. Slots show item names and collected key/potion counts. Movement plans are supplied so the list is the focus; the plans still practice `for` and combat `while` loops without introducing custom functions.

```python
hotbar = ["sword", "key", "potion"]
hero.set_hotbar(hotbar)
hero.equip(0)  # Hold the sword before attacking.
hero.equip(1)  # Hold the key before opening a door.
hero.equip(2)  # Hold the potion before healing.
```

The hotbar accepts 1–5 slots containing `"sword"`, `"key"`, or `"potion"`. `hero.set_hotbar` copies the list and empties the hero's hand; call `hero.equip(index)` next. After editing the Python list, load it again to show those changes. Keys and potions still come from map pickups and are consumed by unlocking and healing; packing a slot does not grant supplies. Only Week 5 requires matching held items for those actions. Other weeks retain their existing commands.

1. **Pack your first hotbar:** create an ordered list of sword, key, and potion.
2. **Choose the right slot:** identify the correct indexes in a rearranged hotbar.
3. **Replace an item:** use indexed assignment to replace a duplicate sword with a key.
4. **Add a potion slot:** use `append` to add the missing item.
5. **Fill and inspect the hotbar:** use `extend`, `len`, and `range` to fill the list and equip every slot.
6. **Swap your loadout:** pack a list of hotbar lists, switch loadouts between halls, and use `index` to find items whose positions change.

These challenges retain the six previous Lists maps but use new IDs, `5-hotbar-1` through `5-hotbar-6`. Old route drafts remain in browser storage, and old route completions do not mark the hotbar lessons finished. Functions and later weeks keep their existing maps, IDs, and drafts. Teacher solutions remain encrypted and include the matching equip calls. Failed runs reset the hotbar and empty the hand along with the map; appearance and student code are preserved.

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

Weeks 1–5 are currently available locally, including Week 5: Lists. To change availability, edit `course-settings.js`:

```js
const UNLOCKED_THROUGH_WEEK = 5;
```

Commit and publish that file to GitHub Pages. Setting 5 releases weeks 1 through 5, and 8 releases the entire course. Saved later-week selections and Next challenge buttons obey this setting. Free coding remains available.

Week 1 teaches sequences through six puzzles with matching colored keys and doors, switches, and gated rooms. Goals describe what to finish without providing a route. `hero.unlock(direction)` automatically uses a matching key; the wrong color cannot open a door. `hero.activate()` works while standing on a switch and opens gates of the same color. Teacher solutions have been updated for these puzzles. Old week 1 code is preserved, while completion of the old maps does not count for the new puzzles.
