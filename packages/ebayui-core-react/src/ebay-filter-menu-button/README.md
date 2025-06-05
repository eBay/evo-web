# EbayFilterMenuButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/buttons-ebay-filter-menu-button--docs)

## Usage

### Import JS

```jsx harmony
import { EbayFilterMenuButton, EbayFilterMenuItem } from "@ebay/ui-core-react/ebay-filter-menu-button";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/filter-menu-button";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/filter-menu-button.css";
```

```jsx harmony
<EbayFilterMenuButton>
    <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
    <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
</EbayFilterMenuButton>
```

## Attributes

The `EbayFilterMenuButton` supports all properties from the [EbayFilterMenu](../ebay-filter-menu/README.md) component. Additionally, it includes the following specific attributes:

| Name         | Type     | Required | Description                          |
| ------------ | -------- | -------- | ------------------------------------ |
| `onExpand`   | Function | No       | Triggered when the menu is expanded  |
| `onCollapse` | Function | No       | Triggered when the menu is collapsed |
| `text`       | String   | No       | The text displayed on the button     |
