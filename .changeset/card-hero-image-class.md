---
"@ebay/ebayui-core": patch
"@evo-web/marko": patch
---

Apply the `card__hero-image` class to the card image so it fills the media slot. Skin defines the image sizing (`height`/`width: 100%`, `object-fit: cover`), the hover transform, and the horizontal/full-hero overrides on that class, none of which applied to the bare `<img>` the card rendered.
