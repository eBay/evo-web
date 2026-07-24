---
"@ebay/skin": patch
---

fix(icon-button): remove unwashed border ring on hover/focus/active

The base (borderless) `icon-btn`/`icon-link` variant reserves a
transparent 2px border for consistent sizing across variants, and the
button's own `background-color` paints straight through it via the
default `background-clip: border-box`. The hover/focus/active
state-layer wash, however, was inset to the padding edge, leaving a
thin ring of unwashed background color visible around the edge on
hover, focus, and active states.

Extends the wash to cover the full border-box and sets `overflow:
visible` (the state-layer mixin's `overflow: hidden` was clipping the
wash back to the padding edge regardless of its own positioning).
Variants with a visible border (primary/secondary/tertiary) are
unaffected — their border remains crisp and unwashed as before.
