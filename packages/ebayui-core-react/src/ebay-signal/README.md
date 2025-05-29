# EbaySignal

##Description
Signals are data-backed recommendations to help customers make more informed decisions. There are four signal statuses, each corresponding to a specific color: `trustworthy`, `recent`, `time-sensitive` & `neutral`. Defaults to `neutral` if none specified.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/graphics-icons-ebay-signal--default-case)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import { EbaySignal } from "@ebay/ui-core-react/ebay-signal";
```

## Import styles from Skin

```jsx harmony
import "@ebay/skin/signal";
```

## ...or using SCSS/CSS

```jsx harmony
import "@ebay/skin/signal.css";
```

```jsx harmony
<EbaySignal status="trustworthy">Trustworthy</EbaySignal>
```

## Attributes

| Name     | Type   | Stateful | Description                                                                                                          |
| -------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `status` | String | No       | Status of signal; determines color. Possible values: `trustworthy`, `recent`, `time-sensitive` & `neutral` (default) |
