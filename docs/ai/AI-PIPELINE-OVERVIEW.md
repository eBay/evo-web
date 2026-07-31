# evo-web AI Component Generation Pipeline

**Overview for engineers and stakeholders**

---

## What This Is

The evo-web AI pipeline is a supervised, step-by-step workflow that takes a component contract and design spec and generates a complete, production-ready component — including static HTML and CSS, Marko and React implementations, accessibility validation, Storybook stories, and documentation. Engineers stay in control at every gate and review all output before anything ships.

The pipeline is implemented as a set of Claude Code "skills" — specialized AI instruction sets, each responsible for exactly one concern. They run in a fixed sequence through a single orchestrator command, with scope-aware step selection so that a style-only revision doesn't regenerate Marko and React, and an interactive behavior change doesn't regenerate the static CSS layer. Each skill is narrow, independently testable, and invocable on its own outside the full pipeline.

---

## The Two Inputs

**Component Contract (`_contract.md`)** is a prose document written by the designer and engineer together. It captures the component's purpose, variants, behaviors, accessibility requirements, and design rationale in human-readable form. It is reviewed and approved by both parties before any AI work begins.

**Component Spec (`*.spec.json`)** is a structured JSON file provided by the design team alongside the contract. It contains machine-readable definitions of every prop (with type, allowed values, and default), design token mappings (which CSS custom properties drive color, spacing, and typography), slot definitions, and component states. The spec is the authoritative data source for structured fields — it eliminates the guesswork that would otherwise produce inconsistencies between design intent and output.

Both files live alongside the component's documentation in `src/routes/_index/components/<name>/` — the single folder that holds everything about a component: design inputs, approval artifacts, and generated docs pages. Both can be provided either by committing them to the filesystem or by attaching them directly to the chat session, which the pipeline treats identically.

---

## Gate 1 — Contract Review

Before any AI is involved, the contract is submitted as a pull request to the `src/routes/_index/components/` directory. CODEOWNERS enforcement requires approval from both a designer and an engineer. This gate ensures the component's intent, accessibility requirements, and design decisions are agreed upon before being translated into code. It is the team's shared commitment to what is being built.

A contract validator is designed to run as a reusable GitHub Action in CI, checking schema compliance and flagging missing required fields automatically — distinguishing between PR 1 (no Figma URL yet, non-blocking) and PR 2 (Figma URL required for visual layer generation).

---

## Entry Point — `/evo-pipeline`

Engineers interact with the pipeline through a single command: `/evo-pipeline <component-name>`. This orchestrator is responsible for understanding where the component is in its lifecycle and routing accordingly — it is not the code generation engine itself. Every run begins with filesystem state detection.

**State detection** reads the component folder, contract, spec, manifest, gap report, and generated framework files in sequence. Based on what exists, the pipeline announces its current state — no folder, inputs incomplete, no manifest, manifest pending review, generation ready — and either proceeds or explains exactly what is needed to continue. The pipeline never asks for information that's already on disk.

**Resumability** is a first-class property. Whether the pipeline is run immediately after writing a contract or six days after a manifest was approved, it picks up from the correct point without re-running completed steps.

---

## Modification Mode

If a component folder already exists at `src/routes/_index/components/<name>/`, the pipeline always treats the run as a modification — regardless of whether a spec was previously committed to that folder. The absence of a spec on disk means the spec was never committed, not that the component is new. The pipeline uses the existing generated files (SCSS, Marko templates, React components) as the source of truth for what is currently implemented.

## Modify Detection — Spec Diff

When a component already has generated files and a new or updated spec is provided, the pipeline runs a diff before anything else. Generated files that qualify include the skin SCSS stylesheet, the Marko component, and the React component — at least one must exist. The pipeline reads the previously committed spec via `git show HEAD:<spec-path>` and compares it in context against the new spec — no script, no temp files. When no spec was previously committed, it compares the new spec against the implemented state read from the existing generated files.

The diff identifies which props changed type or enum values, which states were added or removed, and which tokens were updated. From this, the pipeline recommends a scope automatically — for example, adding enum values to a type prop recommends `static` (new BEM modifiers needed), while changing only a token value recommends `style`. Engineers can override the recommendation, but the diff is the default. This eliminates the manual judgment call of "what scope do I need?" for the common case of spec-driven revisions.

---

## Step 1 — Manifest Generation

With the approved contract and spec in hand, manifest generation runs in two distinct phases.

