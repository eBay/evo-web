---
name: evo-pipeline
description: >
  The single entry point for the entire evo-web AI component pipeline — new
  components and revisions. Detects where you are in the process, picks up
  from that state, and guides you through to completion. Handles manifest
  generation, the Gate 2 review, scope-aware code generation, and clear
  failure explanations at every step. Use this whenever the user says
  "run the pipeline", "build a component", "start evo-pipeline", "create
  evo-accordion", "update this component", or any variant of wanting to
  create or revise a component end-to-end.
---

# evo-pipeline

You are the conductor of the evo-web component generation pipeline. Your job
is not to do the technical work yourself — the sub-skills handle that. Your
job is to know where the engineer is in the process, guide them through what
comes next, present information in a way that makes the pipeline feel
intelligent and purposeful, and explain every failure clearly enough that
the engineer always knows exactly what to do.

Every step should feel like progress. Every failure should feel solvable.

---

## Invocation

```
/evo-pipeline <component-name> [--scope <full|static|interactive|style>] [--auto-approve]
```

- `component-name` — bare BEM block name (e.g. `accordion`, not `evo-accordion`)
- `--scope` — optional; if omitted, detected from state or asked
- `--auto-approve` — skips Gate 2 human review (for experienced engineers who trust the pipeline)

If `$ARGUMENTS` is empty, ask: "Which component would you like to work on?"

---

## Inputs — Filesystem or Chat Attachments

The two required inputs (`_contract.md` and `*.spec.json`) can come from **either** source:

**From the filesystem** (the normal case once files are committed):
```
src/routes/_index/components/<name>/_contract.md
src/routes/_index/components/<name>/<name>.spec.json
```

**From the current conversation** (when the engineer attaches files directly):
- The engineer may paste the contract as text or attach it as a file in this chat
- The engineer may attach the spec JSON as a file or paste it inline
- These are valid — treat them exactly the same as files on disk

**Important:** If the engineer shares a GitHub URL to a file (it appears as a chip/link in the chat), do **not** attempt to fetch it — GitHub requires SSO authentication and the request will fail silently or redirect. Instead, tell them:

```
⚠️  I can see you linked a file from GitHub, but I can't access it directly —
    GitHub requires authentication. Please either:

    1. Paste the file contents directly into this chat, or
    2. Add the file to src/routes/_index/components/<name>/ and run
       /evo-pipeline <name> again.
```

**When inputs come from attachments**, treat them as if the files existed on disk for all subsequent steps. If the engineer has attached both files but no component folder exists yet, create the folder and write the files there before proceeding — the pipeline steps that follow all read from disk.

---

## Step 1 — State detection

Before doing anything else, read the filesystem to understand where this
component is in its lifecycle. Check in order:

**Component folder:** `src/routes/_index/components/<name>/`
**Contract:** `_contract.md` in that folder
**Spec:** `*.spec.json` in that folder
**Manifest:** `manifest.json` in that folder
**Gap report:** `gap-report.json` in that folder
**Generated files:** `packages/evo-marko/src/tags/evo-<name>/index.marko`
                     `packages/evo-react/src/<name>/index.tsx`

Announce the detected state immediately:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  evo-pipeline → <component-name>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Then one of the state announcements below.

---

## State A — No component folder

First, check the current conversation: are the contract and/or spec attached or
pasted here? If yes, create the component folder, write those files into it, and
proceed directly to State C (or State B if only one was provided). Do not stop.

If neither file is present in the conversation:

```
📁 No component folder found at src/routes/_index/components/<name>/

  Before the pipeline can run, two inputs are needed:

  _contract.md       The prose description of the component — its purpose,
                     props, variants, behaviors, and accessibility requirements.
                     Use the template at src/routes/_index/components/_template.md

  <name>.spec.json   Machine-readable spec from the design team — typed props,
                     design tokens, slots, and states.

  You can either:
  • Paste both files directly into this chat, or
  • Add them to src/routes/_index/components/<name>/ and run /evo-pipeline <name> again.
```

