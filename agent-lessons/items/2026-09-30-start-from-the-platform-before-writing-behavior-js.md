---
source: correction
disposition: open
---

# Start a component from what the platform does natively, then add JS for the gaps

A carousel meant to "use new web standards" was rebuilt around a 390-line
behavior module (destination tracking, a reorder-based loop, observers) when
scroll snapping, `scroll-behavior`, `scrollBy` and `scrollend` already covered
most of it. The correction was: "This is a _lot_ of JS for a carousel that's
supposed to use new web standards, can you see what it looks like to remove as
much JS as you possibly can? Similar to our transformation to the native
`<dialog>` component". The second rewrite cut the JS by about 70%. Listing what
the platform provides first, as evo-dialog does with `<dialog>`, and marking
each remaining fallback, would have got there in one pass.

Disposition: open — repo maintainers (decide whether this becomes a
Component Development Flow step in CLAUDE.md), raised 2026-09-30
