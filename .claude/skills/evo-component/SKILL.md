---
name: evo-component
description: >
  Orchestrator for the evo-web AI component generation pipeline. Reads an
  approved manifest.json and generates all component layers in the correct
  sequence, with scope-aware step selection. Supports four scopes: full (all
  16 steps, default for new components), static (HTML + SCSS changes), style
  (SCSS only), and interactive (framework behavior changes). Run this after
  /evo-create-component-manifest and engineer approval. Use this skill whenever
  the user says "generate the component", "run evo-component", "start code gen",
  "build the component from the manifest", "kick off generation for [component]",
  "the manifest is approved, go ahead", "proceed with generation", "looks good,
  generate it", "produce the Marko and React files", or any variant of "the
  manifest/gap report is approved and I want to generate code now". Do NOT wait
  for the user to name this skill explicitly — if they have an approved manifest
  and want to generate code, this is the skill to use.
---

# Generate Component

This skill reads an approved `manifest.json` and generates component layers in
a fixed, scope-aware sequence. The manifest is the single source of truth.

---

## Invocation

```
/evo-component <component-name> [--scope <scope>] [--reference <component>]
```

- `component-name` — kebab-case (e.g. `evo-accordion`)
- `--scope` — `full` (default), `static`, `interactive`, or `style`
- `--reference` — triggers Layer 2 fidelity comparison in QA

If `$ARGUMENTS` is empty, ask: "Which component should I generate?"
Wait. Do not proceed until you have a component name.

---

## Step 1 — Read and validate the manifest

Read `src/routes/_index/components/$COMPONENT/manifest.json` in full.

If the file does not exist, stop and report the error.

---

## Step 2 — Gate: resolve blocking gaps

Scan `manifest.json["gaps"]` for `confidence: "low"` or `source: "missing"`.
If any exist, list them and stop. Medium-confidence gaps proceed as inline
`// TODO: verify` comments.

---

## Step 2.5 — State file management

The pipeline uses `src/routes/_index/components/$COMPONENT/pipeline-state.json` as a
disk-resident record of step progress. Read it at startup, create it if absent, detect
stalls, and fast-forward past completed steps.

### Schema

```json
{
  "component": "accordion",
  "scope": "full",
  "manifestHash": "<md5-of-manifest-json>",
  "startedAt": "2026-06-10T09:00:00.000Z",
  "updatedAt": "2026-06-10T09:14:22.000Z",
  "steps": {
    "4": { "status": "pending" },
    "5": { "status": "pending" },
    "6": { "status": "pending" },
    "6.5": { "status": "pending" },
    "7": { "status": "pending" },
    "micro-qa-1": { "status": "pending" },
    "8": { "status": "pending" },
    "9": { "status": "pending" },
    "10": { "status": "pending" },
    "11": { "status": "pending" },
    "12": { "status": "pending" },
    "micro-qa-2": { "status": "pending" },
    "13": { "status": "pending" },
    "14": { "status": "pending" },
    "15": { "status": "pending" }
  }
}
```

`status` values: `pending` | `in-progress` | `complete` | `failed` | `skipped`

### Startup procedure

> **Note on `$SCOPE`:** This is the value from `--scope` on invocation (default: `full`). The full scope-to-steps mapping is in the scope reference table at the end of this skill. For state file initialization, steps not included in the current scope should be set to `skipped` instead of `pending`.

**1. Compute the manifest hash:**

```bash
# macOS: md5 -q src/routes/_index/components/$COMPONENT/manifest.json
# Cross-platform (Node):
node -e "const c=require('crypto'),fs=require('fs');process.stdout.write(c.createHash('md5').update(fs.readFileSync('src/routes/_index/components/$COMPONENT/manifest.json')).digest('hex'))"
```

Store this value as `$MANIFEST_HASH` for use in subsequent steps.

**2. Check if the state file exists:**

```bash
cat src/routes/_index/components/$COMPONENT/pipeline-state.json 2>/dev/null || echo "NOT_FOUND"
```

