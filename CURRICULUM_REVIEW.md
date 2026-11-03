# Week 5 Lists — inventory hotbar

The six Lists challenges now teach an inventory hotbar in place of route planning. Movement is supplied so students focus on creating a list, choosing zero-based indexes, replacing an item, appending, extending, iterating through slots, and selecting nested loadouts. The plans retain `for` and combat `while` practice without custom functions. Functions remains Week 6; weeks 1–5 are open.

Students load `hotbar = ["sword", "key", "potion"]` with `hero.set_hotbar(hotbar)` and choose an item with `hero.equip(index)`. A cyan outline marks the selected slot, and the matching item is drawn in the hero's hand. Week 5 attacks require a sword, doors require a key, and healing requires a potion. Keys and potions still have to be collected and are consumed normally. Hotbars contain 1–5 slots; loading copies the list and empties the hand until an equip call. Earlier and later weeks keep their existing gameplay.

The existing six Lists maps remain, with new challenge IDs `5-hotbar-1` through `5-hotbar-6`. Retired `7-1` through `7-6` drafts remain saved, but their completions do not count toward the hotbar challenges. Other weeks keep their IDs, maps, and saved work. Teacher solutions remain encrypted. Runtime and curriculum URLs have a new cache revision.

Run `npm test` from `classroom/`. All 24 interface tests, 42 Python tests, and 49 teacher solutions pass. Hotbar checks cover selected-item requirements, unchanged resources on rejected actions, supplies, valid slots, copies, playback snapshots, resets, retired drafts, accessible instructions, and correct held items on all attacks, unlocks, and heals. All starters compile. Headless pygame renders all 579 hotbar playback frames. `classroom/previews/hotbar-items.png` shows all three held items and the largest map with a changed loadout. Browser/Pyodide integration and responsive page rendering have not been visually checked in this session.

Preview with `npm run serve` from `classroom/`, then visit http://localhost:8000. Changes are local; nothing has been pushed or published.
