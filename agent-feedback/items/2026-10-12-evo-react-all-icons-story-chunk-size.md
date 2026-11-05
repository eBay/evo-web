---
type: perf
impact: low
effort: med
site: packages/evo-react/scripts/import-svg.ts › AllIcons
---

# Reduce the generated AllIcons story chunk

The `AllIcons` story statically imports every generated icon component, so the `evo-react` Storybook build emits a dedicated 2,767.35 kB minified chunk (about 495 kB gzip) and warns that it exceeds the chunk-size threshold. This affects loading the icon-gallery story, not the published component runtime, but makes that Storybook view expensive to open. Consider loading visible gallery entries on demand or splitting the complete set into independently loadable sections. I checked only the `evo-react` Storybook; no other component package is included.

Check: `npm run build:storybook -w packages/evo-react` reports the oversized `icon.stories-*.js` chunk.
