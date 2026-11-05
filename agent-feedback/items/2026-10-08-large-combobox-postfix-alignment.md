---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/combobox/combobox.scss › .combobox__control button.icon-btn
---

# Center the postfix action in a large combobox

The new Evo React `inputSize="large"` uses Skin's 48px input height, but Skin fixes the actionable postfix icon button at 38px high and `top: 1px`. The button sits near the top rather than the center of a large input. The Skin rule and Evo React postfix path were checked; the Marko and legacy framework combinations were not. Add Skin coverage for the large input with an actionable postfix before changing framework positioning.

Check: open the Evo React `form-input-evocombobox--postfix` story with `--args 'inputSize:large'` and compare the input and button `getBoundingClientRect()` vertical centers; the button center is above the input center.
