---
source: observed-failure
disposition: open
---

# Read the full markup before claiming a state is not exposed to assistive technology

An accessibility comparison of the menu-family triggers tallied tags carrying ARIA
attributes and concluded that `filter-menu-button` shows "filter applied" visually
only. The trigger actually contains `<span class="clipped">Filter Applied</span>`,
visually hidden text that becomes part of the button's name; the tally skipped it
because it has no ARIA attribute. The wrong claim went into a delivered document
and a question to the user, and both had to be corrected.

Disposition: open, Arthur Khachatryan, raised 2026-11-12. Candidate: a line in the
`evo-a11y` skill requiring a full read of any element before stating it exposes no
accessible information.
