---
type: cleanup
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-tourtip/index.marko › tourtip__close button
---

# Render the evo-marko tourtip close button with evo-icon-button

`evo-tourtip` builds its close button by hand as `<button class="icon-btn icon-btn--transparent tourtip__close">`. `evo-infotip` and `evo-dialog` use `<evo-icon-button transparent>` for the same job. The evo-react tourtip now uses `EvoIconButton`. Switching the Marko version keeps icon-button behavior and styles in one place. Checked evo-marko and evo-react only; skin markup is unaffected.

Check: `grep -n "tourtip__close\|infotip__close" -B2 -A2 packages/evo-marko/src/tags/evo-tourtip/index.marko packages/evo-marko/src/tags/evo-infotip/index.marko`
