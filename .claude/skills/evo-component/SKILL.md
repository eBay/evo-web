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

**Mark step complete (for fast-forward when expected outputs already exist on disk):**

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual step key for `<STEP_ID>`.

```bash
node -e "
const fs = require('fs');
const p = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
s.steps['<STEP_ID>'] = { status: 'complete', completedAt: new Date().toISOString(), note: 'fast-forwarded — outputs already existed on disk' };
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
"
```

Replace `<STEP_ID>` with the actual step key string (e.g. `'4'`, `'6.5'`) before running.

---

## ⛔ Execution rule — deterministic transitions, no pausing between steps

You are an automated orchestrator. Transitions between steps are determined by
reading `pipeline-state.json` — NOT by evaluating prior output prose. After each
sub-skill returns, you MUST:

1. Read the state file to confirm the step's status is `complete`.
2. If `complete`: immediately advance to the next step in the transition table.
3. If `failed` or still `in-progress`: halt and surface the failure (see Failure halting below).
4. Never ask the user whether to continue between steps.

The ONLY valid reasons to stop and wait for input are:

1. Gate 2 — manifest review (engineer must type "approved")
2. A `failed` step in the state file that cannot be fixed inline
3. Manifest hash mismatch (engineer must type "reset" or "continue")

### Transition table

Read this table as: "after step N is complete, run step M next."
Steps NOT in the scope column for the current scope are marked `skipped` in the state file
and bypassed — the orchestrator does not invoke them.

| Step       | Sub-skill                  | full | static | interactive | style |
| ---------- | -------------------------- | :--: | :----: | :---------: | :---: |
| 4          | evo-static-component       |  ✅  |   ✅   |     ⏭      |  ✅   |
| 5          | evo-static-storybook       |  ✅  |   ✅   |     ⏭      |  ⏭   |
| 6          | evo-docs-hookup (css-only) |  ✅  |   ✅   |     ⏭      |  ✅   |
| 6.5        | scaffold generation        |  ✅  |   ⏭   |     ✅      |  ⏭   |
| 7          | evo-a11y Pass 1            |  ✅  |   ✅   |     ⏭      |  ⏭   |
| micro-qa-1 | Micro-QA checkpoint        |  ✅  |   ✅   |     ⏭      |  ⏭   |
| 8          | evo-marko-component        |  ✅  |   ⏭   |     ✅      |  ⏭   |
| 9          | evo-marko-storybook        |  ✅  |   ⏭   |     ✅      |  ⏭   |
| 10         | evo-react-component        |  ✅  |   ⏭   |     ✅      |  ⏭   |
| 11         | evo-react-storybook        |  ✅  |   ⏭   |     ✅      |  ⏭   |
| 12         | evo-a11y Pass 2            |  ✅  |   ⏭   |     ✅      |  ⏭   |
| micro-qa-2 | Micro-QA checkpoint        |  ✅  |   ⏭   |     ✅      |  ⏭   |
| 13         | evo-docs-hookup (full)     |  ✅  |   ✅   |     ✅      |  ⏭   |
| 14         | npm run build              |  ✅  |   ✅   |     ✅      |  ✅   |
| 15         | evo-qa (Agent spawn)       |  ✅  |   ✅   |     ✅      |  ✅   |

### Per-step artifact definitions

Before running any step, check if its expected outputs already exist on disk.
If they do AND the step is still `pending` in the state file, mark it `complete`
(fast-forward) and advance — do not invoke the sub-skill again.

