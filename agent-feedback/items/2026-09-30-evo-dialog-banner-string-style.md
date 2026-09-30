---
type: bug
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-dialog/index.marko › <div class="dialog__image">
---

# Stop `evo-dialog` from spreading a string `@banner` style into character keys

The banner element builds its style as `{...bannerStyle as Record<string,
unknown>, "background-image": …}`, but `bannerStyle` comes from
`Marko.Input<"div">["style"]`, which accepts a string as well as an object.
`<@banner style="opacity: 0.5">` therefore spreads the string index-wise and
emits `0:o;1:p;2:a…` as the style attribute, dropping the author's declaration.
Merge with Marko's array form (`style=[bannerStyle, {…}]`), which handles both
shapes, as `evo-pagination` does. Reaches evo-marko only; evo-react does not
have the pattern (checked both).

Check: render `<evo-dialog open><@banner src="x.jpg" style="opacity:
0.5"/>…</evo-dialog>` and inspect the `style` attribute on `.dialog__image`.
