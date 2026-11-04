---
type: a11y
impact: high
effort: high
site: packages/evo-react/src/breadcrumbs/breadcrumbs.tsx › EvoBreadcrumbs
---

# Decide the breadcrumb element from an explicit `variant`, and keep the current crumb out of the tab order

The current crumb ends up as an operable control in both trail shapes. In a trail of links
whose final crumb is the current page — and therefore carries no `href` — evo-marko and
evo-react pick the element per item (`input.href ? <a> : <button>`, `isLink`) and render that
crumb as a `<button>` with no handler: focusable, announced as "button", does nothing. In a
trail where no item carries an `href`, every package renders all crumbs as `<button>`
including the last, and in ebayui-core its click handler is gated behind `current`
(`!item.href && isLast`) so it can never emit `select` at all, while evo-marko and evo-react
at least let a consumer-supplied `onClick` give it an action. Only a link trail is correct
today: its last crumb is an `<a>` with no `href` and is skipped by the tab order.

ebayui-core and ebayui-core-react avoid the first shape by picking per trail
(`anyHref ? "a" : "button"`, `anyLink ? "a" : "button"`), matching the canonical Skin markup in
`packages/skin/src/sass/breadcrumbs/stories/links.stories.js`. Porting that inference to the
evo packages fixes the markup but needs `item as AnchorItem` / `item as ButtonItem` casts,
because `BreadcrumbItem` in `packages/evo-react/src/breadcrumbs/types.ts` models an array of
unions while the decision is per trail — the casts silence the checker on exactly the branch
that is wrong today. Prefer declaring the mode instead of inferring it:

```ts
variant?: "link" | "button";                        // default "link"
items: { href?: string; content: ReactNode; ... }[];
```

That drops the inference and both casts, makes "the last crumb has no `href`" ordinary rather
than a case the inference must tolerate, and encodes links as the default. It needs pairing
with a rule for the current crumb in each mode: an `<a>` with no `href` under `variant="link"`,
and non-focusable (`disabled` or `tabindex="-1"`, keeping `aria-current="page"`) under
`variant="button"`. That second half is independently shippable at low effort and does not have
to wait for the API change. The API change is public and spans evo-react and evo-marko, so it
needs a migration note. Checked in skin, ebayui-core, ebayui-core-react, evo-marko and
evo-react.

Check: render the evo-react `Default` story
(`packages/evo-react/src/breadcrumbs/breadcrumbs.stories.tsx`) and tab to the last crumb —
focus lands on `<button aria-current="page">Smart Watch Bands</button>` and Enter/Space do
nothing; the same input in ebayui-core yields a non-focusable `<a>`. For the all-button shape,
open the ebayui-core `buttons` story
(`packages/ebayui-core/src/components/ebay-breadcrumbs/breadcrumbs.stories.ts`) and tab to
"Smart Watch Bands" — it takes focus, and Enter/Space log no `select` action, unlike every
earlier crumb in the same trail.