**3a. If NOT_FOUND — create the state file:**

Initialize all steps for the resolved scope as `pending` (steps not in this scope
set to `skipped`). See the scope-to-steps table in Step 3.

> **Before running:** Substitute the actual values of `$COMPONENT`, `$SCOPE`, and `$MANIFEST_HASH` into the command string — these are not shell environment variables that persist across tool calls.

```bash
node -e "
const fs = require('fs');
const path = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
const now = new Date().toISOString();
const state = {
  component: '$COMPONENT',
  scope: '$SCOPE',
  manifestHash: '$MANIFEST_HASH',
  startedAt: now,
  updatedAt: now,
  steps: {
    '4':          { status: 'pending' },
    '5':          { status: 'pending' },
    '6':          { status: 'pending' },
    '6.5':        { status: 'pending' },
    '7':          { status: 'pending' },
    'micro-qa-1': { status: 'pending' },
    '8':          { status: 'pending' },
    '9':          { status: 'pending' },
    '10':         { status: 'pending' },
    '11':         { status: 'pending' },
    '12':         { status: 'pending' },
    'micro-qa-2': { status: 'pending' },
    '13':         { status: 'pending' },
    '14':         { status: 'pending' },
    '15':         { status: 'pending' }
  }
};
fs.mkdirSync(require('path').dirname(path), { recursive: true });
fs.writeFileSync(path, JSON.stringify(state, null, 2));
console.log('State file created.');
"
```

**3b. If state file exists — validate and resume:**

Parse the content already read in sub-step 2. Then:

> If parsing fails (corrupted or partial write), treat this as NOT_FOUND: log a warning `⚠️ pipeline-state.json is corrupt — starting fresh.` and proceed to sub-step 3a to recreate it.

**(i) Manifest hash check:**

Compare the stored `manifestHash` against `$MANIFEST_HASH`. If they differ:

```
⚠️  Manifest changed since this pipeline run started.
    Stored hash:   <stored>
    Current hash:  <current>

    Steps already marked complete were generated from a different manifest.
    Options:
      • Type "reset" to clear the state file and restart from Step 4.
      • Type "continue" to proceed — completed steps will NOT be re-run even
        though the manifest changed. Use this only if the manifest change is
        cosmetic and does not affect the layers already generated.
```

Stop and wait. Do not proceed until the engineer responds.

If "reset": delete `pipeline-state.json` and re-run Step 2.5 as if NOT_FOUND.
If "continue": update `manifestHash` in the state file and proceed normally.

**(ii) Stall detection:**

For each step where `status === "in-progress"`, check the `startedAt` timestamp.
If `startedAt` is more than 10 minutes ago relative to now:

> **Before running:** Substitute the actual values of `$COMPONENT`, `$SCOPE`, and `$MANIFEST_HASH` into the command string — these are not shell environment variables that persist across tool calls.

```bash
node -e "
const fs = require('fs');
const path = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
const state = JSON.parse(fs.readFileSync(path, 'utf8'));
const now = Date.now();
const STALL_MS = 10 * 60 * 1000;
Object.entries(state.steps).forEach(([stepId, step]) => {
  if (step.status === 'in-progress') {
    const age = now - new Date(step.startedAt).getTime();
    if (age > STALL_MS) {
      console.log('STALLED:' + stepId);
      state.steps[stepId] = { status: 'failed', error: 'Stalled — in-progress for >' + Math.round(age/60000) + ' min. Re-run to retry.' };
    }
  }
});
state.updatedAt = new Date().toISOString();
fs.writeFileSync(path, JSON.stringify(state, null, 2));
"
```

If any steps were stalled and marked failed, surface them:

```
⚠️  Stalled step detected and marked failed:
    Step <N>: was in-progress for >10 minutes — treated as failed.
    The pipeline will halt at Step <N>. Fix the issue, then
    re-run /evo-component $COMPONENT to retry from that step.
```

**(iii) Print resume state:**

After stall detection, print a summary of which steps are complete, which
will be skipped (wrong scope), and which will now run:

