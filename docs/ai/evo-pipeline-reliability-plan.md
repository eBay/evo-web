# evo-pipeline Reliability Enhancements

## Background

The `evo-pipeline` orchestrator currently stops mid-stream and requires manual nudges to continue. This is an architectural problem: the model is in the orchestrator role, relying on conversational continuity to track progress and decide when to advance steps. The Local Conductor project (`.claude/projects/local-conductor/`) solved this same problem differently — by putting code in the orchestrator role and Claude in the worker role. This plan applies those lessons to `evo-pipeline`.

**Root cause of pipeline stalls:** Claude decides transitions ("I should now run step 5") by reading prior conversation context. Any attention drift, context window pressure, or ambiguous step boundary causes it to stop or re-run work it already did.

---

## Enhancement 1 — Disk-resident pipeline state

**Problem:** Pipeline progress lives in the conversation. If Claude stops, there's no machine-readable record of which steps completed.

**Solution:** Write a `pipeline-state.json` file alongside `manifest.json` for every component being processed. The orchestrator reads this file at the start of every invocation to know exactly where to resume.

### Schema

```json
{
  "component": "evo-accordion",
  "scope": "full",
  "startedAt": "2026-06-10T09:00:00.000Z",
  "updatedAt": "2026-06-10T09:14:22.000Z",
  "steps": {
    "1": { "status": "complete", "completedAt": "2026-06-10T09:01:10.000Z" },
    "2": { "status": "complete", "completedAt": "2026-06-10T09:02:45.000Z" },
    "3": { "status": "complete", "completedAt": "2026-06-10T09:08:30.000Z" },
    "4": { "status": "in-progress", "startedAt": "2026-06-10T09:14:00.000Z" },
    "5": { "status": "pending" },
    "6": { "status": "pending" }
  }
}
```

**Location:** `src/routes/_index/components/<component>/pipeline-state.json`
(same directory as `manifest.json` and `_contract.md`)

### Orchestrator behaviour change

At the start of every `evo-pipeline` invocation (and every sub-skill handoff):

1. Check if `pipeline-state.json` exists.
2. If yes: read it, skip all completed steps, resume from the first `pending` or `in-progress` step.
3. If no: create it with all steps as `pending`, then begin at step 1.
4. Mark the current step `in-progress` before invoking it; mark `complete` after verified output exists.

This makes every invocation restartable at any point without re-doing work.

---

## Enhancement 2 — Structured completion signals from each skill

**Problem:** The orchestrator detects step completion by reading the skill's prose output. Natural language is ambiguous — "I've written the files" and "I was unable to write the files" can look similar in accumulated context.

**Solution:** Each skill writes a structured completion record to disk. The orchestrator reads the record, not the prose.

### Completion record format

Each skill writes to `pipeline-state.json` after it finishes:

```json
{
  "step": 4,
  "skill": "evo-static-component",
  "status": "complete",
  "outputs": [
    "packages/skin/src/sass/accordion/accordion.scss",
    "packages/skin/src/sass/accordion/stories/accordion.stories.js"
  ],
  "completedAt": "2026-06-10T09:08:30.000Z"
}
```

If a skill fails, it writes `"status": "failed"` with an `"error"` field. The orchestrator treats any non-`complete` status as a signal to stop and surface the issue rather than silently continuing.

### Implementation

Each skill's SKILL.md should end with a mandatory "Write completion record" step:

```
## Final step — Write completion record

After all files are written and verified, update pipeline-state.json:
- Set step N status to "complete"
- List the files written in "outputs"
- Record the timestamp

If any verification failed, set status to "failed" and record the error.
Do not mark complete until you have confirmed the output files exist on disk.
```

---

## Enhancement 3 — Idempotent steps via artifact checks

**Problem:** If a step ran but the next step failed, re-running from the top re-does completed work, wasting time and risking side effects.

**Solution:** Before running any step, check if its output artifacts already exist and are valid. If they do, skip the step and mark it complete.

