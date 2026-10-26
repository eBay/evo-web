---
type: dx
impact: med
effort: med
site: packages/ebayui-core/src/components/ebay-alert-dialog/test/test.browser.js › "when Enter key is pressed on the confirm button"
---

# Alert-dialog Enter-key browser test flakes under the parallel root build

The test focuses the OK button and sends `{Enter}` via user-event. When the root `npm run build` runs all package test suites concurrently, this test intermittently times out because the keyboard event never reaches the focused button. Standalone runs of the file or package suite pass reliably. The ebay-accordion "should open the clicked section" snapshot is also load-sensitive: it has timed out and has captured intermediate chevron animation styles during parallel builds. Direction: await focus before keyboard input and make visual snapshots wait for transitions to settle or disable component motion deterministically. Checked: ebayui-core only.

Check: run `npm run build` at the repository root. The ebayui-core browser suite intermittently fails either the alert-dialog keyboard test or the accordion snapshot, while their standalone tests pass.
