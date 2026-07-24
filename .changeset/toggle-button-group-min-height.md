---
"@ebay/skin": patch
---

fix(toggle-button, toggle-button-group): correct minimal layout min-height to 48px

`--toggle-button-height-min` was set to 72px, the same value as
`--toggle-button-width-min`, causing the default (minimal) layout to
render at a 72px min-height instead of the design spec's 48px. The
variable now reflects the correct height for the minimal layout,
independent of the width floor.
