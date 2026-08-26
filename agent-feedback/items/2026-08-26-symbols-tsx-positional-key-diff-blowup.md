---
type: dx
impact: high
effort: med
site: packages/ebayui-core-react/scripts/update-icons-helpers.js › saveSvgIcons (key={${key}} injection, ~line 179)
---

# Positional `key={N}` in generated symbols.tsx turns a single icon insertion into a full-file diff

`saveSvgIcons` assigns each `<symbol>` a sequential positional index (`key={0}`, `key={1}`, ...) over the full alphabetically-sorted icon list, then regenerates `packages/ebayui-core-react/src/ebay-svg/symbols.tsx` from scratch. Since icons are sorted alphabetically, inserting one new icon anywhere but the very end shifts every subsequent symbol's index by one — turning a single-icon addition into a full-file rewrite (in one observed case, adding `icon-affirm-*` produced 1146 insertions / 1138 deletions on a 1161-line file). This makes the file effectively impossible to code-review incrementally and, in an automation context (Local Conductor's QA agent diffing this file against `origin/main`), produced a diff large enough to blow past the model's context window outright (a real run measured 1.9M tokens against a 1M limit) — meaning any future icon-add PR touching a non-trailing alphabetical position risks the same failure for any tool that has to load the full diff, not just this one.

A stable identity (e.g. the icon's own `id`/name, or `key={props.id}` referencing something already unique per symbol) instead of a recomputed positional index would make insertions diff as pure additions, regardless of where they land alphabetically.

Check: on any branch adding a single icon whose alphabetical position isn't last, run `git diff --stat -- packages/ebayui-core-react/src/ebay-svg/symbols.tsx` — expect a diff spanning most of the file's line count rather than a handful of added lines.