```
▶  Resuming <COMPONENT> [scope: <scope>]
   ✅ Step 4  — complete (from prior run)
   ✅ Step 5  — complete (from prior run)
   ⏭  Step 6  — skipped (scope: <scope>)
   ▶  Step 7  — will run now (first pending step)
   ...
```

→ After printing the resume summary, proceed to Step 3 to resolve scope and begin execution from the first pending step.

### Step marking helpers

Use these patterns at the start and end of every step execution:

**Mark step in-progress (before invoking sub-skill):**

> **Before running:** Substitute the actual values of `$COMPONENT`, `$SCOPE`, and `$MANIFEST_HASH` into the command string — these are not shell environment variables that persist across tool calls.

```bash
node -e "
const fs = require('fs');
const p = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
s.steps['<STEP_ID>'] = { status: 'in-progress', startedAt: new Date().toISOString() };
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
"
```

Replace `<STEP_ID>` with the actual step key string (e.g. `'7'`, `'micro-qa-1'`) before running.

**Read step status after sub-skill returns (to confirm completion record was written):**

> **Before running:** Substitute the actual values of `$COMPONENT`, `$SCOPE`, and `$MANIFEST_HASH` into the command string — these are not shell environment variables that persist across tool calls.

```bash
node -e "
const fs = require('fs');
const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
console.log(JSON.stringify(s.steps['<STEP_ID>']));
"
```

Replace `<STEP_ID>` with the actual step key string (e.g. `'7'`, `'micro-qa-1'`) before running.

If the returned status is NOT `complete`, the sub-skill did not finish cleanly.
Treat this as a step failure — do NOT advance.

---

## ⛔ Execution rule — no pausing between steps

You are an automated orchestrator. After each sub-skill returns, you MUST
immediately proceed to the next step. Do not end your response turn between
steps. Do not ask the user whether to continue. Do not summarize and wait.

The ONLY valid reasons to stop and wait for input are:

1. Gate 2 — manifest review (the engineer must type "approved")
2. A 🔴 blocking failure inside a sub-skill that cannot be fixed inline

Every step description below ends with an explicit "→ Next:" line. Follow it.

---

## Step 3 — Determine scope and print plan

If `--scope` was not provided, ask:

> "What changed in this revision?
>
> - `full` — new component or significant cross-layer changes (default)
> - `static` — HTML structure and/or SCSS changed; framework layers need updating
> - `interactive` — only Marko/React behavior or props changed; static layer untouched
> - `style` — SCSS-only change; no structural or behavioral changes"

Then print the generation plan:

```
Generating $COMPONENT  [scope: <scope>]

Steps that will run:
  4   /evo-static-component     [full, static, style(SCSS only)]
  5   /evo-static-storybook     [full, static]
  6   /evo-docs-hookup css-only [full, static, style]
  7   /evo-a11y Pass 1          [full, static] — writes static a11y docs
  8   /evo-marko-component      [full, interactive]
  9   /evo-marko-storybook      [full, interactive]
  10  /evo-react-component      [full, interactive]
  11  /evo-react-storybook      [full, interactive]
  12  /evo-a11y Pass 2          [full, interactive] — fills interactive a11y docs
  13  /evo-docs-hookup full     [full, static, interactive]
  14  npm run build             [all scopes]
  15  /evo-qa (forked)          [all scopes]
  16  Final summary
```

Steps marked ⏭ for this scope are skipped — print them clearly.

---

## Step 4 — Static component

**Scopes: full, static, style**

Invoke: `/evo-static-component` (inline)

- **full / static:** Generate both HTML catalogue and SCSS (SCSS conditional on tokens/figma)
- **style:** Generate SCSS only — HTML structure is unchanged. Tell the skill: "Style scope — regenerate SCSS only. Do not regenerate HTML."

**Expected output:**

- HTML catalogue in context (full/static only)
- `packages/skin/src/sass/<block>/<block>.scss` (if tokens/figma available)
- `skin-headless.scss` updated (if SCSS generated)

