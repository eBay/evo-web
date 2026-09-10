---
type: dx
impact: low
effort: low
site: packages/evo-react/src/icon/icons/types.ts › generated icon sources
---

# Exclude generated icon sources from the package formatting check

The package-wide Prettier check includes generated files under `src/icon/icons/**`, although those files are intentionally not hand-edited and the directory is not consistently formatted. This makes the documented final formatting command fail even when all changed hand-written files pass. Exclude generated icon sources from the check or format them in the icon generation pipeline.

Check: `npm exec prettier -- --check packages/evo-react/src packages/evo-react/.storybook/main.js` reports code style issues in 110 files under `packages/evo-react/src/icon/icons/`.
