---
type: unclear
impact: med
effort: low
site: src/routes/_index/components/combobox/accessibility+page.marko › Interaction Design
---

# Reconcile the shared combobox keyboard documentation with Evo behavior

The accessibility page names an `autoSelect` API and says Enter on an automatically highlighted option submits the form. Evo React and Evo Marko expose `listSelection` instead, and both prevent the Enter default when accepting an active option regardless of selection mode. Confirm the intended shared behavior, then distinguish framework-specific terminology and submission rules in the documentation rather than treating the current page as an unambiguous test contract. Both Evo implementations were inspected; the legacy packages' submission behavior was not verified in a browser.

Check: In an Evo React form, focus an automatic-mode combobox, press ArrowDown and Enter, and observe that the option is accepted without submitting the form. Compare this with the Enter paragraph under Keyboard in the shared accessibility page and with the `onKeyDown` handler in `packages/evo-marko/src/tags/evo-combobox/index.marko`.