| Step | requiredInputs (must exist before running)                  | expectedOutputs (existence confirms complete)                                               |
| ---- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 4    | `manifest.json`                                             | `packages/skin/src/sass/<block>/<block>.scss`                                               |
| 5    | `packages/skin/src/sass/<block>/<block>.scss`               | `packages/skin/src/sass/<block>/stories/<block>.stories.js`                                 |
| 6    | `manifest.json`                                             | `src/routes/_index/components/<block>/css+page.marko`                                       |
| 6.5  | `manifest.json`                                             | `packages/evo-marko/src/tags/<name>/index.marko`, `packages/evo-react/src/<name>/index.tsx` |
| 7    | `<block>.scss`, `<block>.stories.js`                        | `src/routes/_index/components/<block>/accessibility+page.marko`                             |
| 8    | `packages/evo-marko/src/tags/<name>/index.marko` (scaffold) | `packages/evo-marko/src/tags/<name>/index.marko` (complete)                                 |
| 9    | `packages/evo-marko/src/tags/<name>/index.marko`            | `packages/evo-marko/src/tags/<name>/<name>.stories.ts`                                      |
| 10   | `packages/evo-react/src/<name>/index.tsx` (scaffold)        | `packages/evo-react/src/<name>/index.tsx` (complete)                                        |
| 11   | `packages/evo-react/src/<name>/index.tsx`                   | `packages/evo-react/src/<name>/<basename>.stories.tsx`                                      |
| 12   | `index.marko` (complete), `index.tsx` (complete)            | `src/routes/_index/components/<block>/accessibility+meta.json`                              |
| 13   | `manifest.json`, `accessibility+page.marko`                 | `src/routes/_index/components/<block>/+page.marko`                                          |
| 14   | (prior steps complete)                                      | Build exit code 0                                                                           |
| 15   | All expected outputs for scope                              | `pipeline-state.json` step 15 status = complete                                             |

### Pre-step preamble (run before EVERY step)

Before marking any step `in-progress` and invoking its sub-skill:

**1. Check if already complete (idempotent skip):**

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual step key for `<STEP_ID>` — these are not shell variables.

```bash
node -e "
const fs = require('fs');
const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
console.log(s.steps['<STEP_ID>'].status);
"
```

If `complete` or `skipped`: print `⏭ Step <STEP_ID> already complete — skipping.` and advance.

**2. Validate required inputs exist:**

For each path in the step's `requiredInputs` list (from the table above):

```bash
test -f "<requiredInput>" && echo "EXISTS" || echo "MISSING: <requiredInput>"
```

If any required input is MISSING:

```
🔴 Pipeline halted — Step <N> cannot start.
   Missing required input: <path>
   This input should have been produced by Step <prior-step>.
   Check Step <prior-step>'s completion record in pipeline-state.json for errors.
```

Do not invoke the sub-skill. Mark this step `failed`. Stop.

**3. Mark step in-progress:**

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual step key for `<STEP_ID>`.

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

Then invoke the sub-skill.

### Post-step verification (run after EVERY sub-skill returns)

After the sub-skill returns, run these checks before advancing:

**1. Read completion record:**

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual step key for `<STEP_ID>`.

```bash
node -e "
const fs = require('fs');
const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
console.log(JSON.stringify(s.steps['<STEP_ID>'], null, 2));
"
```

If status is NOT `complete`: the sub-skill did not finish cleanly. Halt (see Failure halting).

**2. Content validation (hallucination checks):**

Run the following checks based on the step just completed:

_After Step 4 (SCSS generated):_

> Substitute the actual BEM block name for `$BLOCK`.

```bash
# BEM block must exist
grep -c "\.$BLOCK {" packages/skin/src/sass/$BLOCK/$BLOCK.scss
# No deprecated BEM nesting
grep -c "&--" packages/skin/src/sass/$BLOCK/$BLOCK.scss
```

The first grep must return ≥ 1. The second must return 0 (nesting forbidden).

_After Step 8 (Marko generated):_

> Substitute the actual BEM block name for `$BLOCK` and the actual tag name (e.g. `evo-accordion`) for `$NAME`.

```bash
# No Marko 5 scriptlet patterns
grep -c "^\$ \(let\|const\|var\)" packages/evo-marko/src/tags/$NAME/index.marko
# BEM block class must be applied
grep -c "\"$BLOCK\"" packages/evo-marko/src/tags/$NAME/index.marko
```

First grep must return 0 (no deprecated patterns); second must return ≥ 1 (BEM class present).

_After Step 10 (React generated):_

> Substitute the actual bare component name (e.g. `accordion`) for `$NAME`.

```bash
# Component must export a named function or const
grep -c "^export \(function\|const\)" packages/evo-react/src/$NAME/index.tsx
# No forwardRef (evo-react uses React 19 native ref)
grep -c "forwardRef" packages/evo-react/src/$NAME/index.tsx
```

First must be ≥ 1; second must be 0.

If any content check fails: mark the step `failed` with the specific check result as the error.
Halt. Surface to the engineer.

**3. Scope boundary check:**

