---
type: bug
impact: med
effort: med
site: .github/actions/detect-changed-components/index.mts › getStoryTitlesForComponent
---

# Give Percy coverage to Skin CSS that no story renders

No Skin story renders the classes from `drawer-dialog`, `fullscreen-dialog`, `typography` or `page-grid`, so Percy never captures them. `detect-changed-components` drops these directories with a warning, and a PR touching only them skips Percy and reports success. Add Skin stories for them so their changes are snapshotted like any other component. Skin only; the framework packages have no Percy runs.

Check: `git diff` a PR that changes only `packages/skin/dist/fullscreen-dialog/fullscreen-dialog.css`, run the action with `base-branch` set to its base, and observe `components` is `""`.