### Per-step artifact definitions

Add a canonical "expected outputs" list to each step in the orchestrator. Before invoking a skill, check:

```
Step 4 (evo-static-component):
  - packages/skin/src/sass/<block>/<block>.scss  exists?
  - packages/skin/src/sass/<block>/stories/<block>.stories.js  exists?
  → If both exist and pipeline-state says step 4 is pending: mark complete, skip.
```

This means the pipeline can always be re-run safely — it will fast-forward through already-completed steps in seconds.

### Practical rule

"An output artifact is a file that the step was supposed to create or modify, whose presence (and non-zero size) confirms the step ran." Steps that only read or plan but don't write files are inherently idempotent and need no artifact check.

---

## Enhancement 4 — Explicit transition table (no model judgment at boundaries)

**Problem:** The orchestrator decides "the previous step is done, I should call the next skill" by evaluating the prior output. This is the exact failure mode — the model may misjudge completion or forget to advance.

**Solution:** Hard-code the step sequence and transition logic in the orchestrator skill itself, not as something Claude reasons about at runtime.

### Transition table (for `full` scope)

```
Step 1  complete → Step 2
Step 2  complete → Step 3
Step 3  complete → Step 4 (evo-static-component)
Step 4  complete → Step 5 (evo-static-storybook)
Step 5  complete → Step 6 (evo-docs-hookup css-only mode)
Step 6  complete → Step 7 (evo-a11y pass 1)
Step 7  complete → Step 8 (evo-marko-component)
Step 8  complete → Step 9 (evo-react-component)
...
Step N  complete → QA → done
```

The orchestrator reads the state file, looks up the first non-complete step, and invokes exactly that skill. There is no inference. "Which step next?" is a table lookup, not a judgment call.

---

## Enhancement 5 — Failure as data, not silence

**Problem:** When a step fails (file not written, tool error, skill exits early), the pipeline often continues silently to the next step, producing incomplete components.

**Solution:** Any step that writes `"status": "failed"` halts the pipeline and surfaces the failure explicitly before proceeding.

### Halt behaviour

When the orchestrator reads a `failed` step from `pipeline-state.json`:

1. Do not advance to the next step.
2. Surface the failure: "Step 4 (evo-static-component) failed — [error]. Fix the issue or mark this step pending to retry."
3. Wait for explicit user confirmation before re-running.

This is the same principle as Local Conductor's "fail-closed, surface-don't-drop" design.

---

## Implementation order

Build these in sequence — each one makes the next easier:

1. **State file schema + write/read helpers** (Enhancement 1) — the foundation. Even just reading the state at startup to know where to resume eliminates most stalls.

2. **Artifact checks** (Enhancement 3) — implement alongside Enhancement 1. Populate the artifact list for each step as you go.

3. **Transition table** (Enhancement 4) — replace the model's "decide what's next" logic with a table lookup. This is an orchestrator SKILL.md change.

4. **Completion signals from sub-skills** (Enhancement 2) — update each sub-skill's SKILL.md to write the completion record. Do this incrementally; start with the steps that stall most often.

5. **Failure halting** (Enhancement 5) — add the halt check to the orchestrator after Enhancements 1–4 are in place.

---

## Files to read before starting

- `src/routes/_index/components/[component]/` — understand existing pipeline file layout
- `.claude/skills/evo-pipeline/SKILL.md` — the current orchestrator
- `.claude/skills/evo-static-component/SKILL.md` — example sub-skill to understand current completion signalling
- `.claude/projects/local-conductor/src/orchestrator/` — reference implementation of the state machine pattern this plan is based on (specifically `scheduler.ts`, `engineer.ts`, `qa.ts`)

---

## Success criterion

A `full` pipeline run that stalls midway can be re-invoked (same component, same scope) and resumes from the exact step that was interrupted — without re-running completed steps, without losing state, and without a human nudge at every boundary.
