---
source: observed-failure
disposition: open
---

# Validate changes before reporting progress

I called the progress tool after editing but before running checks, so lint and type-check failures were discovered after the changes had been pushed. Fixing those required a second commit. Run checks before subsequent progress calls so only validated changes are committed.

Disposition: open — repository maintainers, raised 2026-11-09
