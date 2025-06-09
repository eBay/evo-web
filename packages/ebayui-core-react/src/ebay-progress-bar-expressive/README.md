# EbayProgressBarExpressive

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/progress-ebay-progress-bar-expressive--docs)

## Usage

### Import JS

```jsx harmony
import {
    EbayProgressBarExpressive,
    EbayProgressBarExpressiveMessage,
} from "@ebay/ui-core-react/ebay-progress-bar-expressive";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/progress-bar-expressive";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/progress-bar-expressive.css";
```

```jsx harmony
<EbayProgressBarExpressive aria-label="Progress">
    <EbayProgressBarExpressiveMessage>Message 1</EbayProgressBarExpressiveMessage>
    <EbayProgressBarExpressiveMessage>Message 2</EbayProgressBarExpressiveMessage>
</EbayProgressBarExpressive>
```

## Attributes

| Name         | Type   | Required | Description                                                          | Data |
| ------------ | ------ | -------- | -------------------------------------------------------------------- | ---- |
| `size`       | String | No       | Size of the progress bar, can be `medium` or `large`                 |      |
| `aria-label` | String | Yes      | Accessible label for the progress bar                                |      |
| `children`   | Node   | No       | Child nodes, typically `EbayProgressBarExpressiveMessage` components |      |

## Message Attributes

| Name       | Type   | Required | Description                                                  | Data |
| ---------- | ------ | -------- | ------------------------------------------------------------ | ---- |
| `duration` | Number | No       | Duration for which the message is displayed, in milliseconds |      |
