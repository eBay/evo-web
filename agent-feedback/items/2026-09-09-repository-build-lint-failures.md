---
type: dx
impact: med
effort: low
site: packages/ebayui-core/package.json › lint:whitespace
---

# Keep repository-wide build inputs formatted

The repository build is blocked before component validation by tracked changelog formatting: `packages/ebayui-core/CHANGELOG.md` contains trailing spaces, while `packages/evo-marko/CHANGELOG.md` fails its Prettier check. Clean the affected changelogs or adjust the lint ownership so unrelated formatting debt does not obscure component CI results. This spans `ebayui-core` and `evo-marko`; the `evo-react` package build was not the failing job.

Check: `npm run build:ci` fails in `packages/ebayui-core` on `lint:whitespace` and in `packages/evo-marko` on `prettier --check`.
