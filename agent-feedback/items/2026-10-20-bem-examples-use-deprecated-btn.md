---
type: cleanup
impact: low
effort: low
site: CLAUDE.md › css_methodology and correctness_guards; packages/skin/STYLEGUIDE.md › BEM rules
---

# Update the BEM examples that still use the deprecated `btn` names

On 2026-10-20 the `btn`, `icon-btn`, `cta-btn` and `expand-btn` classes were deprecated in favor of `button`, `icon-button`, `cta-button` and `expand-button` (changeset `calm-links-navigate.md`, PR #1070). The BEM examples that agents and contributors read still teach the old names: CLAUDE.md lines 76 to 78 and 133 to 136 (`.btn`, `.btn__cell`, `.btn--primary`, `.btn-primary`), and STYLEGUIDE.md lines 12 to 15 (`.btn--green`, `btn btn--sec`, `.btn--large.btn--primary`, `.btn--large`). A session that follows them writes deprecated markup.

Check: `grep -nE '(icon-|cta-)?btn\b' CLAUDE.md packages/skin/STYLEGUIDE.md | grep -v fake-btn` returns nothing once the examples use `button`.
