# evo-pipeline - Engineer's Runbook

The AI component generation pipeline for evo-web. Handles new components and
modifications end-to-end: contract → manifest → code → QA → visual verification.

---

## Known Issues

1. The pipeline has a tendency to stop mid-run when it completes certain tasks. Sometimes, it assumes it's done. Multiple hardening rules have been applied, but it still happens on occasion. If it does happen, the correction is to harden the rules further by asking the model where the failure point was and applying the suggested fixes.

## How to run it

Type the slash command in Claude Code:

```
/evo-pipeline <component-name>
```

Examples:

```
/evo-pipeline page-notice
/evo-pipeline accordion
/evo-pipeline section-notice modify component to add a warning variant
```

Use `<component-name>` as the bare BEM block name — no `evo-` prefix.

### Optional flags

```
/evo-pipeline <name> --scope <full|static|interactive|style>
/evo-pipeline <name> --auto-approve
```

- `--scope` — override the automatically detected scope (see Scopes below)
- `--auto-approve` — skip the Gate 2 manifest review prompt; proceed straight to generation

---

## What to have ready before running

The pipeline needs two input files per component. Either place them on disk or
paste them directly into the chat — both approaches work.

| File | Location | Purpose |
|---|---|---|
| `_contract.md` | `src/routes/_index/components/<name>/` | Prose description: purpose, props, variants, behaviors, accessibility |
| `<name>.spec.json` | `src/routes/_index/components/<name>/` | Machine-readable spec from design: typed props, tokens, slots, states |

If the spec is not yet available you can proceed with the contract alone, but
expect more inferred fields and a larger gap report.

---

## What happens when you run it

The pipeline detects where you are and picks up from there. A fresh run goes
through three phases:

### Phase 1 — Manifest generation (automatic)

1. Reads your contract and spec
2. Validates all design tokens referenced in the spec exist in the token system
3. Runs `npm run codegen:spec-to-manifest` to translate spec fields deterministically
4. Runs `/evo-create-component-manifest` to fill in contract-sourced fields (a11y,
   behaviors, caller obligations, keyboard model)
5. Writes `manifest.json` and `gap-report.json` to the component folder

### Phase 2 — Gate 2 review (human checkpoint)

The pipeline presents a curated summary of the manifest for your review:

- Every prop, slot, and a11y string
- All BEM modifiers and design tokens
- Accessibility role, label strategy, and keyboard model
- Any fields the pipeline inferred (🟡) or couldn't determine (🔴)
- Any spec deviations (⚠️) where the implementation must differ from the spec
  for correctness reasons (e.g. contrast failures)

**This is the last human checkpoint before any code is written.** Resolve
all 🔴 items before approving. Verify 🟡 items. Type `approved` to proceed.

### Phase 3 — Code generation (automatic)

Runs `/evo-component` with the appropriate scope, then:

- `/evo-qa` — verifies generated files match the manifest spec
- Visual verification — navigates to the component CSS docs page in a live
  browser, takes screenshots in light and dark mode, checks for contrast failures

---

## Scopes

The pipeline auto-detects scope from the spec diff. You can also set it manually.

| Scope | What it generates | When to use |
|---|---|---|
| `full` | All layers: SCSS, stories, Marko, React, docs | New component, or variant add/remove |
| `static` | SCSS + static stories + CSS docs | HTML structure change with no framework impact |
| `interactive` | Marko + React + framework stories | Behavior or prop interface change; SCSS already correct |
| `style` | SCSS token values only | Token/color/spacing tweak; no structural changes |

**Important:** Adding or removing a variant (a new entry in `tokenVariants` or
`states`) always escalates to at least `interactive` — the framework layers need
to reflect the updated prop enum. If framework layers don't exist yet, scope
becomes `full`.

---

## Resuming a run

If the pipeline stops mid-run (network issue, error, etc.) just re-run the same
command. It reads `pipeline-state.json` from the component folder and picks up
from where it left off:

```
/evo-pipeline <name>
```

To start completely fresh, type `reset` when the pipeline surfaces the prior run.

