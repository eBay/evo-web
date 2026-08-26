---
type: dx
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-ccd/test/test.server.ts › ccd renders with custom units
---

# Align the CCD role assertion and snapshot

The component renders `role="img"`, but the custom-units server snapshot still expects `role="figure"`. Confirm the intended accessible role, then update either the component contract or the stale snapshot rather than accepting contradictory coverage.

Check: Run `npm run test:server -w packages/evo-marko -- src/tags/evo-ccd/test/test.server.ts`.
