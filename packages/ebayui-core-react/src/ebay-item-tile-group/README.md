# EbayItemTile

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/layout-ebay-item-tile-group--docs)

## Usage

### Import JS

```jsx harmony
import { EbayItemTileGroup } from '@ebay/ui-core-react/ebay-item-tile-group'
```

### Import following styles from SKIN

```jsx harmony
import '@ebay/skin/item-tile-group'
```

### Or import styles using SCSS/CSS

```jsx harmony
import '@ebay/skin/item-tile-group.css'
```

### Import icons

Add the below icons to the `EbaySvg` component.

Note: Make sure that `EbaySvg` is only rendered on the server so it does not affect the client bundle size.

```tsx
<EbaySvg icons={['heart16']} />
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
        <EbayIconButton aria-label="action label" icon="heart16" />
        <EbayItemTileSectionSuperTitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSectionSuperTitle>
        <EbayItemTileSectionTitle href="/collection">
            Apple iPhone 11 Pro Max{' '}
        </EbayItemTileSectionTitle>
        <EbayItemTileSectionSubTitle>256GB Space Gray</EbayItemTileSectionSubTitle>
        <EbayItemTileSectionDescription className="price">
            $29.99
        </EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription>
            Free shipping
        </EbayItemTileSectionDescription>
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

| Name           | Type           | Required | Description                                        | Data |
| -------------- | -------------- | -------- | -------------------------------------------------- | ---- |
| `EbayItemTile` | `EbayItemTile` | Yest     | Tile component that will be rendered in the group. |
