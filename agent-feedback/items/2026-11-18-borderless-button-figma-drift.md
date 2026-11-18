---
type: bug
impact: med
effort: low
site: packages/skin/src/sass/button/button.scss › `button.button--borderless`
---

# Borderless button drifts from the Figma Evo button (v3.2)

The Figma Evo Button (cta-button v3.2, Level: Borderless, Size: Small) is padded `6px 8px`, uses a 6px icon gap and shows a state layer on hover. Skin's `button.button--borderless.button--small` renders with padding `0 16px` (`button.button--small` overrides the borderless `padding-left: 0`), an 8px icon gap from `icon-base`, and `text-decoration: underline` on hover with no state layer. Any component that uses the real Evo borderless button (for example the Calendar V2 footer "Today" action) cannot match its Figma spec without local overrides.

Check: in Skin Storybook `Skin/Calendar/V2 › Day View`, inspect the "Today" button: computed `padding` is `0px 16px`, the icon's `margin-inline-end` is `8px`, and hover underlines the text. Compare with Figma node 356029:21983 in the Evo library branch `ncBEmLo8vJbAwias7GaWdH`.
