---
type: a11y
impact: med
effort: low
site: packages/ebayui-core/src/components/ebay-flag/index.marko › <span class="fflag">
---

# Render `a11y-text` on `<ebay-flag>` or stop advertising it

`<ebay-flag>` declares `@a11y-text` in `marko-tag.json`, and its story documents it as "the aria label for the outer container", but the template never reads it. `processHtmlAttributes` also strips every `a11y*` key (`skipAttributes` in `src/common/html-attributes`), so the label disappears silently and a flag with no visible country name next to it has no accessible name. Render `role="img"` plus `aria-label` when it is set, as `<evo-flag>` (evo-marko) does. Otherwise remove the attribute from `marko-tag.json` and the story. Checked in ebayui-core only. `EbayFlag` in ebayui-core-react has no such prop; evo-marko's `<evo-flag>` supports `a11yText`.

Check: in a `test.server.js` under `packages/ebayui-core/src/components/ebay-flag/`, `await template.render({ flag: "us", a11yText: "United States" })` returns `<span class="fflag fflag--us"></span>`, with no `aria-label` or `role`.