Each step has an `allowedWriteZones` list. After the sub-skill's `outputs` are recorded in
the completion record, verify every listed output path starts with one of these prefixes:

| Step | allowedWriteZones                                                       |
| ---- | ----------------------------------------------------------------------- |
| 4    | `packages/skin/src/sass/<block>/`, `packages/skin/src/sass/bundles/`    |
| 5    | `packages/skin/src/sass/<block>/stories/`                               |
| 6    | `src/routes/_index/components/<block>/`                                 |
| 6.5  | `packages/evo-marko/src/tags/<name>/`, `packages/evo-react/src/<name>/` |
| 7    | `src/routes/_index/components/<block>/`                                 |
| 8    | `packages/evo-marko/src/tags/<name>/`                                   |
| 9    | `packages/evo-marko/src/tags/<name>/`                                   |
| 10   | `packages/evo-react/src/<name>/`                                        |
| 11   | `packages/evo-react/src/<name>/`                                        |
| 12   | `src/routes/_index/components/<block>/`                                 |
| 13   | `src/routes/_index/components/<block>/`, `src/data/`                    |

> **Steps 14 and 15 are exempt from scope boundary checking.** Step 14 (`npm run build`) writes
> compiled artefacts to `dist/` directories across multiple packages — this is expected and correct.
> Step 15 (`evo-qa`) writes only to `pipeline-state.json`. Neither produces component output files
> that should be constrained to a write zone. Skip the boundary check for these two steps.

If any output is outside all allowed zones:

```
🔴 Scope boundary violation — Step <N> wrote a file outside its allowed zone:
   File:          <path>
   Allowed zones: <list>
   This file was not expected. Review it manually before proceeding.
   Type "continue" to accept it or "reset-step" to mark Step <N> failed and retry.
```

Wait for engineer input.

### Failure halting

When any step ends with status `failed`:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Pipeline halted — Step <N> (<sub-skill>) failed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Error: <error from completion record>

The pipeline state is saved. To retry:
1. Fix the issue described above
2. Re-run /evo-component $COMPONENT --scope $SCOPE
   The pipeline will resume from Step <N>.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Do not advance to the next step. Do not attempt inline fixes. Stop.

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

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

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

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

Invoke: `/evo-static-storybook` (inline)

Reads the HTML catalogue from Step 4 context. Writes CSF2 stories with RTL
and textSpacing exports.

→ **Next:** After this skill returns, print "Step 5 complete." then immediately invoke Step 6.

---

## Step 6 — CSS docs (css-only)

**Scopes: full, static, style** | ⏭ skip for: interactive

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

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

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

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

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

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

## Micro-QA Checkpoint 1 — Static layer verification (after Step 7)

**Scopes: full, static** | ⏭ skip for: interactive, style

> **Before running:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress). Use step ID `micro-qa-1`. If already complete, skip to Step 8.

Spawn a fresh Agent to verify the static layer in genuine isolation. This agent has no
memory of the generation session — it reads only from disk.

> **Before spawning:** Substitute the actual values for `$COMPONENT`, `$BLOCK`, and `$SCOPE`.

