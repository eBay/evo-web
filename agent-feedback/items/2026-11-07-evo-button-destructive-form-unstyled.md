---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/button/button.scss › --destructive rules
---

# Style or reject destructive form buttons

Skin only styles `btn--destructive` combined with `--primary`, `--secondary`, `--tertiary` or `--borderless`, so `<evo-button priority="form" destructive>` renders as a plain form button. Direction: decide in Skin whether a destructive form button exists; add its rule, or document that `destructive` has no effect with `form`.

Check: render `<evo-button priority="form" destructive>` in Storybook (`buttons/evo-button`) and compare it with `priority="form"` alone.
