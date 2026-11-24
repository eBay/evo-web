---
source: observed-failure
disposition: open
---

# Diff the touched components against upstream before porting work from a stale checkout

Work built for weeks on an outdated local `main` was moved onto a fresh branch from `origin/main`. Upstream had since deprecated the `.btn*` and `.icon-btn*` classes the new markup used and added an RTL block where the new styles were appended, so the port needed a class rename and a hand-fixed merge before it would lint. Before porting, run `git log main..origin/main -- <touched dirs>` and read the deprecation notes in the files being extended.

Disposition: open — repository maintainers, raised 2026-11-18
