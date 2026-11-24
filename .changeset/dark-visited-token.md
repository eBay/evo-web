---
"@ebay/skin": patch
---

Fix `--color-state-visited` in the dark theme, which pointed to the undefined `--color-magenta-3` and resolved to nothing. It now uses `--color-pink-400`, the dark theme's `--color-foreground-link-visited` color, just as the light theme uses `--color-pink-600`.
