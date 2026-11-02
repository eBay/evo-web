---
source: observed-failure
disposition: open
---

# Grant extra token permissions only to jobs that never run PR code

While adding a CI-success check to `.github/workflows/percy-build.yml`, I added `actions: read` at the workflow level. That also granted it to the job that runs `npm ci` and a local action from the PR checkout. An adversarial review caught it before commit, and the fix (a separate trusted `resolve` job holding the permission) cost one extra edit and review pass. In any workflow that checks out PR code, the permission belongs on the job that needs it, not the workflow.

Disposition: open, Arthur Khachatryan to decide whether this belongs in CLAUDE.md or a workflow lint, raised 2026-10-22
