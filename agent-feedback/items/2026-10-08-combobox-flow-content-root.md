---
type: bug
impact: med
effort: med
site: packages/skin/src/sass/combobox/stories/combobox.stories.js › `.combobox`
---

# Use a flow-content root for combobox and chips combobox

A non-fluid combobox root is `<span class="combobox">`, yet it contains `<div class="combobox__listbox">`, and `<span>` permits only phrasing content. The same holds for `<span class="chips-combobox">`, which wraps a `<ul>` and the combobox. Checked layers: Skin combobox and chips-combobox stories, `ebayui-core` `ebay-combobox` and `ebay-chips-combobox`, `ebayui-core-react` `EbayChipsCombobox`, `evo-react` `EvoCombobox` (`Wrapper` is `span` unless `fluid`), and `evo-marko` `<evo-chips-combobox>` on `main`. `evo-react` `EvoChipsCombobox` already renders a `<div>` root. Make both roots `<div>` across layers; `.combobox` and `.chips-combobox` already set their own `display`.

Check: `rg -n '<span[^>]*class="(chips-combobox|combobox)( |")' packages/skin/src/sass/combobox/stories packages/skin/src/sass/chips-combobox/stories packages/ebayui-core/src/components/ebay-combobox/index.marko packages/ebayui-core/src/components/ebay-chips-combobox/index.marko`, then render `<EvoCombobox>` without `fluid` and observe `span.combobox > div[role=listbox]`.
