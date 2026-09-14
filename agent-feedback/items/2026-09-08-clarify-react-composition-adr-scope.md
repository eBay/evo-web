---
type: unclear
impact: low
effort: low
site: docs/adr/0005-evo-react-child-component-composition.md › Context
---

# Clarify ADR 5's React terminology and affix exceptions

ADR 5 describes React.Children as deprecated, while React's documentation calls its use uncommon and fragile without marking the API deprecated. The ADR also rejects object-shaped slots as poor DX, but EvoInput and EvoCombobox expose object-shaped postfix props. Clarify whether the named-subcomponent decision applies to structural composition while fixed input affixes are an intentional exception, so future components do not alternate between these approaches without a stated rule. This review checked the ADR and the evo-react input and combobox types, not every component's composition API.

Check: Compare the Context and Alternatives considered sections with [React's Children reference](https://react.dev/reference/react/Children), then compare `EvoInputPostfixProps` in `packages/evo-react/src/input/types.ts` and `EvoComboboxPostfixProps` in `packages/evo-react/src/combobox/types.ts` with the ADR's object-slot example.
