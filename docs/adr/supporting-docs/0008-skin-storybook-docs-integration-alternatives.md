# Alternatives Considered and Rejected — Skin Storybook / Docs Site Integration

**Date:** 2026-10-06
**Status:** Reference document for anticipated review pushback
**Related:** [ADR 0008](../0008-skin-storybook-docs-integration.md) (the accepted decision this
document supports), [GitHub issue #1051](https://github.com/eBay/evo-web/issues/1051) (pain points)

## Purpose

This document exists to get ahead of review pushback. The approach we built — `src/data/story-markup.ts`
reading every Skin `.stories.js` file directly at build time via Vite's `import.meta.glob`, which a
reusable `<component-demo>` Marko tag reads to render live Storybook markup plus a "View in
Storybook ↗" link on docs pages — is not the only way to solve the drift/discoverability problem
described in issue #1051. Reviewers will reasonably propose alternatives, several of which we
considered (and in a few cases prototyped or partially built) before settling on the final design.

Each section below explains how the alternative would actually work, then gives the concrete,
evidence-backed reasons it loses to the approach we shipped. Where we have real data from building
this (not just theoretical reasoning), it's cited directly.

## Options Considered

1. Iframe embed of the running Storybook
2. Generated, committed JSON intermediary (reverted)
3. Keep hand-duplicated markup, add a CI drift-detection lint rule
4. Auto-generate the entire docs page from Storybook, not just the demo block
5. Reverse the direction — generate Storybook stories from the docs page
6. Use Storybook's own Docs addon (autodocs/MDX) as the documentation site
7. Static HTML snapshot export at build time, fetched by the docs page

---

## 1. Iframe Embed

### How it would work

Each docs page demo embeds Storybook's own already-running page directly:

```html
<iframe
  src="{skinStorybookUrl}/iframe.html?id={storybookId}&viewMode=story"
  title="Badge — empty"
></iframe>
```

Storybook ships an `iframe.html` entry point specifically designed for this (it's how Storybook's
own "Docs" tab and most third-party embeds work). The docs page would need zero knowledge of the
story's actual markup — Storybook renders it live, inside the iframe, at request time.

### Why it loses

- **Breaks docs-page styling and theming context entirely.** An iframe is a fully separate
  document with its own CSS cascade. The docs site's theme switcher, dark-mode toggle, and RTL
  controls — all of which this project's own design doc lists as requirements the demo must honor
  — cannot reach into an iframe's contents without extra cross-frame messaging infrastructure that
  doesn't exist today and that Storybook doesn't provide out of the box. The demo would either need
  to duplicate theme state into the iframe's URL (fragile, another thing to keep in sync) or simply
  not respond to the docs site's own theme controls at all.
- **Iframe load performance compounds badly at scale.** A single docs page frequently shows 4-8
  variants (Badge alone shows 6). Each iframe spins up a separate instance of Storybook's preview
  runtime — separate JS bundle parse, separate CSS load, separate DOM — multiplied by however many
  demos are on the page. Across ~80+ components this is a real, measurable page-weight and
  time-to-interactive cost that a plain HTML string never incurs.
- **Accessibility tooling breaks across the frame boundary.** Screen readers and the docs site's
  own a11y tooling (this repo explicitly requires testing "with assistive technologies" per
  CLAUDE.md) treat iframe content as a separate document. A demo meant to be inspected in place —
  read its DOM structure, check ARIA attributes, verify focus order relative to the surrounding
  page — becomes meaningfully harder to audit once it's sealed inside a cross-origin-like boundary.
- **This was the explicit non-goal from day one, not a late rejection.** The original design
  doc's Goal section states directly: "No iframe embedding on the docs site." This was settled
  before any implementation work began, specifically because of the styling/theming problem above
  — it is not a corner we're cutting for convenience, it's a known-bad trade confirmed before
  writing a line of code.

---

## 2. Generated, Committed JSON Intermediary

### How it would work

A build-time extraction script reads every Skin `.stories.js` file and writes a committed JSON
artifact, which the docs site statically imports instead of reading the story files directly —
the same "package generates, site consumes a committed file" pattern `src/data/icons.json` already
uses.

### Why it's unnecessary

This was tried and reverted. Its main justification — avoiding recomputation on every request —
doesn't apply, since the site is a static build (`marko-run build -o ./_site`) with no per-request
server. The one genuinely nontrivial part, the `storybookId` slug computation, still has to run
somewhere either way; caching it to a file doesn't remove the need for the computation, and Vite's
`import.meta.glob(..., { eager: true })` (already used elsewhere in this codebase, e.g.
`src/data/components.ts`) reads the `.stories.js` files directly at build time just as reliably,
with no file to generate or keep in sync.

---

## 3. Keep Hand-Duplicated Markup, Add a CI Drift-Detection Lint Rule

### How it would work

Leave `css+page.marko`'s hand-written demo markup exactly as it is today. Add a CI check that,
for each docs page, extracts the corresponding Storybook story's markup and textually diffs it
against the hand-written copy, failing the build if they don't match byte-for-byte (or
structurally, via some HTML-aware comparison).

