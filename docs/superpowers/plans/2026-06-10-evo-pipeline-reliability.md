# evo-pipeline Reliability Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the evo-web component pipeline from a conversationally-driven process into a state-machine-driven process with disk-resident step state, true Agent-spawned QA isolation, and mechanical hallucination/drift detection.

**Architecture:** `evo-component` owns a `pipeline-state.json` file at `src/routes/_index/components/<name>/pipeline-state.json`. Each step is marked `in-progress` before invocation and `complete` after the sub-skill writes its completion record to that file. The orchestrator reads the record (not conversation prose) to advance. Two micro-QA Agent spawns at phase boundaries verify outputs in genuinely fresh context windows. `evo-pipeline` adds manifest hash locking and stall detection at the outer level.

**Tech Stack:** Skill SKILL.md files (markdown instructions), Bash (node/JSON for state reads/writes), Agent tool (true sub-agent spawning for QA isolation)

---

## File Map

| File                                           | Change                                                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| `.claude/skills/evo-component/SKILL.md`        | State file init/resume, transition table, pre-flight, artifact checks, post-step protocol, micro-QA spawns, Agent spawn for QA |
| `.claude/skills/evo-pipeline/SKILL.md`         | Manifest hash lock, stall detection at State detection step                                                                    |
| `.claude/skills/evo-static-component/SKILL.md` | Append completion record write                                                                                                 |
| `.claude/skills/evo-static-storybook/SKILL.md` | Append completion record write                                                                                                 |
| `.claude/skills/evo-docs-hookup/SKILL.md`      | Append completion record write (both step 6 and step 13 modes)                                                                 |
| `.claude/skills/evo-a11y/SKILL.md`             | Append completion record write (both Pass 1 and Pass 2)                                                                        |
| `.claude/skills/evo-marko-component/SKILL.md`  | Append completion record write                                                                                                 |
| `.claude/skills/evo-marko-storybook/SKILL.md`  | Append completion record write                                                                                                 |
| `.claude/skills/evo-react-component/SKILL.md`  | Append completion record write                                                                                                 |
| `.claude/skills/evo-react-storybook/SKILL.md`  | Append completion record write                                                                                                 |
| `.claude/skills/evo-qa/SKILL.md`               | Add checkpoint mode (`--checkpoint static                                                                                      | framework`) for micro-QA spawns |

---

## Task 1: State File Schema + evo-component Initialization and Resume

**Files:**

- Modify: `.claude/skills/evo-component/SKILL.md` — insert new section after "Step 2 — Gate: resolve blocking gaps"

- [ ] **Step 1: Read the current evo-component skill**

  ```bash
  cat .claude/skills/evo-component/SKILL.md
  ```

- [ ] **Step 2: Insert new "Step 2.5 — State file management" section**

  Insert the following block immediately after the `## Step 2 — Gate: resolve blocking gaps` section and before `## ⛔ Execution rule — no pausing between steps`:

  ````markdown
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
  ````

  `status` values: `pending` | `in-progress` | `complete` | `failed` | `skipped`

  ### Startup procedure

  **1. Compute the manifest hash:**

  ```bash
  md5 -q src/routes/_index/components/$COMPONENT/manifest.json
  ```

  Store this value as `$MANIFEST_HASH` for use in subsequent steps.

  **2. Check if the state file exists:**

  ```bash
  cat src/routes/_index/components/$COMPONENT/pipeline-state.json 2>/dev/null || echo "NOT_FOUND"
  ```

  **3a. If NOT_FOUND — create the state file:**

  Initialize all steps for the resolved scope as `pending` (steps not in this scope
  set to `skipped`). See the scope-to-steps table in Step 3.

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
  fs.writeFileSync(path, JSON.stringify(state, null, 2));
  console.log('State file created.');
  "
  ```

  **3b. If state file exists — validate and resume:**

  Read the state file. Then:

  **(i) Manifest hash check (Enhancement 8):**

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

  **(ii) Stall detection (Enhancement 7):**

  For each step where `status === "in-progress"`, check the `startedAt` timestamp.
  If `startedAt` is more than 10 minutes ago relative to now:

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

  ### Step marking helpers

  Use these patterns at the start and end of every step execution:

  **Mark step in-progress (before invoking sub-skill):**

  ```bash
  node -e "
  const fs = require('fs');
  const p = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  s.steps['STEP_ID'] = { status: 'in-progress', startedAt: new Date().toISOString() };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  "
  ```

  **Read step status after sub-skill returns (to confirm completion record was written):**

  ```bash
  node -e "
  const fs = require('fs');
  const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
  console.log(JSON.stringify(s.steps['STEP_ID']));
  "
  ```

  If the returned status is NOT `complete`, the sub-skill did not finish cleanly.
  Treat this as a step failure — do NOT advance.

  ```

  ```

- [ ] **Step 3: Verify the section was inserted correctly**

  ```bash
  grep -n "Step 2.5" .claude/skills/evo-component/SKILL.md
  grep -n "manifestHash" .claude/skills/evo-component/SKILL.md
  grep -n "Stall detection" .claude/skills/evo-component/SKILL.md
  ```

  Expected: all three lines found with line numbers.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-component/SKILL.md
  git commit -m "feat(ai): add state file init and resume logic to evo-component"
  ```

