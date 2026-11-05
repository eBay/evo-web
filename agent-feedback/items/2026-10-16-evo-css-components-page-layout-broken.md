---
type: bug
impact: low
effort: low
site: src/routes/_index/evo-css-components+page.marko › page layout
---

# Fix the broken-looking layout on the Evo CSS components page

Reported by the user on 2026-10-16 while reviewing the #1045 branch: http://localhost:3000/evo-css-components "looks a bit broken". In a dark-theme screenshot at 2000px wide, the hero buttons render correctly. What looks off: the "About Evo CSS" heading sits flush against the bottom of the card above it, the "Getting Started with Evo CSS" card touches the "About" card with no gap, and the "Skin adheres to the following core principals" list renders as plain unstyled lines. The cause is not diagnosed. The only change to this file on the branch is the two button class renames (`fake-btn` to `link-button`), so the spacing problem may predate #1045 or come from other site styles modified on the branch (for example `src/tags/site-header/style.scss`). Other evo-*-components pages were not compared. Only the Skin-side site was checked, no framework package is involved.

Check: run `npm start`, open http://localhost:3000/evo-css-components, and compare the gaps between the cards. Then run `git stash` on a clean checkout of `main` (or open the deployed site) to see whether the same page shows the same spacing.
