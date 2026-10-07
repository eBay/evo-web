---
"@evo-web/marko": patch
---

Add `<evo-section-title>`, migrated from ebayui-core's `<ebay-section-title>`, without an info slot. The title must now be provided with `<@title>`, and the `href` and `ctaText` attributes are replaced by a `<@cta>` attribute tag that renders an `<a>`.
