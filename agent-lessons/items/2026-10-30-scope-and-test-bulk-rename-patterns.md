---
source: observed-failure
disposition: open
---

# Test a bulk rename pattern against every form of the name before running it

On 2026-10-30, renaming `navigation-button` to `button-link` across PR #1070, my pattern ended with `(?![\w])`. Because `_` is a word character, it skipped all 23 BEM element names like `navigation-button__cell`, which only a later prose check exposed. The same pass rewrote the plain phrase "navigation buttons" in four calendar files outside the PR, turning prev/next calendar controls into "button links". Both were caught before commit, at the cost of a second fix pass and a revert. Before a bulk rename, list every distinct form the pattern matches and every file it would touch, compare the file list against the files the change is meant to cover, and run the swap only on that list.

Disposition: open, Arthur Khachatryan to decide whether a rename helper or CLAUDE.md line should carry this, raised 2026-10-30
