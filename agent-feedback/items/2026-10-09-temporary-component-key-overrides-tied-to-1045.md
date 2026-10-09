---
type: cleanup
impact: low
effort: low
site: src/data/story-markup.ts › TEMPORARY_COMPONENT_KEY_OVERRIDES
---

# Update or remove TEMPORARY_COMPONENT_KEY_OVERRIDES once issue #1045 lands

`TEMPORARY_COMPONENT_KEY_OVERRIDES` carves `fake-button` and `fake-tabs` (nested
under `button/stories/fake-button/` and `tabs/stories/fake-tabs/`) into their own
component keys, even though their stories physically live inside Button's and Tabs'
own `stories/` folders. It's a deliberate, short-term stand-in pending a structural
reorganization tracked in [GitHub issue #1045](https://github.com/eBay/evo-web/issues/1045),
whose exact end-state isn't decided yet. The map is duplicated identically in both
`src/data/story-markup.ts` and `packages/skin/scripts/storybook/extract-story-markup.ts`
(same deliberate duplication as the rest of those two files). Once #1045 lands, both
copies need to be updated or removed to match the real structure; don't treat the
current override as a permanent design decision.

This used to be documented in `packages/skin/CONTRIBUTING.md` under a "Known
temporary exception" section, removed as part of PR #1056 at a reviewer's request:
a contributor guide should document stable conventions, and nothing ties that
section's removal to the override actually being deleted from code, so it would
have gone stale. The override's own inline code comment already explains it
adequately without a parallel copy in CONTRIBUTING.md.

Check: `grep -n "TEMPORARY_COMPONENT_KEY_OVERRIDES" src/data/story-markup.ts packages/skin/scripts/storybook/extract-story-markup.ts`