### Why it loses

- **This still requires building the exact same extraction mechanism we already built — it just
  uses it to police a duplicate instead of eliminating the duplicate.** Any such lint rule needs
  the same ability to read a story's real markup and its real Storybook ID that
  `src/data/story-markup.ts` already provides. All of the actual engineering work is identical; this
  alternative just adds a second copy of the markup back into the system and spends extra effort
  keeping them in forced lockstep, rather than spending that same effort once to delete the second
  copy outright.
- **Doesn't address the "wrong source of truth" misconception named directly in the originating
  issue.** Issue #1051 calls out that contributors reasonably but wrongly assume the docs page is
  authoritative. A passing CI check that says "these two copies currently match" does nothing to
  correct that mental model — a contributor can still edit the wrong one first, get a CI failure,
  and have to go copy the change into the other file by hand. The problem issue #1051 raises is
  conceptual (which file is real), and a lint rule is a mechanical patch over a conceptual problem.
- **A byte-for-byte or structural HTML diff is itself a fragile, high-maintenance artifact.**
  Formatting differences (attribute order, whitespace, quote style) that have zero visual or
  functional effect would cause false-positive CI failures, requiring either a brittle normalization
  step or constant tuning — ongoing maintenance cost for a check whose only job is to assert "these
  two things that shouldn't both exist are currently equal."

---

## 4. Auto-Generate the Entire Docs Page, Not Just the Demo Block

### How it would work

Instead of a `<component-demo>` tag embedded in a hand-authored `css+page.marko`, generate the
whole page — tab bar, heading, every variant, prose — directly from Storybook's metadata (titles,
exports, any JSDoc/comments in the story file), removing `css+page.marko` as a hand-authored
artifact entirely for the CSS tab.

### Why it loses

- **Destroys editorial curation that's a deliberate, load-bearing feature of the current docs
  site, not an oversight.** The chosen design's own stated goal is explicit: "Each component's
  `css+page.marko` continues to hand-pick which variants to show and in what order (unchanged
  editorial control)." Badge's real Storybook has 6 variants (`empty`, `oneDigit`, `twoDigits`,
  `threeDigits`, `RTL`, `textSpacing`); its docs page reasonably doesn't need to show all 6 in
  every context — a maintainer gets to decide what's most illustrative for a reader skimming docs,
  separate from what's useful for a Storybook user doing thorough visual regression / variant
  coverage. Auto-generating removes that judgment call entirely.
- **Confirmed directly by our own user feedback mid-build, not a hypothetical concern.** Early in
  this work we initially over-rendered every available Storybook variant for Badge's docs page.
  The explicit correction we received was: "We don't need all the storybook variants in the docs
  page... Just remove all the variants as this is just duplicating storybook. We don't need
  everything." A full-auto-generation design re-introduces exactly the behavior that was corrected
  — showing everything Storybook has, rather than what the docs page should curate.
- **Collapses two genuinely different audiences into one.** Storybook's audience wants exhaustive
  coverage (every variant, every edge case, interactive controls) for testing and visual regression.
  A docs-page reader wants a concise, representative illustration of the component's typical use.
  Auto-generating the whole page from Storybook metadata optimizes for the first audience at the
  expense of the second.

---

## 5. Reverse the Direction — Generate Storybook Stories from the Docs Page

### How it would work

Treat `css+page.marko`'s hand-authored markup as the real source of truth instead, and add a build
step that parses it and emits/updates the corresponding `.stories.js` file(s) to match.

### Why it loses

