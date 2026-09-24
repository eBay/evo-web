# ebay-fake-menu-button → evo-fake-menu-button

Use `EvoFakeMenuButton` with named trigger and menu regions. Put existing `EvoFakeMenuItems`, `EvoFakeMenuItem`, and `EvoFakeMenuSeparator` inside the menu region.

| ebayui-core-react                                                 | evo-react                                                              | Change                                                                           |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `text`, `icon`, and `EbayFakeMenuButtonLabel` among item children | `EvoFakeMenuButtonTrigger` with optional `EvoFakeMenuButtonLabel`      | Trigger content is explicit rather than found by scanning children.              |
| `EbayFakeMenuButtonItem` and `EbayFakeMenuButtonSeparator`        | `EvoFakeMenuItem` and `EvoFakeMenuSeparator` inside `EvoFakeMenuItems` | Reuses the Evo Fake Menu API and preserves its list markup.                      |
| `expanded`                                                        | `open` with `onOpenChange`, or `defaultOpen`                           | Controlled and initially open states are distinct.                               |
| `variant="overflow"`                                              | `variant="icon"`                                                       | Put an Evo icon inside the trigger and give the parent a descriptive `a11yText`. |
| `onExpand`, `onCollapse`                                          | `onOpenChange`                                                         | Reports the requested open state.                                                |
| `onSelect`, `onMouseDown`                                         | Native handlers on `EvoFakeMenuItem`                                   | Handlers receive the activated item directly.                                    |
| `href` on the trigger                                             | Removed                                                                | The trigger opens a menu; put navigation destinations in its items.              |
| No `collapseOnSelect` or `flip`                                   | `collapseOnSelect`, `flip`                                             | Matches the Marko menu behavior and positioning options.                         |
| Marko `priority="delete"`                                         | Unsupported                                                            | Use the priorities exposed by `EvoButton`.                                       |

```tsx
import {
  EvoFakeMenuButton,
  EvoFakeMenuButtonMenu,
  EvoFakeMenuButtonTrigger,
} from "@evo-web/react/fake-menu-button";
import { EvoFakeMenuItem, EvoFakeMenuItems } from "@evo-web/react/fake-menu";

<EvoFakeMenuButton collapseOnSelect>
  <EvoFakeMenuButtonTrigger>Account options</EvoFakeMenuButtonTrigger>
  <EvoFakeMenuButtonMenu>
    <EvoFakeMenuItems>
      <EvoFakeMenuItem href="/purchase-history">
        Purchase history
      </EvoFakeMenuItem>
    </EvoFakeMenuItems>
  </EvoFakeMenuButtonMenu>
</EvoFakeMenuButton>;
```
