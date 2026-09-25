---
source: correction
disposition: open
---

# When legacy React and evo-marko APIs differ, follow the evo-react conventions or ask; do not copy the legacy shape

The first EvoToggleButton migration kept `ebayui-core-react`'s prop API: `title`/`subtitle`/`icon`/`img` props and `onToggle(event, { pressed })`. evo-marko already used `pressedChange(pressed)` and pass-through `<@icon>`/`<@subtitle>` attribute tags, and evo-react uses `on<State>Change(value)` callbacks (`onOpenChange`, `onSelectedChange`) plus named subcomponents per ADR 0005. The reviewer asked for `onToggle(pressed)` and for this API: "We want to be more component rather than property … This allow to let application owners modify and add attributes to title/subtitle icon etc". Fixing it meant rewriting the component, types, tests, stories and migration doc. The prop audit in `evo-migrate-react` already says to stop and ask when the two APIs disagree, but it does not name the callback convention, so the legacy event-plus-data shape looked like an acceptable default.

Disposition: open — hlimas, raised 2026-09-24. Proposal: add an `on<State>Change(value)` callback rule, and a note that legacy string/element slot props usually become subcomponents, to the prop audit in `.agents/skills/evo-migrate-react/SKILL.md`.
