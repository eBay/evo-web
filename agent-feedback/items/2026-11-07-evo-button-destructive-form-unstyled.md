---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/button/button.scss › --destructive rules
---

# Style or reject destructive form buttons

Skin only styles `btn--destructive` combined with `--primary`, `--secondary`, `--tertiary` or `--borderless`, so `<evo-button appearance="form" destructive>` renders as a plain form button. Direction: decide in Skin whether a destructive form button exists; add its rule, or limit `destructive` in evo-button's `Input` type to the appearances Skin styles, so every combination stays valid.

Check: render `<evo-button appearance="form" destructive>` in Storybook (`buttons/evo-button`) and compare it with `appearance="form"` alone.
