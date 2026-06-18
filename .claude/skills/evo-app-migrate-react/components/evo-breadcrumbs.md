# evo-breadcrumbs migration

## Import change

```diff
- import { EbayBreadcrumbs, EbayBreadcrumbItem } from "@ebay/ui-core-react/ebay-breadcrumbs";
+ import { EvoBreadcrumbs } from "@evo-web/react/breadcrumbs";
```

`EbayBreadcrumbItem` is gone — items are now passed as an `items` prop array directly on `EvoBreadcrumbs`.

---

## API change: children → items prop

The old API used `<EbayBreadcrumbItem>` as JSX children. The new API uses an `items` array.

```diff
- <EbayBreadcrumbs a11yHeadingText="Page navigation">
-   <EbayBreadcrumbItem href="https://ebay.com">eBay</EbayBreadcrumbItem>
-   <EbayBreadcrumbItem href="https://ebay.com/cars">Auto Parts</EbayBreadcrumbItem>
-   <EbayBreadcrumbItem>Motors Parts</EbayBreadcrumbItem>
- </EbayBreadcrumbs>

+ <EvoBreadcrumbs
+   a11yHeadingText="Page navigation"
+   items={[
+     { href: "https://ebay.com", content: "eBay" },
+     { href: "https://ebay.com/cars", content: "Auto Parts" },
+     { content: "Motors Parts" },
+   ]}
+ />
```

---

## Removed props

| Prop                                 | Reason                                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `onSelect` on `EbayBreadcrumbs`      | Not in evo-marko. Use `onClick` on individual items instead via the `items` array.               |
| `id` on `EbayBreadcrumbs`            | Was used only to generate an internal heading ID. Now handled via `useId()` internally.          |
| `tag` on `EbayBreadcrumbItem`        | Removed. Rendering as `<a>` vs `<button>` is determined automatically by the presence of `href`. |
| `isLastItem` on `EbayBreadcrumbItem` | Removed. `aria-current="location"` is applied automatically to the last item.                    |
| `_sp`, `navsrc` on items             | Still supported — pass them in the item object and they will be forwarded as HTML attributes.    |

---

## New props

| Prop          | Notes                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `as` on items | Render a link item via a framework component (e.g. Next.js `Link`, React Router `Link`). Only valid when `href` is also set. |

```tsx
import Link from "next/link";

<EvoBreadcrumbs
  items={[
    { href: "/", as: Link, content: "Home" },
    { content: "Current Page" },
  ]}
/>;
```

---

## Migrating onSelect

```diff
- <EbayBreadcrumbs onSelect={(e) => handleSelect(e)}>
-   <EbayBreadcrumbItem href="/page">Page</EbayBreadcrumbItem>
- </EbayBreadcrumbs>

+ <EvoBreadcrumbs
+   items={[
+     { href: "/page", content: "Page", onClick: (e) => handleSelect(e) },
+   ]}
+ />
```
