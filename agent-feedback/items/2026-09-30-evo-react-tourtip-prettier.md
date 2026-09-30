---
type: dx
impact: med
effort: low
site: packages/evo-react/src/tourtip/tourtip.tsx › Tourtip
---

# Format evo-react's tourtip so the root build's lint passes

`src/tourtip/tourtip.tsx` and `src/tourtip/types.ts` fail evo-react's
`prettier --check`, so `npm run lint` exits non-zero on `main` and the root
`npm run build`, which runs lint first, stops before building or testing any
package. Running `prettier --write` on the two files fixes it; a pre-commit
format check on evo-react would stop it recurring. Reaches evo-react only.

Check: `npm run lint -w packages/evo-react` on `main` reports both files.
