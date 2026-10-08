---
type: bug
impact: med
effort: med
site: packages/evo-react/src/chips-combobox/chips-combobox.tsx › EvoChipsCombobox
---

# Position the chips combobox popup below the entire control

The Evo React listbox uses the input as its Floating UI reference. The outer `.chips-combobox` has bottom padding, so the popup begins inside that padding instead of below the control. Skin, legacy Marko and legacy React use the outer control as the dropdown host; Evo React was checked in Storybook. A fix needs a chips-specific positioning host rather than moving the shared EvoCombobox reference to its inner wrapper, which ends at the same height as the input.

Check: open `form-input-evochipscombobox--default` in Evo React Storybook, click the combobox, and compare `document.querySelector('.chips-combobox').getBoundingClientRect().bottom` with `document.querySelector('[role=listbox]').getBoundingClientRect().top`; the latter starts above the former.
