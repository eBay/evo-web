# EbayTooltip

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/notices-tips-ebay-tooltip--default-tooltip)

## Import JS

```jsx harmony
import { EbayTooltip, EbayTooltipHost, EbayTooltipContent } from "@ebay/ui-core-react/ebay-tooltip";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/tooltip";
```

### or if using SCSS/CSS

```jsx
import "@ebay/skin/tooltip.css";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<EbayTooltip pointer="bottom-left">
    <EbayTooltipHost>
        <EbayButton>Info</EbayButton>
    </EbayTooltipHost>
    <EbayTooltipContent>
        <span>Here's a tip to help you be successful at your task.</span>
    </EbayTooltipContent>
</EbayTooltip>
```

## Attributes

| Name           | Type     | Stateful | Required | Description                                                                                                                                                  |
| -------------- | -------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pointer`      | String   | No       | No       | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top` |
| `overlayStyle` | Object   | No       | No       | Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.                           |
| `noHover`      | Boolean  | No       | No       | disable hover (and only use focus) to open the tooltip                                                                                                       |
| `onExpand`     | Function | No       | No       | overlay has been expanded                                                                                                                                    |
| `onCollapse`   | Function | No       | No       | overlay has been collapsed                                                                                                                                   |

## Child components

| Name                 | Required | Description                                |
| -------------------- | -------- | ------------------------------------------ |
| `EbayTooltipHost`    | Yes      | Wrapper for trigger that shows the tooltip |
| `EbayTooltipContent` | Yes      | The content to be displayed in the tooltip |
