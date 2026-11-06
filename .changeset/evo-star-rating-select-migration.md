---
"@evo-web/marko": patch
"@ebay/skin": patch
---

Add `<evo-star-rating-select>`, migrated from ebayui-core's `<ebay-star-rating-select>`. `value` is now a number that binds with `value:=` (or `valueChange`), replacing `on-change`. The wrapped `on-focus` and `on-keydown` events are removed in favor of native handlers on the root. `a11yText` and `a11yStarText` are required with English defaults, the root is always a `radiogroup`, and a new `name` attribute sets the radios' form name.

Skin's star rating select now fills the stars before the checked radio in CSS, so the rating is right before JavaScript runs. Where `:has()` is supported the checked radio decides the fill, and a `star-rating-select__control--filled` modifier after it is ignored. The modifier still works when no radio is checked and in browsers without `:has()`.
