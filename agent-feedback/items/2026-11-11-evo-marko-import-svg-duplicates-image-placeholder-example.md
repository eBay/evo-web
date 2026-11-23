---
type: bug
impact: low
effort: low
site: packages/evo-marko/scripts/import-svg.ts › generateExamples
---

# Reset the evo-image-placeholder examples file before `importSVG` regenerates it

`generateExamples` appends generated markup to the existing examples file instead of overwriting it. For `icon`, `setupDir("icon")` resets `evo-icon/examples/all.marko` first. The `setupDir("image-placeholder")` call is commented out, so each `npm run importSVG` appends another duplicate `evo-image-placeholder` block to `evo-image-placeholder/examples/all.marko`, and every icon PR has to revert that file by hand. Uncommenting `setupDir` is not a safe fix because it would also `rm -rf` the `evo-image-placeholder/tags` path and rewrite the file header. Instead, reset only the examples file to `div.icon-examples` before appending, or have `generateExamples` write the full file rather than append to it. Only evo-marko was checked; the ebayui-core `importSVG` run left its image-placeholder examples unchanged.

Check: `cd packages/evo-marko && npm run importSVG && git diff src/tags/evo-image-placeholder/examples/all.marko` shows a new duplicate `evo-image-placeholder` block, and each further run adds another one.
