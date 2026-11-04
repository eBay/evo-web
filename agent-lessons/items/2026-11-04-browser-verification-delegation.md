---
source: observed-failure
disposition: open
---

# Account for verification side effects when selecting a research agent

I assigned a live Storybook check to Xereta because it was verification rather than implementation. The agent declined because launching a persistent server and saving browser evidence exceeded its read-only constraints, wasting a delegation round before I performed the check directly. The distinction needed here is whether the verification creates processes and artifacts, not whether it edits application source.

Disposition: open — maintainer, raised 2026-11-04; decide whether side-effectful verification needs a dedicated agent role or should stay in the parent session.
