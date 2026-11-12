---
source: correction
disposition: open
---

# Match how sibling callers use a shared hook before adding bespoke wiring

When the menu-button popup became always-mounted, I added a layout effect that called `setFloating` only while open, instead of passing `setFloating` through the ref like the other `useExpander` callers (tooltip, infotip, combobox, date-input). The reviewer flagged it: "This smells." It cost a review round and a revert. Check how existing callers of a shared hook handle the same situation first; if their behavior has a cost, fix it in the shared hook or file feedback, rather than working around it in one caller. It recurred on 2026-11-09 in evo-react `EvoSelect`: the `useFormReset` setter was wrapped in a callback that forced a `useReducer` re-render so a controlled select kept its DOM selection through a native form reset, backed by two browser tests, while siblings such as input, textarea and star-rating-select pass `setUncontrolledValue` directly. The user corrected it: controlled reset is the app's responsibility, not the component's, so the `useReducer`, the callback and both tests were removed in favor of `useFormReset(selectRef, defaultValue, setUncontrolledValue)`. When siblings leave a case to the value's owner, that is the contract; don't build or test a workaround for it in one component.

Disposition: open — maintainer to decide whether this belongs in shared React-wrapper guidance, raised 2026-11-02
