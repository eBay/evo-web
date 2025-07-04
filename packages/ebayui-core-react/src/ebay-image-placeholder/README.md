# EbayImagePlaceholder

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main?path=/docs/graphics-icons-ebay-image-placeholder--docs)

## Usage

### Import JS

```jsx harmony
import { EbayImagePlaceholder } from "@ebay/ui-core-react/ebay-image-placeholder";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/image-placeholder";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/image-placeholder.css";
```

### Import icons

Add the below icon to the `EbaySvg` component.

Note: Make sure that `EbaySvg` is only rendered on the server so it does not affect the client bundle size.

```tsx
<EbaySvg icons={["imagePlaceholder"]} />
```
