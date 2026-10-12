---
source: correction
disposition: open
---

# Expose state a component derives as an output, not a controllable input

To let controls outside a carousel mirror its disabled state, the agent made
`atStart` and `atEnd` controllable pairs (`atStart` plus `atStartChange`),
copying how the tag exposes `index` and `paused`. The correction was: "probably
it shouldn't be fully controlled right? I can't imagine you'd want to provide
an initial value for `atStart` or `atEnd` or set it from a parent". Those values
are read off the scroll position, so a parent has nothing meaningful to set, and
the inputs only existed to make `:=` compile. It cost a rework of the tag, its
example, docs and tests. Before making state controllable, ask what a parent
setting it would do; if nothing, report it with a change handler alone.

Disposition: open — repo maintainers (decide whether this becomes an AGENTS.md
line beside the `a11yText` convention), raised 2026-10-12