**style scope:** if no tokens/figma → nothing to do here, print ⏭ and continue to Step 6.

→ **Next:** After this skill returns, print "Step 4 complete." then immediately invoke Step 5.

---

## Step 5 — Static storybook

**Scopes: full, static** | ⏭ skip for: interactive, style

Invoke: `/evo-static-storybook` (inline)

Reads the HTML catalogue from Step 4 context. Writes CSF2 stories with RTL
and textSpacing exports.

→ **Next:** After this skill returns, print "Step 5 complete." then immediately invoke Step 6.

---

## Step 6 — CSS docs (css-only)

**Scopes: full, static, style** | ⏭ skip for: interactive

Invoke: `/evo-docs-hookup` (inline) with scope `"css-only"`

Tell the skill: "css-only scope — write only css+page.marko and css+meta.json.
Do not write +page.marko, +meta.json, or update component-metadata.json."

- **full / static:** HTML catalogue from Step 4 is in context — the skill uses it directly
- **style:** Step 4 ran SCSS-only, so no HTML catalogue is in context. Tell the skill:
  "Style scope — no HTML catalogue in context. For any new variants, read
  packages/skin/src/sass/<block>/stories/<block>.stories.js to get the HTML
  for each missing story export, then add the corresponding variant sections
  to css+page.marko. Do not rewrite existing sections."

**Expected output:**

- `src/routes/_index/components/<block>/css+page.marko`
- `src/routes/_index/components/<block>/css+meta.json`

→ **Next:** After this skill returns, print "Step 6 complete." then immediately invoke Step 7 (or Step 6.5 if framework layers are next).

---

## Step 6.5 — Generate component scaffold (deterministic files)

Run before any framework generation. This produces byte-identical structural files
so the AI skills only need to complete the non-deterministic parts (template body,
component body, behavioral logic):

```bash
npx tsx scripts/codegen/generate-component-scaffold.ts $COMPONENT
```

Files written:

- `packages/evo-marko/src/tags/<name>/style.ts` — complete
- `packages/evo-marko/src/tags/<name>/index.marko` — Input interface scaffold + TODO template body
- `packages/evo-marko/src/tags/<name>/test/test.server.ts` — complete structure with stubs
- `packages/evo-marko/src/tags/<name>/test/test.browser.ts` — stub (if `keyboardModel` present)
- `packages/evo-react/src/<name>/index.tsx` — Props interface scaffold + TODO component body

If the script errors, surface it and stop — do not proceed to framework generation.

After this step, tell each framework sub-skill: "Scaffold files are already written at
these paths. Read the existing file and complete only the TODO sections — do not
regenerate the Input interface, Props type, style.ts, or test structure."

→ **Next:** After this script completes, immediately invoke Step 7.

---

## Step 7 — A11y Pass 1 — static layer + writes static a11y docs

**Scopes: full, static** | ⏭ skip for: interactive, style

Invoke: `/evo-a11y` (inline) with scope declaration:
`"Pass 1 — static layer only. Steps 4–6 have run in this pipeline run.
Validate the static HTML and static storybook. Write the static sections
of accessibility+page.marko. Do NOT evaluate index.marko or index.tsx."`

**Pass 1 validates:**

- ARIA roles and label strategy in the static HTML
- RTL and textSpacing stories in the static storybook
- 🔴 blocking issues stop the pipeline here

**Pass 1 writes static sections of `accessibility+page.marko`:**

- Best Practices (from manifest a11y + callerObligations)
- ARIA Reference table (from manifest.a11y.ariaAttributes[])
- Skeleton placeholders for Keyboard, Screen Reader, Pointer (to be filled by Pass 2)

If 🔴 blocking issues: stop. Engineer resolves before proceeding.

→ **Next:** If no 🔴 issues, print "Step 7 complete." then immediately invoke Step 8 (or Step 13 if scope is static).

---

## Step 8 — Marko component

**Scopes: full, interactive** | ⏭ skip for: static, style

Invoke: `/evo-marko-component` (inline)

