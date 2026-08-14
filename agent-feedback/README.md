# Agent Feedback

Actionable observations that were **out of scope for the task that surfaced them**. If something is in scope, fix it instead. Do not expand a task's diff to fix issues recorded here.

## When to add an entry

While working on any task, record anything a future contributor should act on:

- a suspected bug left unpursued → `bugs.md`
- a WCAG 2.2 AA / ARIA / keyboard / RTL / dark-mode gap → `a11y.md`
- duplication, dead code, inconsistency, refactor opportunities → `cleanup.md`
- runtime speed, bundle size, or CSS output size opportunities → `perf.md`
- friction in builds, tests, Storybook, or repo workflows → `dx.md`
- code or docs that were confusing, and what would have clarified them → `unclear.md`

## Rules

1. **Search the category file first.** If an entry already covers it, don't duplicate; append a corroborating sentence only when it adds new information.
2. **Be self-contained.** Include enough detail (paths, symbols, reasoning) that someone can act without re-discovering the analysis behind it. Never reference "my earlier analysis" or conversation context.
3. **Cite by stable symbol, not line number.** Line numbers rot with the next edit; anchor the primary citation to the nearest enclosing stable symbol — an exported component or function, a `<tag>` in a `.marko` template, a BEM selector or mixin in SCSS, or a heading for docs. A line number may appear in the body as a secondary hint.
4. **Note every package the entry spans.** A component usually exists in `skin`, `ebayui-core`, `evo-marko`, `ebayui-core-react` and `evo-react`; say which of them the defect reaches and which you actually checked.
5. **Append to the end** of the category file.
6. Entries are **removed when resolved** (delete, don't mark done; git history is the archive), in **the same PR as the fix**, never a follow-up PR. A partial fix rewrites the entry to what remains.
7. **Verify before recording.** A guess is not feedback.
8. **An entry is work to do, not documentation.** State the defect and the check that proves it. Never describe what already works, and never narrate what a landed fix changed.

## Resolving a "won't fix" item

When a maintainer has explicitly deemed an item "won't fix" / "not worth it", resolve it by adding a brief inline comment at the code site that captures the decision (so it is not re-filed), then remove the entry. Only on such an explicit call, never on an agent's own initiative.

## Entry format

```md
## <one-line imperative summary>

`<primary/file/path.ts>` › `<nearestStableSymbol>` | 2026-08-14 | impact:<low|med|high> | effort:<low|med|high>

<2-6 sentences: the problem, why it matters, and a concrete suggested direction,
ending with the check that re-verifies the claim (a command, input, or
observation). Cut evidence beyond what a fixer needs to act; further detail is
re-derived from the citation. Additional file paths inline as needed.>
```

A re-verification check is a command someone else can run — `npx vitest run <path>`, `npm run build`, `npm run lint`, a Storybook story plus the interaction that exposes it, or a rendered-markup/computed-style observation. "Read the code and you'll see" is not a check.
