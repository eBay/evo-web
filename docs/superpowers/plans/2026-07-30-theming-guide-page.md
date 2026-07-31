# Theming Guide Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new `/guides/theming` documentation page covering how to build a theme, how to sub-theme, and what themes ship today — migrating the relevant content off the Tokens page and linking it in from every place guides are listed.

**Architecture:** Pure documentation-site change: new Marko route (`theming+page.marko` / `theming+meta.json`) under the existing flat `guides/` routing pattern, a shared-tag promotion (`token-doc`) so the new page can render token tables, trimmed content on the existing Tokens page, and three small nav-list edits (guides landing, mobile nav, sitemap) since this repo has no central guides registry.

**Tech Stack:** Marko 6 (marko-run file-based routing), SCSS/Skin design tokens, no framework-level state — this is static content.

**Spec:** `docs/superpowers/specs/2026-07-30-theming-guide-page-design.md`

## Global Constraints

- Issue: #625. Branch: `625-add-theme-page`.
- No changeset required — everything touched is docs (`src/routes/`) or a site nav tag (`src/tags/`), not a versioned package under `packages/`.
- No automated test suite covers `src/routes/` docs pages in this repo (confirmed: root `test` script is `npm run test --ws`, workspace/package tests only). Per this repo's own `CLAUDE.md`, verification for this kind of change is: `npm run build` passes, then manual in-browser check (dev server) of the golden path. Each task below substitutes "build + manual browser verification" for the automated test step the skill template otherwise expects.
- Never commit without being asked. The step-by-step task template below includes a "Commit" step per the writing-plans skill convention, but **do not run it automatically** — pause and get explicit go-ahead before each commit (see the Execution Handoff note delivered alongside this plan).
- `highlight-code`'s `Input.type` is a strict union: `"js" | "css" | "html" | "json"` — there is **no `"scss"` option**. Do not pass `type="scss"` anywhere (it fails the TypeScript build check). Real Sass `@use`/`@include` syntax is described in prose with a link to the real source file instead of being pushed through the highlighter.
- Follow the site's existing Marko conventions: `<let/>`/`<const/>` for template variables (not `$ let`), no `style { }` blocks, kebab-case custom tags with no explicit import (filesystem-resolved).

---

### Task 1: Promote the `token-doc` tag to `src/tags/`

**Files:**

- Move: `src/routes/_index/components/tokens/tags/token-doc/index.marko` → `src/tags/token-doc/index.marko`
- Move: `src/routes/_index/components/tokens/tags/token-doc/style.module.scss` → `src/tags/token-doc/style.module.scss`
- Move: `src/routes/_index/components/tokens/tags/token-doc/style.module.scss.d.ts` → `src/tags/token-doc/style.module.scss.d.ts`
- Move: `src/routes/_index/components/tokens/tags/token-doc/token-doc.d.ts` → `src/tags/token-doc/token-doc.d.ts`
- Move: `src/routes/_index/components/tokens/tags/token-doc/token-doc.json` → `src/tags/token-doc/token-doc.json`
- Delete (now empty): `src/routes/_index/components/tokens/tags/`

**Interfaces:**

- Produces: the `<token-doc type="core" | "expressive" | "semantic" | "live"/>` tag, now resolvable from **any** route under `src/routes/_index/...` (previously only from files inside `components/tokens/`). Task 2 and the existing `tokens/css+page.marko` both depend on this.

**Why this is safe:** none of the 5 files reference their own location by absolute or `../`-style path — `index.marko` imports `./token-doc.json` and `./style.module.scss`, both siblings that move together. No other file in the repo references `token-doc` by path (confirmed via repo-wide grep); it's only ever used as the bare tag `<token-doc/>`.

- [ ] **Step 1: Move the directory**

```bash
mkdir -p src/tags/token-doc
git mv src/routes/_index/components/tokens/tags/token-doc/index.marko src/tags/token-doc/index.marko
git mv src/routes/_index/components/tokens/tags/token-doc/style.module.scss src/tags/token-doc/style.module.scss
git mv src/routes/_index/components/tokens/tags/token-doc/style.module.scss.d.ts src/tags/token-doc/style.module.scss.d.ts
git mv src/routes/_index/components/tokens/tags/token-doc/token-doc.d.ts src/tags/token-doc/token-doc.d.ts
git mv src/routes/_index/components/tokens/tags/token-doc/token-doc.json src/tags/token-doc/token-doc.json
rmdir src/routes/_index/components/tokens/tags/token-doc src/routes/_index/components/tokens/tags
```

