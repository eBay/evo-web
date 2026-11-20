---
type: dx
impact: med
effort: low
site: packages/evo-react/src/alert-dialog/test/test.browser.tsx › `given an uncontrolled dialog`
---

# Uncontrolled alert and confirm dialog tests time out under the pre-push build

`should close when confirm is clicked without needing external state` in both `evo-alert-dialog` and `evo-confirm-dialog` fails with `Cannot find element with locator: page.getByRole('alertdialog')` / `Matcher did not succeed in time` when `.husky/pre-push` runs every package build concurrently. Run on their own, both files pass (59/59). A flaky pre-push test blocks unrelated pushes; the assertion likely relies on the default matcher timeout while the machine is saturated.

Check: run `git push` on a branch that only touches `packages/skin`, so the pre-push hook builds all packages concurrently, and watch for the two failures; then run `npx vitest run --browser.headless src/alert-dialog/test/test.browser.tsx src/confirm-dialog/test/test.browser.tsx` in `packages/evo-react` and see them pass.
