# ebay-cta-button → evo-cta-button

## Import change

```diff
- import { EbayCtaButton } from "@ebay/ui-core-react/ebay-cta-button";
+ import { EvoCtaButton } from "@evo-web/react/cta-button";
```

## Prop changes

### Renamed: `truncate` → `truncated`

```diff
- <EbayCtaButton href="/action" truncate>
+ <EvoCtaButton href="/action" truncated>
    Take action
- </EbayCtaButton>
+ </EvoCtaButton>
```

### Changed: `size`

`size` now accepts only `"large"`. Omit it to replace the legacy `"small"` value with the default size.

```diff
- <EbayCtaButton href="/action" size="small">
+ <EvoCtaButton href="/action">
    Take action
- </EbayCtaButton>
+ </EvoCtaButton>
```

### New: `as`

Use `as` to replace the native anchor with a framework link component.

```tsx
import Link from "next/link";

<EvoCtaButton href="/action" as={Link}>
  Take action
</EvoCtaButton>;
```

## Unchanged props

`fluid` and native anchor attributes require no migration beyond the global component and import renames.
