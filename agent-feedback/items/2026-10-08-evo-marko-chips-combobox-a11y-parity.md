---
type: a11y
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-chips-combobox/index.marko › `<evo-chips-combobox>`
---

# Align evo-marko chips combobox delete labels, list name, and required with evo-react

On `main`, `<evo-chips-combobox>` sets each delete button's `a11yText` to `${a11yDeleteButtonText} ${chip}`, while `<evo-chip>` also points `aria-describedby` at the chip text, so screen readers hear the value twice. Its `<ul class="chips-combobox__items">` has no accessible name, unlike the Skin example. `required` reaches the input through `...comboboxInput`, so a form with chips but an empty input fails validation. `evo-react` `EvoChipsCombobox` passes the action-only label, names the list with `a11ySelectedItemsText` (default `"Selected items"`), and omits `required`; mirror those in Marko. Only `evo-marko` and `evo-react` were checked.

Check: `git show main:packages/evo-marko/src/tags/evo-chips-combobox/index.marko | grep -n 'a11yText=\|<ul'` and `git show main:packages/evo-marko/src/tags/evo-chip/index.marko | grep -n aria-describedby`.
