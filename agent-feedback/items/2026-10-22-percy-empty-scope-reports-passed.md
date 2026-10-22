---
type: bug
impact: med
effort: low
site: .github/workflows/percy.yml › percy-pr › Report Percy status to PR
---

# Report a skipped Percy run distinctly from a passing one

When `.percy-components` is empty, neither "Run Percy (Partial)" nor "Run Percy (All)" runs, and the status step still posts "Percy snapshots passed". A reviewer reading the PR check cannot tell a real Percy pass from no Percy build at all. Post a description such as "No Skin component changes, Percy skipped" when the scope is empty. Only the workflow is involved; no component packages.

Check: in `.github/workflows/percy.yml`, both Percy steps are gated on `steps.meta.outputs.components != ''`, and the status step derives `state` only from `job.status`, which is `success` when both steps are skipped.
