---
source: observed-failure
disposition: declined
---

# Compare the same interaction state on both sides

A focus comparison reported a Firefox background-color mismatch because the pointer remained over only the candidate after a preceding hover check. Reproducing the pointer and focus states identified the test contamination; moving the pointer away before both focus captures removed the mismatch. Computed properties also missed an earlier selector leaking onto a sibling control, which an exact screenshot comparison caught.

Disposition: declined as a global rule, because these are mechanically checkable audit conditions. The local comparison scripts normalize pointer state, compare rendered pixels, and inject a deliberate styling defect to verify detection.
