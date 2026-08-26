---
"@ebay/ebayui-core": minor
"@evo-web/marko": minor
---

Support arbitrary media content in the card, alongside images.

`ebay-card` gains a generic `@media` attribute tag which, when present, renders in place of `@image`, which is now optional.

**Breaking:** `evo-card` replaces `@image` with `@media`, following the same shape as `@banner` in `evo-dialog`. It renders a `div.card__media` that takes the attributes you pass it, holding your own content when the tag has any and an `<img>` built from `src` and `alt` otherwise. Rename `<@image>` to `<@media>`; templates passing only `src` and `alt` need no other change, and any other `<img>` attributes now land on the wrapping `<div>` instead.

Both cards also apply the `card__hero-image` class to the image they render, so it fills the media slot. Skin defines the image sizing, hover transform, and horizontal/full-hero overrides on that class.
