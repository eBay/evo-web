---
"@ebay/ebayui-core": patch
---

Make inactive ebay-carousel items inert when displaying one item per slide with no preview of adjacent slides, including autoplay. This prevents inactive image descriptions from contributing to the focused scroll container's accessible name without changing continuous, multi-item, or peek carousels.
