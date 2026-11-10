---
type: cleanup
impact: low
effort: low
site: packages/skin/src/sass/tooltip/tooltip.scss › .tooltip__host[aria-expanded="true"] ~ .tooltip__overlay
---

# Remove the tooltip `aria-expanded` overlay selector in the next major

No tooltip component sets `aria-expanded` on the host anymore. All four now use `.tooltip--expanded`, so this selector only matches markup that adds the attribute itself. Removing it is a breaking change, so it has to wait for a major.

Check: `grep -rn 'aria-expanded' packages/skin/src/sass/tooltip/tooltip.scss`
