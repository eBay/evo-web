# EbayProgressSpinner

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/progress-ebay-progress-spinner--default-small-large)

## Usage

### Import JS

```jsx harmony
import { EbayProgressSpinner } from "@ebay/ui-core-react/ebay-progress-spinner";
```

### Import styles from Skin

```jsx
import "@ebay/skin/progress-spinner";
```

### or if using CSS/SCSS

```jsx
import "@ebay/skin/progress-spinner.css";
```

### Big spinner

```jsx harmony
<EbayProgressSpinner size="large">
```

## Attributes

| Name         | Type   | Stateful | Required | Description                           | Data |
| ------------ | ------ | -------- | -------- | ------------------------------------- | ---- |
| `size`       | String | No       | No       | `default` (default), `small`, `large` |
| `aria-label` | String | No       | No       | custom aria label instead of `Busy`   |
