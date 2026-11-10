---
source: correction
disposition: open
---

# Only JSDoc the a11y text props on evo-marko `Input`

While sketching a new `evo-button` API, the agent read the comment policy's exemption ("JSDoc for consumers of a published API (`evo-react` props, `evo-marko` `Input`)") as permission to document every input, and added JSDoc to `priority`, `truncate`, `expand` and others. The maintainer corrected it: "Look at other components, we don't JSDoc our inputs! Read our comment policy". Across `packages/evo-marko/src/tags/*/index.marko`, JSDoc on `Input` is used for clipped / a11y text props; plain styling and behavior inputs carry none. The exemption allows JSDoc there; it does not ask for it, and the repo's practice is the default-to-no-comment rule.

Disposition: open — maintainer, raised 2026-11-06 (candidate: reword the `<comment_policy>` exemption in `CLAUDE.md` to name a11y text props only)
