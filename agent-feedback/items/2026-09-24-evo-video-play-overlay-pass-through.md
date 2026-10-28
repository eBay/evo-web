---
type: dx
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-video/index.marko › button.video__play-overlay
---

# Let consumers pass attributes through to evo-video's play overlay button

`Input` exposes pass-through `Marko.AttrTag` slots for `source`, `track`, `nav`
and `report`, but the play overlay button is built with a hardcoded `class`,
`type` and `aria-label` and no consumer spread, so nothing can be attached to
it. This blocks click tracking on the most-clicked control in the player:
`ebay-video` accepted arbitrary attributes for its play button, and Sonata's
`su-video` forwards a `playBtnHtmlAttributes` input into it for exactly that,
which has no destination when migrating to `evo-video`. It also reads against
the "support pass-through HTML attributes to root/control elements" rule in
`CLAUDE.md`. A `playButton?: Marko.AttrTag<Omit<Marko.HTML.Button, "aria-label">>`
slot spread onto the button, mirroring how `report` already works, would close
it. Only `evo-marko` is affected — `packages/evo-react` has no video component,
and `packages/skin`'s `video.scss` is styling only.

Note for whoever implements it: a dashed attribute on an attribute tag arrives
camelCased in the input (`<@report data-track="x"/>` renders `dataTrack="x"`,
since Marko camelCases custom-tag attributes and the spread then emits the key
verbatim), so a pass-through slot alone will not carry `data-*` tracking
attributes through unchanged.

Check: `npm run storybook -w packages/evo-marko`, open the evo-video Default
story and inspect the rendered `button.video__play-overlay` — it carries only
`class`, `type` and `aria-label`, with no route for a consumer attribute.
Contrast `@report`, whose attributes spread onto its own button.