---

## Task 2: evo-pipeline — Manifest Hash Lock + Stall Detection

**Files:**

- Modify: `.claude/skills/evo-pipeline/SKILL.md` — update State detection (Step 1) section

- [ ] **Step 1: Read the current evo-pipeline skill**

  ```bash
  cat .claude/skills/evo-pipeline/SKILL.md
  ```

- [ ] **Step 2: Add state file awareness to Step 1 — State detection**

  In the `## Step 1 — State detection` section, after the list of filesystem checks
  (`Component folder`, `Contract`, `Spec`, `Manifest`, `Gap report`, `Generated files`),
  add the following:

  ```markdown
  **Pipeline state:** `pipeline-state.json` in the component folder

  If `pipeline-state.json` exists:

  1. Read it and print the resume banner:
  ```

  ♻️ Prior pipeline run detected for <component>
  Scope: <scope>
  Started: <startedAt>
  Progress: <N> of <M> steps complete

  ```
  2. Run stall detection (see Step 2.5 in `/evo-component`) — the outer pipeline
  surfaces stalled steps before passing to `/evo-component`.
  3. If any step is `failed`, surface it immediately:
  ```

  🔴 Prior run ended with a failed step:
  Step <N> — <error>
  Resolve the issue above, then re-run /evo-pipeline <name> to retry.

  ```
  Stop. Do not proceed to State C/D/E until the failure is resolved or the
  engineer types "reset" to clear the state file.
  ```

- [ ] **Step 3: Verify**

  ```bash
  grep -n "pipeline-state.json" .claude/skills/evo-pipeline/SKILL.md
  grep -n "Prior pipeline run detected" .claude/skills/evo-pipeline/SKILL.md
  ```

  Expected: both found.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-pipeline/SKILL.md
  git commit -m "feat(ai): add state file awareness and stall surfacing to evo-pipeline"
  ```

---

## Task 3: evo-component — Transition Table, Pre-flight, Artifact Checks, Failure Halting

**Files:**

- Modify: `.claude/skills/evo-component/SKILL.md` — update the `⛔ Execution rule` section and each step header

This task adds the deterministic transition table (no model judgment at boundaries), pre-flight input validation, idempotent step skipping, and failure halting.

- [ ] **Step 1: Replace the `⛔ Execution rule` section with the full transition protocol**

  Replace the current `## ⛔ Execution rule — no pausing between steps` section with:

  ````markdown
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

  ```bash
  node -e "
  const fs = require('fs');
  const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
  console.log(s.steps['STEP_ID'].status);
  "
  ```
  ````

  If `complete` or `skipped`: print `⏭ Step STEP_ID already complete — skipping.` and advance.

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

  ```bash
  node -e "
  const fs = require('fs');
  const p = 'src/routes/_index/components/$COMPONENT/pipeline-state.json';
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  s.steps['STEP_ID'] = { status: 'in-progress', startedAt: new Date().toISOString() };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  "
  ```

  Then invoke the sub-skill.

  ### Post-step verification (run after EVERY sub-skill returns)

  After the sub-skill returns, run these checks before advancing:

  **1. Read completion record:**

  ```bash
  node -e "
  const fs = require('fs');
  const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
  console.log(JSON.stringify(s.steps['STEP_ID'], null, 2));
  "
  ```

  If status is NOT `complete`: the sub-skill did not finish cleanly. Halt (see Failure halting).

  **2. Content validation (hallucination checks):**

  Run the following checks based on the step just completed:

  _After Step 4 (SCSS generated):_

  ```bash
  # BEM block must exist
  grep -c "\.${BLOCK} {" packages/skin/src/sass/$BLOCK/$BLOCK.scss
  # No deprecated BEM nesting
  grep -c "&--" packages/skin/src/sass/$BLOCK/$BLOCK.scss
  ```

  The first grep must return ≥ 1. The second must return 0 (nesting forbidden).

  _After Step 8 (Marko generated):_

  ```bash
  # No Marko 5 scriptlet patterns
  grep -c "^\$ \(let\|const\|var\)" packages/evo-marko/src/tags/$NAME/index.marko
  # BEM block class must be applied
  grep -c "\"${BLOCK}\"" packages/evo-marko/src/tags/$NAME/index.marko
  ```

  Both greps must return 0 for deprecated patterns and ≥ 1 for BEM class.

  _After Step 10 (React generated):_

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

  ```

  ```

