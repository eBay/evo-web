# evo-eek migration guide

## Changed props

### `a11yText` — now required

`a11yText` changes from optional `string` with an English runtime fallback to required `string | null` with no runtime fallback. Supply a localized label. Pass `null` explicitly _only_ if alternative accessibility information is present.

```diff
- <EbayEek max="A+++" min="E" rating="C" />
+ <EvoEek
+   a11yText="Energy rating C. Range A+++ to E."
+   max="A+++"
+   min="E"
+   rating="C"
+ />
```

### `size` — added

Use `"large"` for the large graphic. Omit `size` or use `"regular"` for the default size.

```tsx
<EvoEek
  a11yText="Energy rating C. Range A+++ to E."
  max="A+++"
  min="E"
  rating="C"
  size="large"
/>
```

### Native `<div>` props and ref — added

`className` remains supported. Other native `<div>` attributes, event handlers, and React 19 refs now pass through to the root element. `aria-label`, `children`, `dangerouslySetInnerHTML`, and `role` remain component-owned.

```diff
- <EbayEek className="listing-rating" max="A" min="G" rating="B" />
+ <EvoEek
+   a11yText="Energy rating B. Range A to G."
+   className="listing-rating"
+   data-testid="listing-rating"
+   ref={ratingRef}
+   max="A"
+   min="G"
+   rating="B"
+ />
```