Do not edit the contents of any of these 5 files — they should be byte-for-byte identical after the move.

- [ ] **Step 2: Verify the existing Tokens page still resolves the tag**

Run: `npm start` (starts `marko-run dev`)
Navigate to: `/components/tokens/css`
Expected: the "Semantic Color Tokens", "Core Expressive tokens", and "Primitive Color Tokens" sections still render their swatch/variable-name grids exactly as before (no blank sections, no "tag not found" build error in the terminal).

- [ ] **Step 3: Run the full build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Marko compilation errors related to `token-doc`.

- [ ] **Step 4: Commit** (pause for explicit go-ahead first — see Global Constraints)

```bash
git add src/tags/token-doc src/routes/_index/components/tokens/tags
git commit -m "refactor(site): promote token-doc tag to shared src/tags/

Makes the token tables renderable from any route, not just pages
under components/tokens/. Needed so the new Theming guide (#625)
can reuse the same semantic/live token tables."
```

---

### Task 2: Create the Theming guide page

**Files:**

- Create: `src/routes/_index/guides/theming+meta.json`
- Create: `src/routes/_index/guides/theming+page.marko`

**Interfaces:**

- Consumes: `<token-doc type="semantic"/>` and `<token-doc type="live"/>` from Task 1; `<highlight-code type="css"|"html">` and `<section-header/>`-style demo markup, both existing shared tags requiring no import; `urls` from `src/data` (`import { urls } from "../../../data";`, 3 levels up from `guides/`).
- Produces: the page at `/guides/theming`, with anchor ids `theming-overview`, `theming-semantic-tokens`, `building-a-theme`, `sub-theming`, `current-themes`, `current-themes-evo-live` — Task 4 links to `/guides/theming` (no anchor needed for nav links).

- [ ] **Step 1: Create `theming+meta.json`**

```json
{
  "pageTitle": "Skin CSS Theming Guide",
  "pageDescription": "Learn how to theme and sub-theme Evo Web: override the semantic token layer to build your own theme, scope a theme to part of a page, and see the themes shipped today (Evo, Evo Live)."
}
```

- [ ] **Step 2: Create `theming+page.marko`**

