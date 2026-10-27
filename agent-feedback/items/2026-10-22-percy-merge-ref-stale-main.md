---
type: dx
impact: low
effort: med
site: .github/workflows/percy-build.yml › build › Confirm merge contains the requested commit
---

# Avoid failing Percy builds when main moves after the merge ref is computed

The check compares `HEAD^1` of `refs/pull/N/merge` to a freshly fetched `main`. If `main` gets a new commit after GitHub last recomputed the merge ref, the build fails with "The PR merge changed after /run-percy" even though the PR itself did not change, and the user has to comment again. It fails closed, so this is friction rather than a safety gap. One direction: compare against the base SHA GitHub reports for the merge ref instead of the live branch tip, and diff against that same SHA in change detection.

Check: push a commit to `main`, then immediately comment `/run-percy` on an open PR; the build can fail at this step until GitHub recomputes the merge ref.