- [ ] **Step 2: Verify the section was inserted correctly**

  ```bash
  grep -n "Transition table" .claude/skills/evo-component/SKILL.md
  grep -n "Pre-step preamble" .claude/skills/evo-component/SKILL.md
  grep -n "Post-step verification" .claude/skills/evo-component/SKILL.md
  grep -n "Failure halting" .claude/skills/evo-component/SKILL.md
  grep -n "allowedWriteZones" .claude/skills/evo-component/SKILL.md
  ```

  Expected: all five found.

- [ ] **Step 3: Update each step header in evo-component to reference the pre-step preamble**

  For each step (4 through 15 and 6.5), prepend the following line immediately after the
  step's `## Step N` heading (or `**Scopes:**` line):

  ```markdown
  > **Before invoking:** Run the pre-step preamble above (idempotent check → pre-flight validation → mark in-progress).
  > **After returning:** Run the post-step verification above (read completion record → content validation → scope boundary check).
  ```

  Do this for: Step 4, Step 5, Step 6, Step 6.5, Step 7, Step 8, Step 9, Step 10,
  Step 11, Step 12, Step 13, Step 14, Step 15.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-component/SKILL.md
  git commit -m "feat(ai): add transition table, pre-flight validation, and post-step verification to evo-component"
  ```

---

## Task 4: evo-static-component — Completion Record

**Files:**

- Modify: `.claude/skills/evo-static-component/SKILL.md` — append after the "Output summary" section

- [ ] **Step 1: Read the current file ending**

  ```bash
  tail -30 .claude/skills/evo-static-component/SKILL.md
  ```

- [ ] **Step 2: Append the completion record section**

  Add the following after the existing `## Output summary` section:

  ````markdown
  ---

  ## Completion record — mandatory final step

  After the output summary is printed and all items in the mandatory completion gate
  are checked off, write the completion record to the pipeline state file.

  This is the signal the orchestrator reads to advance — it does not read your prose output.
  Do not skip this step. Do not mark complete until the output files are confirmed on disk.

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const block = '<BLOCK>';  // replace with manifest.bem.block value
  s.steps['4'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`packages/skin/src/sass/\${block}/\${block}.scss\`,
      'packages/skin/src/sass/bundles/skin-headless.scss',
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 4 completion record written.');
  "
  ```
  ````

  **If SCSS was deferred** (no tokens/Figma): still write the completion record but
  set `outputs` to an empty array and add `"note": "SCSS deferred — no tokens or Figma reference"`.

  **If any completion gate item failed**: write `status: "failed"` with an `error` field
  describing which gate item failed. Do NOT write `status: "complete"`.

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  s.steps['4'] = {
    status: 'failed',
    error: '<describe what gate item failed>'
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  "
  ```

  ```

  ```

- [ ] **Step 3: Verify**

  ```bash
  grep -n "Completion record" .claude/skills/evo-static-component/SKILL.md
  grep -n "steps\['4'\]" .claude/skills/evo-static-component/SKILL.md
  ```

  Expected: both found.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-static-component/SKILL.md
  git commit -m "feat(ai): add completion record write to evo-static-component"
  ```

---

## Task 5: evo-static-storybook — Completion Record

**Files:**

- Modify: `.claude/skills/evo-static-storybook/SKILL.md`

- [ ] **Step 1: Read the current file ending**

  ```bash
  tail -30 .claude/skills/evo-static-storybook/SKILL.md
  ```

- [ ] **Step 2: Append the completion record section after the final output/summary section**

  ````markdown
  ---

  ## Completion record — mandatory final step

  After all story exports are written and verified on disk, write the completion record.

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const block = '<BLOCK>';
  s.steps['5'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`packages/skin/src/sass/\${block}/stories/\${block}.stories.js\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 5 completion record written.');
  "
  ```
  ````

  If any required story export (RTL, textSpacing, or a required modifier story) could
  not be generated, write `status: "failed"` with an `error` field instead.

  ```

  ```

- [ ] **Step 3: Verify**

  ```bash
  grep -n "steps\['5'\]" .claude/skills/evo-static-storybook/SKILL.md
  ```

  Expected: found.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-static-storybook/SKILL.md
  git commit -m "feat(ai): add completion record write to evo-static-storybook"
  ```

---

## Task 6: evo-docs-hookup — Completion Record (Both Modes)

**Files:**

- Modify: `.claude/skills/evo-docs-hookup/SKILL.md`

- [ ] **Step 1: Read the current file ending**

  ```bash
  tail -40 .claude/skills/evo-docs-hookup/SKILL.md
  ```

- [ ] **Step 2: Append the completion record section**

  The docs-hookup skill runs in two modes (Step 6 = css-only, Step 13 = full).
  The completion record must write to the correct step ID based on mode.

  ````markdown
  ---

  ## Completion record — mandatory final step

  After all output files are verified on disk, write the completion record.
  The step ID depends on which mode was declared at invocation:

  **css-only mode (Step 6):**

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const block = '<BLOCK>';
  s.steps['6'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`src/routes/_index/components/\${block}/css+page.marko\`,
      \`src/routes/_index/components/\${block}/css+meta.json\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 6 completion record written.');
  "
  ```
  ````

  **full mode (Step 13):**

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const block = '<BLOCK>';
  s.steps['13'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`src/routes/_index/components/\${block}/+page.marko\`,
      \`src/routes/_index/components/\${block}/+meta.json\`,
      'src/data/component-metadata.json',
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 13 completion record written.');
  "
  ```

  If any output file could not be written, set `status: "failed"` with an `error` field.

  ```

  ```

- [ ] **Step 3: Verify**

  ```bash
  grep -n "steps\['6'\]" .claude/skills/evo-docs-hookup/SKILL.md
  grep -n "steps\['13'\]" .claude/skills/evo-docs-hookup/SKILL.md
  ```

  Expected: both found.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-docs-hookup/SKILL.md
  git commit -m "feat(ai): add completion record write to evo-docs-hookup (both modes)"
  ```

---

## Task 7: evo-a11y — Completion Record (Both Passes)

**Files:**

- Modify: `.claude/skills/evo-a11y/SKILL.md`

- [ ] **Step 1: Read the current file ending**

  ```bash
  tail -40 .claude/skills/evo-a11y/SKILL.md
  ```

- [ ] **Step 2: Append the completion record section**

  ````markdown
  ---

  ## Completion record — mandatory final step

  After all outputs are verified on disk, write the completion record.
  The step ID depends on which pass was declared at invocation:

  **Pass 1 (Step 7):**

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const block = '<BLOCK>';
  s.steps['7'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`src/routes/_index/components/\${block}/accessibility+page.marko\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 7 completion record written.');
  "
  ```
  ````

  **Pass 2 (Step 12):**

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const block = '<BLOCK>';
  s.steps['12'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`src/routes/_index/components/\${block}/accessibility+page.marko\`,
      \`src/routes/_index/components/\${block}/accessibility+meta.json\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 12 completion record written.');
  "
  ```

  If any blocking a11y failure was found that could not be fixed inline, write
  `status: "failed"` with the failing check as the `error` field.

  ```

  ```

- [ ] **Step 3: Verify**

  ```bash
  grep -n "steps\['7'\]" .claude/skills/evo-a11y/SKILL.md
  grep -n "steps\['12'\]" .claude/skills/evo-a11y/SKILL.md
  ```

  Expected: both found.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-a11y/SKILL.md
  git commit -m "feat(ai): add completion record write to evo-a11y (both passes)"
  ```

---

## Task 8: Framework Sub-skills — Completion Records (marko-component, marko-storybook, react-component, react-storybook)

**Files:**

- Modify: `.claude/skills/evo-marko-component/SKILL.md`
- Modify: `.claude/skills/evo-marko-storybook/SKILL.md`
- Modify: `.claude/skills/evo-react-component/SKILL.md`
- Modify: `.claude/skills/evo-react-storybook/SKILL.md`

- [ ] **Step 1: Read each file's ending**

  ```bash
  tail -20 .claude/skills/evo-marko-component/SKILL.md
  tail -20 .claude/skills/evo-marko-storybook/SKILL.md
  tail -20 .claude/skills/evo-react-component/SKILL.md
  tail -20 .claude/skills/evo-react-storybook/SKILL.md
  ```

- [ ] **Step 2: Append completion record to evo-marko-component (Step 8)**

  Append after the `## Output verification` section:

  ````markdown
  ---

  ## Completion record — mandatory final step

  After output verification passes, write the completion record.

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const name = '<NAME>';  // e.g. evo-accordion
  const outputs = [
    \`packages/evo-marko/src/tags/\${name}/index.marko\`,
    \`packages/evo-marko/src/tags/\${name}/style.ts\`,
    \`packages/evo-marko/src/tags/\${name}/test/test.server.ts\`,
  ];
  // Add test.browser.ts if it was generated
  if (fs.existsSync(\`packages/evo-marko/src/tags/\${name}/test/test.browser.ts\`)) {
    outputs.push(\`packages/evo-marko/src/tags/\${name}/test/test.browser.ts\`);
  }
  s.steps['8'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 8 completion record written.');
  "
  ```
  ````

  If any output verification check failed (missing prop, Marko 5 pattern found, etc.),
  write `status: "failed"` with the failing check as the `error` field.

  ```

  ```

- [ ] **Step 3: Append completion record to evo-marko-storybook (Step 9)**

  Append after the final output/summary section:

  ````markdown
  ---

  ## Completion record — mandatory final step

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const name = '<NAME>';
  s.steps['9'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`packages/evo-marko/src/tags/\${name}/\${name}.stories.ts\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 9 completion record written.');
  "
  ```
  ````

  ```

  ```

- [ ] **Step 4: Append completion record to evo-react-component (Step 10)**

  Append after the final output/summary section:

  ````markdown
  ---

  ## Completion record — mandatory final step

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const name = '<NAME>';  // bare kebab-case, e.g. accordion
  s.steps['10'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`packages/evo-react/src/\${name}/index.tsx\`,
      \`packages/evo-react/src/\${name}/__tests__/index.spec.tsx\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 10 completion record written.');
  "
  ```
  ````

  If any output verification check failed (forwardRef found, export missing, etc.),
  write `status: "failed"` with the failing check as the `error` field.

  ```

  ```

- [ ] **Step 5: Append completion record to evo-react-storybook (Step 11)**

  Append after the final output/summary section:

  ````markdown
  ---

  ## Completion record — mandatory final step

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const name = '<NAME>';
  s.steps['11'] = {
    status: 'complete',
    completedAt: new Date().toISOString(),
    outputs: [
      \`packages/evo-react/src/\${name}/<basename>.stories.tsx\`,
    ]
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 11 completion record written.');
  "
  ```
  ````

  ```

  ```

- [ ] **Step 6: Verify all four files**

  ```bash
  grep -n "steps\['8'\]" .claude/skills/evo-marko-component/SKILL.md
  grep -n "steps\['9'\]" .claude/skills/evo-marko-storybook/SKILL.md
  grep -n "steps\['10'\]" .claude/skills/evo-react-component/SKILL.md
  grep -n "steps\['11'\]" .claude/skills/evo-react-storybook/SKILL.md
  ```

  Expected: all four found.

- [ ] **Step 7: Commit**

  ```bash
  git add .claude/skills/evo-marko-component/SKILL.md \
          .claude/skills/evo-marko-storybook/SKILL.md \
          .claude/skills/evo-react-component/SKILL.md \
          .claude/skills/evo-react-storybook/SKILL.md
  git commit -m "feat(ai): add completion record writes to all framework layer sub-skills"
  ```

---

## Task 9: Micro-QA Checkpoint 1 — After Step 7 (Static Layer)

**Files:**

- Modify: `.claude/skills/evo-component/SKILL.md` — insert micro-QA-1 block after Step 7 section
- Modify: `.claude/skills/evo-qa/SKILL.md` — add `--checkpoint` mode

- [ ] **Step 1: Add micro-qa-1 section to evo-component**

  Insert the following immediately after the `## Step 7 — A11y Pass 1` section
  and before `## Step 8 — Marko component`:

  ```markdown
  ## Micro-QA Checkpoint 1 — Static layer verification (after Step 7)

  **Scopes: full, static** | ⏭ skip for: interactive, style

  > **Before running:** Run the pre-step preamble (check if micro-qa-1 is already complete,
  > mark in-progress). If already complete, skip to Step 8.

  Spawn a fresh Agent to verify the static layer in genuine isolation. This agent has no
  memory of the generation session — it reads only from disk.

  Use the Agent tool with the following prompt (substitute actual values for $COMPONENT,
  $BLOCK, $SCOPE before spawning):
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
  Command: grep -c "\.$BLOCK {" packages/skin/src/sass/$BLOCK/$BLOCK.scss
  Pass: count >= 1. Fail: count is 0.

  CHECK 3 — No deprecated BEM nesting in SCSS
  Command: grep -c "&--" packages/skin/src/sass/$BLOCK/$BLOCK.scss
  Pass: count is 0. Fail: any nesting found.

  CHECK 4 — Every modifier from manifest.bem.modifiers[] has a rule in SCSS
  For each modifier name M in manifest.bem.modifiers[]:
  grep -c "\.$BLOCK--M " packages/skin/src/sass/$BLOCK/$BLOCK.scss
  Pass: count >= 1. Fail: count is 0 (rule missing).

  CHECK 5 — Stories file exists
  Command: test -f packages/skin/src/sass/$BLOCK/stories/$BLOCK.stories.js && echo PASS || echo FAIL

  CHECK 6 — RTL export present in stories
  Command: grep -c "export.\*RTL" packages/skin/src/sass/$BLOCK/stories/$BLOCK.stories.js
  Pass: count >= 1.

  CHECK 7 — textSpacing export present in stories
  Command: grep -c "export.\*textSpacing" packages/skin/src/sass/$BLOCK/stories/$BLOCK.stories.js
  Pass: count >= 1.

  CHECK 8 — accessibility+page.marko exists and contains static sections
  Command: test -f src/routes/\_index/components/$COMPONENT/accessibility+page.marko && echo PASS || echo FAIL
  Also grep for "Best Practices" and "ARIA Reference" headings.

  CHECK 9 — No Marko 5 scriptlet patterns in any generated file (check SCSS only for this pass)
  Command: grep -rn "^\$ \(let\|const\|var\)" packages/skin/src/sass/$BLOCK/
  Pass: no output. Fail: any match.

  === WRITE RESULT ===

  After all checks, write your result to the pipeline state file:

  node -e "
  const fs = require('fs');
  const p = 'src/routes/\_index/components/$COMPONENT/pipeline-state.json';
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const issues = [];
  // populate issues[] with any FAIL results from your checks above
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

  ````

  After the Agent returns, read the result from the state file:

  ```bash
  node -e "
  const fs = require('fs');
  const s = JSON.parse(fs.readFileSync('src/routes/_index/components/$COMPONENT/pipeline-state.json', 'utf8'));
  console.log(JSON.stringify(s.steps['micro-qa-1'], null, 2));
  "
  ````

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

  Immediately advance to Step 8.

  → **Next:** After micro-qa-1 passes, immediately invoke Step 8.

  ```

  ```

- [ ] **Step 2: Verify the section was inserted**

  ```bash
  grep -n "Micro-QA Checkpoint 1" .claude/skills/evo-component/SKILL.md
  grep -n "micro-qa-1" .claude/skills/evo-component/SKILL.md | head -5
  ```

  Expected: both found.

- [ ] **Step 3: Commit**

  ```bash
  git add .claude/skills/evo-component/SKILL.md
  git commit -m "feat(ai): add micro-QA checkpoint 1 (static layer) with true Agent spawn"
  ```

---

## Task 10: Micro-QA Checkpoint 2 — After Step 12 (Framework Layer)

**Files:**

- Modify: `.claude/skills/evo-component/SKILL.md` — insert micro-QA-2 block after Step 12

- [ ] **Step 1: Insert micro-qa-2 section after Step 12**

  Insert the following immediately after the `## Step 12 — A11y Pass 2` section
  and before `## Step 13 — Docs hookup (full)`:

  ```markdown
  ## Micro-QA Checkpoint 2 — Framework layer verification (after Step 12)

  **Scopes: full, interactive** | ⏭ skip for: static, style

  > **Before running:** Run the pre-step preamble (check if micro-qa-2 is already complete,
  > mark in-progress). If already complete, skip to Step 13.

  Spawn a fresh Agent to verify the framework layer in genuine isolation.

  Use the Agent tool with the following prompt:
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
  Expected: import "@ebay/skin/$BLOCK";
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
  Command: find packages/evo-react/src/$REACT_NAME -name "\*.stories.tsx" | grep -c .
  Pass: >= 1.

  CHECK 12 — accessibility+meta.json exists
  Command: test -f src/routes/\_index/components/$COMPONENT/accessibility+meta.json && echo PASS || echo FAIL

  === WRITE RESULT ===

  node -e "
  const fs = require('fs');
  const p = 'src/routes/\_index/components/$COMPONENT/pipeline-state.json';
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const issues = [];
  // populate with any FAIL results
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

  After the Agent returns, read micro-qa-2 from the state file and apply the same
  halt/pass logic as Checkpoint 1. If failed, print the structured failure banner
  and stop. If passed, advance to Step 13.

  ```

  ✅ Micro-QA Checkpoint 2 — framework layer verified by isolated agent (12/12 checks passed)

  ```

  → **Next:** After micro-qa-2 passes, immediately invoke Step 13.
  ```

- [ ] **Step 2: Verify**

  ```bash
  grep -n "Micro-QA Checkpoint 2" .claude/skills/evo-component/SKILL.md
  grep -n "micro-qa-2" .claude/skills/evo-component/SKILL.md | head -5
  ```

  Expected: both found.

- [ ] **Step 3: Commit**

  ```bash
  git add .claude/skills/evo-component/SKILL.md
  git commit -m "feat(ai): add micro-QA checkpoint 2 (framework layer) with true Agent spawn"
  ```

---

## Task 11: evo-qa — True Agent Spawn for Step 15

**Files:**

- Modify: `.claude/skills/evo-component/SKILL.md` — replace Step 15 with Agent spawn
- Modify: `.claude/skills/evo-qa/SKILL.md` — add completion record write

- [ ] **Step 1: Replace Step 15 in evo-component with true Agent spawn**

  Find the `## Step 15 — QA validation` section in evo-component and replace its
  invocation instructions with:

  ```markdown
  ## Step 15 — QA validation (true Agent spawn)

  **Scopes: all**

  > **Before running:** Run the pre-step preamble (check if step 15 is already complete).

  Spawn a fresh Agent running the `evo-qa` skill. This agent has a completely fresh
  context window — no memory of what was generated or why. It reads only from disk.
  ```

  Agent(
  subagent_type: "evo-qa",
  description: "QA validation for $COMPONENT [scope: $SCOPE]",
    prompt: """
  Component: $COMPONENT
  Scope: $SCOPE
  Manifest path: src/routes/_index/components/$COMPONENT/manifest.json
  State file: src/routes/\_index/components/$COMPONENT/pipeline-state.json

  Files generated in this run:
  <list all paths from completion records of steps 4–13 that ran in this scope>

  Run Layer 1 checks for the declared scope. When done, write your completion record:
  steps["15"] = { status: "complete"|"failed", completedAt, failedChecks: [...] }

  Reference component (for Layer 2): $REFERENCE_COMPONENT (or "none")
  """
  )

  ```

  After the Agent returns, read the step 15 status from the state file. If `failed`:
  surface the structured failure banner and stop. If `complete`: advance to Step 16.

  The orchestrator does NOT attempt to fix QA failures inline — the engineer decides.
  ```

- [ ] **Step 2: Add completion record write to evo-qa**

  Append the following to the end of `.claude/skills/evo-qa/SKILL.md`:

  ````markdown
  ---

  ## Completion record — mandatory final step

  After printing the QA report, write the completion record to the pipeline state file.

  ```bash
  node -e "
  const fs = require('fs');
  const comp = process.env.COMPONENT || '$COMPONENT';
  const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
  const s = JSON.parse(fs.readFileSync(p, 'utf8'));
  const failedChecks = [];
  // populate with any check IDs that failed (e.g. ['1a', '1d'])
  s.steps['15'] = {
    status: failedChecks.length === 0 ? 'complete' : 'failed',
    completedAt: new Date().toISOString(),
    failedChecks
  };
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(p, JSON.stringify(s, null, 2));
  console.log('Step 15 completion record written.');
  "
  ```
  ````

  Do not write `status: "complete"` if any 🔴 Layer 1 check failed.
  Layer 2 findings do not affect the completion status (they are informational only).

  ```

  ```

- [ ] **Step 3: Verify**

  ```bash
  grep -n "true Agent spawn" .claude/skills/evo-component/SKILL.md
  grep -n "subagent_type.*evo-qa" .claude/skills/evo-component/SKILL.md
  grep -n "steps\['15'\]" .claude/skills/evo-qa/SKILL.md
  ```

  Expected: all three found.

- [ ] **Step 4: Commit**

  ```bash
  git add .claude/skills/evo-component/SKILL.md .claude/skills/evo-qa/SKILL.md
  git commit -m "feat(ai): convert evo-qa step 15 to true Agent spawn for genuine context isolation"
  ```

---

## Task 12: End-to-end Smoke Test (Manual Verification)

This task is a manual walkthrough — no code is written.

- [ ] **Step 1: Verify state file sections exist in evo-component**

  ```bash
  grep -n "Step 2.5" .claude/skills/evo-component/SKILL.md
  grep -n "Transition table" .claude/skills/evo-component/SKILL.md
  grep -n "Pre-step preamble" .claude/skills/evo-component/SKILL.md
  grep -n "Post-step verification" .claude/skills/evo-component/SKILL.md
  grep -n "Micro-QA Checkpoint 1" .claude/skills/evo-component/SKILL.md
  grep -n "Micro-QA Checkpoint 2" .claude/skills/evo-component/SKILL.md
  grep -n "true Agent spawn" .claude/skills/evo-component/SKILL.md
  grep -n "Failure halting" .claude/skills/evo-component/SKILL.md
  ```

  Expected: all 8 found.

- [ ] **Step 2: Verify state file awareness in evo-pipeline**

  ```bash
  grep -n "pipeline-state.json" .claude/skills/evo-pipeline/SKILL.md
  grep -n "Prior pipeline run detected" .claude/skills/evo-pipeline/SKILL.md
  ```

  Expected: both found.

- [ ] **Step 3: Verify all sub-skills have completion records**

  ```bash
  grep -l "Completion record" .claude/skills/evo-static-component/SKILL.md \
    .claude/skills/evo-static-storybook/SKILL.md \
    .claude/skills/evo-docs-hookup/SKILL.md \
    .claude/skills/evo-a11y/SKILL.md \
    .claude/skills/evo-marko-component/SKILL.md \
    .claude/skills/evo-marko-storybook/SKILL.md \
    .claude/skills/evo-react-component/SKILL.md \
    .claude/skills/evo-react-storybook/SKILL.md \
    .claude/skills/evo-qa/SKILL.md
  ```

  Expected: all 9 files listed.

- [ ] **Step 4: Verify step IDs match across orchestrator and sub-skills**

  ```bash
  # Each step ID should appear in evo-component's transition table AND in the sub-skill's completion record
  for id in 4 5 6 7 8 9 10 11 12 13 15; do
    echo "--- Step $id ---"
    grep -c "steps\[.$id.\]" .claude/skills/evo-component/SKILL.md
  done
  ```

  Every step should return at least 1 (referenced in transition table or post-step read).

- [ ] **Step 5: Final commit with plan doc**

  ```bash
  git add docs/superpowers/plans/2026-06-10-evo-pipeline-reliability.md
  git commit -m "docs(ai): add evo-pipeline reliability implementation plan"
  ```

---

## Self-Review

**Spec coverage:**

| Enhancement                                         | Task that implements it                                                  |
| --------------------------------------------------- | ------------------------------------------------------------------------ |
| 1 — Disk-resident pipeline state (schema + init)    | Task 1                                                                   |
| 2 — Structured completion signals from sub-skills   | Tasks 4–8, 11                                                            |
| 3 — Idempotent steps via artifact checks            | Task 3 (Pre-step preamble)                                               |
| 4 — Explicit transition table                       | Task 3                                                                   |
| 5 — Failure as data, not silence                    | Task 3 (Failure halting)                                                 |
| 6 — Pre-flight input validation                     | Task 3 (Pre-step preamble)                                               |
| 7 — Stall detection via timestamp                   | Task 1                                                                   |
| 8 — Manifest hash lock                              | Task 1                                                                   |
| 9 — Content-level output validation                 | Task 3 (Post-step verification)                                          |
| 10 — Context budget checkpointing                   | Not implemented — deferred (most complex, lowest mechanical feasibility) |
| 11 — Verifiable step claims (claim vs. reality gap) | Task 3 (Post-step verification reads completion record)                  |
| 12 — Scope boundary enforcement                     | Task 3 (Post-step verification, allowedWriteZones)                       |
| Micro-QA checkpoint 1 (static)                      | Task 9                                                                   |
| Micro-QA checkpoint 2 (framework)                   | Task 10                                                                  |
| True Agent spawn for end QA                         | Task 11                                                                  |

**Gaps:** Enhancement 10 (context budget) intentionally deferred — it requires runtime token tracking that has no mechanical implementation in this skill architecture.

**Placeholder scan:** No TBDs or "implement later" phrases present. All node -e snippets are complete. All check commands are exact bash.

**Type consistency:** Step IDs consistent throughout (`'4'` through `'15'`, `'micro-qa-1'`, `'micro-qa-2'`). `BLOCK` vs `NAME` vs `COMPONENT` terminology consistent with existing skill conventions.