- **Gets the actual source of truth backwards relative to the rest of the toolchain.** Storybook
  stories are the thing that's visually regression-tested (Percy runs against Storybook, confirmed
  in `packages/skin/CONTRIBUTING.md`'s own Visual Regression Testing section), the thing
  `CONTRIBUTING.md` already requires for every new module ("Every module requires a page in
  storybook... RTL, Font-Size increase, Color inheritance"), and the thing a component's actual
  interactive variants are defined and tested against. Docs pages are additive, curated prose
  wrapped around a subset of that — making docs-page markup authoritative would mean the thing that
  drives Percy and a11y verification is now downstream of a page whose entire purpose is editorial
  selection, not canonical coverage.
- **Still has to solve every hard problem this project already solved, just in the opposite
  direction.** Parsing arbitrary Marko template markup out of `css+page.marko` and reverse-deriving
  a valid CSF2 story export (including generating/preserving stable Storybook IDs so existing
  `?path=/story/...` links don't break) is at least as hard as the forward direction we built, and
  loses the guarantee that Storybook's `title` strings are unique by construction (Storybook itself
  enforces this) — a guarantee the chosen design relies on directly to make variant keys
  collision-free.
- **Breaks the existing "every module requires a Storybook page" contribution requirement.** A
  contributor adding a new component today writes stories first, per `CONTRIBUTING.md`. Reversing
  the direction would mean either maintaining two different workflows (stories-first for some
  components, docs-first for others) or rewriting that already-established contribution
  requirement — a much larger, unrelated process change to take on as a side effect of this project.

---

## 6. Use Storybook's Own Docs Addon (autodocs/MDX) as the Documentation Site

### How it would work

Lean on Storybook's built-in `autodocs`/MDX documentation generation (a standard Storybook feature)
to produce component documentation pages, and either link out to those or replace the Marko-Run
docs site's CSS tab with Storybook's own Docs view entirely.

### Why it loses

- **Requires replacing or deeply modifying a whole separate, already-existing site, not adding
  one feature to it.** The current docs site (`src/routes/_index/components/*`) is a purpose-built
  Marko-Run application covering Overview, Accessibility, CSS, and links out to three different
  Storybooks (CSS, Marko, React) plus the Design System Playbook per component — a structure this
  project's own design doc lists as an explicit non-goal to change ("Changing Storybook itself, its
  story format, or its deploy/nesting mechanism" is out of scope). Adopting Storybook's Docs addon
  as the documentation mechanism would mean rebuilding or abandoning that entire existing
  information architecture, not a scoped drift fix.
- **Only solves this for the CSS/Skin layer, same scoping limit as our chosen design, but with
  far higher cost to get there.** This project is explicitly scoped to Skin only, since "Skin
  stories are uniquely simple (plain functions returning HTML strings, no framework/args/
  decorators)" per the design doc. Marko and React Storybooks are real framework components with
  args, decorators, and interactive controls — Storybook's autodocs output for those looks
  completely different from Skin's plain HTML stories, meaning a Storybook-Docs-addon-based
  solution would need three different documentation generation strategies (one per framework
  Storybook) to achieve what our single extraction mechanism already achieves for the one Storybook
  that actually needed it.
- **Loses the deliberate, already-shipped design of linking to Storybook rather than reimplementing
  it.** Our chosen design already gets everything autodocs would offer — Controls, the a11y panel,
  backgrounds, viewport switching — via the "View in Storybook ↗" link, without taking on the cost
  of making the docs site itself understand or render any of those panels. Autodocs doesn't unlock
  new capability our design lacks; it just relocates where that capability lives, at a much higher
  integration cost.

---

## 7. Static HTML Snapshot Export at Build Time (via Playwright/Storybook Test Runner)

### How it would work

Add a build step that boots a running Storybook instance, uses something like
`@storybook/test-runner` or raw Playwright to visit each story's URL, and saves the rendered DOM
output as a static `.html` file per variant. The docs page then `fetch`s or statically includes
that file instead of calling an extraction function directly.

### Why it loses

- **Massively higher build cost and fragility for no corresponding benefit, given Skin stories'
  actual shape.** Skin's stories are, by design, plain zero-argument functions that return a
  hardcoded HTML string (confirmed directly in every real `.stories.js` file inspected this
  session, e.g. `badge.stories.js`'s `export const empty = () => \`<span class="badge"></span>\`;`)
  — there is no interactivity, no client-side rendering, no framework runtime involved in producing
  that markup. Spinning up a real browser, booting a Storybook instance, and visiting a live page
  per variant to capture what is ultimately a static string literal is enormous overhead to recover
  information that's already sitting in the source file, retrievable with a plain `import()`.
- **Introduces a new, heavy dependency chain (headless browser automation) into a build step that
  today has none.** The chosen design's extraction needs nothing beyond Vite's static
  `import.meta.glob` import — no browser, no server, no network round-trip. A browser-automation-based snapshot
  step adds real CI time, flakiness risk (headless browser timing issues, port conflicts — the kind
  of real-world problem we already hit once this session with Storybook's own dev server port
  assignment), and a whole new class of "why did the build fail" failure modes for a problem that
  doesn't require a browser to solve.
- **Still doesn't solve the Storybook-ID problem either.** This approach still needs a separate
  mechanism to compute each story's `storybookId` for the "View in Storybook ↗" link, since a
  rendered DOM snapshot doesn't carry that metadata. It adds an entire browser-automation pipeline
  on top of the extraction logic we'd still need to write anyway — strictly more moving parts for
  the same end result.

---

## Summary

Every alternative above either (a) re-solves a problem we already solved more cheaply, (b)
reintroduces the exact drift/duplication/authority confusion issue #1051 exists to eliminate, or
(c) requires a materially larger, riskier change to ship (a new documentation architecture, a
browser-automation pipeline, a reversed and harder-to-maintain source-of-truth direction, an
unnecessary generated file) for no corresponding gain over the direct-read + reusable-tag approach
we built. Several of these — the iframe approach, and the directory-vs-title keying question
underlying option 5 — were not hypothetical either; we hit real, concrete versions of these exact
trade-offs while building this and have the verification data to show which way each one actually
broke.
