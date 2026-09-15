---
type: a11y
impact: low
effort: low
site: src/routes/_index/components/toggle-button-group/css+page.marko › first section-notice demo (~line 10-23)
---

# Docs page section-notice has mismatched aria-label vs its actual status

The first `section-notice` demo on the toggle-button-group docs page has
`class="section-notice section-notice--attention"` and an inner icon using
`attention-filled-16` with its own `aria-label="Attention"`, but the outer
`<section>` root carries `aria-label="Information"`. Screen reader users will
hear the region announced as "Information" while it visually and structurally
renders as an attention notice — a mismatched accessible name. Pre-existing;
confirmed present in `git show HEAD:src/routes/_index/components/toggle-button-group/css+page.marko`
before the icon-color-cascade fix (issue #957) touched only the stale
`icon--attention-filled-16` class name in this block, not the aria-label.
Docs-only, single file.

Check: `grep -n 'aria-label="Information"' src/routes/_index/components/toggle-button-group/css+page.marko | head -1` then read lines 10-23 — the section's own class/icon say attention, its aria-label says Information.