```marko
import { urls } from "../../../data";
<main class="theming-guide">
  <h1>Theming Guide</h1>

  <p>
    This guide covers how to build a theme for Evo Web, how to scope a theme to
    just part of a page, and which themes ship today.
  </p>

  <h2 id="theming-overview">
    Theming
  </h2>
  <p>
    Theming means overriding Evo Web's semantic token layer to reskin every
    component at once, without touching any component code. Every component in${" "}
    <code>@ebay/skin</code>
    ${" "}reads its colors exclusively from a fixed set of semantic CSS custom
    properties (for example${" "}
    <code>--color-background-accent</code>
    ${" "}or${" "}
    <code>--color-foreground-accent</code>
    ${" "}) &mdash; redefine those properties and every component picks up the
    new values automatically.
  </p>

  <h3 id="theming-semantic-tokens">
    Semantic Color Tokens
  </h3>
  <p>Note: To see the different theme colors, use the theme switcher</p>
  <div class="demo">
    <div class="demo__inner">
      <token-doc type="semantic"/>
    </div>
  </div>

  <h3 id="building-a-theme">
    Building a Theme
  </h3>
  <p>
    Always override at the semantic layer shown above &mdash; never the
    primitive/core color scale it's built from. There are two ways to build a
    theme, depending on who you are.
  </p>

  <h4>App consumers</h4>
  <p>
    Most teams reskinning their own app should start here. Import the default
    token submodule as your foundation, then override the semantic custom
    properties you want to change on${" "}
    <code>:root</code>
    ${" "}. Provide a${" "}
    <code>prefers-color-scheme: dark</code>
    ${" "}block if you support dark mode:
  </p>
  <highlight-code
    type="css"
    code=`
      :root {
        --color-background-accent: #0b5fff;
        --color-foreground-accent: #ffffff;
        --color-border-accent: #0b5fff;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --color-background-accent: #4d8dff;
          --color-foreground-accent: #001433;
          --color-border-accent: #4d8dff;
        }
      }
    `/>
  <p>
    To limit a theme to part of a page instead of the whole site, scope the
    overrides to a class instead of${" "}
    <code>:root</code>
    ${" "}&mdash; see${" "}
    <a href="#sub-theming">
      Sub-theming
    </a>
    ${" "}below.
  </p>

  <h4>Skin/theme authors</h4>
  <p>
    Contributors publishing a new official theme inside${" "}
    <code>@ebay/skin</code>
    ${" "}(the way Evo Live was built) start from a base mixin in${" "}
    <code>@ebay/design-tokens</code>
    ${" "}instead of hand-writing every property, then layer selective overrides
    on top. Evo Live's own light-mode definition uses${" "}
    <code>@use "@ebay/design-tokens/dist/mixins/live-light" as tokens;</code>
    ${" "}, included under${" "}
    <code>:root</code>
    ${" "}inside a${" "}
    <code>@media (prefers-color-scheme: light)</code>
    ${" "}block, followed by a handful of property overrides on top of the
    mixin. See${" "}
    <a href="https://github.com/eBay/evo-web/blob/main/packages/skin/src/tokens/evo-live-light.scss">
      evo-live-light.scss
    </a>
    ${" "}and its${" "}
    <a href="https://github.com/eBay/evo-web/blob/main/packages/skin/src/tokens/evo-live-dark.scss">
      dark-mode counterpart
    </a>
    ${" "}for the full source.
  </p>
  <p>
    <strong>Accessibility:</strong>
    ${" "}whichever path you take, verify color contrast against WCAG 2.2 AA in
    both light and dark mode before shipping a theme &mdash; overriding a token
    is easy, but it's still your responsibility to keep the resulting
    combinations legible.
  </p>

  <h2 id="sub-theming">
    Sub-theming
  </h2>
  <p>
    To scope a theme to just part of a page, use the token class themes. These
    are exported as${" "}
    <code>@ebay/skin/evo-class</code>
    ${" "}and${" "}
    <code>@ebay/skin/evo-live-class</code>
    ${" "}. Add a class of${" "}
    <code>.evo-theme</code>
    ${" "}or${" "}
    <code>.evo-theme-live</code>
    ${" "}to any element, and every component inside it will use that theme
    instead of the page's default.
  </p>
  <p>
    The live demo below only demonstrates swapping in the Evo Live subtheme; the
    same class-scoping pattern applies to any theme you build, but only Evo Live
    ships a ready-made class bundle today.
  </p>
  <div class="demo">
    <div class="demo__inner">
      <div class="evo-theme">
        <button class="btn btn--primary">
          Button
        </button>
        <div class="evo-theme-live" style="margin-top: 4px;">
          <button class="btn btn--primary">
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
  <highlight-code type="html">
    <div class="evo-theme">
      <button class="btn btn--primary">
        Button
      </button>
      <div class="evo-theme-live" style="margin-top: 4px;">
        <button class="btn btn--primary">
          Button
        </button>
      </div>
    </div>
  </highlight-code>

  <h2 id="current-themes">
    Current Themes
  </h2>

  <h3>Evo</h3>
  <p>
    Evo is the default theme and requires no extra setup beyond the standard
    token import. See the${" "}
    <a href=`${urls.components}/tokens/css`>
      Tokens page
    </a>
    ${" "}for the import instructions.
  </p>

  <h3 id="current-themes-evo-live">
    Evo Live
  </h3>
  <p>Evo live is a theme built on top of evo-core. To import evo-live theme</p>
  <p>
    Core, light and dark token sets are individually exposed via the following
    submodules:
  </p>
  <dl>
    <dt>
      <span class="secondary-text">
        @ebay/skin/tokens/
      </span>
      ${" "}evo-core
    </dt>
    <dd>eBay default primitives</dd>
    <dt>
      <span class="secondary-text">
        @ebay/skin/tokens/
      </span>
      ${" "}evo-live-light
    </dt>
    <dd>eBay semantic aliases for light mode</dd>
    <dt>
      <span class="secondary-text">
        @ebay/skin/tokens/
      </span>
      ${" "}evo-live-dark${" "}
      <sup>*</sup>
    </dt>
    <dd>eBay semantic aliases for dark mode</dd>
  </dl>
  <p>
    <sup>*</sup>
    ${" "}This sub-module will not be included automatically by its parent
    module; it must be explicitly included by any page that is itself dark-mode
    compatible.
  </p>
  <p>
    There is also a bundled module${" "}
    <code>@ebay/skin/evo-live</code>
    ${" "}Which imports all live tokens
  </p>
  <div class="demo">
    <div class="demo__inner">
      <token-doc type="live"/>
    </div>
  </div>
</main>
```

