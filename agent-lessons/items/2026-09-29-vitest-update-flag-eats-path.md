---
source: observed-failure
disposition: open
---

# Put test paths before `-u` when updating Vitest snapshots

`npx vitest run --project server -u src/tags/evo-flag` ran the whole server project and rewrote four unrelated snapshot files. Vitest's `-u, --update [type]` takes an optional value, so it consumed the path as its "type" and nothing was left to filter by. The unrelated snapshots were already out of date on main, so `-u` quietly "fixed" failures that belong to other work. It happened twice in one session, and each time the unrelated files had to be found and restored before committing. Write the path first (`vitest run --project server <path> -u`) and check `git status` for snapshot files outside the component before committing.

Disposition: open — evo-web maintainers, raised 2026-09-29: add this to the `evo-testing` or `evo-commands` skill, where snapshot-update commands are documented.
