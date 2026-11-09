# Verification — November 9, 2026

`npm test` passes JavaScript syntax checks, 26 interface tests, 57 Python tests, and all 44 encrypted teacher solutions through the real Python runner. All variable loop layouts and number-code assignments remain covered.

## Week 6 review

- One new challenge, `6-review-1`, replaces six Functions challenges. Nine connected districts occupy a 49 × 33 map with 303 walkable tiles and 35 coins.
- The review combines prior sequences/switches, randomized sign variables and six code doors, randomized 3/6/9-health guards and healing decisions, repeated routes for loops, and physical inventory indexing with three gem deliveries.
- The encrypted teacher solution passes through the real runner using all-low, all-medium, all-high, mixed and reverse-mixed guard strengths, plus four sign assignments. Inventory capacity and held tools are checked. It uses no functions and the student editor starts blank.
- The release includes Weeks 1–6 (32 challenges); Weeks 7–8 remain locked. Retired Functions drafts survive; retired completions do not count toward review. Teacher unlock and next-challenge navigation are checked.
- The camera follows every walkable tile within a readable 16 × 9 viewport. Tests cover clamped panning, overview clicks, ignoring HUD clicks, restoring follow mode, and disabling view controls during execution. All views preserve the fixed 640 × 560 canvas and separate inventory area.
- Review allows 1,800 turns; earlier lessons keep their existing limit. A complete run with all guards at 9 health uses 522 frames and finishes with 8 health, all 35 coins, and all deliveries complete.
- All 44 initial lesson maps and all 522 review playback frames render with actual pygame. Inspected images: `previews/review-follow.png`, `review-overview.png`, `review-inventory.png`, `review-pan-edge.png`, and `review-finish.png`. The overview fits the entire map with nine district labels; detail retains readable symbols and coordinates.
- The local preview returned HTTP 200 and was opened in the system browser at http://localhost:8001/#week-6. No browser automation connection is available, so live browser interaction, Pyodide integration, and responsive page rendering remain unverified. Interface tests use a DOM stand-in; pygame previews verify the game renderer directly. Nothing was published.

## Lists redesign (retained checks)

- Six new maps and challenge IDs, `5-inventory-1` through `5-inventory-6`.
- Every Lists starter and lesson example is empty. Curriculum execution provides `hero` without inserting source lines; free coding has its own namespace.
- Every Lists teacher solution uses actual Python list indexing. Solutions finish their map objectives with the hero alive. No compulsory loop type or supplied route remains.
- Inventory starts empty and contains real pickups in collection order. Capacity, key colors, individual duplicate pickups, held items, consumed keys and potions, reusable swords, dropping, recollection, index shifts, and copied-list behavior are tested.
- Failed pickup, wrong-key, and wrong-tool actions preserve items. Delivery goals check the ground at the correct pad. The reorder goal checks final inventory order. Reset restores the map and empties the inventory while retaining appearance and code.
- Retired route and hotbar drafts are preserved. Their completions do not count for new lessons. Returning hotbar students open the blank replacement at the same stage. Reset clears a new Lists editor back to blank.
- Lesson navigation, teacher unlock, save behavior, accessible map descriptions, and Week 6 availability remain tested. The optional inventory command reference is in the lesson panel, including on narrow screens.

## Earlier Lists rendering checks (November 5)

The real pygame renderer successfully draws all 145 playback frames from the six inventory solutions. Inspected PNGs show an empty hotbar, two-gem selection, shifted key indexes, reordered gems, all five occupied slots, and the expedition with sword, potion, gem, and colored key. Selected items appear in hand. The current hotbar uses item names and indexes, and delivery progress appears in the status row.

Preview images are in `previews/inventory-stage-1.png` through `previews/inventory-stage-6.png`; `previews/inventory-indexing.png` combines them.

The local server returns HTTP 200 at http://localhost:8001 and the URL was opened in the system browser. Port 8000 belongs to another app. No browser automation connection is available, so live browser interaction, Pyodide integration, and responsive page rendering were not verified in this session. Interface tests use a DOM stand-in; pygame previews verify the game renderer directly.
