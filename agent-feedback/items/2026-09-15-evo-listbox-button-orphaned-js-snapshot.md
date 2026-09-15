---
type: cleanup
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-listbox-button/test/__snapshots__/test.server.js.snap
---

# Delete the orphaned evo-listbox-button JS snapshot

`test/__snapshots__/test.server.js.snap` has no corresponding `test.server.js` source file — the only test file present is `test.server.ts`, which correctly reads/writes `test.server.ts.snap`. The `.js.snap` file is a leftover from an earlier JS-to-TS migration of the test file; vitest never reads it, so it silently drifts out of date (verified stale against the current component output) and adds noise to future diffs on this component.

Check: `ls packages/evo-marko/src/tags/evo-listbox-button/test` shows only `test.server.ts` and `test.browser.ts`, confirming no `.js` test file exists to read `test.server.js.snap`.
