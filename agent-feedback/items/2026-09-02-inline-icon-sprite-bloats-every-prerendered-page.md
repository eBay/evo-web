---
type: perf
impact: high
effort: med
site: src/routes/_index/+layout.marko › <master-icons>
---

Every prerendered docs page inlines the full `<master-icons/>` SVG sprite (~2,200
`<path>` elements, roughly 1.2–1.7 MB of markup per page). Across the ~244
prerendered pages under `components/`, that is ~300 MB per site build — the
single largest contributor to gh-pages size, multiplied again by every open PR
preview. It also bloats every page load, since the sprite cannot be cached
across pages when it is part of each document.

Direction: serve the sprite as a single static SVG file and load it once
(fetch-and-inject on the client, as `@ebay/skin` docs do, or reference symbols
via external `<use href="/icons.svg#...">`), so pages carry only the icons they
reference — or nothing at all.

Check: `curl -s https://opensource.ebay.com/evo-web/components/icon/css.html | wc -c`
(~1.4 MB today; a page without the inlined sprite should be a few tens of KB).
