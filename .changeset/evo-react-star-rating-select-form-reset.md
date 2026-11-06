---
"@evo-web/react": patch
---

Fix `EvoStarRatingSelect` keeping its stars filled after a native form reset. An uncontrolled rating now returns to `defaultValue` when its form is reset.
