# Agent Feedback

Actionable observations that were out of scope for the task that surfaced them. In scope: fix it. Out of scope: file it here. Never expand a task's diff to fix an item recorded here.

One item per file in `items/`, named `YYYY-MM-DD-<slug>.md`. Convention and triage skill: [DylanPiercey/skills](https://github.com/DylanPiercey/skills).

## When to file

Anything a future contributor should act on:

- `bug`: a suspected defect left unpursued
- `a11y`: a WCAG 2.2 AA / ARIA / keyboard / RTL / dark-mode gap
- `cleanup`: duplication, dead code, inconsistency, refactor opportunity
- `perf`: runtime speed, bundle size, or CSS output size
- `dx`: friction in builds, tests, Storybook, or repo workflows
- `unclear`: code or docs that were confusing, and what would have clarified them

## Rules

1. **Verify first.** A guess is not feedback. Every item ends with a check that reproduces the claim.
2. **Dedupe first.** `grep -ril '<path or symbol>' agent-feedback/items`. If a file covers it, edit that file only when you add new information.
3. **Check the code site.** An intent comment there means the behavior is deliberate. Do not file it.
4. **Self-contained.** Paths, symbols, reasoning. Never reference conversation context or "earlier analysis".
5. **Cite by stable symbol**, never line number — an exported component or function, a `<tag>` in a `.marko` template, a BEM selector or mixin in SCSS, or a heading for docs.
6. **State the defect and the check.** Never describe what works. Never narrate a landed fix.
7. **Direction is preventive for `unclear` and `dx`.** Name what would have stopped the trip: a comment, a doc line, a lint rule, a compile error, a debug-only warning. The goal is that the next agent does not hit it.
8. **Resolve by deleting the file in the same PR as the fix.** A partial fix rewrites the file to what remains.
9. **Won't-fix is a maintainer's call, never an agent's.** Add a comment (two lines max) at the code site stating the behavior and why it is deliberate, then delete the file. The comment is what stops re-filing. Never consult git history to learn whether something was resolved; if it is not in `items/` and not commented at the site, it is unresolved.

## Item format

`items/YYYY-MM-DD-<slug>.md`:

```md
---
type: bug | a11y | cleanup | perf | dx | unclear
impact: high | med | low
effort: high | med | low
site: <path/to/file.ts> › <nearestStableSymbol>
---

# <one-line imperative title>

<2-6 sentences: the problem, why it matters, a concrete direction. Cut evidence a fixer can re-derive from the site.>

Check: <command, input, or observation that reproduces the claim>
```

`impact`: what breaks or is lost if ignored. `effort`: expected size of the fix. Both are the filer's estimate; triage re-judges.

## Repo notes

- **Note every package the item spans.** A component usually exists in `skin`, `ebayui-core`, `evo-marko`, `ebayui-core-react` and `evo-react`; say which of them the defect reaches and which you actually checked.
- A check is a command someone else can run — `npx vitest run <path>`, `npm run build`, `npm run lint`, a Storybook story plus the interaction that exposes it, or a rendered-markup/computed-style observation. "Read the code and you'll see" is not a check.
