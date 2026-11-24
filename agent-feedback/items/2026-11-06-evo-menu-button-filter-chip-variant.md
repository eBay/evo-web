---
type: bug
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-menu-button/index.marko › <${tagName}> variant
---

# Pass a variant evo-filter-chip accepts from evo-menu-button

With `variant="filter"`, `evo-menu-button` renders `evo-filter-chip` with `variant="filter"`, but the chip only handles `"default" | "expressive" | "menu"`; the `${tagName as any}` dynamic tag hides the mismatch. So the chip renders none of its variant branches, including the `"menu"` one that sets its own `aria-expanded` and chevron. Direction: pass `variant="menu"` and `open`, and drop menu-button's own filter chevron if the chip draws one.

Check: render the filter story under `buttons/evo-menu-button` and compare the chip's markup with `evo-filter-chip variant="menu"`.
