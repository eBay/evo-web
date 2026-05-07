---
"@evo-web/react": minor
---

Add `EvoBreadcrumbs` component

New `evo-breadcrumbs` component migrated from `@ebay/ebayui-core-react`.

**API changes from `ebay-breadcrumbs`:**

- Items are passed via an `items` prop array instead of `<EbayBreadcrumbItem>` JSX children
- Each item uses `content` (not `children`) and renders as `<a>` when `href` is present, `<button>` otherwise
- `as` prop on link items supports framework Link components (e.g. Next.js, React Router)
- `aria-current="location"` is applied automatically to the last item
- `onSelect` removed — use `onClick` per item instead
- `id` prop removed — heading ID is generated internally via `useId()`

See the [migration guide](.agents/skills/evo-app-migrate-react/components/evo-breadcrumbs.md) for full details.
