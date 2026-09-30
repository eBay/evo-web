---
source: correction
disposition: open
---

# Match the comment density of the surrounding code before writing any

A carousel rework shipped with around 90 comment lines in one utility module and
explanatory comments through its template and tests, where the rest of
evo-marko documents only a11y-text props and comments almost nothing else. The
correction was: "Follow comment conventions from the rest of evo-marko! Opus 5.5
(you) _cannot_ stop writing comments!" It cost a cleanup pass over every file.
Measuring comments in neighboring files before writing, and defaulting to none,
would have avoided it.

Disposition: open — repo maintainers (decide whether evo-web's CLAUDE.md gets a
comment rule like the one in marko's AGENTS.md), raised 2026-09-30
