# Agent Lessons

How we work with the agent, and what it gets wrong. **Not** findings about the code — those go in
[`agent-feedback/`](../agent-feedback/README.md). The test: would this entry still make sense in a
repo with none of our source in it? If yes, it belongs here. If it's about a bug, a gap, or
cleanup in the actual codebase, it belongs there instead.

**No named owner.** This queue is surfaced automatically at the start of every session (see the
`SessionStart` hook in `.claude/settings.json`) — visibility is the enforcement mechanism, not a
person who has to remember to check a file.

## When to file

1. A correction someone gave the agent that it should not need to hear twice.
2. A failure with an observed cost: a wrong turn taken, work that had to be redone, a wasted
   review cycle.
3. A guardrail (hook or permission) that fired, and whether it was right to.

## What does not go here

Anything that can be enforced mechanically. If a rule is checkable by a script, it belongs in a
hook or a permission instead — an entry here is only worth writing if it explains _why_ that check
exists, not as a substitute for building the check.

## Every entry ends with a decision

No entry stays open indefinitely. Exactly one of:

- **Applied** — the correction now lives somewhere a session actually reads: a CLAUDE.md line, a
  hook, a permission, or a skill. **Delete the entry file once that surface exists and carries the
  rule** — nothing in `agent-lessons/` is delivered to a session automatically (see
  `.claude/hooks/session-start-context.js`; it reports an open-item _count_, never content), so a
  lesson marked `applied` but left in place is an inert second copy of a rule nobody reads from
  here anymore. Same rule as `agent-feedback/README.md`: resolve by deleting, git history is the
  archive. Most entries end here.
- **Declined** — with the reason, and the file stays in place (this is the only surviving record
  of the decision). A legitimate outcome, not a failure to resolve.
- **Open question** — with who has to answer it and the date it was raised. Only for genuinely
  unresolved judgment calls, not a place to park things nobody got to.

A file of observations that never resolve into a decision is a diary, and nobody reads a diary.

## Entry format

One file per lesson in `items/`, named `YYYY-MM-DD-<slug>.md`:

```md
---
source: correction | observed-failure | guardrail-fired
disposition: applied | declined | open
---

# <the lesson, stated as the rule it produced>

<2-4 sentences: what happened, what it cost, and why the general rule follows from it. Quote the
correction directly if there was one — the original wording is usually sharper than a paraphrase.>

Disposition: applied to `<file or setting>` | declined, because <reason> | open — <owner>, raised <date>
```

## Entries

See `items/` for individual entries.
