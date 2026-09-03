---
type: dx
impact: med
effort: med
site: packages/ebayui-core/src/components/ebay-alert-dialog/test/test.browser.js › "when Enter key is pressed on the confirm button"
---

# Alert-dialog Enter-key browser test flakes under the parallel root build

The test focuses the OK button and sends `{Enter}` via user-event. When the root `npm run build` runs all package test suites concurrently, this test intermittently times out (the keyboard event never reaches the focused button — headless-browser focus contention); standalone runs of the file or the package suite pass reliably. This intermittently fails the pre-push hook. Direction: make the test await focus (`await expect.element(button).toHaveFocus()` before the keypress) or click the button as the click-variant test does. Checked: ebayui-core only; the sibling space-key and escape-key tests in the same file share the pattern and likely the risk.

Check: `npm run build` at the repo root occasionally fails this test while `npx vitest run src/components/ebay-alert-dialog` in packages/ebayui-core passes repeatedly (3/3).