**Phase 1 — Deterministic spec translation.** The `spec-to-manifest.ts` codegen script runs first. It reads the spec and writes all machine-derivable fields directly into `manifest.json` without AI inference: props with exact types and defaults, design tokens mapped to CSS custom properties, slot definitions with required flags, and states. These fields are precise because the spec is machine-precise. No AI is involved in this phase.

**Phase 2 — Contract-sourced fields.** The `/evo-create-component-manifest` skill then reads the contract and fills in the fields the spec cannot provide: accessibility rationale, keyboard interaction details, behavioral edge cases, ARIA attribute conditions, and caller obligations. It documents every inference it makes and flags every field it cannot determine with confidence in a `gap-report.json`.

The manifest uses a four-tier source system: `[CONTRACT]` (sourced from the prose document), `[AUDIT]` (sourced from pre-built static analysis of existing component implementations), `[INFER]` (AI-reasoned, confidence-flagged), and `[ENGINEER]` (requires human input to resolve). This makes the confidence level of every manifest field explicit.

---

## Gate 2 — Manifest Review

The engineer reviews `manifest.json` and `gap-report.json`. This is the last human checkpoint before any component code is written. The pipeline presents a curated, readable summary of the manifest — not raw JSON — organized by API surface, visual styling, and accessibility. Blocking gaps (fields tagged `[ENGINEER]` or low-confidence `[INFER]`) are listed with a plain-language explanation of what's missing and why it matters, and generation is held until they are resolved.

Once approved, the orchestrator generates code purely from the manifest — it does not re-read or re-interpret the contract. This separation means the same manifest always produces the same output, regardless of when it runs.

Experienced engineers who trust the pipeline's manifest quality can pass `--auto-approve` to skip the interactive review. The manifest summary is still printed, but generation begins immediately.

---

## The Code Generation Orchestrator — `/evo-component`

After the manifest is approved, `/evo-pipeline` invokes `/evo-component <name> --scope <scope>`. The orchestrator reads the manifest, sequences all downstream sub-skills, and narrates progress at each phase boundary. Each sub-skill receives an explicit declaration of what has run before it in this session — it never guesses from what's on disk, which would produce wrong results on component revisions where old files already exist.

---

## Step 4 — Static Component

The static layer always runs first. This skill produces two things: a **canonical HTML catalogue** — the definitive markup for every visual variant the component can appear in, with correct BEM classes and ARIA attributes — and, when design tokens or a Figma reference are available, the **SCSS stylesheet** that gives the component its visual appearance.

The HTML catalogue is not just for CSS. It becomes the shared reference that every subsequent skill reads from rather than re-deriving independently. Marko templates, React components, Storybooks, and documentation all use it. This is how structural consistency is maintained across layers without manual coordination.

This ordering follows the evo-web architecture: CSS is the source of truth. Framework wrappers wrap the static layer — they do not define it.

---

## Step 5 — Static Storybook

Immediately after the static component is built, its Storybook is generated. The static (CSS) Storybook is a set of self-contained HTML snippets — one per visual variant — displayed in isolation in the Skin Storybook. Every story runs against the live CSS, making it a fast visual regression surface. Two stories are mandatory for every component: an **RTL story** (verifying right-to-left layout support) and a **text spacing story** (verifying WCAG 1.4.12 Text Spacing compliance). Both are generated automatically.

The Storybook is generated immediately after the static component, not batched to the end, because the HTML is still fresh in context. This produces more accurate, complete stories.

---

## Step 6 — CSS Documentation Tab

The evo-web documentation site has a "CSS" tab for every component. This step writes that page using the canonical HTML from Step 4 as its content. Each variant from the HTML catalogue becomes a live demo section paired with a syntax-highlighted code block showing the exact markup a consumer would use. This is written at Step 6 — right after the static Storybook — because the HTML is still in context and this page has no dependency on Marko or React.

---

## Step 6.5 — Deterministic Scaffolding

Before any framework code is written, the `generate-component-scaffold.ts` script runs against the manifest and produces structural scaffolding files with byte-identical precision: the complete `style.ts` (the one-line skin CSS import), the TypeScript `Input` interface for the Marko component, the props type for the React component, and the test file structure. These files are guaranteed correct by the manifest — no AI inference needed. The AI skills that follow read these scaffolds and complete the non-deterministic parts (template body, component body, behavioral logic) on top of the guaranteed foundation. This is what makes the component API surface and type system reliable across runs regardless of other variance in the pipeline.

---

## Step 7 — Accessibility Validation, Pass 1

