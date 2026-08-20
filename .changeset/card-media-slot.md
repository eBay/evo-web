---
"@ebay/ebayui-core": minor
"@evo-web/marko": minor
---

Support arbitrary media content in the card, alongside images.

`ebay-card` gains a generic `@media` attribute tag which, when present, renders in place of `@image`, which is now optional.

**Breaking:** `evo-card` replaces `@image` with `@media`, which renders a `<div>` wrapping its content when it has any, and an `<img>` otherwise. Rename `<@image>` to `<@media>`; templates passing only image attributes need no other change.

Both cards also apply the `card__hero-image` class to the image they render, so it fills the media slot. Skin defines the image sizing, hover transform, and horizontal/full-hero overrides on that class.
