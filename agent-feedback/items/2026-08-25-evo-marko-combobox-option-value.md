---
type: unclear
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-combobox/index.marko › ComboboxOption
---

# Define the Evo Marko combobox option value contract

`ComboboxOption` declares `text` and `sticky` but the Storybook `option` argTypes also document `value` as an optional value that defaults to `text`. The template spreads `value` onto the option div while selection and `aria-selected` use only `text`, so consumers cannot tell whether `value` is supported metadata or an accidental HTML attribute. Add `value` to the interface with defined selection semantics, or remove it from the story controls.

Check: Render `<evo-combobox><@option text="Campaign" value="campaign-id"/></evo-combobox>`, select the option, and observe that the input contains `Campaign` while `value="campaign-id"` is passed to the option div without participating in selection.
