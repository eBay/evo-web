---
type: dx
impact: med
effort: low
site: packages/skin/.storybook/custom-styles.css › .font-large
---

# Remove the shared Skin Storybook stylesheet

`packages/skin/.storybook/preview.js` imports `custom-styles.css` into every Skin story, so `detect-changed-components` treats any edit to it as global and runs the full Percy suite (~1,035 snapshots), even when the rule only styles one story's demo markup. Its only rule, `.font-large`, is used only by `packages/skin/src/sass/snackbar-dialog/stories/font-size.stories.js`. Move that style into the story (an inline `style`, as other Skin stories already do) and delete the file and its import, so that story-specific CSS has nowhere shared to go and every `.storybook/` change really does affect all stories. Skin only. The removal edits `preview.js`, so it runs the full suite once.

Check: commit a rule such as `.demo-only li { color: red; }` to `custom-styles.css` and run `detect-changed-components` with `base-branch` set to the parent commit; `components` is `all`.
