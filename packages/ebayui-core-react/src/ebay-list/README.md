# EbayList

A versatile list component for displaying items with optional leading and trailing content.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/building-blocks-ebay-list--docs)

## Usage

### Import JS

```jsx
import { EbayList, EbayListItem, EbayListItemLeading, EbayListItemTrailing } from "@ebay/ui-core-react/ebay-list";
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

## Examples

### Basic List

```jsx
<EbayList>
    <EbayListItem>Item 1</EbayListItem>
    <EbayListItem>Item 2</EbayListItem>
    <EbayListItem>Item 3</EbayListItem>
</EbayList>
```

### List with Leading and Trailing Content (Method 1 - Using Components)

```jsx
<EbayList>
    <EbayListItem>
        <EbayListItemLeading>
            <EbayIconFolder16 />
        </EbayListItemLeading>
        Item 1
    </EbayListItem>
    <EbayListItem>
        <EbayListItemLeading>
            <EbayIconLamp16 />
        </EbayListItemLeading>
        Item 2
        <EbayListItemTrailing>
            <EbayIconChevronRight16 />
        </EbayListItemTrailing>
    </EbayListItem>
</EbayList>
```

### Interactive List Items

```jsx
<EbayList onButtonClick={(event, { index }) => console.log(`Button ${index} clicked`)}>
    <EbayListItem as="button">Clickable Button Item</EbayListItem>
    <EbayListItem as="a" href="https://www.ebay.com">
        Link Item
        <EbayListItemTrailing>
            <EbayIconChevronRight16 />
        </EbayListItemTrailing>
    </EbayListItem>
    <EbayListItem id="switch-item">
        Item with Switch
        <EbayListItemTrailing>
            <EbaySwitch aria-labelledby="switch-item" />
        </EbayListItemTrailing>
    </EbayListItem>
</EbayList>
```

### List with Separators

```jsx
<EbayList>
    <EbayListItem>Item 1</EbayListItem>
    <EbayListItem separator />
    <EbayListItem>Item 2</EbayListItem>
    <EbayListItem>Item 3</EbayListItem>
    <EbayListItem separator />
    <EbayListItem>Item 4</EbayListItem>
</EbayList>
```

## Components

### EbayList

The main container component that wraps a list of EbayListItem components.

### EbayListItem

Individual list items that can be rendered as different elements (div, button, a) and can contain leading and trailing content.

### EbayListItemLeading

Component for adding leading content to a list item.

### EbayListItemTrailing

Component for adding trailing content to a list item.

## Attributes

### EbayList Attributes

| Name            | Type     | Required | Description                                                                                   |
| --------------- | -------- | -------- | --------------------------------------------------------------------------------------------- |
| `onButtonClick` | Function | No       | Called when a list item with `as="button"` is clicked. Callback receives `(event, { index })` |
| `className`     | String   | No       | Custom class name                                                                             |
| `style`         | Object   | No       | Custom styles                                                                                 |

### EbayListItem Attributes

| Name        | Type     | Required | Description                                                                          |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| `as`        | String   | No       | The element to render the item as. Can be 'div', 'button', or 'a'. Default is 'div'. |
| `separator` | Boolean  | No       | If true, will render the current item as a separator                                 |
| `onClick`   | Function | No       | Called when the list item is clicked                                                 |
| `className` | String   | No       | Custom class name                                                                    |

### EbayListItemLeading Attributes

| Name       | Type      | Required | Description                               |
| ---------- | --------- | -------- | ----------------------------------------- |
| `children` | ReactNode | Yes      | Content to display in the leading section |

### EbayListItemTrailing Attributes

| Name       | Type      | Required | Description                                |
| ---------- | --------- | -------- | ------------------------------------------ |
| `children` | ReactNode | Yes      | Content to display in the trailing section |
