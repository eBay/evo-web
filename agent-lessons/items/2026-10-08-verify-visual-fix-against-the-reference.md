---
source: observed-failure
disposition: open
---

# Compare a visual fix to the reference design, not to a number

A layout bug was reported twice and "fixed" twice, and the second report came with a screenshot of the live page. The checks passed on measurements that did not match what the user was looking at: a box was full width, but its height was 10px (empty), and the button had left the box. The reported fix was wrong, and the user had to repeat the complaint. For a visual bug, render the page, look at the screenshot next to the reference (the live or `main` version), and check that the thing the user named is where it belongs before claiming it works.

Disposition: open, project maintainers need to decide whether this belongs in CLAUDE.md, raised 2026-10-08.
