---
type: unclear
impact: low
effort: low
site: packages/ebayui-core/src/components/ebay-education-notice/marko-tag.json › @cta
---

# Drop or document the `@cta` attribute tag on ebay-education-notice

`ebay-education-notice` declares `@cta` in `marko-tag.json`, and `ebay-notice-base` renders it as `<p class="education-notice__cta">`, but Skin has no `education-notice__cta` rule, the docs place actions in `education-notice__footer`, and the education notice's `Input` omits every `on*` event from the base so `cta-click` never reaches consumers. It reads as supported API and led the evo-react migration (PR #1005) to add an `EvoEducationNoticeCTA` that was later removed. Either remove `@cta` from the education-notice tag schema or back it with Skin styles and docs. Checked: skin, ebayui-core, ebayui-core-react (no CTA), docs site; evo-marko has no education notice yet.

Check: `grep -rn "education-notice__cta" packages/skin/src src/routes` returns nothing, while `grep -n '@cta' packages/ebayui-core/src/components/ebay-education-notice/marko-tag.json` matches.
