---
source: observed-failure
disposition: open
---

# Parse SCSS with `postcss-scss`'s own parser, and diff the compiled CSS before trusting a rewrite

A script that paired every `btn` selector with a `button` twin called `postcss.parse(src, { syntax: scss })`. The `syntax` option is ignored by `parse`, so the plain CSS parser read the `//` comments as part of the next selector and copied them into the selector lists of four files before it crashed on the fifth. The four files had to be restored and the rename reapplied. With `scss.parse(src)` the run was clean, and compiling all 26 files before and after, then mapping the new selectors back to the old names, proved the old CSS was unchanged.

Disposition: open, Arthur Khachatryan, raised 2026-10-20. Candidate surface: a note in the `/evo-commands` skill or a shared selector-rewrite script.
