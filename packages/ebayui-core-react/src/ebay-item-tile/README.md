# EbayItemTile

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/layout-ebay-item-tile--docs)

## Usage

### Import JS

```jsx harmony
import { EbayItemTile } from "@ebay/ui-core-react/ebay-item-tile";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/item-tile";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/item-tile.css";
```

```jsx harmony
<EbayItemTile
    file={{
        name: "file-name.jpg",
        type: "image",
        src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    }}
    href="/collection"
    layout="grid"
>
    <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
    <EbayItemTileSupertitle>
        <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
    </EbayItemTileSupertitle>
    <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
    <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
    <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
    <EbayItemTileDescription as="div">
        <a href="https://ebay.com">Buy it now</a>
    </EbayItemTileDescription>
    <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
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

| Name                 | Type                  | Required | Description                                                                                                            | Data |
| -------------------- | --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ---- |
| `EbayItemTileAction` | `EbayIconButtonProps` | No       | Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render. |
