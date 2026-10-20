---
type: dx
impact: med
effort: low
site: packages/skin/scripts/copy-master-icons.ts › src/tags/master-icons.marko
---

# Make the generated `master-icons.marko` match what the root pre-commit Prettier writes

`copy:svgToDocs` writes `src/tags/master-icons.marko` with multi-line `<path>` attributes, but the root `lint-staged` rule (`prettier --write` with `prettier-plugin-marko`) collapses them, so any commit touching the file reformats all of it (about 2400 changed lines for a 14-icon add). Icon PRs either carry that noise or commit with `--no-verify`. Format the file with the root Prettier config at the end of the generator, or add it to `.prettierignore`, so the generator and the hook agree.

Check: `npm run copy:svgToDocs -w @ebay/skin && npx prettier --check src/tags/master-icons.marko` reports a style issue on a clean tree.
