---
type: dx
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-icon/test/test.server.ts › icon renders icon inline type
---

# Fix the evo-icon server snapshot whitespace mismatch

Three snapshots (`renders icon inline type with title text`, `renders icon inline type without title text`, `renders icon no-skin-classes`) fail on a whitespace-only diff inside a stringified function body embedded in the rendered markup: the snapshot expects `() => {\n    }` but the current pretty-printer emits `() => {}`. This reproduces on a clean checkout with no other changes, so it is a pre-existing formatting drift in the SSR snapshot pretty-printer (`prettyNormalizedDOM`), not a real rendering regression. Regenerate the snapshot or pin the pretty-printer's function-body formatting so the suite stops failing for unrelated changes.

Check: `cd packages/evo-marko && npx vitest run --browser.headless src/tags/evo-icon/test/test.server.ts` on a clean `main` checkout.
