---
name: evo-a11y
description: >
  Accessibility validation and incremental docs generation for evo-web components.
  Runs in two passes: Pass 1 (Step 7, after static layer) validates HTML and
  static storybook, then writes the static sections of accessibility+page.marko.
  Pass 2 (Step 12, after all layers) validates Marko and React, then fills in
  the interactive sections. The orchestrator explicitly declares which pass and
  scope — never inferred from disk. Skipped entirely for style-only revisions.
  Use this whenever the user says "run a11y", "validate accessibility", "generate
  accessibility docs", "check ARIA", or when the orchestrator invokes Step 7
  (Pass 1) or Step 12 (Pass 2).
---

# evo-a11y

You run in two passes. The orchestrator tells you which pass and scope — do not
infer from disk state (fails on revisions where old files are already present).

The accessibility docs are built incrementally: Pass 1 writes the static
sections; Pass 2 fills in the interactive sections. For style-only revisions,
this skill is not invoked.

---

## Scope declaration from orchestrator

You will receive one of:
- `"Pass 1 — static layer only. Steps 4–6 have run."`
- `"Pass 2 — full scope. Steps 4–11 have run."`
- `"Pass 2 — interactive scope. Steps 8–11 have run."`

If invoked standalone without declaration, ask which pass and scope.

---

## Pass 1 — Static layer validation + static a11y docs

**Trigger:** Step 7, after static component + static storybook + css docs (Steps 4–6)

### Phase 1a: Validate

**HTML from `/evo-static-component` (in context):**
- `manifest.a11y.explicitRole: true` → `role="..."` on root element
- `manifest.a11y.labelStrategy === "aria-label-prop"` → `aria-label` present
- `manifest.a11y.labelStrategy === "aria-hidden"` → `aria-hidden="true"` present for null case
- Each entry in `manifest.a11y.ariaAttributes[]` represented in at least one variant
- Root element matches `manifest.rootElement.default`
- No `<div>` where a semantic element is correct

**Static storybook (read from disk):**
- `RTL` named export exists — 🔴 if missing
- `textSpacing` export with `demo-a11y-text-spacing` on root BEM element — 🔴 if missing

**Anti-patterns:**
- `role="presentation"` without justification
- `aria-hidden` and interactive elements mixed incorrectly

### Phase 1b: Write static sections of accessibility+page.marko

Write `src/routes/_index/components/<block>/accessibility+page.marko` with the
sections derivable from the static layer. Mark interactive sections as stubs.

```marko
import "../../../../sass/accessibility.scss";
import { urls } from "../../../../data";

<div class="a11y-pattern-content">
  <h1><DisplayName> Accessibility</h1>

  <h2>Best Practices</h2>
  <!-- From manifest.a11y (label strategy, decorative vs informational)
       and manifest.callerObligations[] (a11y-critical categories only) -->

  <h2>Interaction Design</h2>
  <p>This section provides detailed instructions for how different input types
  should navigate and operate the pattern.</p>

  <h3>Keyboard</h3>
  <!-- STUB if interactive layers not yet generated:
       <p>This section will be completed after the interactive layer is generated.</p>
       OR fill with manifest.keyboardInteractions[] if present in manifest -->

  <h3>Screen Reader</h3>
  <!-- STUB or fill from manifest.a11y.screenReaderAnnouncement if static-only -->

  <h3>Pointer</h3>
  <!-- For non-interactive components: fill now.
       For interactive: stub — "Updated after interactive layer generation." -->

  <h2>ARIA Reference</h2>
  <table>
    <thead><tr><th>Attribute</th><th>Description</th></tr></thead>
    <tbody>
      <!-- One <tr> per manifest.a11y.ariaAttributes[] + a11yProps
           This table is derivable entirely from the manifest — fill it now -->
    </tbody>
  </table>

  <!-- <h2>Further Reading</h2> — only if contract/manifest references known a11y URLs -->
</div>
```

**What to fill vs. stub:**

