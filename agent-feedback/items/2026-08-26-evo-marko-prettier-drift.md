---
type: dx
impact: med
effort: low
site: packages/evo-marko/package.json › lint
---

# evo-marko sources fail `prettier --check` with the installed prettier

Running `npx prettier --check src/tags/evo-infotip/index.marko` (or most other `.marko` files) inside `packages/evo-marko` with the repo's installed prettier 3.8.1 + prettier-plugin-marko reports formatting drift: the tools now emit 2-space indentation and extra parens (e.g. `class=((styles as any).grid)`), while the committed sources use 4-space indentation. Any agent that runs `prettier --write` on an untouched file produces a large formatting-only diff, and the package `lint` script's `prettier . --check` cannot currently pass. Either reformat the package in one dedicated commit or pin the prettier/plugin versions that match the committed style.

Check: `cd packages/evo-marko && npx prettier --check src/tags/evo-infotip/index.marko` exits non-zero without any local changes.
