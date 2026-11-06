# Week 5 Lists — indexing a real inventory

Six new challenges teach collecting, indexing, carrying, using, and dropping actual items. Editors start blank. The curriculum runner provides `hero` without prepending code, so students can write their own plan without an import or supplied movement sequence. An optional command reference is available in the lesson panel, including on narrow screens.

The hotbar starts empty. Pickups append to the inventory, and `hero.equip(hero.inventory[index])` selects that exact item and shows it in the hero's hand. Dropping leaves the held item on the current tile and removes it from the list; collecting it again appends it. Used keys and potions also disappear and later indexes shift left. A sword is reusable. Keys must match the door color. The hotbar holds five physical pickups; filling a Python list cannot grant supplies.

The lessons progress through selecting index 0, choosing between two items, shifting indexes, reordering through drops and pickups, making room for a key, and managing a mixed inventory during an expedition. Delivery goals require gems to remain on matching pads. The reorder challenge checks the final inventory order.

New IDs `5-inventory-1` through `5-inventory-6` preserve retired route and hotbar drafts without carrying completion forward. Returning hotbar students open the blank replacement at the same stage. Other weeks retain their maps and IDs; Functions remains Week 6 and locked. Teacher solutions stay encrypted, and updated assets use a new cache revision.

Run `npm test` in `classroom/`. The 25 interface tests, 52 Python tests, and all 49 teacher solutions pass. Coverage includes matching keys, consumed items, exact selection of duplicate pickups, capacity, atomic rejection of invalid actions, drop and recollection, index shifts, snapshots, resets, blank editors, save migration, and correct items during combat and unlocking.

The real pygame renderer draws all 145 playback frames for the six new solutions. `classroom/previews/inventory-indexing.png` combines inspected game states, with individual previews alongside it. Live browser interaction, Pyodide integration, and responsive rendering could not be checked because no browser automation connection was available.

Preview with `npm run serve` from `classroom/`, then visit http://localhost:8000. The current working preview uses http://localhost:8001 because another app occupies port 8000.
