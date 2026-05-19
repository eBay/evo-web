# evo-icon-button migration

## Import path

```diff
- import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";
+ import { EvoIconButton, EvoIconButtonBadge } from "@evo-web/react/icon-button";
```

## Prop changes

### Removed: `icon`

The `icon` prop has been removed. Pass the icon as `children` instead.

```diff
- <EbayIconButton icon={<EbayIconMenu20 />} aria-label="Menu" />
+ <EvoIconButton a11yText="Menu"><EvoIconMenu20 /></EvoIconButton>
```

### Renamed: `aria-label` → `a11yText`

`aria-label` was passed as a plain HTML attribute. It is now the named prop `a11yText` (`string | null`). Pass `null` explicitly only if alternative accessibility information is present (e.g. `aria-labelledby`).

```diff
- <EbayIconButton icon={<EbayIconMenu20 />} aria-label="Menu" />
+ <EvoIconButton a11yText="Menu"><EvoIconMenu20 /></EvoIconButton>
```

### Removed: `forwardedRef`

Use the native `ref` prop instead (React 19).

```diff
- <EbayIconButton forwardedRef={myRef} icon={<EbayIconMenu20 />} aria-label="Menu" />
+ <EvoIconButton ref={myRef} a11yText="Menu"><EvoIconMenu20 /></EvoIconButton>
```

### Removed: `badgeNumber` and `badgeAriaLabel`

Both props have been removed. Use the `<EvoIconButtonBadge>` sub-component instead. The badge has no accessible label — the button's `a11yText` covers screen reader context, matching the evo-marko pattern.

```diff
- <EbayIconButton
-   icon={<EbayIconCart16 />}
-   aria-label="Cart"
-   badgeNumber={3}
-   badgeAriaLabel="3 items in cart"
- />
+ <EvoIconButton a11yText="Cart">
+   <EvoIconCart16 />
+   <EvoIconButtonBadge number={3} />
+ </EvoIconButton>
```

### New: `partiallyDisabled`

Renders `aria-disabled="true"` while keeping the element focusable and clickable. Not available in `ebay-icon-button`.

```tsx
<EvoIconButton a11yText="Menu" partiallyDisabled>
  <EvoIconMenu20 />
</EvoIconButton>
```

### Icon imports

```diff
- import { EbayIconMenu20 } from "@ebay/ui-core-react/ebay-icon/icons/ebay-icon-menu-20";
+ import { EvoIconMenu20 } from "@evo-web/react/icons/menu-20";
```

## Unchanged props

`priority`, `size`, `transparent`, `disabled`, `href`, `onEscape`, `onKeyDown`, `onClick`, `onFocus`, `onBlur`, `className` — no changes beyond the global `Ebay` → `Evo` prefix.
