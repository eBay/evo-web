---
type: dx
impact: med
effort: med
site: packages/evo-react/src/dialog/test/test.browser.tsx › "closes an uncontrolled dialog from the close action"
---

# Investigate the 15s timeout in the evo-react dialog close test under load

This test times out at the 15000ms default when `packages/evo-react` is built
as part of root `npm run build` (five package builds running concurrently),
failing the whole build; run on its own it passes with the full `src/dialog`
suite green. Root cause is not established — there is no obvious fixed-delay
race in the test itself, so it may be a genuinely slow close/animation path
that only misses the deadline when CPU-starved. Time the close interaction
under artificial load before deciding between raising `testTimeout` and fixing
the underlying wait.

Check: `npm run build` from the repo root (concurrent) versus
`npm test -w packages/evo-react -- src/dialog` (isolated).
