# Verification

- JavaScript syntax checks pass for all five application scripts.
- Twenty-four Node tests cover interface state, login, independent drafts, encrypted teacher unlock, sign out, errors inside and below the game, printed values in the bottom-right corner, clearing stale output, progression across challenges, execution of all 49 teacher solutions through the Python runner, run/edit/run after success and errors, edits during playback, safe restart ordering, keyboard event isolation, the combined Variables & Numbers week, renumbered week navigation with saved work and teacher solutions, and the replacement loop curriculum.
- Forty-two Python tests cover execution, cancellation, tracebacks, structured error messages and line numbers, map connectivity and bounds, walls, enemies, single attacks, keys, doors, healing, fresh runs and action limits.
- All 49 teacher solutions complete all their map objectives with the hero alive. The eight-week course has seven levels in the combined Variables & Numbers week and six in every other week.
- Weeks 2, 4, and 5 use new challenge IDs so old completions cannot mark new maps finished. Retired drafts remain stored. Week 5 retains its existing maps; map layouts and IDs in other weeks are preserved.
- Static asset references remain relative. The site uses no backend endpoints.
- No browser was connected. Responsive rendering has not been visually verified in this session.

The keyboard tests simulate SDL event propagation and the run tests use a runtime stand-in. Live browser confirmation of the pygame keyboard fix remains outstanding.

Customization validation, frame snapshots, reset behavior, common Python error categories, and generic browser error formatting are covered. Live visual verification of the stable canvas layout remains outstanding.

Failure reset, preserved feedback, cosmetic reset handling, win-screen navigation, and errors after reaching all goals are covered. The error popup and printed-output overlay still need live browser visual verification.

Regression tests cover a loaded game module without reset_after_run and fresh, versioned Python downloads with module-cache invalidation.

Week availability is tested against restored saves, direct selection, Next buttons, and a later release setting. Colored-key matching, non-consumption of the wrong key, switch/gate matching, reset behavior, and week 1 interactions are tested. All 49 teacher solutions pass, including the six replacement week 1 puzzles.

Appearance persistence is tested across reruns, level changes and loading a fresh Python module. Invalid saved data and blocked browser storage are handled without breaking the game.

Variable-door checks cover optional move/attack counts, invalid counts, per-turn playback and obstacle checks, distinct sign codes, storing several readings, reuse after leaving a sign, incorrect codes, adjacency, blocked movement, frame snapshots, completion requirements, and failed-run resets. All seven Week 2 solutions run against four additional distinct-code assignments as well as a generated assignment. The final vault retains four readings through six doors. Retired drafts remain stored and do not mark replacement puzzles complete.

No browser connection was available for visual verification of the game.

Week 4 alternates fixed-count `for` loops and condition-based `while` loops across coin trails, staircases, and repeated key-door-coin sections. All 49 teacher solutions pass through the Python runner, including every one of the 12 variable loop layouts. Connectivity and bounds are checked for every layout. Tests cover fresh layout selection, unchanged curriculum data, the chosen layout's accessible description, preserved student code, reset to the same layout with restored items, teacher unlock, and retired loop drafts and completions. Browser connection discovery returned no available browsers, so live rendering remains unverified.


## Week 5 hotbar update

The six Lists lessons now teach packing and switching inventory items. New IDs `5-hotbar-1` through `5-hotbar-6` preserve retired route drafts without carrying their completion into the new lessons. The six existing maps are retained. Other weeks' maps, starters, and IDs are unchanged.

`npm test` passes 24 interface tests, 42 Python tests, and all 49 decrypted teacher solutions through the actual runner. Additional checks cover wrong-item actions without resource loss, key/potion supply requirements, invalid hotbars and indexes, list-copy behavior, frame snapshots, reset state, new-lesson navigation, retired drafts, and the accessible hotbar explanation. Every starter compiles. Each hotbar solution uses both loop types and all three held items; each attack, unlock, and heal frame is checked for the matching item.

Headless pygame rendering exercises every playback frame of all six solutions. The preview at `previews/hotbar-items.png` shows sword, key, and potion in hand, selected slots, empty slots, and the densest map with a changed loadout. This checks the actual pygame renderer; it does not verify the browser's Pyodide integration or responsive page layout. No browser connection is available in this session. Nothing has been published.
