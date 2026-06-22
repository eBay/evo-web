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

## Orchestrator Role — What This Skill Does and Does Not Do

This skill is a **conductor**. It orchestrates sub-skills. It does not write
files, edit SCSS, modify stories, update docs, or implement any component
work itself — regardless of how simple the task appears.

Every implementation action, without exception, goes through a sub-skill
invocation. The pipeline's quality gates exist precisely to catch the things
that "obviously correct" direct edits miss. Bypassing them defeats the
entire purpose of having a pipeline.

**If you find yourself about to write a file directly, stop.** That is a
violation of this skill's role. The correct action is always to invoke the
appropriate sub-skill and let it do the work.

### Rationalizations that will occur to you — and why they are always wrong

You will be tempted to shortcut the pipeline. These thoughts will feel
reasonable in the moment. They are not:

| Rationalization                                                              | Why it's wrong                                                                                                  |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| "The specs are identical, the diff step can be skipped"                      | The diff compares spec to _implementation_, not just spec to spec — skipping it hides gaps                      |
| "The manifest is already on disk so Gate 2 is implied"                       | On-disk ≠ approved. "Approved" means the engineer typed it in this session                                      |
| "It's just a CSS modifier / one small file / obviously correct"              | Scope doesn't matter. All implementation goes through sub-skills                                                |
| "Invoking /evo-component is overkill for this"                               | There is no scope small enough to justify bypassing the sub-skill                                               |
| "I can see exactly what needs to change and it will be faster to just do it" | Faster is not the goal. A gate-verified output is the goal                                                      |
| "The task is simple so the QA step isn't needed"                             | QA is not optional. It runs after every generation, full stop                                                   |
| "The sub-skill returned, so generation is done"                              | The sub-skill completing is not pipeline completion. State E.5 (QA + visual verification) has not run yet       |
| "QA Layer 1 passed, so it's done"                                            | Manifest-fidelity QA passing does not mean visual rendering is correct. State E.5 requires a live browser check |
| "I can see the code looks right"                                             | You have not opened a browser. Visual QA requires navigating to the component page and taking a screenshot      |

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

**Pipeline state:** `pipeline-state.json` in the component folder

If `pipeline-state.json` exists:

Note: evaluate sub-steps 1–3 in order. The resume banner (sub-step 1) always prints first.
Stall detection (sub-step 2) may promote in-progress steps to failed before sub-step 3 checks
for failures.

1. If the file exists but cannot be parsed as JSON (corrupted or partial write), treat it as
   NOT_FOUND: log `⚠️ pipeline-state.json is corrupt — treating as a fresh run.` and skip to
   the State A/B/C/D detection below without printing the resume banner.

   Read it and print the resume banner:

   ```
   ♻️  Prior pipeline run detected for <component>
       Scope:    <scope>
       Started:  <startedAt>
       Progress: <N> of <M> steps complete
   ```

   To compute the counts: parse the JSON, count entries in `steps` where `status === "complete"` for N;
   count entries where `status !== "skipped"` for M.

2. Run stall detection (see Step 2.5 in `/evo-component`) — the outer pipeline
   surfaces stalled steps before passing to `/evo-component`.
   If `/evo-component` is not already in context, inline the stall check: run `cat src/routes/_index/components/<name>/pipeline-state.json`, look for any step with `status === "in-progress"` and check its `startedAt` timestamp — if older than 10 minutes relative to now, treat that step as `failed` with error "Stalled — re-run to retry."
3. If any step is `failed`, surface ALL failed steps, not just the first:
   ```
   🔴 Prior run ended with failed step(s):
      Step <N> — <error>
      Step <M> — <error> (if multiple)
      Resolve the issue(s) above, then re-run /evo-pipeline <name> to retry.
   ```
   Stop. Do not proceed to State C/D/E until the failure is resolved or the
   engineer types "reset" to clear the state file.
4. If the engineer types "reset": delete `pipeline-state.json` from the component folder, then
   treat this run as a fresh start — proceed to State C (or State D if manifest already exists
   and was not re-generated). Do not ask for further confirmation.

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

**Modification mode — when the component folder exists, always treat the run as a modification.** The absence of a spec on disk is not a signal to start fresh — it means the spec was never committed, not that the component is new. If a spec is provided (in chat or on disk), compare it against the implemented state (read the SCSS, Marko, and React files) to determine what changed.

**Trigger conditions (all must be true):**

- The component folder already exists
- Generated files exist (`packages/skin/src/sass/<name>/<name>.scss`,
  `packages/evo-marko/src/tags/evo-<name>/index.marko`,
  or `packages/evo-react/src/<name>/index.tsx`)
- A new spec is being provided (attached to this chat, or the spec on disk was
  previously committed and a different version is now being supplied)
- The new spec differs from the existing spec on disk (or from the implemented
  state when no spec was previously on disk)

**When triggered:**

