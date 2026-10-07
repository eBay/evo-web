# 8. Skin Storybook Docs Integration

**Date:** 2026-10-06

## Status

Accepted

## Context

Skin component docs pages (`src/routes/_index/components/*/css+page.marko`) hand-duplicated demo
HTML for each variant directly in the page template — a second, manually-maintained copy of markup
that already exists in that component's Storybook stories. These copies had no mechanism keeping
them in sync, Storybook (not the docs page) is the thing actually authored, tested, and visually
regression-tested (Percy), and a docs-page reader had no way to discover that a fuller interactive
Storybook (Controls, a11y panel, backgrounds, viewport) existed for that component at all. See
[GitHub issue #1051](https://github.com/eBay/evo-web/issues/1051) for the full pain-point writeup.

Several other approaches were considered — an iframe embed, importing `.stories.js` files directly
at build/request time, a CI drift-detection lint rule instead of removing the duplication,
auto-generating the whole docs page from Storybook, reversing direction to generate stories from
docs pages, adopting Storybook's own Docs addon, and a browser-automation static-snapshot export.
Each was rejected for a concrete reason (broken theming/a11y across an iframe boundary, no
reduction in actual engineering work, reintroducing the same drift problem, loss of editorial
curation, reversing an already-established stories-first contribution workflow, a much larger
unscoped site-architecture change, or unjustified build cost and fragility). The detailed case
against each is in
[`skin-storybook-docs-integration-alternatives.md`](./skin-storybook-docs-integration-alternatives.md)
in this same folder.

## Decision

Storybook story markup is the single source of truth for Skin docs-page demos. A build-time
extraction script (`packages/skin/scripts/storybook/extract-story-markup.ts`) reads every Skin
`.stories.js` file and writes a committed JSON artifact (`src/data/story-markup.json`, regenerated
via `npm run build:story-markup -w packages/skin` and kept current automatically while
`npm run storybook -w packages/skin` is running), the same "package generates, site consumes a
committed file" pattern already established by `src/data/icons.json`.

A single reusable Marko tag, `<component-demo component="x" variant="y"/>`, reads that data to
render the story's live markup, a matching code sample, and a "View in Storybook ↗" link to that
exact story — so a docs page author writes one line per variant with no imports, no hand-copied
HTML, and no separate Storybook URL to maintain. The full interactive Storybook experience is
reached via that link-out, not reimplemented on the docs site.

## Consequences

Docs pages can no longer silently drift from Storybook — a stale or mistyped `component`/`variant`
reference fails the site build immediately instead of rendering quietly-wrong markup. Adding a demo
to a docs page is now a one-line tag rather than a hand-authored markup block plus a separate
code-sample block. Only the Badge docs page has been converted so far; converting the remaining
Skin components is deferred, ongoing work, tracked incrementally rather than as a single cutover.