```
Agent(
  description: "Micro-QA checkpoint 1 — static layer for $COMPONENT",
  prompt: """
You are an isolated QA agent verifying the static layer of an evo-web component pipeline.
You have NO prior context from the generation session. Read ONLY from disk.

Component: $COMPONENT
BEM block: $BLOCK
Manifest: src/routes/_index/components/$COMPONENT/manifest.json

Read the manifest first. Then run each check below in order.

=== CHECKS ===

CHECK 1 — SCSS file exists and is non-empty
Command: test -s packages/skin/src/sass/$BLOCK/$BLOCK.scss && echo PASS || echo FAIL

CHECK 2 — BEM block rule present in SCSS
Command: grep -c ".$BLOCK {" packages/skin/src/sass/$BLOCK/$BLOCK.scss
Pass: count >= 1. Fail: count is 0.

CHECK 3 — No deprecated BEM nesting in SCSS
Command: grep -c "&--" packages/skin/src/sass/$BLOCK/$BLOCK.scss
Pass: count is 0. Fail: any nesting found.

CHECK 4 — Every modifier from manifest.bem.modifiers[] has a rule in SCSS
For each modifier name M in manifest.bem.modifiers[]:
  grep -c ".$BLOCK--M " packages/skin/src/sass/$BLOCK/$BLOCK.scss
  Pass: count >= 1. Fail: count is 0 (rule missing).

CHECK 5 — Stories file exists
Command: test -f packages/skin/src/sass/$BLOCK/stories/$BLOCK.stories.js && echo PASS || echo FAIL

CHECK 6 — RTL export present in stories
Command: grep -c "export.*RTL" packages/skin/src/sass/$BLOCK/stories/$BLOCK.stories.js
Pass: count >= 1.

CHECK 7 — textSpacing export present in stories
Command: grep -c "export.*textSpacing" packages/skin/src/sass/$BLOCK/stories/$BLOCK.stories.js
Pass: count >= 1.

CHECK 8 — accessibility+page.marko exists
Command: test -f src/routes/_index/components/$COMPONENT/accessibility+page.marko && echo PASS || echo FAIL

CHECK 9 — No Marko 5 scriptlet patterns in SCSS directory
Command: grep -rn "^\$ \(let\|const\|var\)" packages/skin/src/sass/$BLOCK/
Pass: no output. Fail: any match.

=== WRITE RESULT ===

After all checks, write your result to the pipeline state file.
Substitute the actual value of $COMPONENT before running:

node -e "
const fs = require('fs');
const p = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const issues = [];
// populate issues[] with any FAIL results from your checks above (as strings)
s.steps['micro-qa-1'] = {
  status: issues.length === 0 ? 'complete' : 'failed',
  completedAt: new Date().toISOString(),
  checks: 9,
  issues
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
"

Return a JSON object: { passed: boolean, issues: string[] }
If passed is false, list each failing check with the specific file and what was expected.
  """
)
```

After the Agent returns, read the micro-qa-1 result from the state file:

> **Before running:** Substitute the actual value of `$COMPONENT`.

```bash
node -e "
const fs = require('fs');
const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
console.log(JSON.stringify(s.steps['micro-qa-1'], null, 2));
"
```

**If micro-qa-1 status is `failed`:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Micro-QA Checkpoint 1 FAILED — static layer issues detected
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following issues were found by an isolated verification agent:
<list issues from micro-qa-1.issues[]>

These issues were caught BEFORE the Marko and React layers were generated,
saving you from building framework layers on a broken static foundation.

Fix the issues above by re-running /evo-static-component or editing files
manually, then re-run /evo-component $COMPONENT to retry from this checkpoint.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Do NOT advance to Step 8. Do not attempt inline fixes. Stop.

**If micro-qa-1 status is `complete`:**

```
✅ Micro-QA Checkpoint 1 — static layer verified by isolated agent (9/9 checks passed)
```

> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check). Use step ID `micro-qa-1`.

→ **Next:** After micro-qa-1 passes, immediately invoke Step 8.

---

## Step 8 — Marko component

**Scopes: full, interactive** | ⏭ skip for: static, style

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

Invoke: `/evo-marko-component` (inline)

Reads static HTML from context (Step 4, full scope) or from existing storybook
file (interactive scope — no Step 4 was run). Generates Marko 6 component.

**Expected output** (`packages/evo-marko/src/tags/<name>/`):

- `index.marko`, `style.ts`, `test/test.server.ts`, `test/test.browser.ts` (if interactive)

→ **Next:** After this skill returns, print "Step 8 complete." then immediately invoke Step 9.

---

## Step 9 — Marko storybook

**Scopes: full, interactive** | ⏭ skip for: static, style

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

Invoke: `/evo-marko-storybook` (inline)

**Expected output:**

- `packages/evo-marko/src/tags/<name>/<name>.stories.ts` + `examples/`

→ **Next:** After this skill returns, print "Step 9 complete." then immediately invoke Step 10.

---

## Step 10 — React component

**Scopes: full, interactive** | ⏭ skip for: static, style

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

Invoke: `/evo-react-component` (inline)

**Expected output** (`packages/evo-react/src/<name>/`):

- `index.tsx`, `__tests__/index.spec.tsx`

→ **Next:** After this skill returns, print "Step 10 complete." then immediately invoke Step 11.

---

## Step 11 — React storybook

**Scopes: full, interactive** | ⏭ skip for: static, style

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

