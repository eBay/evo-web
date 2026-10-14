---
type: bug
impact: med
effort: med
site: .github/actions/detect-changed-components/index.mts › getStoryTitlesForComponent
---

# Give Percy coverage to Skin CSS whose directory has no stories

`detect-changed-components` maps each changed `packages/skin/dist/<dir>/*.css` to stories under `packages/skin/src/sass/<dir>/`, and drops the directory with a warning when there are none. `drawer-dialog`, `fullscreen-dialog`, `typography`, `utility`, `page-grid` and `marketsans` have no Skin stories and nothing in `src/data/component-metadata.json` lists them as a submodule, so a change to their CSS gets no Percy snapshots at all, and a PR touching only them skips Percy and reports success. Either add Skin stories for them, or map each to the stories that render it (for example through `submodules`). Skin only; the framework packages have no Percy runs.

Check: `git diff` a PR that changes only `packages/skin/dist/fullscreen-dialog/fullscreen-dialog.css`, run the action with `base-branch` set to its base, and observe `components` is `""`.
