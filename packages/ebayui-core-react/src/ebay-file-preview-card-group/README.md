# EbayFilePreviewCardGroup

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/media-ebay-file-preview-card-group--docs)

## Usage

### Import JS

```jsx harmony
import { EbayFilePreviewCardGroup } from '@ebay/ui-core-react/ebay-file-preview-card-group'
```

### Import following styles from SKIN

```jsx harmony
import '@ebay/skin/file-preview-card-group'
```

### Or import styles using SCSS/CSS

```jsx harmony
import '@ebay/skin/file-preview-card-group.css'
```

### Import icons

Add the below icons to the `EbaySvg` component.

Note: Make sure that `EbaySvg` is only rendered on the server so it does not affect the client bundle size.

```tsx
<EbaySvg icons={['close16', 'delete16', 'vertical16', 'play16', 'file24']} />
```

```jsx harmony
const fileExample = {
            name: 'file-name.jpg',
            type: 'image',
            src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
        }

<EbayFilePreviewCardGroup
    a11ySeeMoreText="See more text"
>
    <EbayFilePreviewCard file={fileExample} onDelete={handleOnDelete}/>
    <EbayFilePreviewCard file={fileExample} onDelete={handleOnDelete}/>
    <EbayFilePreviewCard file={fileExample} onDelete={handleOnDelete}/>
</EbayFilePreviewCardGroup>
```

## Attributes

| Name              | Type     | Required | Description                    | Data |
| ----------------- | -------- | -------- | ------------------------------ | ---- |
| `a11ySeeMoreText` | `String` | No       | a11y text for see more button. |

## Events

| Name           | Type                           | Required | Description                                         | Data                                                                                               |
| -------------- | ------------------------------ | -------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `onMenuAction` | `EbayMenuSelectEventHandler`   | No       | Triggered when an action is selected from the menu. | `event, {index: number, menuActionEvent: { index: number, checked: number[], eventName?: string}}` |
| `onDelete`     | `FilePreviewCardActionHandler` | No       | Triggered when the delete button is clicked.        | `event, {index: number}`                                                                           |
| `onCancel`     | `FilePreviewCardActionHandler` | No       | Triggered when the cancel button is clicked.        | `event, {index: number}`                                                                           |
| `onAction`     | `FilePreviewCardActionHandler` | No       | Triggered when the custon action button is clicked. | `event, {index: number}`                                                                           |
