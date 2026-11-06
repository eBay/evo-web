---
type: cleanup
impact: low
effort: high
site: packages/evo-marko/src/tags/evo-carousel/index.marko › <define/Paddle>
---

# Let controls outside `evo-carousel` page it and mirror its paddle state

`<define/Paddle>` reads `atStart`, `atEnd` and `page` from the template's own
scope and nothing exposes them, so only the built-in paddles can drive the
carousel. Design may yet move the paddles above or below it. The blocker is
Marko rather than the carousel: markup can read a tag variable during render
only if it comes after the tag, so buttons above the carousel cannot read its
state from a `<return>`. Four shapes were built or sketched and turned down on
2026-10-13: bindable `atStart`/`atEnd` (a parent could set them), change
handlers (the consumer mirrors the state through effects), slots with tag
parameters (the carousel decides where controls go), and a logic-only helper
tag. Revisit once design settles where paddles go, or once Marko can read a tag
variable above its tag. Reaches evo-marko only.

Check: `grep -n '<return\|atStart?' packages/evo-marko/src/tags/evo-carousel/index.marko`
prints nothing.
