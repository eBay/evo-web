---
type: dx
impact: low
effort: low
site: .claude/skills/evo-migrate-marko/SKILL.md › ### Example files
---

# Show typed `Input` in the migrate skill's example template

The "Example files" section of the evo-migrate-marko skill gives `<evo-{name} ...input/>` as the example template. When the migrated tag's `Input` has a required prop, such as `<evo-flag>`'s `country`, the example's untyped `input` fails `mtc` with "Property 'country' is missing in type '{}'", and `npm run build -w packages/evo-marko` breaks. Existing examples (`evo-badge/examples/default.marko`, `evo-alert-dialog/examples/default.marko`) avoid this with `import type { Input as XInput } from "../index.marko"; export interface Input extends XInput {}`. Put those two lines in the skill's template so the next migration starts from a typed example.

Check: replace `packages/evo-marko/src/tags/evo-flag/examples/default.marko` with just `<evo-flag ...input/>`, run `npm run build -w packages/evo-marko`, and see TS2345 on that file.
