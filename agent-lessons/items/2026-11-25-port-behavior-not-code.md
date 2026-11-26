---
source: correction
disposition: open
---

# When moving logic to a new home, re-derive each line instead of carrying it over

Converting a hydrated component to a template-only one, the first version moved the old `onMount` code into a module mostly intact, bringing along a lookup set, a DOM-to-element converter, a `toJSON` override and an unused `<defs>` that only the old design needed. The reviewer's response was "make sure this is the most minimal and cleanest version … Is this what you would have done if you built this from scratch instead of migrating?", and three more rewrites followed. Before porting a block, list what each line is for in the new design and drop the ones with no answer.

Disposition: open — evo-web maintainers (candidate for the `evo-safe-coding` skill), raised 2026-11-25
