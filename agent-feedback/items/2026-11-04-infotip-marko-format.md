---
type: dx
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-infotip/index.marko › overlay span
---

# Format the Marko Infotip template before merging PR 1094

PR 1094's Marko Infotip template fails the package Prettier check and blocks the root build. This was observed at PR head `993b046fbee5272df3c5f564a31b9543729cdab0`, independently of the React heading-context cleanup. Run the existing formatter on the template and include that check before submitting template changes. Checked evo-marko and evo-react; no Skin or legacy package changes are implicated by this failure.

Check: `npm run build` reports `[warn] src/tags/evo-infotip/index.marko` and exits with code 1 during evo-marko lint.
