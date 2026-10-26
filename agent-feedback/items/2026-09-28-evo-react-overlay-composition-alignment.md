---
type: dx
impact: med
effort: med
site: packages/evo-react/src/tooltip/tooltip-content.tsx › EvoTooltipContent; packages/evo-react/src/infotip/infotip.tsx › EvoInfotip
---

# Decide whether evo-react tooltip and infotip adopt the tourtip Overlay/Content composition

`EvoTourtip` now composes as `Host` + `Overlay > (Content, Footer)`. `EvoTooltipContent` is still the overlay itself, and `EvoInfotip` renders its host, overlay and close button from the root. So "Content" means different things across the three components. Open decisions: (1) should tooltip adopt `Overlay > Content` even though it has no close button or footer; (2) should infotip keep a root-owned host and add only `Overlay > Content`, or introduce `EvoInfotipHost`. Each change breaks the public API of an experimental package, so do each in its own PR with a changeset. Checked evo-react only; evo-marko uses attribute tags and is not affected.

Check: compare the exports in `packages/evo-react/src/tourtip/index.ts`, `packages/evo-react/src/tooltip/index.ts`, and `packages/evo-react/src/infotip/index.ts`.
