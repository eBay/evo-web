---
type: bug
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-video/index.marko › audioOff
---

# Track the marko intersection-collapse staleness pinned upstream

The stale `audioOff` icon branch (fixed locally by hoisting the const to the
template top level) is marko-js/marko's `getCollapsibleIntersectionSource`
collapse bug, not a conditional-placement issue: a `<const>` intersection with
a never-assigned member (`muted`) collapses onto its single live source
(`volume`), and a branch chain reading both the const and that source renders
against the stale const when only the source is written. Minimal repro and
regression fixture live upstream as
`packages/runtime-tags/src/__tests__/fixtures/intersection-collapse-deferred-member`
(marko-js/marko), whose snapshots capture the incorrect output. When the
upstream fix lands, the hoist workaround here can stay (it is also cleaner).

Check: move the `audioOff` const back inside the audio `<if>` branch and run
`npx vitest run --root packages/evo-marko src/tags/evo-video` — the "switches
the audio icon" test fails until the upstream fix lands.
