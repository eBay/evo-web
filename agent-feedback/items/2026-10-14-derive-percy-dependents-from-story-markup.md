---
type: bug
impact: med
effort: med
site: .github/actions/detect-changed-components/index.mts › main
---

# Find the stories a Skin CSS change affects from their markup, not `submodules`

`detect-changed-components` snapshots a changed component's own stories plus those of every component whose `submodules` in `src/data/component-metadata.json` lists it. Those lists are kept by hand and miss components that stories render. Button stories render `icon`, Menu renders `btn`, Field renders `switch`, Table renders `cta-btn`, `select`, `textbox` and `icon`, and Infotip renders `lightbox-dialog`, but none of these components list them. A change to a rendered component skips the stories that render it, so their visual changes go unreviewed. Derive each story's dependencies from the BEM block classes in its markup so they can't drift, or audit `submodules` against the stories until then. The same gap is why `mixins/` and `variables/` stay in `GLOBAL_PATHS` and run the full suite. Skin only; the other packages have no Percy runs.

Check: commit a change to only `packages/skin/dist/switch/switch.css` and run the action with `base-branch` set to the parent commit; `components` is `^Skin/(?:Switch)(?:/|: )`, without Field, though `packages/skin/src/sass/field/stories/` renders `.switch`.
