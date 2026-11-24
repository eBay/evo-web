---
"@evo-web/marko": patch
"@evo-web/react": patch
---

feat(signal): add Signal V2 inputs and remove `status`

- Added `tone` (`neutral`, `information`, `positive`, `warning`, `attention`). It defaults to `neutral`.
- Added `emphasis` (`default`, `strong`, `subtle`). `default` adds no class.
- Added `icon`, an optional 12px leading icon rendered before the label.
- Removed `status` (and the `SignalStatus` type from `@evo-web/react`). Use `tone` instead: `trustworthy` → `tone="information"`, `recent` → `tone="positive"`, `time-sensitive` → `tone="attention"`, `neutral` → `tone="neutral"`.