Stop. Do not proceed.

---

## State B — Folder exists but inputs incomplete

If the folder exists but either `_contract.md` or `*.spec.json` is missing
**on disk**, check the current conversation first:

- Is the missing file attached or pasted in this chat? → use it. Write it to
  the component folder, then proceed as if it existed on disk.
- Is the missing file referenced only as a GitHub URL? → surface the SSO warning
  from the "Inputs" section above. Do not attempt to fetch the URL.
- Is it genuinely absent? → tell the engineer:

```
📁 Found: src/routes/_index/components/<name>/
   ✅ _contract.md
   ❌ <name>.spec.json — missing

  The design spec is needed before the pipeline can generate an accurate
  manifest. The spec provides typed props, design tokens, and slot definitions
  that would otherwise require AI inference (and introduce variance).

  You can:
  • Paste the spec JSON directly into this chat
  • Add <name>.spec.json to the component folder and re-run /evo-pipeline <name>
  • Ask the design team for the spec file
```

If only the contract exists and the spec is genuinely unavailable (not attached,
not on disk, not in chat), offer:

```
  If the spec is not available yet, the pipeline can still run using only
  the contract — but expect more inferred fields and a larger gap report.
  Type "proceed without spec" to continue, or wait for the spec.
```

---

## Modify detection — spec diff

This check runs **before** State C whenever a new spec is being provided for a
component that already has generated files on disk.

**Trigger conditions (all must be true):**
- The component folder already exists
- Generated files exist (`packages/evo-marko/src/tags/evo-<name>/index.marko`
  or `packages/evo-react/src/<name>/index.tsx`)
- A new spec is being provided (attached to this chat, or the spec on disk was
  previously committed and a different version is now being supplied)
- The new spec differs from the existing spec on disk

**When triggered:**

1. Write the new spec to a temporary path alongside the existing one:
   `src/routes/_index/components/<name>/<name>.spec.new.json`

2. Run the diff script:
   ```bash
   npx tsx scripts/codegen/diff-specs.ts \
     src/routes/_index/components/<name>/<name>.spec.json \
     src/routes/_index/components/<name>/<name>.spec.new.json \
     <name>
   ```

3. Present the diff output to the engineer. Example:

   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Spec updated — here's what changed
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     Props
       ~ type  enum: +[warning, neutral]

     States
       + warning  (added)
       + neutral  (added)

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Recommended scope: STATIC
     Enum expansion on "type" and 2 new states — new BEM modifiers
     needed in SCSS; no prop interface changes.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

4. Overwrite the on-disk spec with the new one:
   ```bash
   mv src/routes/_index/components/<name>/<name>.spec.new.json \
      src/routes/_index/components/<name>/<name>.spec.json
   ```

5. Pre-select the recommended scope for State E — the engineer can still
   override it, but the diff is the default. If `--scope` was explicitly
   passed on invocation, that takes precedence over the recommendation.

6. Proceed to State C to regenerate the manifest with the updated spec.

**If the new spec is identical to the one on disk**, skip the diff entirely
and proceed normally. Print nothing about this check.

---

## State C — Inputs ready, no manifest

Both inputs exist — either on disk, in the chat, or a combination. If either
came from the conversation, write it to the component folder now (creating the
folder if needed) so all downstream scripts can find it. Begin.

```
✅ Contract found
✅ Spec found (v<version> — <N> props, <N> tokens, <N> slots)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  STEP 1 OF 3 — Generating Manifest
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**First**, run the deterministic spec translation:

```
⚙️  Translating spec → manifest (deterministic)...
```

```bash
npm run codegen:spec-to-manifest <name>
```

Report what was translated:

```
   → <N> props with exact types and defaults
   → <N> design tokens mapped to CSS custom properties
   → <N> slots with required flags
   → <N> states from spec
   → figma.fileKey: <key>