Note on the `<sup>*</sup>` footnote paragraph: the original Tokens page only
stated this once (after the default Evo Tokens listing) even though the Evo
Live listing also uses the same `*` marker on `evo-live-dark`. Since the Evo
Live listing is moving to a page where the original explanation no longer
appears alongside it, this plan repeats the one-sentence footnote here too
so the `*` isn't left unexplained. This is a deliberate small fidelity fix,
not a copy-paste error.

- [ ] **Step 3: Run the build**

Run: `npm run build`
Expected: succeeds. If `highlight-code`'s `type="css"` block fails to
prettier-format the sample (it shouldn't — it's valid CSS), the tag's own
`<try>/<@catch>` renders a plaintext fallback rather than crashing the
page; a build failure here would instead point to a Marko/TypeScript
syntax mistake in the new file, not the CSS sample.

- [ ] **Step 4: Manually verify in browser**

Run: `npm start`
Navigate to: `/guides/theming`
Expected, checking each in turn:

- Page title/heading render, all 6 anchor ids are present (View Source or inspect headings for `id=`)
- Both `<token-doc>` tables render (semantic grid under "Semantic Color Tokens", live grid under "Evo Live")
- Both `<highlight-code>` blocks render with syntax highlighting, no "language-plaintext" fallback showing raw error text
- The sub-theming demo buttons render with two visibly different button treatments (default vs. Evo Live)
- Toggle the site's dark mode (OS-level `prefers-color-scheme` or devtools emulation) and confirm the page and its demos still look correct
- No console errors

- [ ] **Step 5: Commit** (pause for explicit go-ahead first)

```bash
git add src/routes/_index/guides/theming+meta.json src/routes/_index/guides/theming+page.marko
git commit -m "feat(site): add Theming guide page (#625)

New /guides/theming page covering how to build a theme, how to
sub-theme, and which themes ship today (Evo, Evo Live)."
```

---

### Task 3: Trim the Tokens page and add a cross-link

**Files:**

- Modify: `src/routes/_index/components/tokens/css+page.marko`

**Interfaces:**

- Consumes: `urls` from `src/data` (not currently imported in this file — must be added).
- Produces: nothing new consumed elsewhere; this task only removes content and adds a link to the page Task 2 created.

The file currently has no top-of-file `import` statement. Add one as the
first line.

- [ ] **Step 1: Add the `urls` import**

At the very top of `src/routes/_index/components/tokens/css+page.marko`,
before the existing `<div id="tokens">`, add:

```marko
import { urls } from "../../../../data";
```

- [ ] **Step 2: Remove the "Evo Live Theme" and "Subthemes" sections**

Find and delete this entire block (it currently sits between the "Evo
Tokens" section's closing paragraph and the "Semantic Color Tokens"
`<h3>`):

