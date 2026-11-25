---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/file-input/file-input.scss › .file-input__content-subheader
---

# Check two color-contrast findings that are not disabled states

Axe reports `color-contrast` on 30 Skin stories outside the menu family. Nearly all are exempt or intentional: disabled controls (WCAG 1.4.3 exempts inactive components), the `cascade/color` stories that apply a deliberate test color, and `aria-hidden` decorative text. Two are not obviously exempt: File Input `draggedOver` (`.file-input__content-subheader`) and the Card disabled self-actionable link's `.card__description`. Confirm whether each is an inactive state; if not, fix the color token.

Check: run axe-core on `skin-file-input--dragged-over` and `skin-card-disabled--self-actionable-link` in Skin Storybook.
