---
"@ebay/skin": patch
"@evo-web/marko": patch
"@evo-web/react": patch
---

Add disabled state styles to filter-chip (default, selected, anchor, expressive and menu). The hover, focus and pressed state layer no longer applies to disabled anchors (no `href`, or `aria-disabled="true"`) in any component. evo-marko and evo-react filter chips use `aria-pressed` instead of `aria-selected` for their selected state, matching Skin.
