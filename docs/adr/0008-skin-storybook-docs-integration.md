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

Several other approaches were considered — an iframe embed, a CI drift-detection lint rule instead
of removing the duplication, auto-generating the whole docs page from Storybook, reversing
direction to generate stories from docs pages, adopting Storybook's own Docs addon, and a
browser-automation static-snapshot export. Each was rejected for a concrete reason (broken
theming/a11y across an iframe boundary, reintroducing the same drift problem, loss of editorial
curation, reversing an already-established stories-first contribution workflow, a much larger
unscoped site-architecture change, or unjustified build cost and fragility). The detailed case
against each is in
[`supporting-docs/0008-skin-storybook-docs-integration-alternatives.md`](./supporting-docs/0008-skin-storybook-docs-integration-alternatives.md).

A committed, generated JSON intermediary between the `.stories.js` files and the docs site was also
tried and found unnecessary — see
[`supporting-docs/0008-skin-storybook-docs-integration-alternatives.md`, section 2](./supporting-docs/0008-skin-storybook-docs-integration-alternatives.md#2-generated-committed-json-intermediary).

## Decision

Storybook story markup is the single source of truth for Skin docs-page demos. `src/data/story-markup.ts`
reads every Skin `.stories.js` file directly at build time via Vite's `import.meta.glob(..., { eager: true })`
— the same mechanism `src/data/components.ts` already uses to eagerly import route templates. There
is no generated file: editing a story picks up through Vite's own dev-server reload, and in a
deployed build the data is computed once, during that build.

A single reusable Marko tag, `<component-demo component="x" variant="y"/>`, reads that data to
render the story's live markup, a matching code sample, and a "View in Storybook ↗" link to that
exact story — so a docs page author writes one line per variant with no imports, no hand-copied
HTML, and no separate Storybook URL to maintain. The full interactive Storybook experience is
reached via that link-out, not reimplemented on the docs site.

## Consequences

Docs pages can no longer silently drift from Storybook — a stale or mistyped `component`/`variant`
reference fails the site build immediately instead of rendering quietly-wrong markup. Adding a demo
to a docs page is now a one-line tag rather than a hand-authored markup block plus a separate
code-sample block. There is no generated artifact to keep in sync or regenerate — the data is
always current with whatever `.stories.js` files exist on disk. Only the Badge, Signal, and Dialog
docs pages have been converted so far; converting the remaining Skin components is deferred,
ongoing work, tracked incrementally rather than as a single cutover.
