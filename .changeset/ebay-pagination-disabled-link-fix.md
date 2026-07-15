---
"@ebay/ebayui-core": patch
"@ebay/ui-core-react": patch
---

fix(ebay-pagination): disabled prev/next links no longer navigate when clicked

When a `previous` or `next` pagination item has an `href` (link variant) and is marked `disabled`, the rendered `<a>` element no longer includes the `href` attribute. The click handlers also now call `event.preventDefault()` when `aria-disabled` is set, providing defense-in-depth against navigation in both the Marko and React implementations.