```marko
  <h3>Evo Live Theme</h3>
  <p>Evo live is a theme built on top of evo-core. To import evo-live theme</p>
  <p>
    Core, light and dark token sets are individually exposed via the following
    submodules:
  </p>
  <dl>
    <dt>
      <span class="secondary-text">
        @ebay/skin/tokens/
      </span>
      evo-core
    </dt>
    <dd>eBay default primitives</dd>
    <dt>
      <span class="secondary-text">
        @ebay/skin/tokens/
      </span>
      evo-live-light
    </dt>
    <dd>eBay semantic aliases for light mode</dd>
    <dt>
      <span class="secondary-text">
        @ebay/skin/tokens/
      </span>
      evo-live-dark
      <sup>*</sup>
    </dt>
    <dd>eBay semantic aliases for dark mode</dd>
  </dl>
  <p>
    There is also a bundled module
    <code>@ebay/skin/evo-live</code>
    Which imports all live tokens
  </p>
  <h3>Subthemes</h3>
  <p>
    To swap themes within a page, use the token class themes. These are exported
    as
    <code>@ebay/skin/evo-live-class</code>
    and
    <code>@ebay/skin/evo-class</code>
    Then, within your page, add a class of
    <code>.evo-theme-live</code>
    and all components within that element will use the partial theme.
  </p>
  <p>Note, this example only works on default evo theme</p>
  <div class="demo">
    <div class="demo__inner">
      <div class="evo-theme">
        <button class="btn btn--primary">
          Button
        </button>
        <div class="evo-theme-live" style="margin-top: 4px;">
          <button class="btn btn--primary">
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
  <highlight-code type="html">
    <div class="evo-theme">
      <button class="btn btn--primary">
        Button
      </button>
      <div class="evo-theme-live" style="margin-top: 4px;">
        <button class="btn btn--primary">
          Button
        </button>
      </div>
    </div>
  </highlight-code>
```

- [ ] **Step 3: Add the cross-link in its place**

Where that block was, add:

```marko
  <p>
    Looking to build your own theme, apply a subtheme, or see what themes
    ship today (like Evo Live)? See the
    <a href=`${urls.guides}/theming`>
      Theming Guide
    </a>
    .
  </p>
```

The file's remaining sections ("Evo Tokens" intro, "Semantic Color
Tokens", "Core Expressive tokens", "Primitive Color Tokens" details block)
are unchanged.

- [ ] **Step 4: Run the build**

Run: `npm run build`
Expected: succeeds, no unused-import or unresolved-tag errors.

- [ ] **Step 5: Manually verify in browser**

Run: `npm start`
Navigate to: `/components/tokens/css`
Expected: "Evo Tokens" intro is followed directly by the new pointer
paragraph and its working link to `/guides/theming`; "Semantic Color
Tokens" heading and table immediately follow that (no orphaned `<h3>` or
leftover demo markup); "Core Expressive tokens" and "Primitive Color
Tokens" sections are untouched.

- [ ] **Step 6: Commit** (pause for explicit go-ahead first)

```bash
git add src/routes/_index/components/tokens/css+page.marko
git commit -m "docs(site): move theming/subtheme content off the Tokens page

Evo Live Theme and Subthemes sections now live on the new Theming
guide (#625); this page keeps a short pointer link in their place."
```

---

### Task 4: Wire up navigation to the new guide

**Files:**

- Modify: `src/routes/_index/guides/+page.marko`
- Modify: `src/tags/site-header/index.marko`
- Modify: `src/routes/_index/sitemap+page.marko`

**Interfaces:**

- Consumes: `urls.guides` (already imported in all three files) and the `/guides/theming` route created in Task 2.
- Produces: nothing consumed elsewhere — this is the last content task before final verification.

- [ ] **Step 1: Add the entry to the guides landing page**

In `src/routes/_index/guides/+page.marko`, after the existing "Animation
Guide" `<h2>`/`<p>`/`<p>` block (and before the closing `</div>`), add:

```marko
  <h2>Theming Guide</h2>
  <p>
    Learn how to theme and sub-theme Evo Web, and see which themes ship
    today.
  </p>
  <p>
    <a href=`${urls.guides}/theming`>
      Theming Guide
    </a>
  </p>
```

- [ ] **Step 2: Add the entry to the mobile nav's Guides tab**

In `src/tags/site-header/index.marko`, find the `examples-nav` list inside
`id="default-tabpanel-4"` (currently three `<li>` entries for page-grid,
skeleton, animation). After the Animation Guide `<li>`, add:

