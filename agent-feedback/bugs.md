# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Stop `evo-dialog` from spreading a string `@banner` style into character keys

`packages/evo-marko/src/tags/evo-dialog/index.marko` › `<div class="dialog__image">` | 2026-08-17 | impact:low | effort:low

The banner element builds its style as
`{...bannerStyle as Record<string, unknown>, "background-image": …}`, but
`bannerStyle` comes from `Marko.Input<"div">["style"]`, which accepts a string
as well as an object. `<@banner style="opacity: 0.5">` therefore spreads the
string index-wise and emits `0:o;1:p;2:a…` as the style attribute, dropping the
author's declaration. Either narrow the input to an object style or merge with
Marko's array form (`style=[bannerStyle, {…}]`), which handles both shapes —
`evo-pagination` already uses the array form. Reaches `evo-marko` only; the
same pattern is not present in `evo-react` (checked both). Re-verify: render
`<evo-dialog open><@banner src="x.jpg" style="opacity: 0.5"/>…` and inspect the
`style` attribute on `.dialog__image`.
