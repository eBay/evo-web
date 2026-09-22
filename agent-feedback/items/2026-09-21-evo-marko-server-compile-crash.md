---
type: dx
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-input/index.marko › postfix icon block
---

# Report upstream: two Marko html-translator/runtime bugs hit by evo-input

Verified on `marko@6.3.48` and latest `6.3.52` (html output only; dom output is
fine). evo-input has been restructured to avoid both, so SSR tests now run;
these still need upstream reports so the workarounds can be removed.

1. Compile crash `TypeError: Cannot read properties of null (reading
'isExpressionStatement')` in `translateVar`. Not related to `value:=`
   two-way binding as first suspected. Minimal repro:

   ```marko
   <const/{ a }=input>
   <my-tag>
     <const/{ b, ...rest }=a>
     <${"button"} ...rest/>
   </my-tag>
   ```

   Requires all of: a rest destructure inside a custom tag's body, whose
   source is itself destructured from `input`, spread onto a dynamic tag.
   Worked around by hoisting the destructure out of the custom tag body.

2. SSR runtime error `Hoisted values must be functions, received type
"undefined"` when rendering `<${falsy && "button"}/$tagVar>` with an
   AttrTag rendered in its body and `$tagVar` referenced in `<return>`.
   Worked around with explicit `<if>`/`<else>` branches on a concrete
   `<button>` tag.

Check: `npx vitest run --browser.headless src/tags/evo-input/test/test.server.ts`
in `packages/evo-marko` passes; reintroducing either pattern reproduces the
corresponding failure.