1. Get the committed (old) spec via git:

   ```bash
   git show HEAD:src/routes/_index/components/<name>/<name>.spec.json
   ```

   - If the command returns content: this is the old spec. Parse it and compare
     against the new spec (on disk or from chat) to identify what changed.
   - If the command errors or returns nothing: no committed spec exists — treat
     all spec fields as new, skip the diff display, and proceed to State C.

2. Diff the old and new specs in context. For each section, note additions (+),
   removals (-), and modifications (~):
   - `props` — type changes, enum value additions/removals, default changes
   - `states` — added or removed state entries
   - `tokens` — added, removed, or renamed token mappings
   - `slots` — added or removed slot definitions

3. Determine the recommended scope from the type of changes:

   **Pre-check — variant additions or removals (runs before all other rules):**
   If the diff contains any addition (+) or removal (-) in `tokenVariants` or `states`,
   that signals a new or removed named variant, which maps directly to a new or removed
   BEM modifier. Because BEM modifiers are applied by framework components via prop enums,
   any variant change requires framework layers to be updated — not just SCSS.
   - Check whether `packages/evo-marko/src/tags/evo-<name>/index.marko` exists
     AND `packages/evo-react/src/<name>/index.tsx` exists.
   - If both exist → recommended scope is at least `interactive`
     (prop enum update + conditional class logic in both framework layers)
   - If either is absent → recommended scope is `full`
     (missing layers must be generated, not just updated)
   - This pre-check overrides a `static` recommendation from the diff rules below.
     A diff that would otherwise be `static` becomes `interactive` or `full` whenever
     a variant is added or removed.

   Present this override clearly in the diff summary:

   ```
   ⚠️  Variant change detected (+ or - in tokenVariants/states) — scope escalated
       from STATIC to <INTERACTIVE|FULL>. Framework layers must reflect the
       updated prop enum.
   ```

   **Diff-based scope rules (apply after the pre-check):**
   - Token value changes only (no variant add/remove) → `style`
   - New enum values or states only (no framework layers exist) → covered by pre-check above
   - Prop type changes, new props, or behavioral flags → `interactive`
   - Multiple layer changes → `full`

4. Write the new spec to disk, overwriting the existing file (if it came from
   chat) or confirming it is already current (if already on disk from a previous
   step in this session).

5. Present the diff summary to the engineer:

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
     Recommended scope: FULL
     ⚠️  Variant change detected: + warning, + neutral in tokenVariants/states.
     New BEM modifiers need SCSS AND framework prop enum updates.
     evo-marko layer absent → full generation required.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

6. Pre-select the recommended scope for State E — the engineer can still
   override it, but the diff is the default. If `--scope` was explicitly
   passed on invocation, that takes precedence over the recommendation.

7. Proceed to State C to regenerate the manifest with the updated spec.

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

**Before generating the manifest**, validate that every design token referenced in the spec exists in the token system. This prevents the pipeline from doing work that would later be blocked during SCSS generation.

Read the `tokens` field from the spec file (`src/routes/_index/components/$COMPONENT/*.spec.json`). For each token CSS custom property name (e.g. `--color-background-warning`), run the two-stop check:

```bash
# Stop 1 — compiled skin tokens
grep -i "<token-name>" packages/skin/dist/tokens/evo-light.css

# Stop 2 — upstream design-tokens package (valid tokens not re-declared in skin)
grep -i "<token-name>" node_modules/@ebay/design-tokens/dist/mixins/evo-light.scss
```

A token passes if it appears in either file. Collect every token that fails both.

**If any tokens are missing**, halt immediately — do not proceed to manifest generation:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Missing design tokens — pipeline blocked before manifest generation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The following tokens from the spec do not exist in the design
token system. The design team must add them before generation
can proceed.

  <token-name>  (used for: <CSS property from spec, e.g. background-color>)

Resolution: Ask the design team to add the missing token(s), then
re-run /evo-pipeline <component> once the tokens are available.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**If all tokens exist**, print `✅ All <N> design tokens verified` and continue.

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

**This gate is unconditional.** It runs every time a manifest exists — even
if it has been on disk for days or was generated in a prior session. A
manifest on disk is not an approved manifest. "Approved" means the engineer
typed it in the current session. Do not proceed to State E without explicit
approval (unless `--auto-approve` was passed at invocation).

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

**Static scope always includes css docs.** When scope is `static` or `style`
and the change adds or removes a variant (enum value), `css+page.marko` must
be updated to include the new variant in the demo block and `<highlight-code>`
block. This is not a separate step — it is part of the static scope output.

Then announce the plan:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GENERATING <COMPONENT-NAME> — scope: <scope>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Steps that will run:
  <list only the steps for this scope, with what each produces>
