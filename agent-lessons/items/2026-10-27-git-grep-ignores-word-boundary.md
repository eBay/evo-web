---
source: observed-failure
disposition: open
---

# Don't treat an empty `git grep -E '\b...'` result as proof of absence

On 2026-10-27, while checking PR #1070 for leftover class names, `git grep -lE '\b(link-button|button-link)\b'` and several similar searches returned nothing. I took that as "no leftovers". Every search using `\b` came back empty, including ones that had to match (the legacy `fake-button` stories), which exposed it: this `git grep -E` does not treat `\b` as a word boundary. Rerunning with `rg` found 2 references that needed checking (both turned out to be intended) and 15 story files the issue update depends on. An empty result from a pattern that should have matched something means the search is broken, not that the code is clean. Use `rg` (or `git grep -P`) for word boundaries, and sanity-check a search against a file known to match.

Disposition: open, Arthur Khachatryan to decide whether this belongs in CLAUDE.md's search guidance or a hook, raised 2026-10-27
