---
type: dx
impact: med
effort: low
site: packages/ebayui-core/src/components/ebay-snackbar-dialog/test/test.browser.js › "focus and mouseenter prevent closing it until all events"
---

# Raise the timeout on the snackbar-dialog auto-close browser test

The "is not closed" case in the snackbar-dialog browser suite uses fake
timers plus `user.hover` and finishes in well under a second in
isolation, but under full-monorepo `npm run build` load (all packages
building and testing concurrently) it intermittently exceeds the 15s
`testTimeout` and fails the pre-push hook on diffs that never touch
`ebayui-core`. Only the `ebayui-core` package is affected; verified
passing in isolation. A per-test timeout bump (or serializing the
hover-then-advance-timers setup) would stop the false failures.

Check: `cd packages/ebayui-core && npx vitest run src/components/ebay-snackbar-dialog --browser.headless` passes in ~1s, while root `npm run build` intermittently fails that same test with "Test timed out in 15000ms".
