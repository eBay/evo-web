# ebay-fake-tabs → evo-fake-tabs

This component has a **new id-based compound API**. The old positional `selectedIndex` and child-scanning (`filterByType`) approach is replaced by named sub-components and a required `selected` ID.

Fake tabs are navigation links with `aria-current`, not an interactive ARIA tab widget. Each tab is an anchor pointing to a distinct URL. The selected tab reflects the current page.

**Before:**

```tsx
import { EbayFakeTabs, EbayFakeTab } from "@ebay/ui-core-react/ebay-fake-tabs";

<EbayFakeTabs selectedIndex={1} tabMatchesCurrentUrl={false}>
  <EbayFakeTab href="/us">US</EbayFakeTab>
  <EbayFakeTab href="/de">Germany</EbayFakeTab>
  <h3>Germany Content</h3>
  <p>Some German content…</p>
</EbayFakeTabs>;
```

**After:**

```tsx
import {
  EvoFakeTabs,
  EvoFakeTabList,
  EvoFakeTab,
  EvoFakeTabPanel,
} from "@evo-web/react/fake-tabs";

<EvoFakeTabs selected="de" tabMatchesCurrentUrl={false}>
  <EvoFakeTabList>
    <EvoFakeTab id="us" href="/us">
      US
    </EvoFakeTab>
    <EvoFakeTab id="de" href="/de">
      Germany
    </EvoFakeTab>
  </EvoFakeTabList>
  <EvoFakeTabPanel>
    <h3>Germany Content</h3>
    <p>Some German content…</p>
  </EvoFakeTabPanel>
</EvoFakeTabs>;
```

**Prop changes:**

| ebayui-core-react           | evo-react                             | Notes                                                                                          |
| --------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `selectedIndex` (number)    | `selected` (string \| number \| null) | Assign each tab an `id`; pass that id as `selected`. Pass `null` when no tab is current.       |
| Flat `EbayFakeTab` children | `EvoFakeTabList` + `EvoFakeTab`       | Each `EvoFakeTab` requires a unique `id` prop.                                                 |
| Panel content as siblings   | `EvoFakeTabPanel`                     | Wrap page content in `EvoFakeTabPanel`.                                                        |
| `size="regular"\|"large"`   | `size="regular"\|"large"`             | Same values; defaults to `"regular"`.                                                          |
| `tabMatchesCurrentUrl`      | `tabMatchesCurrentUrl`                | Same behavior; `true` → `aria-current="page"`, `false` → `aria-current="true"`.                |
| `href` on `EbayFakeTab`     | Optional `href` on `EvoFakeTab`       | Move `href` to the tab element. Omit it to render the tab disabled.                            |
| No `as` support             | `as` on `EvoFakeTab`                  | Pass a custom anchor component (e.g. `<Link>` from React Router) via `as`. It receives `href`. |

### React Router / Next.js link adapter

```tsx
import { Link } from "react-router";

function RouterTab({ href, ...props }: React.ComponentProps<"a">) {
  return href === undefined ? null : <Link to={href} {...props} />;
}

<EvoFakeTab id="us" href="/us" as={RouterTab}>
  US
</EvoFakeTab>;
```
