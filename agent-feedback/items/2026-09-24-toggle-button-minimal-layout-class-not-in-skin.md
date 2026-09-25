---
type: cleanup
impact: low
effort: low
site: packages/evo-react/src/toggle-button/toggle-button.tsx › EvoToggleButton
---

# Decide whether toggle buttons should emit the nonexistent `toggle-button--minimal-layout` class

Skin has no `toggle-button--minimal-layout` rule. Its minimal layout is the bare `toggle-button` class. `ebayui-core-react` and `evo-react` still emit the modifier by default, while evo-marko emits it only when `layoutType` is passed explicitly. The class does nothing in the CSS, but consumers may select on it (Hyrum's law). So either drop it from both evo packages and note that in the migration doc, or document it as intentional. Checked: skin, ebayui-core-react, evo-marko, evo-react.

Check: `grep -n minimal packages/skin/src/sass/toggle-button/toggle-button.scss` returns nothing; compare `layoutType` class handling in `packages/evo-marko/src/tags/evo-toggle-button/index.marko` and `packages/evo-react/src/toggle-button/toggle-button.tsx`.
