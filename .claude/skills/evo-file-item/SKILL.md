---
name: evo-file-item
description: >
  Files an entry in agent-feedback/ (a code finding: bug, a11y gap, cleanup, perf,
  dx friction, unclear code) or agent-lessons/ (a correction about how the agent
  should work — not the code). Enforces both queues' own rules: category selection,
  dedupe-first, verify-before-record, correct entry format, and (for agent-lessons)
  a mandatory disposition. Use whenever the user says "file this", "add a feedback
  item", "log this as a lesson", "record this finding", or whenever you notice
  something actionable but out of scope for the current task and are about to write
  an item into either queue.
---

# Filing agent-feedback / agent-lessons entries

This skill operationalizes the rules already stated in
[`agent-feedback/README.md`](../../../agent-feedback/README.md) and
[`agent-lessons/README.md`](../../../agent-lessons/README.md). Those READMEs are the
source of truth — if this skill and a README ever disagree, the README wins. This
skill exists so the rules get applied the same way every time, not re-derived from
memory mid-task.

## Step 1 — Route to the right queue

Apply the test `agent-lessons/README.md` states: **would this entry still make sense in a repo with
none of this project's source in it?**

- **Yes** → it's about how the agent works, not the code → `agent-lessons/`.
  Examples: a correction someone gave that shouldn't be needed twice, a wrong turn
  that cost real rework, a guardrail that fired.
- **No** → it's about the actual codebase → `agent-feedback/`. Pick a category:
  `bug`, `a11y`, `cleanup`, `perf`, `dx`, or `unclear`.

State which queue and category you're filing into before writing anything. If you're
unsure, re-read the relevant README's "When to file" / "What does not go here"
sections rather than guessing.

## Step 2 — Dedupe first

Before creating a new file, search both queues:

```bash
grep -ril '<slug or symbol>' agent-feedback/items agent-lessons/items
```

If an existing entry already covers this, do not create a second one. Edit the
existing file, and only append a new sentence if it adds information the original
entry didn't have.

## Step 3 — Verify before recording

A guess is not feedback, in either queue.

- **`agent-feedback`:** the entry must end with a command, input, or observation
  someone else can run to reproduce the claim. "Read the code and you'll see" does
  not count.
- **`agent-lessons`:** the entry must describe something that actually happened — an
  actual correction given, an actual observed cost (time lost, work redone, a review
  cycle wasted) — not a hypothetical "this could go wrong."

Also check the code site for an intent comment before filing an `agent-feedback` item
— deliberate behavior isn't a bug.

## Step 4 — Write the entry

One file per item, `items/YYYY-MM-DD-<slug>.md`.

**`agent-feedback` format:**

```md
---
type: bug | a11y | cleanup | perf | dx | unclear
impact: high | med | low
effort: high | med | low
site: <path/to/file.ts> › <nearestStableSymbol>
---

# <one-line imperative title>

<2-6 sentences: the problem, why it matters, a concrete direction. Note every package
the item spans if it's a component (skin, ebayui-core, evo-marko, ebayui-core-react,
evo-react) and which you actually checked.>

Check: <command, input, or observation that reproduces the claim>
```

**`agent-lessons` format:**

```md
---
source: correction | observed-failure | guardrail-fired
disposition: applied | declined | open
---

# <the lesson, stated as the rule it produced>

<2-4 sentences: what happened, what it cost, and why the general rule follows from
it. Quote the correction directly if there was one.>

Disposition: applied to `<file or setting>` | declined, because <reason> | open —
<owner>, raised <date>
```

## Step 5 — agent-lessons entries need a disposition

Unlike `agent-feedback`, every `agent-lessons` entry carries a `disposition` from the
moment it's filed:

- If you already know the fix (e.g. you're filing this alongside building a hook or
  permission in the same session), file it as `applied`, naming exactly where the
  change landed.
- If it needs a human decision you can't make, file it as `open`, and name who has to
  answer it and the date raised. Never leave this blank — an unowned open question is
  exactly the failure mode the README warns against.
- Never mark something `declined` yourself — that's a maintainer's call. If you
  believe an item should be declined, file it as `open` and say so.

## Step 6 — Report back

State which file you created or edited, and its category. Filing an item is not
something to do silently in the background of an unrelated task — the user (or a
future triage pass) needs to know it happened.

## What this skill does not do

It does not fix `agent-feedback` items (that's normal task work, done when someone's
already in that area of the code) and it does not resolve `agent-lessons` items into
hooks/permissions/CLAUDE.md changes — that's [`/evo-triage-lessons`](../evo-triage-lessons/SKILL.md),
run on request, separately.
