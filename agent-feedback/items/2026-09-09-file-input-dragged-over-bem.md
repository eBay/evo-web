---
type: cleanup
impact: low
effort: med
site: packages/skin/src/sass/file-input/file-input.scss › .file-input___container--dragged-over
---

# Normalize the file input dragged-over modifier

The dragged-over class uses three underscores instead of the repository's BEM element syntax. The same spelling is coupled across Skin, its static story, ebayui-core, evo-marko, ebayui-core-react, evo-react, and framework tests, so correcting it requires a coordinated change rather than an editorial-docs fix.

Check: `rg -n 'file-input___container--dragged-over' packages/skin packages/ebayui-core packages/evo-marko packages/ebayui-core-react packages/evo-react --glob '!**/dist/**'`