```marko
                        <li>
                          <a href=`${urls.guides}/theming`>
                            Theming Guide
                          </a>
                        </li>
```

(Match the existing indentation of the sibling `<li>` elements in that
list — this file uses 2-space Marko indentation nested fairly deep at this
point in the tree.)

- [ ] **Step 3: Add the entry to the sitemap**

In `src/routes/_index/sitemap+page.marko`, inside
`<nav aria-labelledby="sitemap-guides">`'s `<ul>` (currently three `<li>`
entries for page-grid, skeleton, animation), after the Animation Guide
`<li>`, add:

```marko
        <li>
          <a href=`${urls.guides}/theming`>
            Theming Guide
          </a>
        </li>
```

- [ ] **Step 4: Run the build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manually verify in browser**

Run: `npm start`
Check each of the following, clicking through to confirm the link lands on
`/guides/theming`:

- `/guides` landing page shows the new "Theming Guide" entry after
  Animation, with working link
- Open the mobile nav (resize viewport below the mobile breakpoint or use
  devtools device mode), open the "Guides" tab, confirm "Theming Guide"
  appears after "Animation Guide" with a working link
- `/sitemap` page's "Guides" section lists "Theming Guide" after
  "Animation Guide" with a working link

- [ ] **Step 6: Commit** (pause for explicit go-ahead first)

```bash
git add src/routes/_index/guides/+page.marko src/tags/site-header/index.marko src/routes/_index/sitemap+page.marko
git commit -m "feat(site): link the Theming guide from nav, mobile nav, and sitemap"
```

---

### Task 5: Final full-site build and verification pass

**Files:** none (verification only).

**Interfaces:** none.

- [ ] **Step 1: Clean full build**

Run: `npm run build`
Expected: succeeds with no errors or warnings related to any file touched
in Tasks 1-4.

- [ ] **Step 2: Full manual QA pass**

Run: `npm start` and walk the golden path end-to-end:

1. Start at `/` → click "Guides" in the primary nav → click "Theming
   Guide" → confirm you land on `/guides/theming`.
2. On `/guides/theming`: confirm both token tables render, both code
   samples are syntax-highlighted, the sub-theme demo buttons render with
   visibly different styling, and every in-page anchor link (e.g.
   "Sub-theming" cross-reference in the Building a Theme section) scrolls
   to the right heading.
3. Toggle dark mode (OS setting or devtools emulation) on `/guides/theming`
   — confirm the page and its demo blocks still read correctly and remain
   legible (per the Accessibility note on the page itself).
4. Navigate to `/components/tokens/css` — confirm it no longer shows "Evo
   Live Theme" or "Subthemes" headings, shows the new pointer link instead,
   and that link also lands on `/guides/theming`.
5. Navigate to `/sitemap` — confirm the Theming Guide entry is present and
   linked correctly.
6. Open the mobile nav Guides tab — confirm the Theming Guide entry is
   present and linked correctly.
7. Check the browser console for errors on every page visited above.

- [ ] **Step 3: Report status**

Summarize pass/fail for each of the 7 checks above. If everything passes,
this pass (#625 pass 1) is ready for PR — stop here and hand back to the
user rather than opening the PR automatically (per this repo's
constraints, PR creation is a user-directed action).

---

## Self-Review Notes

- **Spec coverage:** every section of the design spec (routing, token-doc
  blocker, page content structure, content migration, nav/cross-link
  changes, build/verification) maps to a task above. Explicitly-out-of-scope
  items (theme creator, apply-theme, Components/Foundations taxonomy,
  token-doc.json generation automation) are intentionally not tasked here.
- **Placeholder scan:** no TBD/TODO; every code block is complete, real
  content pulled from or grounded in the actual repository files read
  during spec revision.
- **Type/tag consistency:** `token-doc`'s `type` values (`"core" |
"expressive" | "semantic" | "live"`) and `highlight-code`'s `type` values
  (`"js" | "css" | "html" | "json"`, no `"scss"`) are used consistently
  across Tasks 1-2 and match the actual `Input` interfaces read from
  `src/tags/token-doc/index.marko` (post-move) and
  `src/tags/highlight-code/index.marko`.
