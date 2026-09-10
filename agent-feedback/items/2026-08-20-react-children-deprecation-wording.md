---
type: unclear
impact: low
effort: low
site: docs/adr/0005-evo-react-child-component-composition.md › Context
---

# Correct the claim that React child composition APIs are deprecated

The ADR says React child-scanning APIs are deprecated by React, but React 19 still supports both `Children` and `cloneElement`. React documents them as legacy APIs that are uncommon, fragile, and discouraged for new code rather than deprecated or removed. Replace the deprecation claim with that narrower rationale so future API decisions do not rely on an incorrect compatibility constraint.

Check: Run `rg -n "deprecated by React" docs/adr/0005-evo-react-child-component-composition.md`, then compare the claim with https://react.dev/reference/react/Children, https://react.dev/reference/react/cloneElement, and https://react.dev/reference/react/legacy.
