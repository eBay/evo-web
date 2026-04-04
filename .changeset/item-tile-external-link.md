---
"@ebay/ui-core-react": minor
"@ebay/ebayui-core": minor
---

feat(item-tile): add a11yExternalLinkText prop to EbayFilePreviewCard and EbayItemTile

When `a11yExternalLinkText` (`a11y-external-link-text` in Marko) is provided, the anchor tag renders with `target="_blank"` and `rel="noopener noreferrer"`, and a visually-hidden `<span class="clipped">` containing the text is appended inside the anchor for screen reader accessibility.

Also fixes TypeScript typing on `EbayItemTileDescription` so the `as` prop accepts any element type (was limited to `<p>` element props).
