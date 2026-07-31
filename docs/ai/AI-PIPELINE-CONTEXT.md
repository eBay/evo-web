# Context Package — AI Component Pipeline Skills

Paste this at the start of a new chat to resume work on the evo-web AI component generation pipeline.

---

## What We've Built

An end-to-end AI component generation pipeline for the **evo-web monorepo** (eBay's component library). The pipeline takes a component contract and structured design spec, produces a machine-readable manifest, then generates every layer of a component — static HTML/CSS, Marko 6, React 19, storybooks, accessibility validation, accessibility docs, and site hookups — orchestrated by a single Claude Code skill with scope-aware step selection.

**Current status: All skills built. Pipeline validated on real components (page-notice warning variant addition — static scope modify run complete, including QA catch of dark-mode contrast regression).**

---

## Skill Inventory

Skills live in `.claude/skills/[skill-name]/SKILL.md`.

| Skill                            | Type                         | Invoked By                        | Responsibility                                                                                                             |
| -------------------------------- | ---------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `/evo-pipeline`                  | Top-level orchestrator       | Engineer                          | State detection, modify detection (spec diff), Gate 2 presentation, resumability — invokes `/evo-component` after approval |
| `/evo-create-component-manifest` | Discrete — manifest step     | `/evo-pipeline` (Step 1)          | Reads `_contract.md` + `*.spec.json` → `manifest.json` + `gap-report.json`                                                 |
| `/evo-component`                 | Composite orchestrator       | `/evo-pipeline` (after Gate 2)    | 16-step scope-aware generation lifecycle                                                                                   |
| `/evo-static-component`          | Sub-agent                    | Step 4                            | Canonical HTML catalogue for all variants (always) + SCSS (when tokens/Figma available)                                    |
| `/evo-static-storybook`          | Sub-agent                    | Step 5                            | CSF2 stories from static HTML context; RTL + textSpacing required                                                          |
| `/evo-docs-hookup` css-only      | Sub-agent                    | Step 6                            | Writes `css+page.marko` + `css+meta.json` while HTML is fresh                                                              |
| `/evo-a11y` Pass 1               | Sub-agent                    | Step 7                            | Validates static HTML + storybook; writes static sections of `accessibility+page.marko`                                    |
| `/evo-marko-component`           | Sub-agent                    | Step 8                            | Generates new Marko 6 `index.marko`, `style.ts`, tests from manifest                                                       |
| `/evo-marko-storybook`           | Sub-agent                    | Step 9                            | `buildExtensionTemplate` + `.marko` example files                                                                          |
| `/evo-react-component`           | Sub-agent                    | Step 10                           | Generates new React 19 `index.tsx`, tests from manifest                                                                    |
| `/evo-react-storybook`           | Sub-agent                    | Step 11                           | CSF3 `Meta` + `StoryObj`, self-contained                                                                                   |
| `/evo-a11y` Pass 2               | Sub-agent                    | Step 12                           | Full validation; fills interactive sections of `accessibility+page.marko`                                                  |
| `/evo-docs-hookup` full          | Sub-agent                    | Step 13                           | Writes `+page.marko`, `+meta.json`, updates `component-metadata.json`                                                      |
| `/evo-qa`                        | **Forked** sub-agent         | Step 15                           | Layer 1: manifest fidelity; Layer 2: optional reference delta score                                                        |
| `/evo-icon`                      | Discrete                     | Engineer or Step 8 (major delete) | Add / deprecate / delete icons; SVG → sprite → React → Marko                                                               |
| `evo-safe-coding`                | Safety gate (auto-activates) | Every code session                | Scope check, risk rating, minimal diff, merge readiness                                                                    |

---

## Architectural Decisions

1. **Static layer runs first.** `/evo-static-component` establishes canonical HTML for all variants before any framework code is generated. Marko, React, storybooks, and docs all read from this output — they do not re-derive structure from the manifest independently.

2. **Layer + storybook pairing.** Each layer's storybook is generated immediately after the layer itself (Static → storybook → Marko → storybook → React → storybook) for maximum context freshness and consistency.

3. **CSS docs written at Step 6, not at the end.** `css+page.marko` content is entirely derived from the static HTML. Writing it immediately after the static storybook keeps HTML in context and makes docs accurate by construction.

4. **A11y docs are incremental.** Pass 1 (Step 7) writes statically-derivable sections (Best Practices, ARIA Reference table). Pass 2 (Step 12) fills interactive sections (Keyboard, Screen Reader, Pointer). Style-only revisions skip both passes.

5. **Scope is orchestrator-declared, never disk-inferred.** Each sub-skill is explicitly told what has run in this session. This prevents incorrect scoping on component revisions where old files from prior runs exist on disk.

6. **`/evo-qa` is forked and scope-aware.** It runs in isolation (no generation context) and is told the scope so it only audits files generated in this run.

7. **Spec file (`*.spec.json`) is the authoritative data source.** Design team provides typed props, token mappings, slots, and states. The manifest skill uses spec fields directly; contract prose fills the gaps the spec doesn't cover.

---

## Pipeline Flow (16 steps)

```
[Track A — Human]
1. Designer + engineer author _contract.md + *.spec.json
   Both files live in src/routes/_index/components/<name>/
   (Can also be provided as chat attachments — /evo-pipeline treats them identically)
2. GATE 1: CODEOWNERS review (designer + engineer approval)

[/evo-pipeline <name> [--scope <scope>] [--auto-approve]]
   State detection: reads folder, contract, spec, manifest, gap-report, generated files
   → routes to correct state (no folder / inputs missing / no manifest / pending review / ready)
   Resumable: picks up from current state without re-running completed steps

   Modification mode: if the component folder exists, the run is ALWAYS a
   modification — regardless of whether a spec was previously committed.
   "No spec on disk" means the spec was never committed, not that the
   component is new. The pipeline reads the existing generated files to
   understand the implemented state.

   Modify detection (when generated files already exist + new spec provided):
   Generated files that trigger modify detection: packages/skin/src/sass/<name>/
   (skin SCSS), packages/evo-marko/src/tags/evo-<name>/, packages/evo-react/src/<name>/
   At least one must exist. Reads old spec via git show HEAD:<spec-path>, diffs
   in context against the new spec. When no prior spec was committed, compares
   new spec against the implemented state (reads existing SCSS/Marko/React files).
   Recommends scope from diff. Engineer can override. No temp files written.

[/evo-create-component-manifest — invoked by /evo-pipeline]
3. Runs pnpm codegen:spec-to-manifest first (if spec present) — writes
   spec-derived fields to manifest.json deterministically
   Then reads _contract.md + manifest.json → completes manifest.json + gap-report.json
   Spec is authoritative for: props, tokens, slots, states
   Contract is authoritative for: a11y prose, behaviors, keyboard model
   Four-tier source system: [CONTRACT] [AUDIT] [INFER] [ENGINEER]

4. GATE 2: Engineer reviews manifest + gap-report (last human gate before codegen)
   --auto-approve skips interactive prompt; summary still printed

[/evo-component --scope <full|static|interactive|style>]

Step 4:   /evo-static-component   [full, static, style(SCSS only)]
Step 5:   /evo-static-storybook   [full, static]
Step 6:   /evo-docs-hookup css    [full, static, style]
Step 6.5: pnpm codegen:scaffold [full, interactive] — deterministic scaffold files:
          style.ts (complete), index.marko (interface + TODO), index.tsx (props + TODO),
          test.server.ts (complete structure). Skills read and complete these.
Step 7:   /evo-a11y Pass 1        [full, static] — 🔴 blocks if issues
Step 8:   /evo-marko-component    [full, interactive] — completes scaffold
Step 9:   /evo-marko-storybook    [full, interactive]
Step 10:  /evo-react-component    [full, interactive] — completes scaffold
Step 11:  /evo-react-storybook    [full, interactive]
Step 12:  /evo-a11y Pass 2        [full, interactive]
Step 13:  /evo-docs-hookup full   [full, static, interactive]
          Runs pnpm codegen:update-metadata for the component-metadata.json entry
Step 14:  pnpm build           [all scopes]
Step 15:  /evo-qa (forked)        [all scopes]
Step 16:  Final summary → engineer files PR

[Post-PR]
GATE 3: Percy visual regression (CSS/SCSS changes)
GATE 4: CI — pnpm build + Playwright/Vitest
```

---

## Scope Reference

| Scope         | When to use                                   | Steps run         |
| ------------- | --------------------------------------------- | ----------------- |
| `full`        | New component or cross-layer revision         | 4–16              |
| `static`      | HTML structure and/or SCSS changed            | 4–7, 13–16        |
| `interactive` | Only Marko/React behavior or props changed    | 8–16              |
| `style`       | SCSS only; no structural or behavioral change | 4(SCSS), 6, 14–16 |

**Static scope css docs rule:** When scope is `static` or `style` and the change adds or removes a variant (enum value on the `type` prop), `css+page.marko` must be updated to include the new variant in the demo block and `<highlight-code>` block. This is not a separate step — it is part of the static scope output, written at Step 6.

**Accessible token selection for fixed-background variants:** When a variant has a background that does not change between light and dark modes (e.g. `color-background-warning` = yellow-400 in both), text and icon colors must use a mode-invariant token (e.g. `color-neutral-800`) rather than a theme-adaptive token (e.g. `color-foreground-primary`, which becomes near-white in dark mode). Theme-adaptive foreground tokens produce inaccessible contrast on fixed bright backgrounds in dark mode. The missing semantic token (e.g. `color-foreground-on-warning`) should be flagged to the design team.

---

## Codegen Scripts (determinism layer)

Five TypeScript scripts produce byte-identical output for spec-derivable content. Run via `pnpm exec tsx` or pnpm shortcuts:

| Script                                           | npm command                             | When it runs                                       |
| ------------------------------------------------ | --------------------------------------- | -------------------------------------------------- |
| `scripts/codegen/spec-to-manifest.ts`            | `pnpm codegen:spec-to-manifest <name>`  | Step 3 — before AI manifest inference              |
| `scripts/codegen/generate-component-scaffold.ts` | `pnpm codegen:scaffold <name>`          | Step 6.5 — before framework generation             |
| `scripts/codegen/validate-manifest.ts`           | `pnpm codegen:validate-manifest <name>` | On demand — validates manifest.json against schema |
| `scripts/codegen/update-component-metadata.ts`   | `pnpm codegen:update-metadata <name>`   | Step 13 — inside /evo-docs-hookup full mode        |

All scripts accept the bare component name (`accordion`, not `evo-accordion`). They resolve to `src/routes/_index/components/<name>/` automatically.

---

## Key Manifest Schema Fields

Beyond the basics — these are the non-obvious fields that matter most:

- `figma.fileKey` — from spec `metadata.figma.fileKey`
- `tokens` — named CSS custom property map from spec: `{ "background": "--color-background-primary" }`
- `a11y.labelStrategy` — `"aria-label-prop"` | `"aria-hidden"` | `"content"` | `"aria-labelledby"`
- `callerObligations[]` — a11y responsibilities the consumer (not the component) must fulfill
- `stateLiftingCallbacks[]` — distinct from `events[]`; receive plain values, not DOM Events
- `widgetRole` + `keyboardModel` — for WAI-ARIA widget patterns (tabs, menu, listbox, etc.)

---

## Codebase Context

**Package targets:**

- `packages/skin/src/sass/` — static CSS/SCSS (foundation layer, BEM)
- `packages/evo-marko/src/tags/` — Marko 6 components
- `packages/evo-react/src/` — React 19 ESM components
- `src/routes/_index/components/` — docs site pages

**Key conventions:**

- BEM strict: `.btn`, `.btn__cell`, `.btn--primary`
- Marko 6: `<let/x=0>`, `<const/y=z>`, `onClick() {}` — never `$ let` or `onClick("handler")`
- Marko 6: attribute values containing `>` must be in parens: `<const/x=(a > b ? 1 : 0)>`
- React 19: native `ref`, no `forwardRef`, ESM-only, skin CSS imported directly in component file
- WCAG 2.2 AA on all components; `pnpm build` must pass before any work is complete

**Docs site tab system:**

- Tab presence is file-based — creating `css+page.marko` creates the CSS tab
- Storybook tab links driven by `src/data/component-metadata.json`
- `accessibility+page.marko` written by `/evo-a11y`; `+page.marko` and `css+page.marko` by `/evo-docs-hookup`