The first accessibility pass validates the static layer only. It checks that the HTML catalogue has the correct ARIA roles, that the labeling strategy from the manifest is correctly applied, and that the RTL and text spacing stories exist in the static Storybook. If any of these checks fail, **the pipeline stops**. Marko and React should not be built on a broken static foundation.

This pass also writes the static sections of `accessibility+page.marko` — the component's accessibility documentation page. The sections completable at this stage are **Best Practices** (the labeling strategy, decorative vs. informational usage) and the **ARIA Reference table** (every ARIA attribute the component uses, with descriptions). The Keyboard, Screen Reader, and Pointer sections are stubbed and completed in Pass 2 once the interactive layers exist.

For non-interactive components, there is no Pass 2 — all sections are written here.

---

## Step 8 — Marko Component

With a validated static layer as its reference, the Marko 6 component is generated. It wraps the static HTML with dynamic behavior: typed input interfaces for all props and a11y strings, reactive state management using Marko 6 tag variables, slot rendering, event handlers, and ARIA attribute wiring derived directly from the manifest. It reads the BEM class structure established in Step 4 to ensure structural consistency. Server-side snapshot tests and — for interactive components — browser interaction tests are scaffolded alongside the component.

---

## Step 9 — Marko Storybook

The Marko Storybook is generated immediately after the component. Unlike the static Storybook (which is raw HTML), the Marko Storybook is interactive — it uses the real component with live controls. Engineers and designers can explore all prop combinations without writing code. For interactive components (dialogs, accordions, menus), at least one story demonstrates the controlled state pattern using Marko 6's two-way binding syntax.

---

## Step 10 — React Component

The React 19 component is generated in the same spirit as the Marko component, targeting the `@evo-web/react` package. It is a native React 19 component — no `forwardRef`, native `ref` as a prop — that imports skin CSS directly, spreads HTML attributes to the root element, and wires all ARIA attributes and keyboard handlers from the manifest. It references the static HTML from Step 4 for structural consistency. The component is ESM-only and accompanied by a Vitest test scaffold.

---

## Step 11 — React Storybook

The React Storybook follows immediately after the component. It is a CSF3 story file with controls for every prop, a prose description, and a usage import example. For components with interactive behaviors, at least one story demonstrates the controlled pattern with React state. Generated right after the React component while the types and props are in full context.

---

## Step 12 — Accessibility Validation, Pass 2

The second accessibility pass has the full picture — static HTML, Marko template, React component, and all Storybooks. It validates that ARIA attributes are correctly wired in both framework implementations, that keyboard handlers are present and in the correct form, and that interactive stories exist in the Storybooks for keyboard-navigable components.

It then fills in the stubbed sections of the accessibility documentation page: the **Keyboard** section (exact keys and their actions), the **Screen Reader** section (what gets announced in each usage mode), and the **Pointer** section (click/tap behavior). The accessibility meta file is completed here as well. This pass is skipped for non-interactive components and for style-only revisions.

---

## Step 13 — Overview Documentation

The Overview tab of the docs site is written here — the landing page for the component. It includes the component banner (populated from the component registry), a brief description, and cross-links to related components where relevant. The component registry (`component-metadata.json`) is updated at this step via the `update-component-metadata.ts` script, wiring up the Marko Storybook and React Storybook tab links. Storybook paths are set if determinable from the session; otherwise flagged as a follow-up after first deployment.

---

## Step 14 — Build Validation

`pnpm build` is run to confirm all generated files compile without errors. TypeScript errors in Marko or React components, SCSS compilation failures, and import path mistakes are caught here. The pipeline does not advance to QA with a failing build — errors are fixed inline before continuing.

---

## Step 15 — QA

The QA agent runs in complete isolation — a fresh context with no access to the generation session's history. This is intentional: the agent that generated the code should not also be the one reviewing it. The QA agent is told which scope ran, so it only audits files generated in this session, not pre-existing files from prior runs.

It runs two layers of checks. **Layer 1** is a manifest compliance check: are all props, slots, BEM classes, and ARIA attributes present in the generated files? Are there Marko 5 syntax patterns, unresolved placeholder comments, or missing Storybook requirements? Layer 1 is pass/fail. **Layer 2** is an optional fidelity comparison against an existing reference component — it computes a similarity score useful during pipeline development to measure how accurately the AI is reproducing established patterns. Layer 2 is informational and does not block.

---

## Accessible Token Selection for Fixed-Background Variants

Some component variants use a background color that does not change between light and dark modes — warning (yellow) is a notable example. In these cases, text and icon colors must use a **mode-invariant token** rather than a theme-adaptive one.

