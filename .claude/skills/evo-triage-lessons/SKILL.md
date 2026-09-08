---
name: evo-triage-lessons
description: >
  On-request review of open agent-lessons/ entries. For each disposition: open item,
  proposes whether it should become a hook, a permission, a CLAUDE.md line, or be
  declined — and requires human confirmation before applying anything. Scoped to
  agent-lessons/ only (agent-behavior corrections), not agent-feedback/ (code
  findings, which get fixed as part of normal task work). Invoke with
  /evo-triage-lessons, or when the user says "triage the lessons queue", "review
  open lessons", or "what should we do with the agent-lessons entries".
---

# Triaging agent-lessons

`agent-lessons/` has no scheduled review — there is no cron mechanism inside
`.claude/`, and building one is explicitly out of scope for this repo's tooling (see
`agent-lessons/README.md` and the reasoning behind why `SessionStart` only surfaces a
_count_, never auto-triages). This skill is the deliberate, on-request substitute: a
human runs it when they want a review, the same way `/evo-release-workflow` is run
when someone wants to release.

This skill only touches `agent-lessons/`. It never reads or modifies
`agent-feedback/` — code findings get fixed as part of normal task work, not through
this triage flow. If an item turns out to be a misfiled code finding, say so and
suggest re-filing it with `/evo-file-item` — do not move it or attempt a fix
yourself.

## Step 1 — Enumerate

List every file in `agent-lessons/items/` whose frontmatter has `disposition: open`.
Skip anything already `applied` or `declined` — those are resolved, not this skill's
job.

Report the count first. If zero, say so and stop — there is nothing to triage.

## Step 2 — Classify each open entry

For every open entry, decide which bucket it falls into. Use the same
mechanism-vs-judgment split behind every hook and permission already in this repo:

- **Mechanically checkable by a script** → propose a **hook**. Point to
  `.claude/hooks/check-pipeline-stop.js` and `.claude/hooks/session-start-context.js`
  as the pattern to follow: a real file (not an inline one-liner), tested against
  real and edge-case scenarios, fails loudly if it can't complete its check rather
  than silently passing.
- **A specific action that should simply never happen** → propose a **permission**
  deny rule. Point to the existing `permissions.deny` block in `.claude/settings.json`
  as the pattern.
- **A standing fact or convention with no way to check it mechanically** → propose a
  **CLAUDE.md** line, in whichever existing section it actually belongs
  (`<agent_constraints>`, `<correctness_guards>`, etc.). Never invent a new top-level
  CLAUDE.md section without asking first — adding sections changes the file's
  structure and is worth a deliberate decision, not something to do inline mid-triage.
- **Not worth fixing, or already covered by an existing hook/permission/rule** →
  propose **declined**, with the one-sentence reason.

State the proposed bucket and a concrete sketch of the change for every entry before
moving to confirmation — don't just name the bucket, show what the hook/permission/
CLAUDE.md line would actually say.

## Step 3 — Confirm before applying anything

Present every proposal and wait for explicit approval. Never batch-apply changes
across multiple entries in one go, and never apply a single proposal without
confirmation first — this mirrors how every hook and permission in this repo so far
was built: proposed, reviewed, then written, one at a time.

If a proposal is approved and it's a **hook** or **permission**, building and testing
it is its own follow-up task — write the file, test it against real and edge-case
scenarios the way the existing hooks were tested, don't just describe it and mark the
lesson `applied` before the actual mechanism exists.

If a proposal is approved and it's a **CLAUDE.md** line, make the smallest addition
that states the rule — do not restate something already covered elsewhere in the
file (check `<correctness_guards>`, `<agent_constraints>`, and any other relevant
section first).

## Step 4 — Resolve the entry: delete on apply, keep on decline

`agent-lessons/` is a staging area, not a permanent home. A lesson's job is to exist
just long enough to get promoted into a real enforcement surface — CLAUDE.md, a skill,
a hook, or a permission. Once that surface exists and actually carries the rule,
leaving the original lesson file in place too is exactly the same "wasteful,
copy-pasted duplication" flagged elsewhere in this repo's own guidance — the same
correction stated twice, with no reason for the second copy to exist. Nothing in
`agent-lessons/` is delivered to a session automatically (see
`.claude/hooks/session-start-context.js` — it only ever reports an open-item _count_,
never content); the moment a lesson is promoted, its file is the only thing left
saying the rule, and it is not being read by anyone or anything. This mirrors
`agent-feedback/README.md`'s own rule exactly: **"Resolve by deleting the file... git
history is the archive."**

- **Applied** — once the change actually lands (the hook is written and tested, the
  permission is added, or the CLAUDE.md line is written), **delete the entry file.**
  Do not mark it `applied` and leave it in place — an `applied` file sitting in
  `agent-lessons/items/` forever is not a record, it's an inert second copy of a rule
  that now lives somewhere a session actually reads. If the promotion is a multi-step
  follow-up (e.g. approved now, hook built later), leave the entry `open` with that
  follow-up named as the next step — do not mark `applied` before the surface exists.
- **Declined** — edit the entry's `Disposition:` line to state the reason, and leave
  the file in place. A declined lesson is not promoted anywhere else, so its file is
  still the only record of the decision — deleting it would lose the reasoning, the
  same way deleting an `agent-feedback` item without a fix would.

Never leave an entry `open` after a triage pass unless the user explicitly defers a
decision — in that case, restate it as an open question with a named owner and the
date raised, per `agent-lessons/README.md`'s own rule. An open question with nobody
named to answer it is the exact failure mode the queue's design exists to prevent.

## What this skill does not do

- Does not run on a schedule — there is no mechanism for that here, by design.
- Does not touch `agent-feedback/`.
- Does not write hooks, permissions, or CLAUDE.md changes without a human confirming
  each one individually.
