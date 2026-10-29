---
type: bug
impact: med
effort: low
site: .github/workflows/percy-build.yml › report
---

# Report a skipped Percy run distinctly from a passing one

When `.percy-components` is empty, neither "Run Percy (Partial)" nor "Run Percy (All)" runs, and the status step still posts "Percy snapshots passed". A reviewer reading the PR check cannot tell a real Percy pass from no Percy build at all. Post a description such as "No Skin component changes, Percy skipped" when the scope is empty. Only the workflow is involved; no component packages.

Check: in `.github/workflows/percy-build.yml`, both Percy steps in `snapshots` are gated on `steps.meta.outputs.components != ''`, and the `report` job posts "Percy snapshots passed" whenever `needs.snapshots.result` is `success`, which it is when both steps are skipped.
