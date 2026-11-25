---
"@ebay/ebayui-core": minor
"@ebay/ui-core-react": minor
"@evo-web/marko": minor
"@evo-web/react": minor
---

number-input: render `<input type="text" inputmode="numeric" role="spinbutton">` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` instead of `type="number"` with `min`/`max`, so typed characters that aren't part of a whole number (such as a trailing period) are dropped. ArrowUp/ArrowDown still step the value, and Home/End now jump to the min/max when set. The input's DOM `value` is unchanged, but code that selects `input[type="number"]` or relies on native `min`/`max` validation needs updating.