Theme-adaptive tokens like `color-foreground-primary` resolve to near-black in light mode and near-white in dark mode. On a fixed bright background, the dark-mode value produces inaccessible contrast — white text on yellow-400 yields approximately 1.6:1, far below WCAG AA's 4.5:1 requirement. The correct fallback is a mode-invariant dark token such as `color-neutral-800` (#191919), which provides over 10:1 contrast on yellow-400 in both modes.

When the correct semantic token (e.g. `color-foreground-on-warning`) does not yet exist in `@ebay/design-tokens`, use the mode-invariant fallback and flag the missing token to the design team so it can be added. Once the semantic token exists, update the CSS custom property fallback.

---

## Step 16 — Final Summary and PR

The pipeline prints a complete summary of every step: what was written, what was skipped per scope, any warnings requiring engineer attention, and suggested next steps. The engineer reviews all generated files, resolves any warnings, and files a PR following the standard checklist. A changeset entry is added for versioning.

---

## The Four Scopes

Not every pipeline run regenerates everything. The scope is either specified with `--scope` or determined automatically from the spec diff when a revision is being made.

**`full`** (default) — A new component, or a revision significant enough to touch all layers. Runs all 16 steps.

**`static`** — The HTML structure or SCSS changed (a new BEM modifier, a new variant, a layout adjustment). Runs the static layer, its Storybook, CSS docs, and a11y Pass 1. Does not touch Marko or React. If the static changes require framework updates, the engineer follows up with `--scope interactive`. When a variant is added or removed, `css+page.marko` is always updated as part of this scope — the demo block and its accompanying code snippet must reflect all current variants.

**`interactive`** — Only Marko/React behavior or props changed (a new event, a prop type correction). Skips the static layer entirely and runs only the framework layers, their Storybooks, a11y Pass 2, and the docs update.

**`style`** — SCSS only (a color token update, a spacing change). HTML structure and component interfaces are unchanged. Runs only the SCSS generation, updates `css+page.marko`, then builds and runs QA. Storybooks and a11y docs are untouched.

---

## Codegen Scripts

Alongside the AI skills, the pipeline includes a set of deterministic TypeScript scripts that handle the mechanical parts of code generation without AI involvement. All are exposed as pnpm workspace commands via `pnpm codegen:<name>`.

| Script                           | Command                     | Purpose                                                                                                                           |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `spec-to-manifest.ts`            | `codegen:spec-to-manifest`  | Translates `*.spec.json` into the structured fields of `manifest.json`. Runs as the first phase of manifest generation.           |
| `generate-component-scaffold.ts` | `codegen:scaffold`          | Generates the file and folder skeleton for a new component, including scaffolded `style.ts`, type interfaces, and test structure. |
| `validate-manifest.ts`           | `codegen:validate-manifest` | Validates a `manifest.json` against the manifest schema.                                                                          |
| `update-component-metadata.ts`   | `codegen:update-metadata`   | Updates `component-metadata.json` with new or revised component entries.                                                          |

---

## Discrete Skill: `/evo-icon`

The icon pipeline is a discrete skill designed as part of this system. Engineers invoke it directly — it is not part of the component generation sequence, but it can be triggered by the orchestrator when a major version icon deletion requires removing the icon from Marko and React simultaneously.

It supports three workflows: **Add/Edit** (place an SVG, run three build scripts, and every React component and Marko tag is automatically regenerated from the sprite); **Deprecate** (mark as deprecated in the docs data so it shows in a warning section rather than the main grid, without touching the framework components); and **Delete** (major versions only — removes the SVG, runs the full sprite rebuild, and the framework component files are automatically dropped in the regeneration).

---

## Post-PR Gates

**Percy visual regression** runs on CSS/SCSS changes, capturing screenshots of every component story and flagging visual differences for human approval. This catches unintended side effects of SCSS changes across the component library.

**CI** runs the full test suite — SSR snapshot tests and browser interaction tests scaffolded in Steps 8 and 10. Green CI is required to merge.

---

## What the Pipeline Doesn't Do

The pipeline generates well-structured, spec-compliant scaffolding. It does not replace engineering judgment on complex business logic, nuanced interaction design, or non-standard patterns. Every generated file is a starting point that engineers review and own. The pipeline's value is eliminating the mechanical, error-prone parts of component creation — ARIA attribute mapping, BEM class wiring across layers, test scaffolding, docs hookup — so engineers can focus on what requires real expertise.
