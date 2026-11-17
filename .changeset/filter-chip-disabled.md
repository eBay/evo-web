---
"@ebay/skin": patch
"@evo-web/marko": patch
"@evo-web/react": patch
---

Add disabled state styles to filter-chip (default, selected, anchor, expressive and menu). evo-marko and evo-react filter chips use `aria-pressed` instead of `aria-selected` for their selected state, matching Skin.