Reads static HTML from context (Step 4, full scope) or from existing storybook
file (interactive scope — no Step 4 was run). Generates Marko 6 component.

**Expected output** (`packages/evo-marko/src/tags/<name>/`):

- `index.marko`, `style.ts`, `test/test.server.ts`, `test/test.browser.ts` (if interactive)

→ **Next:** After this skill returns, print "Step 8 complete." then immediately invoke Step 9.

---

## Step 9 — Marko storybook

**Scopes: full, interactive** | ⏭ skip for: static, style

Invoke: `/evo-marko-storybook` (inline)

**Expected output:**

- `packages/evo-marko/src/tags/<name>/<name>.stories.ts` + `examples/`

→ **Next:** After this skill returns, print "Step 9 complete." then immediately invoke Step 10.

---

## Step 10 — React component

**Scopes: full, interactive** | ⏭ skip for: static, style

Invoke: `/evo-react-component` (inline)

**Expected output** (`packages/evo-react/src/<name>/`):

- `index.tsx`, `__tests__/index.spec.tsx`

→ **Next:** After this skill returns, print "Step 10 complete." then immediately invoke Step 11.

---

## Step 11 — React storybook

**Scopes: full, interactive** | ⏭ skip for: static, style

Invoke: `/evo-react-storybook` (inline)

**Expected output:**

- `packages/evo-react/src/<name>/<basename>.stories.tsx`

→ **Next:** After this skill returns, print "Step 11 complete." then immediately invoke Step 12.

---

## Step 12 — A11y Pass 2 — full validation + fills interactive a11y docs

**Scopes: full, interactive** | ⏭ skip for: static, style

Invoke: `/evo-a11y` (inline) with scope declaration:
`"Pass 2 — full validation. Steps 4–11 have run in this pipeline run
(or Steps 8–11 for interactive scope). Validate all layers. Fill in the
interactive sections of accessibility+page.marko."`

**Pass 2 validates:**

- Static HTML (re-check)
- `index.marko` — ARIA wiring, keyboard handlers, Marko 6 syntax
- `index.tsx` — ARIA wiring, keyboard handlers
- Marko storybook — interactive story if keyboardModel present
- React storybook — controlled story if keyboardModel present

**Pass 2 fills in interactive sections of `accessibility+page.marko`:**

- Keyboard section (from manifest.keyboardModel + manifest.keyboardInteractions[])
- Screen Reader section (from manifest.a11y.screenReaderAnnouncement — interactive states)
- Pointer section (active/interactive behavior)
- Also writes `accessibility+meta.json` (full picture now available)

**For `--scope interactive`:** The accessibility+page.marko may already have
static sections from a previous run. Fills in/updates only the interactive
sections without overwriting the static sections.

If 🔴 blocking issues: fix inline before build.

→ **Next:** If no 🔴 issues, print "Step 12 complete." then immediately invoke Step 13.

---

## Step 13 — Docs hookup (full)

**Scopes: full, static, interactive** | ⏭ skip for: style

Invoke: `/evo-docs-hookup` (inline) with scope `"full"`

Tell the skill: "full scope — write +page.marko, +meta.json, and update
component-metadata.json. Do NOT rewrite css+page.marko (already done in Step 6)."

**Expected output:**

- `src/routes/_index/components/<block>/+page.marko`
- `src/routes/_index/components/<block>/+meta.json`
- `src/data/component-metadata.json` entry added/updated

→ **Next:** After this skill returns, print "Step 13 complete." then immediately run Step 14 (npm run build).

---

## Step 14 — Build validation

**Scopes: all**

Run: `npm run build`

Fix failures inline. Do not advance to QA with a failing build.

→ **Next:** After the build passes, immediately invoke Step 15.

---

## Step 15 — QA validation

**Scopes: all**

Invoke: `/evo-qa` via the Skill tool (inline).

Note: `evo-qa` is not a registered agent type and cannot be invoked via the
Agent tool. The `evo-qa` skill contains isolation-by-instruction — it explicitly
ignores conversation context and reads only from disk, which is sufficient for
its binary file/manifest checks.

