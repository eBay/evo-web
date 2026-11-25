---
source: correction
disposition: open
---

# When the repo already solves the same problem one way, apply that solution without asking

While moving Skin docs demos to `<component-demo>`, the agent found that the dialog-family stories render open, noted that the Dialog page had already solved this (a trigger in the story, plus an inline script that runs only in Storybook), and then stopped to ask whether to follow it. The user replied: "if we already have an example of what was done before, why would we not do the same here??? I'm baffled why you would not just do it that way without asking." That cost a round trip on a decision that was already made. A question is only worth asking when no precedent covers the case or the precedent conflicts with a stated constraint. The same mistake appears in `2026-11-12-check-standing-rules-before-asking.md` on the `feat/skin-menu-family` branch, so it has now happened twice.

Disposition: open, Arthur Khachatryan, raised 2026-11-24: decide whether this belongs in `CLAUDE.md` `<agent_constraints>`.
