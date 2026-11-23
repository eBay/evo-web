---
type: bug
impact: low
effort: low
site: src/routes/_index/main.js › MENU BUTTON
---

# Make the docs menu demos respect disabled items and reverse alignment

`makeup-menu` dispatches `makeup-menu-select` and toggles `aria-checked` for items
that have `aria-disabled="true"`, so the existing `.menu` and `.menu-button` demos
act on disabled items. Separately, `PopperDropdown` positioned every overlay with
`bottom-start`, so `.menu-button__menu--reverse` demos (split button, section
title) opened start-aligned once positioned. The new `.menu-button` demos guard
both: they ignore disabled items and pass `bottom-end` for reversed dropdowns. The
older `.menu`, `.menu-button` and `.fake-menu-button` blocks were left as they were.
Only the docs site was checked; the Marko and React components were not.

Check: on `/components/menu/css`, click the disabled "Item 3" and watch the console
log a `makeup-menu-select` event; on `/components/menu-button/css`, open a reversed
example and compare its right edge with the trigger's.
