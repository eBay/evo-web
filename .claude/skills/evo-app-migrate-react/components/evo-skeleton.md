# evo-skeleton migration guide

## Accessible loading text

Use `a11yText` to name the skeleton group instead of `aria-label`. The English default is `"Loading..."`; supply a localized description for the content being loaded. Pass `null` only when another accessible name is present, such as `aria-labelledby`.

```diff
- <EbaySkeleton aria-label="Loading listing details">
+ <EvoSkeleton a11yText="Loading listing details">
    <EvoSkeletonImage />
  </EvoSkeleton>
```

## Parts and refs

The avatar, button, image, text, and textbox parts keep their `as="div" | "span"` option and now accept native React 19 refs. `color`, `size`, and `multiline` keep their existing behavior.
