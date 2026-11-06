---
"@ebay/skin": patch
---

fix(star-rating-select): fill the stars before the checked radio in CSS, so the rating is right before JavaScript runs. Where `:has()` is supported the checked radio now decides the fill, and a `star-rating-select__control--filled` modifier after it is ignored. The modifier still works when no radio is checked and in browsers without `:has()`.
