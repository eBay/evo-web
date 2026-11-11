---
"@ebay/ebayui-core": minor
---

feat(tooltip,infotip,tourtip): add a `strategy` input that controls how the overlay is positioned.

- `"absolute"` (default): positions the overlay relative to its nearest positioned ancestor, as before. A scrolling or `overflow: hidden` ancestor can clip it.
- `"fixed"`: positions the overlay relative to the viewport, so a scrolling or `overflow: hidden` ancestor no longer clips it. Use this for tips inside scroll containers such as code panels or tables. An ancestor with `transform`, `filter` or `contain` still becomes its containing block.
