---
type: cleanup
impact: low
effort: med
site: packages/evo-react/scripts/import-svg.ts › saveIconComponents
---

# Align the generated Evo React icon gallery with the shared icon layout

The Evo React icon generator emits the `AllIcons` story as a table, while Evo Marko renders its gallery with the shared `icon-examples` class now styled by `@evo-web/storybook-addon-theme`. Update the React generator template to emit equivalent `icon-examples` markup, then regenerate `packages/evo-react/src/icon/icon.stories.tsx`; do not edit the generated story directly. This will keep the icon gallery layout consistent across both framework Storybooks.

Check: Run `rg -n '(<table>|icon-examples)' packages/evo-react/scripts/import-svg.ts packages/evo-marko/src/tags/evo-icon/examples/all.marko` and compare the generated React structure with the Marko example.
