---
type: unclear
impact: low
effort: low
site: packages/skin/src/sass/typography/typography.scss › .emphasis-text, .negative-text
---

# .emphasis-text and .negative-text resolve to the identical color declaration

Both classes are defined as `color: var(--color-foreground-attention)` with no other distinguishing declaration, so they are visually and functionally identical. Now that both are documented side-by-side on the Typography CSS docs page (added in issue #935), a component author has no way to tell from the docs which one to actually reach for, since nothing differentiates them semantically or visually. Direction: either document the intended semantic distinction between the two class names directly above them in `typography.scss` (e.g. "`.negative-text` for validation/error states, `.emphasis-text` for general callouts" or similar), or deprecate one in favor of the other if there's truly no distinction, following the repo's icon/major-version deprecation pattern.

Check: read `packages/skin/src/sass/typography/typography.scss` lines 48–54 — both rules are single-declaration and byte-identical (`color: var(--color-foreground-attention);`).
