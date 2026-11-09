# Week 6 Review — The grand expedition

Week 6 replaces the six Functions challenges with one continuous 49 × 33 map. Nine connected districts contain 303 walkable tiles, 35 coins, six code doors, six colored key doors, three switches and gates, six guards, and three gem deliveries.

The expedition combines all five earlier weeks: ordered actions and switches, saved sign variables reused at later doors, conditional checks for guards and healing, loops over repeated routes, and physical inventory indexing. Sign codes and guard health change each run. Students start with a blank editor and do not need functions or new Python topics. An encrypted teacher solution is included.

Follow hero shows a readable 16 × 9 window. Whole map shows the complete expedition with district labels. Arrow buttons pan; clicking the overview opens detail. The map retains the fixed 640 × 560 canvas and separate inventory and feedback areas. Review allows 1,800 turns; other lessons retain their limit.

Weeks 1–6 are available, with 32 open challenges and 44 across the full course. Retired Functions drafts are preserved, while the new `6-review-1` ID starts with fresh completion. Weeks 7–8 remain locked.

Run `npm test` from `classroom/`. Validation covers 26 interface tests, 57 Python tests, and all 44 decrypted teacher solutions through the real runner. Review succeeds with each guard strength, mixed strengths, and several sign assignments. Camera bounds, overview clicks, inventory tools, capacity, and draft migration are covered.

All 44 initial maps and all 522 frames of the hardest review run render with actual pygame. Inspected previews are in `classroom/previews/review-*.png`. Live browser interaction, Pyodide integration, and responsive page rendering could not be automated because no browser connection was available.

The local preview is http://localhost:8001/#week-6. The deployed classroom path is `/classroom/#week-6`.
