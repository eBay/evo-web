# EbayProgressBar

The progress bar gives an immediate, real-time visualisation of the current task completion status. The progress bar's value does not include its min, so giving a value <= min will set the value to min + 1.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/progress-ebay-progress-bar--default)

## Usage

### Import JS

```jsx harmony
import { EbayProgressSpinner } from "@ebay/ui-core-react/ebay-progress-bar";
```

### Import styles from Skin

```jsx
import "@ebay/skin/progress-bar";
```

### or if using CSS/SCSS

```jsx
import "@ebay/skin/progress-bar.css";
```

```jsx harmony
<EbayProgressBar value={50} />
```

## Props

| Name    | Type    | Stateful | Required | Description                           | Data |
| ------- | ------- | -------- | -------- | ------------------------------------- | ---- |
| `value` | Integer | No       | No       | Current value (<= Max)                |
| `max`   | Integer | No       | No       | Maximal value, default: 100           |
| `fluid` | Boolean | No       | No       | Fills the full width of its container |
