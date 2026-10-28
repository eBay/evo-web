---
type: dx
impact: med
effort: low
site: package.json › lint-staged › "*.{js,jsx,ts,tsx,marko,md,json,less}"
---

# Keep lint-staged's prettier from reformatting Marko fences in skill docs

The root `lint-staged` rule runs `prettier --write` on every staged `.md`, including `.claude/skills/**/SKILL.md`. Prettier's Marko plugin reformats ` ```marko ` fences there, but those fences hold deliberately invalid before/after fragments (Marko 5 next to Marko 6, unclosed tags, inline comments). They come out mangled: `handleClick(...)` becomes `${" "}handleClick(...)`, and unclosed `<div>` examples get nested. Committing any edit to a skill silently rewrites the whole file. Seven skill files have ` ```marko ` fences, and 21 skill docs aren't prettier-clean today, so any of them can hit this. Add `.claude/skills/` to `.prettierignore`, or narrow the lint-staged glob, so skill docs keep their hand-written formatting.

Check: `npx prettier --write .claude/skills/evo-migrate-marko/SKILL.md && git diff .claude/skills/evo-migrate-marko/SKILL.md`. The "Event handling" section's Marko 5/6 comparison turns into `${" "}handleClick(originalEvent: MouseEvent) { this.emit(...`. Restore the file with `git checkout` after checking.
