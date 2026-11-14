---
type: cleanup
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-listbox-button/test/__snapshots__/test.server.js.snap
---

# Delete the orphaned evo-listbox-button JS snapshot

`test/__snapshots__/test.server.js.snap` has no corresponding `test.server.js` source file — the only test file present is `test.server.ts`, which correctly reads/writes `test.server.ts.snap`. The `.js.snap` file is a leftover from an earlier JS-to-TS migration of the test file; vitest never reads it, so it silently drifts out of date (verified stale against the current component output) and adds noise to future diffs on this component.

The same orphan exists at `packages/evo-marko/src/tags/evo-segmented-buttons/test/__snapshots__/test.server.js.snap`; its active `test.server.ts.snap` now renders the desktop icon while the unused JS snapshot still renders full-view. evo-marko has 30 such orphaned `.js.snap` files in all (25 still show ebayui-core-era `focusable="false"` markup that no evo-marko tag renders); a grep over snapshots finds them as if they were live. Both findings are confined to evo-marko; the segmented buttons snapshots in ebayui-core were also checked and have a matching JS test.

Check: `ls packages/evo-marko/src/tags/evo-listbox-button/test` shows only `test.server.ts` and `test.browser.ts`, confirming no `.js` test file exists to read `test.server.js.snap`.

Check: `ls packages/evo-marko/src/tags/evo-segmented-buttons/test` likewise shows only TypeScript tests, while both `.js.snap` and `.ts.snap` exist in its `__snapshots__` directory.
