# EbayChip

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/building-blocks-ebay-chip--docs)

## Usage

### Import JS

```jsx harmony
import EbayChip from "@ebay/ui-core-react/ebay-chip";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/chip";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/chip.css";
```

```jsx harmony
<EbayChip a11yDeleteButtonText="Remove item" onDelete={handleDelete} disabled={false}>
    Chip Content
</EbayChip>
```

## Attributes

| Name                   | Type     | Required | Description                                 |
| ---------------------- | -------- | -------- | ------------------------------------------- |
| `a11yDeleteButtonText` | String   | No       | Accessibility text for the delete button    |
| `onDelete`             | Function | Yes      | Triggered when the delete button is clicked |
| `disabled`             | Boolean  | No       | Whether the chip is disabled                |
