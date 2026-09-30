---
source: observed-failure
disposition: open
---

# Check the base branch's dependency versions before treating a bug as unfixed upstream

A Marko `$signal` bug found on a feature branch was reported as "evo-web is on
6.0.169", filed as an upgrade item, and reproduced in the Marko repo, when
`main` had already moved to 6.3.56, which contains the fix. The branch was
simply cut before that upgrade. The repro and the filed item were both thrown
away once a rebase turned out to be the whole fix. Comparing the dependency in
`origin/main`'s lockfile with the branch's before reporting would have caught it.

Disposition: open — repo maintainers, raised 2026-09-30
