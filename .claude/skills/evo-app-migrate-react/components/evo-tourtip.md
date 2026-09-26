# ebay-tourtip → evo-tourtip

Import `EvoTourtip`, `EvoTourtipHost`, `EvoTourtipContent`, `EvoTourtipHeading`, and `EvoTourtipFooter` from `@evo-web/react/tourtip`.

## Composition

`EvoTourtipHost` renders its element through `as` instead of cloning a child. It defaults to a `<span>`, matching evo-marko. Choose a button or link when users need to interact with the host. The component supplied through `as` must forward its React 19 `ref` and DOM attributes.

The tourtip content stays in `EvoTourtipContent`. Pass a named `EvoTourtipHeading` in its `heading` prop and a named `EvoTourtipFooter` in its `footer` prop. The heading labels the tourtip region. If there is no heading, set `aria-label` on `EvoTourtipContent` to name the region. `EvoTourtipFooter` now renders a `<span>` instead of the legacy `<div>`.

If the heading has a custom `id`, set the matching `aria-labelledby` on `EvoTourtipContent` so server-rendered HTML has the correct label.

```tsx
import { EvoButton } from "@evo-web/react/button";
import {
  EvoTourtip,
  EvoTourtipHost,
  EvoTourtipContent,
  EvoTourtipHeading,
  EvoTourtipFooter,
} from "@evo-web/react/tourtip";

<EvoTourtip a11yCloseText="Dismiss seller tools guide">
  <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
  <EvoTourtipContent
    heading={<EvoTourtipHeading>Manage your listings</EvoTourtipHeading>}
    footer={<EvoTourtipFooter index="1 of 3">Next</EvoTourtipFooter>}
  >
    <p>Find your listing tools here.</p>
  </EvoTourtipContent>
</EvoTourtip>;
```

## Prop changes

| ebayui-core-react             | evo-react                           | Change                                                                                                                                                                                                                                                              |
| ----------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onExpand` / `onCollapse`     | `onOpenChange(open)`                | One callback reports requested visibility.                                                                                                                                                                                                                          |
| `pointer`                     | `placement`                         | The old value describes the pointer side; the new value describes the overlay side. `top` maps to `bottom`, `right` to `left`, `bottom` to `top`, and `left` to `right`. The old `-left` / `-top` suffix maps to `-start`, and `-right` / `-bottom` maps to `-end`. |
| `noFlip`                      | `flip`                              | Invert the boolean.                                                                                                                                                                                                                                                 |
| `noShift`                     | `shift`                             | Invert the boolean.                                                                                                                                                                                                                                                 |
| `notInline`                   | `inline`                            | Invert the boolean.                                                                                                                                                                                                                                                 |
| `overlayStyle`                | `style` on `EvoTourtipContent`      | Custom styling stays on the overlay. Positioning is calculated by Floating UI.                                                                                                                                                                                      |
| `aria-label` on `EbayTourtip` | `aria-label` on `EvoTourtipContent` | Labels a headingless region instead of the host.                                                                                                                                                                                                                    |
| `open`                        | `open`                              | Controlled usage also uses `onOpenChange`.                                                                                                                                                                                                                          |
| No equivalent                 | `defaultOpen`                       | Sets initial uncontrolled visibility. Defaults to `true`.                                                                                                                                                                                                           |

`EvoTourtipHeading` accepts `as` for heading level. The `a11yCloseText` label remains required. The default `placement` is `"top"`, and the default `offset` is `6`, matching evo-marko.

```diff
-<EbayTourtip pointer="bottom-left" noFlip onCollapse={handleClose} a11yCloseText="Dismiss guide">
+<EvoTourtip placement="top-start" flip={false} onOpenChange={(open) => {
+  if (!open) handleClose();
+}} a11yCloseText="Dismiss guide">
```
