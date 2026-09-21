---
type: dx
impact: high
effort: med
site: packages/evo-marko/src/tags/evo-input/index.marko › <input value:=value>
---

# Fix SSR-mode Marko compile crash blocking all server tests that render evo-input

With the locked `marko@6.3.48`, the vitest `|server|` project fails to compile
`evo-input/index.marko` with `TypeError: Cannot read properties of null
(reading 'isExpressionStatement')` in the translator's `translateVar` (via
`marko-vite:pre`). The same template compiles fine for the browser project, so
this looks like an html-output translator regression around the native
`<input value:=value>` two-way binding. Every server test that renders
`evo-input` directly or indirectly (`evo-date-input`, `evo-date-range-input`)
fails at compile time before any assertion runs. Likely fixes: bump/pin marko
to a version without the regression, or report upstream and patch. Only
`evo-marko` is affected; `evo-react` and `ebayui-core` were not checked for
this and use different pipelines.

Check: `npx vitest run --browser.headless src/tags/evo-input/test/test.server.ts` in `packages/evo-marko` crashes with the TypeError above on an unmodified checkout.
