# EbayItemTile

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/layout-ebay-item-tile--docs)

## Usage

### Import JS

```jsx harmony
import { EbayItemTile } from '@ebay/ui-core-react/ebay-item-tile'
```

### Import following styles from SKIN

```jsx harmony
import '@ebay/skin/item-tile'
```

### Or import styles using SCSS/CSS

```jsx harmony
import '@ebay/skin/item-tile.css'
```

### Import icons

Add the below icons to the `EbaySvg` component.

Note: Make sure that `EbaySvg` is only rendered on the server so it does not affect the client bundle size.

```tsx
<EbaySvg icons={['heart16']} />
```

```jsx harmony
<EbayItemTile
    file={{
        name: 'file-name.jpg',
        type: 'image',
        src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
    }}
    href="/collection"
    layout="grid"
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
```

## Attributes

| Name     | Type                                                         | Required | Description                                                                                                  | Data             |
| -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| `href`   | `String`                                                     | No       | href for redirect to item.                                                                                   |
| `layout` | `String`                                                     | No       | layout for item tile. Default: `gallery`                                                                     | `gallery` `list` |
| `file`   | `File` or `{name: string, type?: File[type], src?: string }` | No       | File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview. |                  |

## Events

| Name       | Type               | Required | Description                                  | Data    |
| ---------- | ------------------ | -------- | -------------------------------------------- | ------- |
| `onAction` | `EbayEventHandler` | No       | Triggered when the action button is clicked. | `event` |

## Component

| Name                        | Type                  | Required | Description                                                                                                            | Data |
| --------------------------- | --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ---- |
| `EbayFilePreviewCardAction` | `EbayIconButtonProps` | No       | Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render. |
