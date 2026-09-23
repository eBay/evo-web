---
type: cleanup
impact: low
effort: low
site: packages/skin/src/sass/number-input/number-input.scss › .number-input--show-delete
---

# Remove duplicate number-input delete-state rules

The adjacent `.number-input--show-delete .number-input__delete` and `.number-input--show-delete .number-input__decrement` rule pair appears twice with identical declarations. Remove one pair to keep the Skin source and generated CSS smaller and prevent future edits from changing only one copy. Checked Skin only; the duplication flows into `packages/skin/dist/number-input/number-input.css` during builds.

Check: `rg -n 'number-input--show-delete' packages/skin/src/sass/number-input/number-input.scss` reports each selector twice.
