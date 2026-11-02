---
source: observed-failure
disposition: open
---

# Don't chain a workflow_run off a run that GITHUB_TOKEN started

PR #1081 had `percy-request.yml` dispatch Percy Build with the default token and left `percy.yml` waiting on `workflow_run` for that build. GitHub starts no new run for events caused by `GITHUB_TOKEN` (only `workflow_dispatch` and `repository_dispatch` are exempt), so the build succeeded on 2026-10-27 and the snapshot job never ran. The PR status was left pending, and a follow-up PR had to move the snapshot job into `percy-build.yml`. The #1081 description said the workflow had not run on GitHub yet, so the chain was never exercised before merge. When a workflow is started by the default token, put the downstream work in the same run as `needs:` jobs, or trigger it with an App token.

Disposition: open, Arthur Khachatryan to decide whether this becomes a CLAUDE.md line for CI work, raised 2026-10-27
