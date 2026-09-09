---
type: dx
impact: med
effort: med
site: package.json (root) › npm run build
---

# Root `npm run build` fails lint on pre-existing, unrelated files; `packages/skin build` also rewrites all `dist/*.css` with unrelated formatting diffs

Running `npm run build` from repo root on a clean checkout of `main` (no source edits besides `src/data/icons.json`) fails at the `lint` step in both `@evo-web/marko` (207 files flagged by Prettier, e.g. `src/tags/evo-select/index.marko`, `src/tags/evo-tooltip/index.marko`) and `@evo-web/react` (4 files: `src/calendar/types.ts`, `src/fake-menu/types.ts`, `src/filter-chip/types.ts`, `src/menu/types.ts`). None of these files were touched by the task in progress. Separately, running `cd packages/skin && npm run build` rewrites every file under `packages/skin/dist/*.css` with non-trivial diffs (rule reordering, blank-line removal) even when no `.scss` source changed — this looks like a cssnano/PostCSS version or config drift between the committed `dist/` output and the current toolchain. Both make it impossible to tell whether a real build/lint regression was introduced by a change, since the baseline itself doesn't pass clean.

Check: `git checkout main && npm run build` — observe the `@evo-web/marko` and `@evo-web/react` workspaces fail their `lint` script on files unrelated to any in-progress change. Separately, `cd packages/skin && npm run build && git diff --stat dist/` on an unmodified checkout shows widespread `dist/*.css` diffs.
