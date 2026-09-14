---
type: dx
impact: med
effort: med
site: packages/ebayui-core-react/src/ebay-phone-input/__tests__/index.spec.tsx › should provide the correct event data on inputChange after changing the country
---

# `ebay-phone-input` inputChange-after-country-change test times out under CI load

CI's `build` job failed with `Error: Test timed out in 10000ms` on this `userEvent`-driven test, but it passes reliably (28/28 in the file) when run in isolation locally (`npx vitest run src/ebay-phone-input/__tests__/index.spec.tsx`). Vitest's own summary in the same CI run reports `jsdom was created 134 times · 295.46s total, 49% of tracked time`, suggesting jsdom environment setup contention across the full-package test run is eating into this test's 10s budget rather than the interaction itself being slow. This is at least the third distinct flaky-under-load test observed this session (also: an `evo-dialog` browser test, and an `ebayui-core` alert-dialog test already tracked in `2026-09-03-ebayui-core-alert-dialog-enter-flaky-under-load.md`), suggesting a systemic resource-contention issue in CI rather than isolated bad tests.

Check: re-run `npm run build -w packages/ebayui-core-react` in CI on an unrelated PR and see if this (or another) test times out; compare against `npx vitest run src/ebay-phone-input/__tests__/index.spec.tsx` locally, which passes cleanly in ~2s.
