---
type: unclear
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-combobox/combobox.stories.ts › argTypes.option
---

# Remove or define the advertised Marko combobox option value

Evo Marko's Storybook describes an option `value` that defaults to `text`, but `ComboboxOption` declares only `text` and `sticky` beyond div attributes, and the template commits `text`. This advertises machine-readable selection semantics that the text-suggestion component does not implement. Align the Marko documentation with the text-only contract or obtain an explicit design decision for different semantics; do not infer entity selection from an attribute passed to a div. This review inspected Evo Marko's types, template, and stories and Evo React's text-only migration guidance.

Check: Open the Evo Marko combobox documentation's `option` table and observe the `value` control. Render `<evo-combobox><@option text="Campaign" value="campaign-id"/></evo-combobox>` and select its option; the template writes `Campaign` into the input, not `campaign-id`.
