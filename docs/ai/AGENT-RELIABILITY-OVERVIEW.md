# Agent Reliability: How the Pieces Work Together

**Overview for engineers and stakeholders**

---

## Why This Document Exists

This document is a record of system design decisions and the reasoning behind them, written in plain language for easier understanding by engineers and stakeholders. It is meant to relay why the changes that accompany the implementation of agent reliability were made, and how the different pieces work together to achieve that goal.

**This is a reading aid, not a second source of truth.** The technical reference,
[`.claude/AGENT-RELIABILITY.md`](../../.claude/AGENT-RELIABILITY.md), is what's authoritative:
it names real files and gets checked against the actual repo state. This document exists only to
explain that same material in plain language. If the two ever disagree, the technical reference is
right and this one is out of date.

**Keeping it current is everyone's job, not a one-time write.** When a new layer, hook, or skill
gets added, this document should get a matching update, the same way the technical reference does.
A stale plain-language explanation is exactly the kind of thing `agent-lessons/` exists to catch:
worth filing rather than letting it quietly drift further from what's actually running.

---

## What This Is

`agent-feedback/` already existed: a shared to-do list where anyone working on the code, human
or AI, can jot down a real problem they noticed but didn't have time to fix, so it doesn't get
lost or drag their current task off-track. It works well and nothing here replaces it.

What it doesn't cover is a different kind of problem: keeping the _agent itself_ reliable, making
sure it doesn't stop mid-task without saying so, doesn't forget unfinished work between sessions,
doesn't run something risky without a person seeing it first, and has somewhere to put a
correction about its own behavior instead of it being said once and then relying on memory next
time. This document explains, in plain language, the small set of pieces added to cover that, and
how each one leans on `agent-feedback`'s own proven pattern rather than reinventing it.

The technical version of this same material, every real file name, every exact behavior, lives
in [`.claude/AGENT-RELIABILITY.md`](../../.claude/AGENT-RELIABILITY.md). This document is the
plain-language version of that one.

---

## The Core Idea, in One Paragraph

There's a real difference between _telling_ an AI agent to do something and _making sure_ it
happens. Telling it works most of the time, but "most of the time" isn't good enough for things
that are expensive to get wrong, like accidentally committing code nobody reviewed, or an
unfinished task quietly falling through the cracks. So four different layers were built, each one
a step stronger than the last, and the strongest layer that made sense was used for each specific
problem. Weaker layers aren't a downgrade: they're the right tool for things that genuinely need
a person's judgment, not a switch that can be flipped for them.

## The Four Layers

### 1. Written instructions (`CLAUDE.md`)

This is the plainest layer: a standing set of instructions the agent reads at the start of every
session. Think of it as a policy document: it's always there, but following it still depends on
the agent remembering it, understanding it correctly, and choosing to comply. That's not a flaw;
it's simply the nature of an instruction. It's the right layer for things that need a person's
own judgment to write once, like the exact syntax to use for a specific version of a framework,
because that kind of correction genuinely can't be turned into a yes/no rule a computer can check.

### 2. Skills (specialized instruction sets, invoked by name)

A skill is a more detailed set of instructions that the agent pulls in only when it's actually
doing that specific job: filing something, reviewing a change, releasing a package. Because it's
summoned by name rather than sitting passively in the background the whole time, it's less likely
to get lost in a long conversation. Two new skills were built this round: one that files things
correctly into either backlog (more on that below), and one that reviews open items in the newer
backlog and decides what, if anything, should be promoted into a stronger layer.

### 3. Automatic checks ("hooks")

This is where things stop being just instructions and start being code that runs on its own,
whether or not the agent remembers to ask for it. One check runs every time the agent is about to
stop responding, and it looks at whether a multi-step component build was left mid-way; if so, it
refuses to let the agent walk away quietly. Another check runs at the very start of every new
conversation, and it reports two things automatically: whether any unfinished work is sitting on
disk from a previous session, and how many items are waiting in either backlog. Neither of these
depends on the agent choosing to look; they just run.

### 4. Hard blocks (permissions)

This is the strongest layer: certain actions are switched off entirely, before the agent ever gets
a chance to reason about whether to do them. Right now that covers things like committing or
pushing code without being asked, and editing files that are supposed to be auto-generated (a
build regenerates them anyway, so a hand-edit there just gets silently thrown away the next time
someone runs a build; this stops that from happening in the first place). There's no scenario
where the agent "forgets" this rule, because it's not a rule the agent is following: it's a door
that's simply locked.

---

## How Each Layer Complements `agent-feedback`

