---
type: a11y
impact: low
effort: med
site: packages/skin/src/sass/star-rating-select/star-rating-select.scss › .star-rating-select__control--filled
---

# Derive star-rating-select lower-star fill from CSS instead of a JS-set class

Skin fills the checked star through `:checked`, but every star below it fills only through the `star-rating-select__control--filled` class, which frameworks set from JS state (`EvoStarRatingSelect` in `packages/evo-react/src/star-rating-select/star-rating-select.tsx`). Before hydration, or if JS fails, choosing 4 stars fills only star 4, so the visual rating contradicts the selected value. A CSS-only rule (for example `.star-rating-select:has(input:checked)` combined with a following-sibling reset) would make the fill match native state and let frameworks drop the class. Checked in skin and evo-react; ebayui-core, evo-marko and ebayui-core-react use the same class and are likely affected.

Check: render `renderToString(<EvoStarRatingSelect a11yText="Rating" a11yStarText={["1","2","3","4","5"]} />)` into a page with Skin CSS and no JS, click the 4th radio, observe stars 1–3 stay unfilled.
