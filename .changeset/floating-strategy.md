---
"@ebay/ebayui-core": patch
"@ebay/ui-core-react": minor
"@evo-web/marko": minor
"@evo-web/react": minor
---

feat(ebay-tooltip,ebay-infotip,ebay-tourtip): add a `strategy` prop to the ebayui-core-react tips (`"absolute"` default, or `"fixed"`). Use `"fixed"` when a scrolling or `overflow: hidden` ancestor clips the overlay.

feat(evo-tooltip,evo-infotip,evo-tourtip): add a `detachPopover` option to the evo-marko and evo-react tips. Use it when a scrolling or `overflow: hidden` ancestor clips the overlay.

BREAKING: in evo-marko and evo-react, `strategy` is replaced by `detachPopover` on listbox-button, menu-button, fake-menu-button, combobox, date-input and date-range-input. Replace `strategy="fixed"` with `detachPopover`, and remove `strategy="absolute"`. evo-react's `ComboboxStrategy` type is removed.

fix(ebay-listbox-button,ebay-menu-button,ebay-fake-menu-button,ebay-combobox,ebay-date-textbox): set the overlay's position from a passed `strategy`, so it matches what floating-ui computes.

fix(ebay-tooltip,ebay-infotip,ebay-tourtip): declare `strategy` in `marko-tag.json`.

fix(evo-listbox-button,evo-menu-button,evo-fake-menu-button,evo-date-input,evo-date-range-input): position the overlay against its container by default, matching the overlay's CSS.
