---
"@ebay/ebayui-core": minor
"@ebay/ui-core-react": minor
---

feat(signal): add Signal V2 inputs

- Added `tone` (`neutral`, `information`, `positive`, `warning`, `attention`). It takes precedence over `status`.
- Added `emphasis` (`default`, `strong`, `subtle`). `default` adds no class.
- Added `icon`, an optional 12px leading icon rendered before the label. Pass a 12px icon component, for example a `promotion-12` icon.
- Deprecated `status`. It still works unchanged and maps to a tone: `trustworthy` → `information`, `recent` → `positive`, `time-sensitive` → `attention`, `neutral` → `neutral`. Use `tone` instead.
