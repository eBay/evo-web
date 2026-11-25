---
source: correction
disposition: open
---

# "Only what is necessary" includes anything that keeps the experience from getting worse, not only what keeps the page from breaking

While moving Skin docs pages onto Skin stories, the agent first rewrote many stories on its own "correct markup wins" rule. The user asked to "only change what was absolutely necessary". The agent read that as "only what the page cannot work without", reverted 111 story changes, and listed every remaining defect and accessibility regression as follow-up. The user then said: "You may have misunderstood my ask for fixing only what's necessary or miscalculated what is 'necessary.' What I meant by necessary is that things should actually function. So going from functional experience to a non-functional experience is a deterioration, which means the fix is necessary," and that markup defects in stories and docs are necessary fixes too, because the markup "is going to be used across both Storybook and the docs." The narrow reading cost a full revert and a redo. When a scope instruction is relative ("necessary", "minimal"), measure it against the experience before the change: a regression in function or accessibility is in scope, and so is a defect in a source the change makes more widely used.

Disposition: open, Arthur Khachatryan, raised 2026-11-25: decide whether this belongs in `CLAUDE.md` `<agent_constraints>`.