Invoke: `/evo-react-storybook` (inline)

**Expected output:**

- `packages/evo-react/src/<name>/<basename>.stories.tsx`

→ **Next:** After this skill returns, print "Step 11 complete." then immediately invoke Step 12.

---

## Step 12 — A11y Pass 2 — full validation + fills interactive a11y docs

**Scopes: full, interactive** | ⏭ skip for: static, style

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

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

## Micro-QA Checkpoint 2 — Framework layer verification (after Step 12)

**Scopes: full, interactive** | ⏭ skip for: static, style

> **Before running:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress). Use step ID `micro-qa-2`. If already complete, skip to Step 13.

Spawn a fresh Agent to verify the framework layer in genuine isolation. This agent has no
memory of the generation session — it reads only from disk.

> **Before spawning:** Substitute the actual values for `$COMPONENT`, `$BLOCK`, `$MARKO_NAME` (e.g. `evo-accordion`), `$REACT_NAME` (bare kebab-case, e.g. `accordion`), and `$SCOPE`.

```
Agent(
  description: "Micro-QA checkpoint 2 — framework layer for $COMPONENT",
  prompt: """
You are an isolated QA agent verifying the framework layer of an evo-web component pipeline.
You have NO prior context from the generation session. Read ONLY from disk.

Component: $COMPONENT
BEM block: $BLOCK
Marko name: $MARKO_NAME   (e.g. evo-accordion)
React name: $REACT_NAME   (e.g. accordion)
Manifest: src/routes/_index/components/$COMPONENT/manifest.json

Read the manifest fully before starting checks.

=== CHECKS ===

CHECK 1 — index.marko exists and is non-empty
Command: test -s packages/evo-marko/src/tags/$MARKO_NAME/index.marko && echo PASS || echo FAIL

CHECK 2 — No Marko 5 scriptlet patterns in index.marko
Command: grep -cn "^\$ \(let\|const\|var\)" packages/evo-marko/src/tags/$MARKO_NAME/index.marko
Pass: 0. Fail: any count > 0 (list each matching line).

CHECK 3 — BEM block class applied in index.marko
Command: grep -c "\"$BLOCK\"" packages/evo-marko/src/tags/$MARKO_NAME/index.marko
Pass: >= 1.

CHECK 4 — Every prop in manifest.props[] appears in the Input interface
For each prop name P in manifest.props[]:
  grep -c "P[?]?:" packages/evo-marko/src/tags/$MARKO_NAME/index.marko
  Pass: >= 1. Fail: 0 (prop missing from interface).

CHECK 5 — style.ts contains correct skin import
Command: cat packages/evo-marko/src/tags/$MARKO_NAME/style.ts
Expected content: import "@ebay/skin/$BLOCK";
Pass: exact match. Fail: wrong or missing.

CHECK 6 — index.tsx exists and is non-empty
Command: test -s packages/evo-react/src/$REACT_NAME/index.tsx && echo PASS || echo FAIL

CHECK 7 — No forwardRef in index.tsx (evo-react uses React 19 native ref)
Command: grep -c "forwardRef" packages/evo-react/src/$REACT_NAME/index.tsx
Pass: 0. Fail: any count > 0.

CHECK 8 — Component export present in index.tsx
Command: grep -c "^export \(function\|const\)" packages/evo-react/src/$REACT_NAME/index.tsx
Pass: >= 1.

CHECK 9 — Every prop in manifest.props[] appears in React Props type
For each prop name P in manifest.props[]:
  grep -c "P[?]?:" packages/evo-react/src/$REACT_NAME/index.tsx
  Pass: >= 1.

CHECK 10 — Marko stories file exists
Command: test -f packages/evo-marko/src/tags/$MARKO_NAME/$MARKO_NAME.stories.ts && echo PASS || echo FAIL

CHECK 11 — React stories file exists
Command: find packages/evo-react/src/$REACT_NAME -name "*.stories.tsx" | grep -c .
Pass: >= 1.

CHECK 12 — accessibility+meta.json exists
Command: test -f src/routes/_index/components/$COMPONENT/accessibility+meta.json && echo PASS || echo FAIL

=== WRITE RESULT ===

After all checks, write your result to the pipeline state file.
Substitute the actual value of $COMPONENT before running:

node -e "
const fs = require('fs');
const p = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const issues = [];
// populate with any FAIL results as strings
s.steps['micro-qa-2'] = {
  status: issues.length === 0 ? 'complete' : 'failed',
  completedAt: new Date().toISOString(),
  checks: 12,
  issues
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
"

Return: { passed: boolean, issues: string[] }
  """
)
```

