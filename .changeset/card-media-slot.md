---
"@ebay/ebayui-core": minor
"@evo-web/marko": patch
---

Add a generic `@media` attribute tag to `ebay-card` for arbitrary media content (e.g. `<video>`). When present it renders in place of `@image`, which is now optional. Also apply the `card__hero-image` class to the card image in both Marko packages so it fills the media slot — skin defines the image sizing, hover transform, and horizontal/full-hero overrides on that class.