---

## Common scenarios

**New component from scratch:**
```
/evo-pipeline accordion
```
Paste or place `_contract.md` and `accordion.spec.json` first. The pipeline will
walk you through Gate 2 and generate all layers.

**Adding a variant to an existing component:**
```
/evo-pipeline page-notice modify component to add a warning variant
```
Attach the updated spec. The pipeline diffs it against what's committed, flags
the scope as `full` (because a new `tokenVariants` entry was added), and proceeds.

**Style-only token update:**
```
/evo-pipeline button --scope style
```
Skips HTML, Marko, and React. Updates SCSS token values and rebuilds dist.

**Experienced engineer, skip the review prompt:**
```
/evo-pipeline section-notice --auto-approve
```

---

## Output locations

| What | Where |
|---|---|
| Manifest + gap report | `src/routes/_index/components/<name>/` |
| SCSS | `packages/skin/src/sass/<name>/<name>.scss` |
| Static stories | `packages/skin/src/sass/<name>/stories/` |
| Marko component | `packages/evo-marko/src/tags/evo-<name>/` |
| React component | `packages/evo-react/src/<name>/` |
| CSS docs | `src/routes/_index/components/<name>/css+page.marko` |
| Accessibility docs | `src/routes/_index/components/<name>/accessibility+page.marko` |
| Overview docs | `src/routes/_index/components/<name>/+page.marko` |

---

## Step index (full scope)

When you run a `full` generation you'll see these steps in the pipeline output.
Scoped runs skip steps that don't apply. If a step fails, the sub-skill listed
is where to look.

| Step | What it produces | Sub-skill |
|---|---|---|
| 1 | Manifest + gap report | `/evo-create-component-manifest` |
| 2 | Token validation | pipeline (built-in) |
| 3 | Canonical HTML for all variants | `/evo-static-component` |
| 4 | SCSS — BEM structure + token bindings | `/evo-static-component` |
| 5 | Static (CSS) Storybook stories | `/evo-static-storybook` |
| 6 | CSS docs page (`css+page.marko`) | `/evo-docs-hookup` |
| 7 | A11y pass 1 — validates static HTML + writes static accessibility docs | `/evo-a11y` |
| 8 | Marko 6 component (`index.marko`, `style.ts`, tests) | `/evo-marko-component` |
| 9 | React 19 component (`index.tsx`, tests) | `/evo-react-component` |
| 10 | Marko Storybook stories | `/evo-marko-storybook` |
| 11 | React Storybook stories | `/evo-react-storybook` |
| 12 | A11y pass 2 — validates Marko + React + writes interactive accessibility docs | `/evo-a11y` |
| 13 | Overview docs + metadata (`+page.marko`, `component-metadata.json`) | `/evo-docs-hookup` |
| 14 | Build verification (`npm run build`) | pipeline (built-in) |
| 15 | QA Layer 1 — manifest fidelity check | `/evo-qa` |
| 16 | Visual QA — browser screenshots, light + dark mode | pipeline (built-in) |

---

## After generation

1. Review the generated files — open the key files and sanity-check the output
2. Resolve any 🟡 warnings listed in the final summary
3. Add a changeset: `/evo-release-workflow`
4. File a PR following the checklist in `CLAUDE.md`

---

## Troubleshooting

**"Missing design tokens — pipeline blocked"**
A token in the spec doesn't exist in the token system. Check
`packages/skin/dist/tokens/evo-light.css` and
`node_modules/@ebay/design-tokens/dist/mixins/evo-light.scss`.
If the token genuinely doesn't exist, it needs to be added to skin tokens before
generation can proceed.

**"Prior run ended with failed step(s)"**
The pipeline surfaces the exact error. Fix the underlying issue, then re-run
`/evo-pipeline <name>`. The pipeline resumes from the failed step.

**Gate 2 has 🔴 blocking gaps**
These are fields the pipeline cannot safely infer — typically ARIA attribute
ownership, keyboard model details, or complex slot structures. Edit `manifest.json`
directly to fill them in, then type `approved`.
