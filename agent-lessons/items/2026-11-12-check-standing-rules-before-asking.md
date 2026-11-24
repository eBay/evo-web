---
source: correction
disposition: open
---

# Check every open question against the user's standing rules before asking it

During menu-family planning the user set a standing rule, more than once: nothing
that exists is removed in this release; obsolete code is deprecated and kept until
the next major. A later list of scope questions still asked whether to deprecate
`menu`, whether consumer modules should move to the new names, and whether to write
a docs page for a module about to be deprecated, all answered by that rule or by
precedent (PR #1070 moved consumer stories in the same PR). The user replied
"Remember I gave you a general rule... a lot of these questions have that confused."
It cost a review round on questions that were already settled.

Disposition: open, Arthur Khachatryan, raised 2026-11-12. Candidate: a CLAUDE.md
line telling agents to filter open questions against stated rules and repository
precedent before presenting them.
