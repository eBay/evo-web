---
type: cleanup
impact: med
effort: med
site: packages/evo-react/src/utils/locale-info.ts › LocaleInfo
---

# Share CLDR date locale data across packages

`locale-info.ts` now exists in `evo-marko`, `ebayui-core`, `ebayui-core-react`, and `evo-react`. Date parse/format depend on this table staying in sync. A locale fix in one package will not reach the others.

Check: `diff packages/evo-marko/src/common/dates/locale-info.ts packages/evo-react/src/utils/locale-info.ts`
