---
type: dx
impact: med
effort: low
site: .prettierrc.json › plugins
---

# Stop Prettier rewriting a template to concise syntax over a multi-line `static`

When a `static` statement in a `.marko` file has generic type arguments that
span lines, `prettier --write` (with `prettier-plugin-marko`) drops the call's
trailing `();` and reprints every tag in the file in Marko's concise syntax
(`<let/count=0>` becomes `let/count=0`). The result still compiles, so `mtc`
and the tests stay green and the only symptom is a diff that touches the whole
file; lint-staged runs the same command on commit. Keeping such statements on
one line avoids it. Report it upstream to `prettier-plugin-marko`, and until it
is fixed a lint rule or a note in `AGENTS.md` would stop the next person
tripping on it. Reaches every `.marko` file in evo-marko and the site; seen in
evo-marko.

Check: put `static const m = new WeakMap<` / `  HTMLElement,` /
`  { a: number; b: number; c: number; d: number }` / `>();` above a
`<let/count=0>` and a `<button>` in a `.marko` file under `packages/evo-marko`
and run `npx prettier` on it; the output has no `();` and no `<`.
