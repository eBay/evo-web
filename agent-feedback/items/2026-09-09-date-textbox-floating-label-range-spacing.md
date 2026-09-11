---
type: bug
impact: med
effort: low
site: packages/skin/src/sass/date-textbox/date-textbox.scss › `.date-textbox`
---

# Space date range fields with floating labels

Skin spaces adjacent `.textbox` children in a date range, but `EvoInput` wraps inputs with `.floating-label` when `floatingLabel` is set, so two floating-label date fields render without the intended gap. Add an adjacent `.floating-label` rule using a logical margin so the gap works in both LTR and RTL, then add Skin Storybook coverage for the floating-label range structure. This affects `evo-react` now and should be inherited by the future `evo-marko` date-input implementation; `evo-marko` currently has no date-input component.

Check: Render `packages/evo-react/src/date-range-input/date-range-input.stories.tsx` with both floating labels and inspect the computed spacing between the two direct `.floating-label` children of `.date-textbox`; Skin currently applies no adjacent-child margin to them.
