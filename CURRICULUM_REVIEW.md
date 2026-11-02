# Week 5 Lists — review before publishing

Prepared locally on branch `curriculum/week5-lists-loops`, based on GitHub commit `4625bd61d0aa4a12dc174021e568e5020c239d5a`. This copy includes the complete repository from the existing local checkout. Nothing has been pushed or published.

## Order and availability

The course order is Sequences, Variables & Numbers, Conditionals, Loops, **Lists (Week 5)**, **Functions (Week 6)**, Combine your skills, Final challenge. `classroom/course-settings.js` unlocks weeks 1–5. Functions and weeks 7–8 remain locked. Week navigation, restored selections, progress totals, and Next challenge respect this setting.

## How students use lists

Lists hold the hero's movement plan. Each string represents a direction. The list's order determines the route, including trips into rooms and back out. A `for` loop reads the plan; a `while` loop fights a guard until its tile is clear. Starter code provides combat, healing, door checks, and collection. The examples illustrate a concept rather than supplying a complete route.

| Challenge | What the list teaches | Loop practice |
| --- | --- | --- |
| 1. Write the route | Create an ordered list of direction strings. | `for direction in route`, with combat `while`. |
| 2. Change one list item | Start indexing at 0 and replace a wrong move before traversal. | Reuse the same `for` and `while` after editing the data. |
| 3. Build a route with loops | Build an empty list with `append`; add another list with `extend`. | One `for` builds a hallway, another follows the route; `while` handles guards. |
| 4. Count each route section | Match direction and count lists by index. | Outer `for` over `range(len(directions))`, inner `for` over each count, combat `while`. |
| 5. Reuse a route list | Reuse a two-hall list twice, adding a connector only between copies. | A building `for` extends the route; a traversal `for` follows it; combat `while`. |
| 6. Follow a list of sections | Store five hall routes as a list of lists. | Nested `for` loops select sections and directions; `while` handles guards. |

For example, this small plan walks two tiles right and visits a room above the hall:

```python
route = ["right", "right", "up", "down"]
for direction in route:
    hero.move(direction)
```

The actual starters also check doors, fight, heal, and collect at each step. No Week 5 teacher solution defines or calls a custom function. Students meet those in Week 6, where travel helpers continue to use `for` and `while`. Weeks 7 and 8 combine lists, loops, conditions, and functions. Topic use is taught through the lessons and solutions; students can still complete maps using another valid program.

## What stays compatible

The maps and challenge IDs are unchanged. The existing Lists IDs remain `7-1` through `7-6`, and Functions IDs remain `6-1` through `6-6`; visible week numbers determine teaching order. Existing student drafts and completions stay attached to the same maps. Students with saved drafts retain their work, so the refreshed starter appears for a new draft. Teacher solutions remain encrypted. Versioned script URLs refresh course settings and lesson text when eventually published.

## Validation

Run `npm test` from `classroom/`. It checks JavaScript syntax, interface behavior, all 49 decrypted teacher solutions through the real Python runner, every variable loop layout, randomized code-door cases, and Python game/runner behavior. Week 5 solutions are also checked for both loop types and the absence of custom function definitions. The interface tests use a DOM stand-in; live browser rendering is not covered.

Result: all 23 interface tests, 36 Python tests, and 49 teacher solutions pass. All 49 maps and challenge IDs match the upstream course, and every starter program compiles.

Preview the course locally with `npm run serve` from `classroom/`, then open `http://localhost:8000`. Publishing is pending review of this curriculum.
