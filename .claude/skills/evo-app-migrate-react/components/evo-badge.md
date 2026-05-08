# evo-badge migration guide

## Changed props

### `type` — narrowed values

**Before:** `"menu" | "icon" | "img"`  
**After:** `"menu" | "icon"` (omit the prop entirely for the default image badge)

The `"img"` value has been removed. Omitting `type` (or not passing it) now produces the default badge with `role="img"`, which was previously the `type="img"` behaviour.

```diff
- <EbayBadge number={5} type="img" aria-label="5 unread items" />
+ <EvoBadge number={5} a11yText="5 unread items" />
```

### `aria-label` → `a11yText`

The custom `aria-label` prop is replaced with `a11yText` (mapped internally to `aria-label`).

`a11yText` is typed as `string | null`. Pass `null` explicitly _only_ if alternative accessibility information is present (e.g. `type="menu"` or `type="icon"` where the badge is considered decorative).

```diff
- <EbayBadge number={5} aria-label="5 unread items" />
+ <EvoBadge number={5} a11yText="5 unread items" />

- <EbayBadge number={5} type="menu" />
+ <EvoBadge number={5} type="menu" a11yText={null} />
```

### `aria-hidden` — removed

`aria-hidden` was set automatically by `EbayBadge` when `type` was not `"img"`. `EvoBadge` no longer sets `aria-hidden`; use `a11yText={null}` instead and rely on the absence of `role="img"` for non-image badges.

## No other prop changes

All standard `<span>` attributes pass through as before. `number` behaves identically (accepts `number | string`, rounds, clamps at 99+, renders nothing for ≤ 0).
