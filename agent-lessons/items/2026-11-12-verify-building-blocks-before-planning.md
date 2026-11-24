---
source: observed-failure
disposition: open
---

# Check that a proposed building block supports the required states before writing it into a plan

During menu-family planning the agent proposed rebuilding Filter Menu Button from
`filter-button`, and the plan, the decisions list and the change map all carried it.
Implementation then found `filter-button` has no selected class, no visually hidden
"applied" text and no chevron tied to `aria-expanded`, all of which `filter-chip`
already had. The plan, the ADR, the change map and the #655 follow-up text had to be
rewritten mid-implementation, and the pivot had to be explained to the user.

Disposition: open, Arthur Khachatryan, raised 2026-11-12. Candidate: a line in the
planning guidance requiring a read of each composed module's states and selectors
before naming it as the replacement for an existing pattern.
