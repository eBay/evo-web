# evo-progress-spinner migration guide

## Changed props

### `aria-label` → `a11yText`

The custom `aria-label` prop is replaced with the required `a11yText` prop and mapped internally to `aria-label`. Its English default changes from `"Busy"` to `"Loading"`.

Pass `null` explicitly _only_ if alternative accessibility information is present.

```diff
- <EbayProgressSpinner aria-label="Loading results" />
+ <EvoProgressSpinner a11yText="Loading results" />
```

### `size` — removed `"default"`

The explicit `"default"` value is removed. Omit `size` for the default 24px spinner; `"small"` and `"large"` remain supported.

```diff
- <EbayProgressSpinner size="default" />
+ <EvoProgressSpinner a11yText="Loading" />
```