`agent-feedback` solved one specific, real problem well: don't let a stray finding balloon an
unrelated pull request, and don't lose it either. Everything added this round exists because that
same good pattern, a shared, disciplined backlog, didn't yet cover a few other things:

- **A twin backlog, `agent-lessons`, for corrections about the agent's _behavior_ rather than the
  code.** `agent-feedback` is about what's wrong with the codebase. `agent-lessons` is about what
  the agent got wrong and the correction that followed, a mistake that shouldn't need to be
  pointed out twice. It uses the exact same discipline `agent-feedback` already proved works: one
  file per item, a clear resolution, nothing left open forever. The one real difference: once a
  lesson is actually promoted into a stronger layer above (a written rule, a skill, a hard block),
  its file gets deleted, the same way `agent-feedback` already deletes an item once it's fixed. A
  lesson's job is to exist only until it's been folded into something that's actually enforced;
  keeping it around after that would just be the same correction sitting in two places.
- **A way to _notice_ both backlogs exist, automatically.** Filing something into either backlog
  was always something a person or the agent had to actively do. Nothing ever told a fresh session
  "by the way, there are open items waiting." Now the very first thing a new conversation sees
  includes a one-line count of anything open in either backlog, not the content, just enough of a
  nudge that it's never silently forgotten the way a to-do list in a drawer can be.
- **A companion skill that keeps filing quality consistent.** `agent-feedback` already has good
  rules: check for duplicates first, verify before writing anything down, always include a way to
  confirm the problem is real. Those rules only work if they're actually followed the same way
  every time. The new filing skill is exactly that checklist, applied automatically whenever
  something is being filed into either backlog, so quality doesn't quietly drift depending on who
  (or which session) is doing the filing.

None of this changes what `agent-feedback` does or how it works. It's additive: the same idea,
extended to cover the two things a code-findings backlog was never meant to handle, the agent's
own behavior, and making sure nobody has to remember to go check either list.

---

## How This Adds Up to Better Model Performance

Every one of these layers is aimed at the same underlying issue: a large language model has a
limited ability to hold onto everything relevant in a long conversation, and it will always
default to whatever's most familiar from its training, even when that's outdated or wrong for
this specific codebase. That's not a bug to be embarrassed about; it's just how the technology
works, the same way a very well-read person can still misremember a fact under pressure. The fix
isn't to hope it remembers better; it's to stop relying on memory for the things that matter most.

Concretely:

- **Fewer silent failures.** Before this work, a script whose job was to catch a stalled
  multi-step build could fail quietly and nobody would know the safety check itself had broken.
  Now that failure is loud and impossible to miss.
- **Less repeated correction.** Right now, if someone corrects the agent mid-task, that correction
  usually only helps for the rest of that one conversation. `agent-lessons` gives that correction
  somewhere permanent to go, and a real path for it to become a rule the agent can't help but
  follow, instead of something a person has to keep re-explaining every time it comes up again.
- **Fewer surprises at review time.** A hard block means a risky action was never possible in the
  first place, rather than something a reviewer has to catch after the fact. That's less mental
  load on the human reviewing the work, and it means the agent's mistakes cost less when they do
  happen.
- **A session picks up where the last one left off.** New conversations used to start from zero
  awareness of anything left unfinished. Now the very first moment of a new session already knows
  about open work and open backlog items, without anyone having to re-explain the state of things.

---

## A Few Things Worth Knowing

**This isn't about not trusting the agent.** It's the same reason a good engineering team writes
automated tests instead of just trusting everyone to remember to check things by hand: it's not
a judgment on anyone's diligence, it's just a more reliable way to get consistent results at scale,
across many sessions and many different people using it.

**Stronger isn't always better; matching the right layer to the right problem matters.** A hard
block is not appropriate for something that genuinely requires a person's judgment call, and a
written instruction isn't strong enough for something that must never happen. Part of the work
here was correctly matching each real problem to the right layer, not reflexively reaching for the
strongest one available every time.

**Two changes were deliberately reversed partway through this work**, once checked against
research on how these models actually behave. One attempt moved some version-specific coding
guidance out of the main instructions and into a separate linked file, and it turned out that
actively hurts reliability for that particular kind of content (it needs to stay front-and-center,
not tucked away behind a link). I caught it, undid it, and moved on. That's worth mentioning
because it's a good example of the whole approach: build it, then genuinely check it, rather than
assume something sounds reasonable and ship it anyway.

**This is a foundation, not a finished system.** A few refinements are already identified for a
future round, for example, giving the open-items backlog a hard cap and a decide-by date so
nothing can sit unanswered indefinitely, the same way a well-run project doesn't let a review
queue grow forever. Those are deliberately left for later rather than rushed into this round.
