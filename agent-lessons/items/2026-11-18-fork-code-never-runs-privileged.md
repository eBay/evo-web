---
source: observed-failure
disposition: open
---

# Build fork PR code under `pull_request`; publish it from a separate `workflow_run`

Asked to deploy previews for approved fork PRs, the agent first ran the fork's build under
`pull_request_target` behind an environment approval. Even with a read-only token and no npm
cache, that job could still poison `main`'s Actions cache, which the npm `release` job restores.
It took two rewrites to land the safe split: build unprivileged, publish the artifact without
running PR code.

Disposition: open — repo maintainers, raised 2026-11-18