Pass context to the skill in your invocation args:

- Component name, scope, manifest path
- All file paths generated in this run
- Any known approved deviations from gap-report.json

| Layer   | Runs when              | What it checks                                                                                                             |
| ------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Layer 1 | Always                 | Files present (per scope), props/slots/BEM/ARIA match manifest, no Marko 5 patterns, no gap placeholders, storybook format |
| Layer 2 | `--reference` provided | Structural delta + fidelity score vs. reference                                                                            |

→ **Next:** After QA returns, fix any 🔴 failures inline and re-run. Once QA passes, immediately proceed to Step 16.

---

## Step 16 — Final summary

```
## Component generated: $COMPONENT  [scope: <scope>]

Static layer:
  [✅ | ⏭] /evo-static-component — HTML + SCSS
  [✅ | ⏭] /evo-static-storybook — CSF2 stories
  [✅ | ⏭] css+page.marko written
  [✅ | ⏭] /evo-a11y Pass 1 — static a11y docs written

Marko layer:
  [✅ | ⏭] index.marko + style.ts
  [✅ | ⏭] Marko storybook

React layer:
  [✅ | ⏭] index.tsx
  [✅ | ⏭] React storybook

A11y Pass 2:  [✅ | ⏭] Interactive sections filled
Docs (full):  [✅ | ⏭] Overview + component-metadata.json
Build:        ✅ Passed
QA L1:        ✅ Passed  (or: 🔴 N failure(s) — list each)
QA L2:        ✅ N/A     (or: fidelity score + delta)

─────────────────────────────────────────────────
Next steps:
[scope: style]  1. Review SCSS output. File PR. /evo-release-workflow
[scope: static] 1. Review static layer + a11y docs.
                2. Run /evo-component <name> --scope interactive if framework needs updating.
                3. File PR. /evo-release-workflow
[scope: full]   1. Review generated files and resolve any 🟡 warnings.
                2. Fill storybook paths in component-metadata.json after first deploy.
                3. File PR. /evo-release-workflow
─────────────────────────────────────────────────
```

---

## Scope reference

| Scope         | When to use                                   | Steps run         |
| ------------- | --------------------------------------------- | ----------------- |
| `full`        | New component; cross-layer changes            | 4–16              |
| `static`      | HTML structure and/or SCSS changed            | 4–7, 13–16        |
| `interactive` | Only Marko/React behavior or props changed    | 8–16              |
| `style`       | SCSS only; no structural or behavioral change | 4(SCSS), 6, 14–16 |

## Sub-skill scope declarations

All sub-skills run inline. The orchestrator explicitly tells each skill what
scope this invocation is running — never infer from disk state.

| Sub-skill                    | Context    | Scope declaration pattern                                                             |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------- |
| `/evo-static-component`      | Inline     | "full/static scope: full HTML + SCSS" or "style scope: SCSS only"                     |
| `/evo-static-storybook`      | Inline     | (no scope needed — always reads Step 4 HTML)                                          |
| `/evo-docs-hookup` (Step 6)  | Inline     | "css-only scope"                                                                      |
| `/evo-a11y` Pass 1           | Inline     | "Pass 1 — static layer only; steps 4–6 ran"                                           |
| `/evo-marko-component`       | Inline     | (reads static HTML from context or existing storybook)                                |
| `/evo-marko-storybook`       | Inline     | (no scope needed)                                                                     |
| `/evo-react-component`       | Inline     | (reads static HTML from context or existing storybook)                                |
| `/evo-react-storybook`       | Inline     | (no scope needed)                                                                     |
| `/evo-a11y` Pass 2           | Inline     | "Pass 2 — full scope; steps 4–11 ran" or "Pass 2 — interactive scope; steps 8–11 ran" |
| `/evo-docs-hookup` (Step 13) | Inline     | "full scope — Overview + metadata only, css+page.marko already written"               |
| `/evo-qa`                    | **Forked** | Told: scope used, which files were generated this run                                 |