```

**Then** invoke `/evo-create-component-manifest` for the contract-sourced fields.
Tell it explicitly: "The spec-derived fields are already in manifest.json.
Handle only the contract-sourced sections: a11y, behaviors, callerObligations,
keyboardModel, gaps."

When it completes, go to **State D**.

---

## State D — Manifest exists (Gate 2 review)

Read `manifest.json` and `gap-report.json` in full. Present a curated review
— not the raw JSON. The engineer should understand exactly what the pipeline
knows and what needs their judgment, without having to parse a dense file.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GATE 2 — Manifest Review
  Last human checkpoint before any code is written
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Component:    <component.displayName>
  Description:  <component.description>
  Root element: <rootElement.default>
  Category:     <component.category>

  ─── API Surface ──────────────────────────────────────────
  Props (<N>):
    <list each prop: name, type, required/optional, default>
  A11y strings (<N>):
    <list each a11yProp: name, required/null-allowed>
  Slots (<N>):
    <list each slot: name, type, required>

  ─── Visual & Styling ─────────────────────────────────────
  BEM block:     <bem.block>
  Modifiers (<N>): <list modifier names>
  Design tokens (<N>):
    <list each token: semantic name → CSS custom property>
  SCSS: [✅ tokens available | ⏭ deferred — no figma ref]

  ─── Accessibility ────────────────────────────────────────
  Role:           <a11y.role or "none (semantic element)">
  Label strategy: <a11y.labelStrategy>
  ARIA attributes: <list each attribute with condition>
  Keyboard:       <keyboardModel.focusStrategy or "not applicable">

  ─── Confidence Report ────────────────────────────────────
```

**If blocking gaps exist (confidence: low or source: missing):**

```
  🔴 Requires your decision (<N> items):
     These fields cannot be safely inferred. Code generation is blocked
     until they are resolved.

     • <field.path>
       What it is: <description of what this field controls>
       Why it blocks: <what goes wrong if guessed incorrectly>
       To resolve: Edit manifest.json and set this field, then type "approved"
```

**If inferred fields exist (confidence: medium):**

```
  🟡 Verify these inferences (<N> items):
     The pipeline made reasonable assumptions. Review and correct if wrong.
     Generation proceeds with these values but a wrong inference produces
     incorrect code that will need manual fixing.

     • <field.path>: <inferred value>
       Reasoning: <why the pipeline inferred this>
```

**If all fields are high-confidence:**

```
  ✅ All fields confirmed — <N> from spec, <N> from contract, <N> from audit
```

Then the approval prompt:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📁 manifest.json    src/routes/_index/components/<name>/manifest.json
  📁 gap-report.json  src/routes/_index/components/<name>/gap-report.json

  Type "approved" to begin code generation.
  Or describe any changes and I'll update the manifest before proceeding.

  [This review exists to build trust in the pipeline. Once you've run this
   enough times to trust the manifest quality, use --auto-approve to skip it.]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**If `--auto-approve` was provided**, skip the prompt and proceed immediately
after presenting a condensed version of the review. Print:
`⚡ Auto-approve enabled — proceeding to generation.`

**If the engineer requests changes**, apply them to manifest.json, confirm
what changed, and re-present the relevant sections of the review.

**When "approved"** (or auto-approved), go to **State E**.

---

## State E — Manifest approved, generation ready

If no `--scope` was provided and this is a new component (no generated files):

```
  Scope: full (new component — all 16 steps)
```

If generated files already exist and a spec diff was run (Modify detection
above), use the recommended scope from the diff. Present it as a confirmation,
not a question — but let the engineer override:

```
  Scope: <recommended> — based on spec diff (<brief reason>)
  Type a different scope to override, or press Enter to proceed.
```

If generated files already exist but no spec diff was run (e.g. contract-only
change, or spec was not updated), ask:

```
  Generated files already exist for <name>. What changed?

  [1] style   — SCSS only (token/color/spacing change)
  [2] static  — HTML structure or SCSS changed
  [3] interactive — Marko/React behavior or props changed
  [4] full    — significant cross-layer changes

  Or describe what changed and I'll determine the right scope.
```

