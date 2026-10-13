---
source: observed-failure
disposition: open
---

# Test the property, not one example, when handing a computation to the browser

To cut measuring code, a carousel's "previous" paging was changed from a
computed target to end-aligning an item and letting scroll snapping settle it.
Snapping settles on the nearest snap point, which can sit on the wrong side and
leave that item cut off, so half the items could never be reached going
backwards. The only test paged forward once and back to the start, which passes
either way, and the bug was pushed to the PR; it surfaced a week later while
writing tests for a different change. When replacing explicit logic with
browser behaviour, write a test for the guarantee the old logic gave (every
item becomes wholly visible in both directions), not for a single round trip.

Disposition: open — repo maintainers, raised 2026-10-13
