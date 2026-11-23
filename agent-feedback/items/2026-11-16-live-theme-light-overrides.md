---
type: bug
impact: med
effort: low
site: packages/skin/src/tokens/evo-live-dark-class.scss > .evo-theme-live
---

# Scope Live dark tokens to the dark color scheme

The website imports `evo-live-dark-class` after `evo-live-light-class` in `src/routes/_index/+layout.style.scss`. The dark class is unconditional, so its state-layer and data-visualization overrides replace the light variants even when `prefers-color-scheme: light` matches. The upstream Live base palettes are currently identical; their dark primary background is not itself evidence of a defect. Check whether the Skin dark overrides need the same media scoping as `evo-dark-class`. This was verified in Skin and the website; framework package behavior was not checked.

Check: add `.evo-theme-live` to the website body, emulate light and dark color schemes, and inspect `--color-data-viz-chart-secondary`. Both currently resolve the dark override, `--color-blue-300`, although the light class specifies `--color-blue-700`.