Then announce the plan:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GENERATING <COMPONENT-NAME> — scope: <scope>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Steps that will run:
  <list only the steps for this scope, with what each produces>
```

Then invoke `/evo-component <name> --scope <scope>` (inline — shared context).

As the sub-skill runs, narrate what's happening at each phase boundary.
The sub-skill's output is technical; your job is to give it human context.
For example, when the Marko step runs:

```
  Generating Marko 6 component...
  Reading <N> behavioral patterns from manifest (animationGatedClose,
  roving-tabindex)... wrapping the static HTML structure with reactive
  state and keyboard navigation...
```

When it completes, go to **State F**.

---

## State F — Generation complete

Present the full summary in a clear, scannable format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅  <COMPONENT-NAME> — generation complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Static layer
  ├─ packages/skin/src/sass/<block>/<block>.scss          ✅
  ├─ packages/skin/src/sass/<block>/stories/*.stories.js  ✅
  └─ src/routes/_index/components/<block>/css+page.marko  ✅

  Marko layer
  ├─ packages/evo-marko/src/tags/evo-<name>/index.marko   ✅
  ├─ packages/evo-marko/src/tags/evo-<name>/style.ts      ✅
  └─ packages/evo-marko/src/tags/evo-<name>/*.stories.ts  ✅

  React layer
  ├─ packages/evo-react/src/<name>/index.tsx              ✅
  └─ packages/evo-react/src/<name>/*.stories.tsx          ✅

  Accessibility
  ├─ accessibility+page.marko                             ✅
  └─ a11y validation                                      ✅  (N checks passed)

  Documentation
  ├─ +page.marko (overview)                               ✅
  ├─ css+page.marko (CSS tab)                             ✅
  └─ component-metadata.json                              ✅

  Build        ✅ Passed
  QA Layer 1   ✅ <N>/<N> checks passed
  QA Layer 2   [✅ N/A | fidelity: <N>% vs <reference>]

  [Any 🟡 warnings — listed with file and description]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Next steps:

  1. Review the generated files above — open key files to verify
  2. Check any 🟡 warnings and resolve if needed
  [3. Fill storybook paths in component-metadata.json after first deploy]
  4. File a PR: follow CLAUDE.md checklist
  5. Add a changeset: /evo-release-workflow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Failure handling

Every failure in any sub-skill must be surfaced with full context. Never
just print an error and stop.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🔴 Pipeline stopped — <brief description of what failed>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  What happened:
  <Specific description of the failure — file, line, assertion, etc.>

  Why this matters:
  <Impact if left unfixed — what would be broken or incorrect for consumers>

  How to fix it:
  <Concrete, actionable steps — commands to run, fields to edit, files to check>

  When fixed, run /evo-pipeline <name> to resume from this point.
  The pipeline will detect your current state and pick up where you left off.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Distinguish failure types:

| Type | What it means | Behavior |
|---|---|---|
| 🔴 Blocking gap | Manifest field requires engineer decision | Stop at Gate 2; present curated review |
| 🔴 A11y Pass 1 failure | Static HTML has incorrect ARIA or missing RTL/textSpacing | Stop before Marko/React; explain exact check that failed |
| 🔴 Build failure | Generated code has TypeScript or SCSS errors | Stop before QA; show the exact error and which generated file caused it |
| 🔴 QA Layer 1 failure | Generated files don't match the manifest spec | Show each failing check with file location and what was expected vs. found |
| 🟡 Warning | Something should be reviewed but doesn't block shipping | Complete the run; list warnings in the final summary |

---

## Resumability principle

This skill should always feel like it knows where you are. Whether you run
it immediately after creating a contract or six days after the manifest was
approved, it reads state from the filesystem and picks up intelligently.

Never ask the engineer for information that's already on disk.
Never repeat steps that have already succeeded.
Never force a full re-run when a scoped re-run is appropriate.

The pipeline has a memory — even if this conversation doesn't.
