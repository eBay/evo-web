# evo-icon-button migration

## Import path

```diff
- import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";
+ import { EvoIconButton } from "@evo-web/react/icon-button";
```

## Prop changes

### Removed: `icon`

The `icon` prop (accepted an icon name string or a `ReactElement`) has been removed. Pass the icon as `children` instead.

```diff
- <EbayIconButton icon={<EbayIconMenu20 />} aria-label="Menu" />
+ <EvoIconButton a11yText="Menu"><EvoIconMenu20 /></EvoIconButton>
```

### Removed: `forwardedRef`

Use the native `ref` prop instead (React 19).

```diff
- <EbayIconButton forwardedRef={myRef} icon={<EbayIconMenu20 />} />
+ <EvoIconButton ref={myRef} a11yText="Menu"><EvoIconMenu20 /></EvoIconButton>
```

### Renamed: `aria-label` → `a11yText`

`aria-label` is now `a11yText` (type: `string | null`). Pass `null` explicitly only if alternative accessibility information is present (e.g. `aria-labelledby`).

```diff
- <EbayIconButton aria-label="Menu" icon={<EbayIconMenu20 />} />
+ <EvoIconButton a11yText="Menu"><EvoIconMenu20 /></EvoIconButton>
```

### Renamed: `badgeAriaLabel` → `badgeA11yText`

```diff
- <EbayIconButton badgeNumber={3} badgeAriaLabel="3 items in cart" ... />
+ <EvoIconButton badgeNumber={3} badgeA11yText="3 items in cart" ...>...</EvoIconButton>
```

### New: `partiallyDisabled`

Renders `aria-disabled="true"` while keeping the element focusable and clickable. Not available in `ebay-icon-button`.

### Icon imports

```diff
- import { EbayIconMenu20 } from "@ebay/ui-core-react/ebay-icon/icons/ebay-icon-menu-20";
+ import { EvoIconMenu20 } from "@evo-web/react/icons/menu-20";
```

## Unchanged props

`priority`, `size`, `transparent`, `disabled`, `href`, `badgeNumber`, `onEscape`, `onKeyDown`, `onClick`, `onFocus`, `onBlur`, `className` — no changes beyond the global `Ebay` → `Evo` prefix.
