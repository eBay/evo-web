---
type: bug
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-listbox-button/index.marko › selectedIndex
---

# Make evo-listbox-button read a numeric `selected` as a value, as evo-listbox does

`<evo-listbox-button>` treats a numeric `selected` as an index into its options (`selectedIndex`), but passes the same `selected` to `<evo-listbox>`, which compares it with each option's `value` (the index only when an option has no value). With numeric option values the button's label and the listbox's selection disagree: `selected=2` over values `1, 2, 3` labels the button "Option 3" and marks "Option 2" `aria-selected`. Resolve `selectedOption` the way the listbox does (by value, falling back to index for options without one). Checked: evo-marko only; ebayui-core's `ebay-listbox-button` and evo-react not checked.

Check: server-render `<evo-listbox-button a11ySelectedText="selected" selected=2><for|v| of=[1, 2, 3]><@option value=v>Option ${v}</@option></for></evo-listbox-button>` with `@marko/testing-library`: the `<button>` text is "Option 3" while the `[aria-selected="true"]` option is "Option 2".