```

**Do not write any files yourself.** Your only action here is to invoke the
sub-skill below. All SCSS, Marko, React, story, doc, and token files are the
sub-skill's responsibility — not yours. If you are editing a file directly
at this point, you have left your role as orchestrator and broken the pipeline.

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

When it completes, go to **State E.5**.

---

## State E.5 — QA and visual verification (MANDATORY GATE — cannot be skipped)

> ⚠️ **This state is not optional.** The sub-skill completing generation is not the
> same as the pipeline being done. You must complete every step below before printing
> the State F summary. There is no valid reason to skip this state. "The code looks
> correct" is not a substitute for running these steps.

### Step 1 — Run /evo-qa

Invoke `/evo-qa <name> --scope <scope>`.

- If it returns any 🔴 failures: fix every failure inline and re-run `/evo-qa` until
  it returns `Layer 1 result: ✅ PASSED`. Do not proceed while any check fails.
- Record the pass count for the State F summary.

### Step 2 — Visual verification in a live browser

Run all sub-steps in order. Do not skip any.

1. **Confirm the dev server is running.** Check for an active process on the expected
   port (typically `http://localhost:63733` for this project). If not running, start it:

   ```bash
   npm start
   ```

   Wait for the server to be ready before proceeding.

2. **Navigate to the component's CSS docs page:**

   ```
   http://localhost:<port>/components/<name>/css
   ```

3. **Take a full-page screenshot.** Visually inspect every new or modified variant:
   - Correct background color applied
   - Text is legible (correct foreground color, sufficient contrast)
   - Icons are visible and correctly colored
   - Border matches expected style
   - Layout is correct (grid, spacing, alignment)

4. **Switch to dark mode and take another screenshot.**
   Verify every new or modified variant in dark mode:
   - Background still renders correctly
   - **Text must be legible — a light background with light text is a contrast failure**
   - If any variant uses a light/warm background (yellow, white, light-tinted), run a
     computed style check for every foreground element (text, links, icon SVGs):

   ```js
   // For each foreground element inside the new modifier:
   const el = document.querySelector(".<block>--<modifier>");
   const link = el?.querySelector("a");
   const svg = el?.querySelector("svg");
   console.log({
     bg: getComputedStyle(el).backgroundColor,
     text: getComputedStyle(el).color,
     linkColor: link ? getComputedStyle(link).color : "none",
     iconColor: svg ? getComputedStyle(svg).color : "none",
   });
   ```

   Every foreground value must be a **dark color** (close to `rgb(25,25,25)` / `#191919`).
   A near-white value (e.g. `rgb(247,247,247)`) on a light background is a contrast failure.

   **If any foreground is unexpectedly light in dark mode**, the root cause is almost always
   one of two things — check in order:
   1. `--color-foreground-on-<type>` is missing from `evo-light-class.scss` or
      `evo-dark-class.scss` (the class-based files the dev server uses). All four token
      files must define this token: `evo-light.scss`, `evo-dark.scss`,
      `evo-light-class.scss`, `evo-dark-class.scss`.
   2. A base rule (e.g. `.block a { color: var(--token, var(--color-foreground-on-inverse)) }`)
      has higher specificity for that element than the modifier rule. The modifier needs
      explicit `.modifier a` and `.modifier button.fake-link` color overrides.

5. **If any visual failure is found:** fix it, rebuild (`npm run build -w @ebay/skin`),
   reload the browser, re-verify. Do not proceed to State F until the screenshot
   confirms correct rendering in both light and dark mode.

Only after both steps pass, go to **State F**.

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
  QA Layer 1   ✅ <N>/<N> checks passed  ← actual result from State E.5 Step 1
  QA Layer 2   [✅ N/A | fidelity: <N>% vs <reference>]
  Visual QA    ✅ Light mode verified | ✅ Dark mode verified  ← actual result from State E.5 Step 2

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

| Type                   | What it means                                             | Behavior                                                                   |
| ---------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 🔴 Blocking gap        | Manifest field requires engineer decision                 | Stop at Gate 2; present curated review                                     |
| 🔴 A11y Pass 1 failure | Static HTML has incorrect ARIA or missing RTL/textSpacing | Stop before Marko/React; explain exact check that failed                   |
| 🔴 Build failure       | Generated code has TypeScript or SCSS errors              | Stop before QA; show the exact error and which generated file caused it    |
| 🔴 QA Layer 1 failure  | Generated files don't match the manifest spec             | Show each failing check with file location and what was expected vs. found |
| 🟡 Warning             | Something should be reviewed but doesn't block shipping   | Complete the run; list warnings in the final summary                       |

---

## Resumability principle

This skill should always feel like it knows where you are. Whether you run
it immediately after creating a contract or six days after the manifest was
approved, it reads state from the filesystem and picks up intelligently.

Never ask the engineer for information that's already on disk.
Never repeat steps that have already succeeded.
Never force a full re-run when a scoped re-run is appropriate.

The pipeline has a memory — even if this conversation doesn't.
