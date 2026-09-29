# evo-image-placeholder migration guide

## Changed props

### `noSkinClasses` — removed

`EvoImagePlaceholder` always applies the Skin classes needed to display the SVG.

```diff
- <EbayImagePlaceholder noSkinClasses />
+ <EvoImagePlaceholder />
```

### `prominent` — removed

Skin has no prominent image placeholder style. Remove this prop when migrating.

```diff
- <EbayImagePlaceholder prominent />
+ <EvoImagePlaceholder />
```

### Native SVG props and ref

Native SVG attributes, event handlers, and the React 19 `ref` pass through to the SVG. The component owns `role` and ARIA naming. `a11yText` continues to distinguish an informative placeholder from a decorative one.
