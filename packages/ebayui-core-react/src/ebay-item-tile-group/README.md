# EbayItemTile

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/layout-ebay-item-tile-group--docs)

## Usage

### Import JS

```jsx harmony
import { EbayItemTileGroup } from "@ebay/ui-core-react/ebay-item-tile-group";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/item-tile-group";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/item-tile-group.css";
```

```jsx harmony
<EbayItemTileGroup onAction={handleAction} layout="list">
    <EbayItemTile
        file={{
            name: 'file-name.jpg',
            type: 'image',
            src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
        }}
    >
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileSupertitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSupertitle>
        <EbayItemTileTitle href="/collection">
            Apple iPhone 11 Pro Max{' '}
        </EbayItemTileTitle>
        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
        <EbayItemTileDescription className="price">
            $29.99
        </EbayItemTileDescription>
        <EbayItemTileDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileDescription>
        <EbayItemTileDescription>
            Free shipping
        </EbayItemTileDescription>
    </EbayItemTile>
<EbayItemTileGroup {...args}>
```

## Attributes

| Name | Type | Required | Description | Data |
| ---- | ---- | -------- | ----------- | ---- |

| `layout` | `String` | No | layout for item tile. Default: `gallery` | `gallery` `list` |

## Events

| Name       | Type               | Required | Description                                  | Data    |
| ---------- | ------------------ | -------- | -------------------------------------------- | ------- |
| `onAction` | `EbayEventHandler` | No       | Triggered when the action button is clicked. | `event` |

## Component

| Name           | Type           | Required | Description                                       | Data |
| -------------- | -------------- | -------- | ------------------------------------------------- | ---- |
| `EbayItemTile` | `EbayItemTile` | Yest     | Tile component that will be rendered in the group |
