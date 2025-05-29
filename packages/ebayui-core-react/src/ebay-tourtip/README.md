# EbayTourtip

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/notices-tips-ebay-tourtip--default-tourtip)

## Import JS

```jsx harmony
import { EbayTourtip, EbayTourtipHost, EbayTourtipContent, EbayTourtipHeading } from "@ebay/ui-core-react/ebay-tourtip";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/tourtip";
```

### or if using SCSS/CSS

```jsx harmony
import "@ebay/skin/tourtip.css";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<EbayTourtip a11yCloseText="close" pointer="bottom">
    <EbayTourtipHost>
        <EbayButton>Info</EbayButton>
    </EbayTourtipHost>
    <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
    <EbayTourtipContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </EbayTourtipContent>
    <EbayTourtipFooter index="1 / 3">
        <button className="fake-link">Back</button>
        <button className="btn btn--primary">Next</button>
    </EbayTourtipFooter>
</EbayTourtip>
```

## EbayTourtip Attributes

| Name              | Type     | Stateful | Required | Description                                                                                                                                                  |
| ----------------- | -------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pointer`         | String   | No       | No       | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top` |
| `overlayStyle`    | Object   | No       | No       | Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.                           |
| `initialExpanded` | Boolean  | No       | No       | Open the tooltip on the initial render, needs to be true for the case of Tourtips                                                                            |
| `a11yCloseText`   | String   | No       | Yes      | A11y text for close button and mask.                                                                                                                         |
| `aria-label`      | String   | No       | Yes      | A descriptive label of what the tourtip button represents (e.g. "Important information")                                                                     |
| `onExpand`        | Function | No       | No       | overlay has been expanded                                                                                                                                    |
| `onCollapse`      | Function | No       | No       | overlay has been collapsed                                                                                                                                   |

## Child components

| Name                 | Required | Description                                      |
| -------------------- | -------- | ------------------------------------------------ |
| `EbayTourtipHost`    | Yes      | The custom host-button (trigger) for the tourtip |
| `EbayTourtipHeading` | No       | The heading to be displayed in the tourtip       |
| `EbayTourtipFooter`  | Yes      | The footer to be displayed in the tourtip        |
| `EbayTourtipContent` | Yes      | The content to be displayed in the tourtip       |

## EbayTourtipHost Attributes

| Name         | Type   | Stateful | Required | Description                                                                                                                                      |
| ------------ | ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-label` | String | No       | Yes      | A descriptive label of what the tourtip button represents (e.g. "Important information"). Will overwrite `ariaLabel` prop from the `EbayTourtip` |

## EbayTourtipFooter Attributes

| Name    | Type   | Stateful | Required | Description                                                                                         |
| ------- | ------ | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| `index` | String | No       | No       | defines the text to be displayed as index of the Tourtip if any. e.g `1 - 3` meaning Tourtip 1 of 3 |
