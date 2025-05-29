# EbayFakeTab

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/navigation-disclosure-ebay-fake-tabs--default-tabs)

## Import JS

```jsx harmony
import { EbayFakeTabs, EbayFakeTab } from "@ebay/ui-core-react/ebay-fake-tabs";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/tabs";
```

## Usage

```jsx harmony
<EbayFakeTabs>
    <EbayFakeTab>Tab 1</EbayFakeTab>
    <EbayFakeTab>Tab 2</EbayFakeTab>
    <EbayFakeTab>Tab 3</EbayFakeTab>
    <h3>Title</h3>
    <p>Content</p>
</EbayFakeTabs>
```

## Props

| Name                   | Type    | Stateful | Description                                                                                                                                                                                                                       |
| ---------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectedIndex`        | Number  | Yes      | 0-based index of selected tab heading                                                                                                                                                                                             |
| `tabMatchesCurrentUrl` | Boolean | No       | Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true"). |

## EbayFakeTab

```jsx harmony
<EbayTab>Tab 1</EbayTab>
```

### EbayFakeTab Props

| Name   | Type   | Stateful | Description                               |
| ------ | ------ | -------- | ----------------------------------------- |
| `href` | String | No       | The link to take the user to for each tab |
