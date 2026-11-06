---
"@evo-web/marko": patch
---

Add `<evo-star-rating-select>`, migrated from ebayui-core's `<ebay-star-rating-select>`. `value` is now a number that binds with `value:=` (or `valueChange`), replacing `on-change`. The wrapped `on-focus` and `on-keydown` events are removed in favor of native handlers on the root. `a11yText` and `a11yStarText` are required with English defaults, the root is always a `radiogroup`, and a new `name` attribute sets the radios' form name.
