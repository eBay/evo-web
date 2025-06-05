# EbayFakeMenu

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/building-blocks-ebay-fake-menu--default)

## Install

```
yarn add @ebay/ui-core-react
```

## Usage

```jsx harmony
import { EbayFakeMenu, EbayFakeMenuItem as Item } from "@ebay/ui-core-react/ebay-fake-menu";
import "@ebay/skin/menu";
<EbayFakeMenu>
    <Item href="http://ebay.com">eBay US</Item>
    <Item href="http://ebay.de">eBay DE</Item>
    <Item href="http://ebay.co.uk">eBay UK</Item>
</EbayFakeMenu>;
```

## EbayFakeMenu Props

| Name           | Type     | Required | Description                                                                                                                                                            | Data            |
| -------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------- |
| itemMatchesUrl | Boolean  | No       | used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives `aria-current` a value of `page` |                 |
| `onKeyDown`    | Function | No       | triggered on key down                                                                                                                                                  | `(KeyboardEvent | MouseEvent, { index: number })` |
| `onSelect`     | Function | No       | For using with keyboard navigation                                                                                                                                     | `(KeyboardEvent | MouseEvent, { index: number })` |

## EbayFakeMenuItem Props

| Name             | Type    | Required | Description                                                                      |
| ---------------- | ------- | -------- | -------------------------------------------------------------------------------- |
| `href`           | String  | No       | Redirection link on click                                                        |
| `type`           | String  | No       | Set to `button` to render menu-item as a button instead of a link                |
| `current`        | Boolean | No       | Whether or not the href is the current href of the page                          |
| `badgeNumber`    | Number  | No       | Used as a number to be placed inside the badge                                   |
| `badgeAriaLabel` | Number  | No       | Only if `badgeNumber` provided, passed as the `aria-label` directly to the badge |

## EbayFakeMenuSeparator

Example:

```jsx
import {
    EbayFakeMenu,
    EbayFakeMenuItem as Item,
    EbayFakeMenuSeparator as Separator,
} from "@ebay/ui-core-react/ebay-fake-menu";
<EbayMenu>
    <Item>item 1</Item>
    <Item current>item 2</Item>
    <Separator />
    <Item>item 3</Item>
</EbayMenu>;
```