| Section | Fill now | Reason |
|---|---|---|
| Best Practices | ✅ Always | Derivable from manifest.a11y + callerObligations |
| ARIA Reference table | ✅ Always | Derivable from manifest.a11y.ariaAttributes[] |
| Pointer (non-interactive) | ✅ If focusable === false | Fully static |
| Keyboard | ✅ If keyboardInteractions[] in manifest | Otherwise stub |
| Screen Reader | ✅ Static announcements from manifest | Stub interactive state changes |
| Pointer (interactive) | Stub | Needs active/pressed/hover from Marko/React |

**Non-interactive components:** Fill all sections completely in Pass 1 — there
is no Pass 2 for style/static-only scopes.

Also write `accessibility+meta.json` if the component is non-interactive (no
Pass 2 needed):
```json
{
  "pageTitle": "<DisplayName> Accessibility Guidelines — <tagline>",
  "pageDescription": "<2-3 sentence SEO description>"
}
```

For interactive components, mark meta as pending: write a stub meta.json and
complete it in Pass 2.

### Pass 1 output

```
## A11y Pass 1 — $COMPONENT

Validation:
  [✅ HTML ARIA correct | 🔴 issue: description]
  [✅ RTL story present | 🔴 Missing]
  [✅ textSpacing story present | 🔴 Missing]

Docs written:
  ✅  accessibility+page.marko — static sections complete
  [✅ all sections filled (non-interactive) | 🔒 interactive stubs pending Pass 2]

Result: [✅ PASSED — proceed to Marko | 🔴 BLOCKED — fix issues first]
```

---

## Pass 2 — Full validation + fill interactive a11y docs

**Trigger:** Step 12, after all layers (Steps 4–11) or interactive-scope layers (Steps 8–11)

### Phase 2a: Validate all layers

**Re-run Pass 1 checks** (confirm static is still clean).

**`index.marko`** — read from disk:
- `manifest.a11y.labelStrategy` correctly wired: conditional `aria-label`/`aria-hidden`
- a11yProps with `allowNull: true` have both branches
- Required a11yProps: no `?` in `Input` interface
- Each `manifest.a11y.ariaAttributes[]` entry in template
- Keyboard handlers: Marko 6 inline syntax — no `this.emit`, `$ let`, `<if(`
- If `manifest.keyboardModel`: `<let/>` for focus state, not class methods

**`index.tsx`** — read from disk:
- a11yProps in TypeScript props type
- `aria-*` forwarded to correct DOM element
- Keyboard handlers match `manifest.keyboardInteractions[]`

**Marko storybook** — if `manifest.keyboardModel`: interactive story with `<let>` or `:=` — 🟡 if missing

**React storybook** — if `manifest.keyboardModel`: `Controlled` or `render`-based story — 🟡 if missing

### Phase 2b: Fill interactive sections of accessibility+page.marko

Read the existing `accessibility+page.marko` (written in Pass 1). Fill in or
replace the stubbed sections:

**Keyboard section** — from `manifest.keyboardModel` + `manifest.keyboardInteractions[]`:
- Use `<strong>KEY</strong>` for key names
- `<strong>must</strong>` for required behavior; `<em>may</em>` for optional

**Screen Reader section** — from `manifest.a11y.screenReaderAnnouncement`:
- Cover each usage mode (decorative, informational, interactive)
- Plain English — what gets announced, not implementation details

**Pointer section** — from manifest states + behaviors:
- Active/pressed/clicked behavior
- If inside interactive element: what clicking does

**Also complete `accessibility+meta.json`** (if written as stub in Pass 1).

### Pass 2 output

```
## A11y Pass 2 — $COMPONENT

Validation:
  Static:          [✅ Clean | 🔴 N issue(s)]
  Marko:           [✅ Passed | 🔴 N issue(s) | 🟡 N warnings]
  React:           [✅ Passed | 🔴 N issue(s) | 🟡 N warnings]
  Marko storybook: [✅ Interactive story present | 🟡 Missing]
  React storybook: [✅ Controlled story present | 🟡 Missing]

Docs updated:
  ✅  accessibility+page.marko — interactive sections filled
  ✅  accessibility+meta.json — complete

Result: [✅ PASSED | 🔴 BLOCKED — N issue(s)]
```

🔴 blocking issues in Pass 2 must be fixed before the build step.
