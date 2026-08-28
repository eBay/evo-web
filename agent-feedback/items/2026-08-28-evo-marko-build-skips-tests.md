---
type: dx
impact: high
effort: low
site: packages/evo-marko/package.json › scripts.build
---

# Run evo-marko's tests from its build script so they cannot regress unnoticed

`@evo-web/marko`'s `build` is `mtc` alone, while every other package's build
also runs its tests — `ebayui-core`'s build fans out to `mtc`, `lint`,
`check-postpublish` and `npm test`, and `evo-react` / `ebayui-core-react` run
theirs too. Root `build` only invokes `npm run build -w packages/evo-marko`,
and there is no separate CI test job, so `npm test -w packages/evo-marko`
never executes in CI and failing tests have shipped behind green `build`
checks. Mirror `ebayui-core`'s pattern so `build` covers `mtc` plus
`npm test`.

Check: `npm run build -w packages/evo-marko` passes while
`npm test -w packages/evo-marko` fails (per the open test-baseline items).
