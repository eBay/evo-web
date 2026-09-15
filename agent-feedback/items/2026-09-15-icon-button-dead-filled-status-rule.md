---
type: cleanup
impact: low
effort: low
site: packages/skin/src/sass/icon-button/icon-button.scss › .icon-btn > svg.icon--confirmation-filled-24 (and attention/information, 16/24 variants)
---

# Remove dead filled-status color rules from icon-button

`icon-button.scss` has rules targeting `svg.icon--confirmation-filled-24`, `svg.icon--confirmation-filled-16`, and the attention/information equivalents (both `icon-btn` and `icon-link`). No component in the repo has ever produced that compound class name: the Marko icon wrapper (`ebayui-core/src/components/ebay-icon/index.marko` and `evo-marko/src/tags/evo-icon/index.marko`) emits only `icon icon--{size}` when a size is supplied, and the React wrapper (`ebayui-core-react/src/ebay-icon/icon.tsx`, `evo-react/src/icon/icon.tsx`) derives the same size-only class via `getIconSize`. No `icon-btn`/`icon-link` story in Skin demonstrates this rule with a filled-status icon either — they all use plain icons. This looks like dead CSS carried over from the pre-monorepo `.less` era. Confirm with git blame/history, then remove the unreachable rules (or, if some external consumer is somehow constructing this class manually, document that as the reason to keep it).

Check: `rg -n "icon--(confirmation|attention|information)-filled-(16|24)\"" packages/skin/src/sass/icon-button/icon-button.scss` shows the rules; `rg -n "getIconClass|getIconSize" packages/ebayui-core/src/components/ebay-icon/index.marko packages/evo-marko/src/tags/evo-icon/index.marko packages/ebayui-core-react/src/ebay-icon/icon.tsx packages/evo-react/src/icon/icon.tsx` shows none of them can produce the compound class name the rule targets.
