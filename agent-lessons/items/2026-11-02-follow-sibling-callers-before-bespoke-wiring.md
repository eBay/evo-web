---
source: correction
disposition: open
---

# Match how sibling callers use a shared hook before adding bespoke wiring

When the menu-button popup became always-mounted, I added a layout effect that called `setFloating` only while open, instead of passing `setFloating` through the ref like the other `useExpander` callers (tooltip, infotip, combobox, date-input). The reviewer flagged it: "This smells." It cost a review round and a revert. Check how existing callers of a shared hook handle the same situation first; if their behavior has a cost, fix it in the shared hook or file feedback, rather than working around it in one caller.

Disposition: open — maintainer to decide whether this belongs in shared React-wrapper guidance, raised 2026-11-02
