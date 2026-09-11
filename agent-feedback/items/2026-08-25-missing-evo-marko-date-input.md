---
type: dx
impact: med
effort: high
site: packages/evo-marko/src/tags › evo-date-input
---

# Add an evo-marko date-input tag

`@evo-web/react` now ships `EvoDateInput` and `EvoDateRangeInput`. Marko 6 still has no `evo-date-input` tag; the only implementation is Marko 5 `ebay-date-textbox`. Apps on evo-marko cannot share the new Input-aligned API, and a later Marko migration will have to catch up to the React split.

Check: `ls packages/evo-marko/src/tags | rg 'date-input|date-textbox'`
