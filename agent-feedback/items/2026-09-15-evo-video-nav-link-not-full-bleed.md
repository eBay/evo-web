---
type: bug
impact: med
effort: low
site: packages/skin/src/sass/video/video.scss › .video__nav
---

# Make the video nav link actually overlay the media

`.video__nav` is documented (site CSS tab, "Overlays") as a full-bleed overlay
link, but it is only `display: block; height: 100%` on a statically positioned
sibling of the `<video>`, so it stacks below the media instead of covering it.
In `evo-video` (`packages/evo-marko/src/tags/evo-video/index.marko`, the
`<if=nav>` anchor) that means the clickable region sits over the bottom half of
the player and overflows the `.video` box. It likely needs
`position: absolute; inset: 0` like `.video__overlay`. Checked in `skin` and
`evo-marko`; `ebayui-core`'s `.video-player--with-nav` is a separate,
unaffected component.

Check: render `evo-video` with a `@nav` attr tag and compare bounding boxes —
in `packages/evo-marko/src/tags/evo-video/test/test.browser.ts` ("given a nav
link"), `a.video__nav` reports `top` at half the `.video` height with computed
`position: static`, rather than `top: 0` over the media.
