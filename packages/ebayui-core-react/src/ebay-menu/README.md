# EbayMenu

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/building-blocks-ebay-menu--default)

## Install

```
yarn add @ebay/ui-core-react
```

## Usage

```jsx harmony
import { EbayMenu, EbayMenuItem as Item } from "@ebay/ui-core-react/ebay-menu";
import "@ebay/skin/menu";

<EbayMenu>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
</EbayMenu>;
```

## EbayMenu Props

| Name          | Type     | Required | Description                                                                                                                                                          |
| ------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`        | String   | No       | Can be `radio`/`checkbox`                                                                                                                                            |
| `checked`     | Number   | No       | when used with `radio` type will check the item with the corresponding index                                                                                         |
| `baseEl`      | String   | No       | Container can be `span` (default) or `div`                                                                                                                           |
| `onKeydown`   | Function | No       | props: (e: event, { index: number, checked: number[], checkedValues?: string[] })                                                                                    |
| `onSelect`    | Function | No       | props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)                                                                    |
| `onChange`    | Function | No       | props: (e: event, { index: number, checked: number[], checkedValues: string[]), triggered on item `checked` change, (for type `radio`/`checkbox` only)               |
| `classPrefix` | String   | No       | class prefix for the component, defaults to `menu`                                                                                                                   |
| `reverse`     | Boolean  | No       | reverse the menu item layout, so that the badge is on the left and the text on the right (default: false)                                                            |
| `fixWidth`    | Boolean  | No       | makes the menu width the same as its parent                                                                                                                          |
| `fixed`       | Boolean  | No       | Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen. |

## EbayMenuItem Props

| Name             | Type    | Required                                                                         | Description                                                                         |
| ---------------- | ------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `value`          | String  | No                                                                               | for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]` |
| `checked`        | Boolean | No                                                                               | for type `radio`, `checkbox`: whether or not the item is checked                    |
| `disabled`       | Boolean | No                                                                               | makes the menu item disabled                                                        |
| `badgeNumber`    | Number  | No                                                                               | used as the number to be placed in the badge                                        |
| `badgeAriaLabel` | String  | Only if `badgeNumber` provided, passed as the `aria-label` directly to the badge |

## EbayMenuSeparator

Example:

```jsx
import { EbayMenu, EbayMenuItem as Item, EbayMenuSeparator as Separator } from "@ebay/ui-core-react/ebay-menu";

<EbayMenu>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Separator />
    <Item>item 3</Item>
</EbayMenu>;
```
