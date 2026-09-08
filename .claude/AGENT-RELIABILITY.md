# Agent Reliability: What Enforces What

A technical reference mapping every mechanism that keeps an AI agent working reliably in this
repo against the failure modes it actually defends against. Built from the agent-tooling work in
`.claude/hooks/`, `.claude/skills/`, `.claude/settings.json`, `CLAUDE.md`, `agent-feedback/`, and
`agent-lessons/`: every row and cell below names a real file.

This is the technical reference. For the plain-language version, same system, written for a
wider audience, see [`docs/ai/AGENT-RELIABILITY-OVERVIEW.md`](../docs/ai/AGENT-RELIABILITY-OVERVIEW.md).

---

## The core idea

Every mechanism here sits somewhere on an axis from **asked** to **guaranteed**:

- **Asked**: a standing instruction the model has to retrieve from context, interpret correctly,
  and choose to follow. Nothing catches it if any of those three steps fails.
- **Checked**: deterministic code that runs regardless of what the model is thinking, and reports
  what it found. The model still has to act on the report, but the report itself doesn't depend on
  the model's judgment.
- **Blocked**: the action is unreachable at the tool layer before any model reasoning happens at
  all.

Four tiers exist in this repo today, roughly weakest to strongest guarantee:

1. **CLAUDE.md prose**: asked.
2. **Skills** (`.claude/skills/`): asked, but triggered by name/intent-match rather than passively
   sitting in context, which makes retrieval more reliable than a buried CLAUDE.md line.
3. **Hooks** (`.claude/hooks/`): checked.
4. **Permissions** (`.claude/settings.json` → `permissions.deny`): blocked.

There is no fifth "dated guards" tier in this repo. One was built and then deliberately reverted
(see [Why some cells are empty](#why-some-cells-are-empty)); don't re-add it here without
re-adding the mechanism.

---

## The matrix

| Mechanism           | Hallucination                                                                                                                     | Context rot / lost-in-the-middle                                                                                                | Silent tool/process failure                                                                                                                                                                                                                                                                                                                                               | Scope creep                                                                                                                         | Irreversible action taken without review                                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CLAUDE.md prose** | ✅ `<correctness_guards>`: Marko 5→6 syntax, AttrTag generics, BEM, React package differences, kept inline on purpose (see below) | ✅ same section: inline placement in the primacy zone is the entire reason it wasn't extracted to a linked file                 | —                                                                                                                                                                                                                                                                                                                                                                         | ✅ `Agent Feedback` / `Agent Lessons` sections point out-of-scope findings/corrections at a named home instead of an unrelated diff | —                                                                                                                                                                                                       |
| **Skills**          | — (skills point back to `<correctness_guards>` rather than restating syntax)                                                      | ⚠️ partial: invoked by name/intent rather than passively read, but still competes for attention once loaded into a long session | —                                                                                                                                                                                                                                                                                                                                                                         | ✅ `evo-file-item`: operationalizes filing so a finding doesn't expand the current diff or get silently dropped                     | ✅ `evo-triage-lessons`: requires per-item human confirmation before turning a lesson into a hook, permission, or CLAUDE.md change; never batch-applies                                                 |
| **Hooks**           | —                                                                                                                                 | —                                                                                                                               | ✅ `check-pipeline-stop.js`: was an inline one-liner swallowing errors with `catch(e){}`; now a real file that exits 1 only when it can't enumerate components at all, and exits 2 (aggregating every per-component finding, including unreadable state files, so one bad file never hides another component's real in-progress state) whenever any real problem is found | —                                                                                                                                   | ✅ `check-pipeline-stop.js` blocks `Stop` while a component pipeline is mid-run; `session-start-context.js` surfaces unfinished work and backlog counts at session start so it isn't silently forgotten |
| **Permissions**     | —                                                                                                                                 | —                                                                                                                               | —                                                                                                                                                                                                                                                                                                                                                                         | —                                                                                                                                   | ✅ `settings.json` `permissions.deny`: `git commit`/`git push`, and edits to generated icon files and `packages/skin/dist/`, are unreachable before the model ever reasons about them                   |

---

## Why some cells are empty

Empty cells are not omissions, they're honest gaps, worth stating rather than papering over:

- **Nothing below the prose tier defends hallucination or context rot.** You cannot mechanically
  block "the model wrote Marko 5 syntax" the way you can block a `git push`, that would require a
  linter or a compiler-level check, which doesn't exist yet. As long as this gap is real, the
  guards in `<correctness_guards>` have to stay inline and in the primacy zone; moving them to a
  linked file would remove the one defense this repo has for that failure mode. See the reasoning
  in this session's history: Anthropic's own guidance and the Liu et al. "Lost in the Middle"
  research (Stanford/UC Berkeley, 2024) both support keeping version-specific syntax examples
  inline rather than referenced.
- **There is no "dated guards" tier.** An attempt was made to extract `<correctness_guards>` into a
  separate, dated `framework-guards.md` file with re-verify checks per entry, modeled on a step in
  an external planning document. It was reverted in full once cross-checked against the research
  above, because extraction-with-a-link is exactly the anti-pattern that research warns against for
  this category of content. If a dated-guards mechanism gets rebuilt in the future, it needs its own
  row here; don't assume it already exists because a plan once described it.
- **Skills only partially defend context rot.** Being invoked by name is better than sitting
  passively in a long context, but a skill's own instructions can still be forgotten or
  misapplied deep into a long-running session. Nothing currently re-injects a skill's rules
  mid-task the way `SessionStart` re-injects pipeline/backlog state at the start of one.

---

## Reading this table

- A ✅ names the actual file responsible. If the file moves or is renamed, this table goes stale;
  treat a stale entry here the same as any other agent-lessons-worthy correction.
- A ⚠️ means partial coverage; read the note, don't treat it as equivalent to a ✅.
- A `—` is a real gap. If you're about to build something new for a failure mode marked `—`, check
  first whether the gap is structural (nothing _can_ mechanically defend it, per the note above) or
  just hasn't been built yet.
