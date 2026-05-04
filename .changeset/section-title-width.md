---
"@ebay/skin": patch
---

fix(section-title): remove arbitrary 75% max-width on title container

The `.section-title__title-container` was capped at `max-width: 75%`, which
caused unnecessary text wrapping on narrow viewports and on titles without
a trailing CTA. The Playbook spec is to let the title flow naturally and
rely on margin to maintain separation from a trailing CTA / overflow / info
element.

The `max-width` cap is replaced with `margin-inline-end: var(--spacing-300)`,
matching the spacing token used by sibling elements.