After the Agent returns, read micro-qa-2 from the state file:

> **Before running:** Substitute the actual value of `$COMPONENT`.

```bash
node -e "
const fs = require('fs');
const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
console.log(JSON.stringify(s.steps['micro-qa-2'], null, 2));
"
```

**If micro-qa-2 status is `failed`:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Micro-QA Checkpoint 2 FAILED — framework layer issues detected
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following issues were found by an isolated verification agent:
<list issues from micro-qa-2.issues[]>

These issues were caught before docs, build, and final QA run.
Fix the issues, then re-run /evo-component $COMPONENT to retry from this checkpoint.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Do NOT advance to Step 13. Do not attempt inline fixes. Stop.

**If micro-qa-2 status is `complete`:**

```
✅ Micro-QA Checkpoint 2 — framework layer verified by isolated agent (12/12 checks passed)
```

> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check). Use step ID `micro-qa-2`.

→ **Next:** After micro-qa-2 passes, immediately invoke Step 13.

---

## Step 13 — Docs hookup (full)

**Scopes: full, static, interactive** | ⏭ skip for: style

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

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

> **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).

Run: `npm run build`

Fix failures inline. Do not advance to QA with a failing build.

→ **Next:** After the build passes, immediately invoke Step 15.

---

## Step 15 — QA

**Scopes: full, static, interactive, style** (always runs)

> **Before running:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress). Use step ID `15`. If already complete, skip.

Spawn a fresh Agent with subagent_type `evo-qa` to run QA in genuine isolation.
The evo-qa agent has no memory of the generation session — it reads only from disk.

> **Before spawning:** Substitute the actual values for `$COMPONENT`, `$SCOPE`, and `$BLOCK`.
> For `files`, read `steps[*].outputs` from `pipeline-state.json` and flatten into a list.
> For `reference`, use the manifest's `migration.legacyName` field if present; otherwise omit.

```
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const files = Object.values(s.steps)
  .filter(st => st && st.outputs)
  .flatMap(st => st.outputs);
console.log(JSON.stringify(files, null, 2));
"
```

Then spawn the QA agent:

```
Agent(
  subagent_type: "evo-qa",
  description: "QA verification for $COMPONENT (scope: $SCOPE)",
  prompt: """
manifest: src/routes/_index/components/$COMPONENT/manifest.json
files: [<paste the JSON array output from the node command above>]
reference: <legacyName from manifest, or omit this line>
scope: $SCOPE
  """
)
```

After the Agent returns, read its output. If it contains `Layer 1 result: ✅ PASSED`, write the completion record below with `status: "complete"`. If it contains `Layer 1 result: 🔴 FAILED`, write it with `status: "failed"` and surface the QA report to the engineer.

**If QA passed:**

> **Before running:** Substitute the actual value of `$COMPONENT`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
s.steps['15'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: []
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 15 completion record written.');
"
```

**If QA failed:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 QA FAILED — isolated verification agent found issues
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<paste full QA report here>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

> **Before running:** Substitute the actual value of `$COMPONENT` and describe the failure.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
s.steps['15'] = {
  status: 'failed',
  error: '<summarize which Layer 1 checks failed>'
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
"
```

Do NOT mark the pipeline complete when QA fails. Surface the report and stop.

> **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check). Use step ID `15`.

→ **Next:** Pipeline complete. Print the final summary banner:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Pipeline complete: $COMPONENT ($SCOPE scope)
All steps verified. QA passed.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

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
| `interactive` | Only Marko/React behavior or props changed    | 6.5, 8–16         |
| `style`       | SCSS only; no structural or behavioral change | 4(SCSS), 6, 14–16 |

> **Note on Step 6.5 and interactive scope:** Step 6.5 (scaffold generation) runs for interactive scope
> because it produces the `index.marko` and `index.tsx` scaffold files that Steps 8 and 10 complete.
> The "8–16" shorthand in the table above is updated to "6.5, 8–16" to reflect this dependency.

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
