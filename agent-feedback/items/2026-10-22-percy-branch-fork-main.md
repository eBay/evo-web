---
type: bug
impact: low
effort: low
site: .github/workflows/percy-build.yml › snapshots › PERCY_BRANCH
---

# Prefix PERCY_BRANCH for fork pull requests

`PERCY_BRANCH` is the PR head branch name with no owner, so a fork PR opened from a branch named `main` sends its Percy build under branch `main`, the same name as the baseline branch. Whether Percy then treats it as a baseline build is unverified; `PERCY_PULL_REQUEST` is also set and may take precedence. Use a value like `fork/<owner>/<ref>` when `pr.head.repo.full_name` differs from the repository. The same pattern existed on `main` via `github.event.workflow_run.head_branch`.

Check: `grep -n PERCY_BRANCH .github/workflows/percy-build.yml` shows the value is `steps.request.outputs.branch`, set from `pr.head.ref` with no fork check.
