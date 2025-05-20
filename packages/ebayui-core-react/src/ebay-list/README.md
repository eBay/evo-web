# EbayList

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/building-blocks-ebay-list--docs)

## Usage

### Import JS

```jsx harmony
import { EbayList, EbayListItem } from "@ebay/ui-core-react/ebay-list";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/list";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/list.css";
```

```jsx harmony
<EbayList>
    <EbayListItem leading={<EbayIcon name="folder16" />}>
        Item 1
    </EbayListItem>
    <EbayListItem leading={<EbayIcon name="lamp16" />}>
        Item 2
    </EbayListItem>
    <EbayListItem leading={<EbayIcon name="file16" />}>
        Item 3
    </EbayListItem>
</EbayList>
```

## Attributes

### EbayList Attributes

| Name           | Type     | Required | Description                                                                                                                                                                                   |
| -------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onButtonClick` | Function | No       | Called when a list item with `as="button"` is clicked | `(event, { index })` |

### EbayListItem Attributes

| Name           | Type     | Required | Description                                                                                                                                                                                   |
| -------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`           | String   | No       | The element to render the item as. Can be 'div', 'button', or 'a'. Default is 'div'.                                                                                                          |
| `separator`    | Boolean  | No       | If true, will render the current item as a separator                                                                                                                                          |
| `leading`      | ReactNode | No      | Leading content to render in the list item                                                                                                                                                    |
| `trailing`     | ReactNode | No      | Trailing content to render in the list item                                                                                                                                                   |
| `onClick`      | Function | No       | Called when the list item is clicked                                                                                                                                                          |
