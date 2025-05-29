# EbayInfotip

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-infotip--default)

## Import JS

```jsx harmony
import { EbayInfotip, EbayInfotipHost, EbayInfotipContent, EbayInfotipHeading } from "@ebay/ui-core-react/ebay-infotip";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/infotip";
import "@ebay/skin/icon-button";
```

### or if using SCSS/CSS

```jsx harmony
import "@ebay/skin/infotip.css";
import "@ebay/skin/icon-button.css";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<EbayInfotip>
    <EbayInfotipHeading>Heading</EbayInfotipHeading>
    <EbayInfotipContent>
        <p>Here's a tip to help you be successful at your task.</p>
    </EbayInfotipContent>
</EbayInfotip>
```

```jsx harmony
<EbayInfotip variant="modal">
    <EbayInfotipContent>
        <p>Here's a tip to help you be successful at your task.</p>
    </EbayInfotipContent>
</EbayInfotip>
```

## EbayInfotip Attributes

| Name              | Type     | Stateful | Required | Description                                                                                                                                                  |
| ----------------- | -------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variant`         | String   | No       | No       | Either modal or default. If modal will show the mobile version of infotip                                                                                    |
| `pointer`         | String   | No       | No       | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top` |
| `icon`            | String   | No       | No       | Different icon to be used than `information-small`. Full list [here](https://ebay.github.io/skin/index.html#icon)                                            |
| `disabled`        | Boolean  | No       | No       | Define if the infotip is disabled or not                                                                                                                     |
| `overlayStyle`    | Object   | No       | No       | Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.                           |
| `initialExpanded` | Boolean  | No       | No       | Open the tooltip on the initial render                                                                                                                       |
| `a11yCloseText`   | String   | No       | Yes      | A11y text for close button and mask.                                                                                                                         |
| `aria-label`      | String   | No       | Yes      | A descriptive label of what the infotip button represents (e.g. "Important information")                                                                     |
| `onExpand`        | Function | No       | No       | overlay has been expanded                                                                                                                                    |
| `onCollapse`      | Function | No       | No       | overlay has been collapsed                                                                                                                                   |

## Child components

| Name                 | Required | Description                                      |
| -------------------- | -------- | ------------------------------------------------ |
| `EbayInfotipHost`    | No       | The custom host-button (trigger) for the Infotip |
| `EbayInfotipHeading` | No       | The heading to be displayed in the infotip       |
| `EbayInfotipContent` | Yes      | The content to be displayed in the infotip       |

## EbayInfotipHost Attributes

| Name         | Type   | Stateful | Required | Description                                                                                                                                      |
| ------------ | ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-label` | String | No       | Yes      | A descriptive label of what the infotip button represents (e.g. "Important information"). Will overwrite `ariaLabel` prop from the `EbayInfotip` |
