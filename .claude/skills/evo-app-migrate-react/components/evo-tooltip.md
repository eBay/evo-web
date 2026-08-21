# ebay-tooltip → evo-tooltip

## Composition

`EvoTooltipHost` renders its host through `as` instead of cloning a child. Move the old host element's props and content onto `EvoTooltipHost`.

```diff
 <EvoTooltip>
-  <EbayTooltipHost>
-    <EbayButton priority="secondary">Information</EbayButton>
-  </EbayTooltipHost>
+  <EvoTooltipHost as={EvoButton} priority="secondary">
+    Information
+  </EvoTooltipHost>
   <EvoTooltipContent>Additional information</EvoTooltipContent>
 </EvoTooltip>
```

The selected component must pass all received attributes and its React 19 `ref` to the underlying DOM element. If the selected component already uses `as`, wrap that configuration in a custom component:

```tsx
import { Link } from "react-router";
import { EvoButton, type AnchorButtonProps } from "@evo-web/react/button";
import {
  EvoTooltip,
  EvoTooltipContent,
  EvoTooltipHost,
} from "@evo-web/react/tooltip";

type CustomEvoButtonProps = Omit<AnchorButtonProps, "as">;

function CustomEvoButton({ ref, href, ...rest }: CustomEvoButtonProps) {
  return (
    <EvoButton
      {...rest}
      ref={ref}
      href={href}
      as={({ href: destination, ...linkProps }) => (
        <Link {...linkProps} to={destination ?? ""} />
      )}
    />
  );
}

<EvoTooltip>
  <EvoTooltipHost as={CustomEvoButton} href="/edit">
    Edit
  </EvoTooltipHost>
  <EvoTooltipContent>Edit this item</EvoTooltipContent>
</EvoTooltip>;
```

`EvoTooltipHeading` is a new optional sub-component and supports an `as` prop.

## Prop changes

- `onExpand` and `onCollapse` → `onOpenChange(open)`.
- `pointer` → `placement`. `pointer` described the arrow side, while `placement` describes the overlay side, so the primary direction is inverted:
  - `top` → `bottom`, `right` → `left`, `bottom` → `top`, `left` → `right`.
  - `*-left` / `*-top` → `*-start` after inverting the primary direction.
  - `*-right` / `*-bottom` → `*-end` after inverting the primary direction.
- `noFlip` → `flip` with inverted meaning.
- `noShift` → `shift` with inverted meaning.
- `notInline` → `inline` with inverted meaning.
- `overlayStyle` is removed; positioning is managed by Floating UI.
- `defaultOpen` is added for uncontrolled initial state.
- The default placement is now `bottom`, matching evo-marko. The legacy default pointer placed the overlay on top.
- The default `offset` changes from `6` to `8`, matching evo-marko.
- `EvoTooltipContent` generates the tooltip ID; its `id` prop is removed.
- Tooltip-only content no longer supports `showCloseButton`, `a11yCloseText`, `ariaLabelledBy`, or `onClose`. Use an infotip or popover for interactive content.

```diff
- <EbayTooltip
-   pointer="bottom-left"
-   noFlip
-   noShift
-   notInline
-   onExpand={handleExpand}
-   onCollapse={handleCollapse}
- >
+ <EvoTooltip
+   placement="top-start"
+   flip={false}
+   shift={false}
+   inline={false}
+   onOpenChange={(open) => {
+     if (open) handleExpand();
+     else handleCollapse();
+   }}
+ >
```

## Removed exports

The low-level `Tooltip`, `TooltipFooter`, `PointerDirection`, `DEFAULT_POINTER_DIRECTION`, and `POINTER_STYLES` exports are removed. Use the exported Evo Tooltip components and `TooltipPlacement` type.
