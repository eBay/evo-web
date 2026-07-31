# Theming Guide Page — Design

**Issue:** [#625](https://github.com/eBay/evo-web/issues/625)
**Branch:** `625-add-theme-page`
**Scope:** Pass 1 only — a dedicated theming documentation page. Passes 2 (theme creator tool) and 3 (apply/session-storage) are explicitly out of scope; see below.

**Status:** Revised for direct implementation — all blockers investigated and resolved. No guesswork should be required to build this from the spec alone. See Revision log at the end for what changed since the first draft.

## Context

The site currently has no dedicated page explaining how to theme or sub-theme
Evo Web. Related content is scattered on the Tokens (CSS) page
(`/components/tokens/css`): the "Evo Live Theme" and "Subthemes" sections
live there, mixed in with the core token reference material.

A site-wide theme switcher (Evo / Evo Live) already exists in the header
(`src/tags/site-header/tags/theme-switcher`), toggling a `.evo-theme-live`
class on `<body>` and persisting the choice to `localStorage` under
`evo-web-theme`. This is a useful existing mechanism to be aware of for a
future pass, but pass 1 does not touch it.

The "Guides" section (`/guides`) already hosts audience-neutral,
cross-cutting how-to content (`page-grid`, `skeleton`, `animation`), each a
standalone flat route (`name+page.marko` / `name+meta.json`) manually linked
from the guides landing page and the mobile nav's "Guides" tab. There is no
central registry for guides (unlike Components, which has
`component-metadata.json`).

Audience: eBay-internal and external open-source consumers should be served
equally by one shared page — no content differs between them, only tone
(avoid eBay-insider assumptions/jargon).

### Known adjacent IA problem (explicitly deferred)

`component-metadata.json` has at least 7 entries with no Marko/React
Storybook — i.e. not real interactive widgets, but foundational/utility CSS
concepts miscategorized as "components": `tokens`, `typography`,
`marketsans`, `sass`, `utility`, `global`, `page-grid`. This is a real,
systemic Components-vs-Foundations taxonomy gap, not unique to Tokens.

Fixing it is out of scope for this pass:

- It's a separate, larger initiative — narrowing it to just `tokens` would
  leave the other ~6 entries inconsistently categorized.
- Relocating `/components/tokens` is a URL-breaking change for external
  consumers (bookmarks, search indexing, external links), and this repo has
  no redirect mechanism today (no `vercel.json`, `_redirects`, or rewrite
  config found).
- It should be tracked as its own follow-up issue with its own design pass
  (new taxonomy name, redirect plan, decide whether all ~7 entries move
  together).

## Location

**`/guides/theming`** — a new route sibling to the existing `page-grid`,
`skeleton`, and `animation` guides.

Rejected alternatives:

- `/components/tokens/theming` — nests a system-level customization guide
  inside the Components section, which is metadata-driven and framed around
  consuming individual built widgets, not customizing the whole system.
  Fights the existing architecture.
- New top-level nav item (`/theming`) — maximum discoverability, but the
  largest footprint (new desktop + mobile nav entries) and disproportionate
  IA weight for a first pass.

`/guides/theming` reuses the existing flat-route pattern with the smallest
footprint of nav changes, and Guides is already the correct
audience-neutral, cross-cutting category for this content.

## Routing

New files, following the exact pattern of `animation+page.marko` /
`animation+meta.json`:

- `src/routes/_index/guides/theming+page.marko`
- `src/routes/_index/guides/theming+meta.json`

## Token-Doc Tag Resolution (blocker — resolved)

The Theming guide needs to render `<token-doc type="semantic"/>` (and, per
the Current Themes section below, `<token-doc type="live"/>`). The
`token-doc` tag currently lives at
`src/routes/_index/components/tokens/tags/token-doc/`, which is **not**
resolvable from `src/routes/_index/guides/theming+page.marko`.

**Why:** this site has no `marko.json` (only the library packages
`packages/evo-marko` and `packages/ebayui-core` have one, for a different
purpose). Custom tags are resolved by Marko's filesystem convention: for a
tag `<foo-bar>`, the compiler walks upward from the consuming file's
directory through each ancestor directory looking for a `tags/foo-bar/`
(or `foo-bar.marko`) folder. `src/tags/` sits directly under the common
ancestor `src/`, which is why tags like `search`, `section-header`,
`highlight-code`, `component-banner-img`, `a11y-docs-list`, and
`breadcrumbs` — all defined under `src/tags/` — are usable from any route
under `src/routes/_index/...`. This is confirmed empirically: those tags
are used across many unrelated route subdirectories.
`components/tokens/tags/token-doc`, by contrast, is only an ancestor of
files inside `components/tokens/` itself (`tokens/+page.marko`,
`tokens/css+page.marko`) — walking up from `guides/theming+page.marko`
never passes through `components/tokens/`, so the tag is invisible there
today.

**Chosen approach: promote `token-doc` to `src/tags/token-doc/`.**

Rejected alternatives:

- Explicit import in `theming+page.marko` — Marko 6 supports importing a
  `.marko` file directly and using it via dynamic tag syntax
  (`<${TokenDoc}/>`), but no other tag in this codebase is consumed that
  way; every shared tag is a plain kebab-case tag resolved by the
  filesystem convention. Introducing the one-off dynamic-tag pattern here
  would be inconsistent with the rest of the site for no benefit over
  just promoting the tag.
- Link to `#tokens-color-semantic` on the Tokens page instead of
  duplicating — rejected because the explicit, confirmed requirement is to
  copy the semantic tokens table onto the new page (render the actual
  `<token-doc>` output there), not merely link out to it.

Promoting the tag also gives the Current Themes / Evo Live section access
to `<token-doc type="live"/>` for free (see Implementation Details below),
and matches the existing convention that genuinely cross-cutting docs tags
belong in `src/tags/`, not nested under one route's private `tags/` folder.

### Exact steps

1. Move the entire directory (all 5 files as a unit, no content edits
   needed — internal relative imports like `./token-doc.json` and
   `./style.module.scss` stay valid since the files move together):

   ```
   src/routes/_index/components/tokens/tags/token-doc/index.marko
   src/routes/_index/components/tokens/tags/token-doc/style.module.scss
   src/routes/_index/components/tokens/tags/token-doc/style.module.scss.d.ts
   src/routes/_index/components/tokens/tags/token-doc/token-doc.d.ts
   src/routes/_index/components/tokens/tags/token-doc/token-doc.json
   ```

   → to:

   ```
   src/tags/token-doc/index.marko
   src/tags/token-doc/style.module.scss
   src/tags/token-doc/style.module.scss.d.ts
   src/tags/token-doc/token-doc.d.ts
   src/tags/token-doc/token-doc.json
   ```

   Note: `style.module.scss.d.ts` is header-stamped
   `Generated by vite-css-modules` — per this repo's convention, don't
   hand-edit it; just move it as-is and it will regenerate correctly on
   the next build if it drifts. `token-doc.d.ts` has no such stamp (it's a
   hand-authored declaration for the JSON import shape) — move it as-is
   too, no edits needed.

2. Delete the now-empty
   `src/routes/_index/components/tokens/tags/` directory.

3. No changes needed to the existing `<token-doc type="..."/>` usages in
   `tokens/css+page.marko` — `src/` is still an ancestor of that file too,
   so resolution continues to work after the move.

## Page Content Structure

Mapped from the issue's proposed IA to what actually exists in the codebase
today.

### Theming (how to build a theme)

- Overview: theming = overriding the semantic token layer to reskin all
  components without touching component code.
- Semantic Color Tokens table — **copied** into this page via
  `<token-doc type="semantic"/>` (now resolvable per the section above),
  framed as "the contract you override." Carry over the existing note from
  the Tokens page ("To see the different theme colors, use the theme
  switcher"). The full token reference (core/primitive/expressive tables)
  stays on the Tokens page; this is deliberately a duplicated view of just
  the semantic table, scoped to this page's purpose.
- Building a theme — this repo actually has two distinct audiences and
  mechanisms, confirmed by reading
  `packages/skin/src/tokens/evo-light.scss`,
  `evo-live-light.scss`, and `evo-live-dark.scss`:
  - **Skin/theme authors** (contributors building a new official theme
    shipped inside the `@ebay/skin` package, the way Evo Live was built):
    `@use` a base mixin from `@ebay/design-tokens/dist/mixins/<name>`,
    `@include` it under `:root` (light) or a
    `@media (prefers-color-scheme: dark)`-gated `:root` block (dark), then
    layer selective custom-property overrides on top — exactly the
    pattern in `evo-live-light.scss` / `evo-live-dark.scss` (which
    themselves build on `evo-light.scss`'s structure). Show a trimmed
    version of `evo-live-light.scss` as the worked example.
  - **App consumers** (internal eBay teams or OSS consumers reskinning
    their own app, not publishing a new official theme): import the
    existing token submodules (e.g. `@ebay/skin/tokens/evo-core`) as the
    foundation, then override the semantic `--color-*` (and other
    semantic-prefixed) custom properties directly in their own CSS/SCSS,
    scoped to `:root` (global) or a class (see Sub-theming below) — no
    dependency on `@ebay/design-tokens` mixins at all. This is the primary
    path most readers will use.
  - Both bullets must state the same constraint: override at the
    **semantic** layer (the tokens shown in the table above), never the
    primitive/core layer.
- Accessibility note: contrast and light/dark mode testing expectations,
  consistent with the site's existing a11y guardrails.

### Sub-theming (how to scope a theme to part of a page)

- Migrated from the Tokens page's "Subthemes" section, reframed generically
  (scoping _any_ theme via a class, not Evo-Live-specific) — same demo,
  same `.evo-theme` / `.evo-theme-live` example, same
  `@ebay/skin/evo-class` / `@ebay/skin/evo-live-class` bundle explanation.
- **Preserve the accuracy limitation** currently stated on the Tokens page
  ("Note, this example only works on default evo theme") — reframe to fit
  the generalized framing, e.g.: "The live demo above only demonstrates
  swapping in the Evo Live subtheme; the same `.evo-theme`-style scoping
  pattern applies to any theme you build, but only Evo Live ships a
  ready-made class bundle today." Do not drop this caveat — it's a real,
  current limitation, not boilerplate.

### Current Themes

- **Evo** (default): brief pointer + link back to the Tokens page (the
  default token import instructions stay there).
- **Evo Live**: import instructions migrated from the Tokens page
  (`evo-core`, `evo-live-light`, `evo-live-dark` submodules, bundled
  `@ebay/skin/evo-live` module), followed by `<token-doc type="live"/>` to
  show Evo Live's actual semantic values. This works today with **zero**
  generation work: `token-doc.json` (moving to `src/tags/token-doc/` per
  above) already contains a populated `"live"` array (72 entries, sourced
  from `evo-live-dark` — confirmed by reading the file), and
  `token-doc/index.marko`'s `Input` type already declares
  `type?: "core" | "expressive" | "semantic" | "live"`. No script needs to
  run for pass 1.

## Content Migration (Tokens page)

`src/routes/_index/components/tokens/css+page.marko`:

- **Remove:** "Evo Live Theme" section, "Subthemes" section (including the
  live demo block).
- **Keep as-is:** "Evo Tokens" intro (default core/light/dark import
  instructions), "Semantic Color Tokens" table, "Core Expressive tokens",
  "Primitive Color Tokens" details block.
- **Add:** a short pointer + link to `/guides/theming` in place of the
  removed sections (e.g. "Looking to build your own theme or apply a
  subtheme? See the Theming Guide.").

## Nav & Cross-Link Changes

Three separate places currently hand-list the guides; all three need the
new entry (there is no central guides registry):

- `src/routes/_index/guides/+page.marko` (landing page): add a "Theming
  Guide" entry — heading, one-line description, link — matching the
  existing three entries' pattern.
- `src/tags/site-header/index.marko` mobile nav "Guides" tab (`tabs__panel`
  id `default-tabpanel-4`, the `examples-nav` list): add a link to the
  theming guide alongside page-grid/skeleton/animation.
- `src/routes/_index/sitemap+page.marko`: the `<nav aria-labelledby="sitemap-guides">`
  list (currently page-grid / skeleton / animation, lines ~100-118) needs a
  fourth `<li>` for the Theming Guide, in the same
  `` `${urls.guides}/theming` `` pattern as the other three.

No change to desktop primary nav structure — it's a single "Guides" link
today with no dropdown, so none is introduced.

## Implementation Details

- `theming+meta.json`:
  ```json
  {
    "pageTitle": "Skin CSS Theming Guide",
    "pageDescription": "Learn how to theme and sub-theme Evo Web: override the semantic token layer to build your own theme, scope a theme to part of a page, and see the themes shipped today (Evo, Evo Live)."
  }
  ```
  (Matches the naming style of `animation+meta.json`'s `"Skin CSS Animation
Guide"`.)
- Page wrapper: `<main class="theming-guide">`, matching the
  `page-grid-guide` / `skeleton-usage-guide` / `animation-guide` pattern
  used by the sibling guides.
- Suggested heading ids for anchor-linking, consistent with the existing
  `tokens-color-semantic` / `dialog-transitions` convention:
  `theming-overview`, `theming-semantic-tokens`, `building-a-theme`,
  `sub-theming`, `current-themes`, `current-themes-evo-live`.
- Use `<token-doc type="live"/>` in the Evo Live section of Current Themes
  (see above — already supported, already populated, no generation step
  needed for this pass).

## Token-Doc.json Maintenance (documented, not automated)

Investigated the generation pipeline in `packages/skin/scripts/tokens.ts`:
it reads from `@ebay/design-tokens/dist/css/*.css` and writes to
`packages/skin/src/components/token-doc.json` (via the `tsx scripts
tokens` command in `packages/skin`, wired up in
`packages/skin/scripts/index.ts`). That output path **does not currently
exist as a checked-in file** — `packages/skin/src/components/` isn't in
this repo today.

There is **no automated copy step** from that generated file into the
site's copy (now `src/tags/token-doc/token-doc.json`). Checked git history:
the site's copy has only ever been touched once, in the initial site-build
commit (`5a06196c11`) — it was manually copied in at that time and has
never been regenerated since.

**Document this plainly in the Theming guide's context (or a code
comment near the moved `token-doc.json`), so future token updates aren't
silently missed:** whoever updates design tokens must (1) run `tsx scripts
tokens` from `packages/skin` to regenerate
`packages/skin/src/components/token-doc.json`, then (2) manually copy that
file's contents into `src/tags/token-doc/token-doc.json`. This spec does
not change that process — it only relocates the consuming file — but pass
1's implementer should add a one-line comment or note (e.g. in this
design doc's follow-up list, or a short note in
`src/tags/token-doc/index.marko`) flagging that this manual sync exists,
since it's easy to miss and was previously undocumented anywhere in the
repo.

## Concrete File Checklist (implementation order)

1. Move `token-doc` tag directory:
   `src/routes/_index/components/tokens/tags/token-doc/*` →
   `src/tags/token-doc/*` (all 5 files, no content edits). Delete the
   emptied `src/routes/_index/components/tokens/tags/` directory.
2. Create `src/routes/_index/guides/theming+meta.json`.
3. Create `src/routes/_index/guides/theming+page.marko` (full content per
   "Page Content Structure" above).
4. Edit `src/routes/_index/components/tokens/css+page.marko` — remove
   "Evo Live Theme" and "Subthemes" sections, add the pointer/link to
   `/guides/theming`.
5. Edit `src/routes/_index/guides/+page.marko` — add the Theming Guide
   entry.
6. Edit `src/tags/site-header/index.marko` — add the mobile nav link in
   the Guides tab panel (`default-tabpanel-4`).
7. Edit `src/routes/_index/sitemap+page.marko` — add the Theming Guide
   `<li>` under `sitemap-guides`.
8. Run `npm run build`.
9. Manually verify in-browser: `/guides/theming` renders correctly
   (including both `<token-doc>` tables), the guides landing page, mobile
   nav Guides tab, and sitemap all link to it correctly, the migrated
   subtheme demo still functions, light/dark mode both look correct, and
   the trimmed Tokens page has no broken heading hierarchy or orphaned
   demo blocks.

## Explicitly Out of Scope

- **Theme Creator tool** (pass 2, per the issue) — lets users build a theme
  from semantic tokens or hex values. Needs its own brainstorming session
  once pass 1 ships.
- **Apply-theme / session-storage** (pass 3, per the issue) — lets a user
  apply a created theme to the live site, possibly via session storage.
  Needs its own brainstorming session once pass 2 is designed/shipped. Note
  for that future session: a site-wide theme-switching mechanism already
  exists (`src/tags/site-header/tags/theme-switcher`, `localStorage` key
  `evo-web-theme`) and is worth reviewing as prior art.
- **Components-vs-Foundations taxonomy fix** (tokens, typography, sass,
  marketsans, utility, global miscategorized under "Components") — real
  problem, deferred to its own follow-up issue and design pass.
- **Automating `token-doc.json` generation/sync** — the manual-copy gap
  documented above is a real, pre-existing issue not introduced by this
  work; fixing it (e.g. a build script that copies
  `packages/skin/src/components/token-doc.json` into
  `src/tags/token-doc/token-doc.json` automatically) is worth its own
  follow-up but isn't required to ship pass 1.

## Revision log

- **2026-07-30 (revision 2):** Revised for direct implementation per
  explicit request. Investigated and resolved the `token-doc` tag
  resolution blocker (promote to `src/tags/token-doc/`, with the Marko
  ancestor-directory-walk resolution rule confirmed empirically against
  other shared tags). Added the Sitemap page to Nav & Cross-Link Changes
  (a third hand-maintained guides list was missed in the first draft).
  Rewrote "Building a theme" with the two real, verified mechanisms
  (skin/theme-author mixins vs. app-consumer token overrides), grounded in
  `evo-light.scss` / `evo-live-light.scss` / `evo-live-dark.scss`.
  Restored the "only works on default evo theme" limitation to the
  Sub-theming migration instructions (previously implied but not stated
  explicitly enough to survive a rewrite). Documented the real
  `token-doc.json` generation/maintenance pipeline (manual, previously
  undocumented anywhere in the repo) and confirmed `type="live"` is
  already supported and populated, requiring no generation work for this
  pass. Added `theming+meta.json` content, the `<main class="theming-guide">`
  wrapper convention, and a concrete implementation-ordered file checklist.
- **2026-07-30 (revision 1):** Initial draft from the brainstorming
  session.
