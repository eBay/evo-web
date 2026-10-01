---
"@evo-web/marko": minor
---

Add `evo-progress-bar-expressive`, migrated from `ebay-progress-bar-expressive`. `a11yText` is now required (English default `"Loading..."`), and `<@message>` accepts only its body and `duration`. When the user prefers reduced motion, each message now shows for 1.5 times its duration with no hidden fade phase, matching evo-react. The progress bar only references the message region with `aria-describedby` when messages exist.
