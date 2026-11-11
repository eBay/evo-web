---
"@ebay/ebayui-core": patch
"@ebay/ui-core-react": minor
"@evo-web/marko": minor
"@evo-web/react": minor
---

feat(tooltip,infotip,tourtip): add a `strategy` option to the evo-marko, evo-react and ebayui-core-react tips (`"absolute"` default, or `"fixed"`). Use `"fixed"` when a scrolling or `overflow: hidden` ancestor clips the overlay.

fix(ebay-listbox-button,ebay-menu-button,ebay-fake-menu-button,ebay-combobox,ebay-date-textbox): set the overlay's position from a passed `strategy`, so it matches what floating-ui computes.

fix(ebay-tooltip,ebay-infotip,ebay-tourtip): declare `strategy` in `marko-tag.json`.

fix(evo-listbox-button,evo-menu-button,evo-fake-menu-button,evo-date-input,evo-date-range-input): compute the overlay position with the `absolute` strategy by default, matching the overlay's CSS.
