# EbayMenuButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-menu-button--default)

## Install

```
yarn add @ebay/ui-core-react
```

## Usage

```jsx harmony
import {
    EbayMenuButton,
    EbayMenuButtonItem as Item,
    EbayMenuButtonSeparator as Separator,
    EbayMenuButtonLabel as Label
} from 'ebayui-core-react/ebay-menu-button';
import '@ebay/skin/menu-button';
<EbayMenuButton text="Menu">
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
    <Separator />
    <Item>Log in</Item>
</EbayMenuButton>
// With a complext label
<EbayMenuButton a11yText="Menu">
    <Label><img src="menu-logo.svg" /></Label>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
</EbayMenuButton>
```

## EbayMenuButton Attributes

| Name               | Type     | Required                  | Description                                                                                                                                                          |
| ------------------ | -------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`             | String   | No                        | button label text                                                                                                                                                    |
| `a11yText`         | String   | Only without a text label | a11y text for the button                                                                                                                                             |
| `noToggleIcon`     | Boolean  | No                        | whether to hide the chevron toggle icon                                                                                                                              |
| `expanded`         | Boolean  | No                        | whether content is expanded                                                                                                                                          |
| `type`             | String   | No                        | can be `radio` or `checkbox`                                                                                                                                         |
| `reverse`          | Boolean  | No                        | expand menu flyout to the left                                                                                                                                       |
| `fixWidth`         | Boolean  | No                        | Constrain items container width to button width                                                                                                                      |
| `borderless`       | Boolean  | No                        | Whether button has borders                                                                                                                                           |
| `size`             | String   | No                        | button size: `small` or `large`                                                                                                                                      |
| `priority`         | String   | No                        | button size: `primary`, `secondary` (default), `tertiary`, `none`                                                                                                    |
| `checked`          | Number   | No                        | will set the corresponding index item to checked state and use the `aria-checked` attribute in markup                                                                |
| `disabled`         | Boolean  | No                        | will disable the entire dropdown (disables the ebay-button label) if set to true                                                                                     |
| `variant`          | String   | No                        | will change the button style: `overflow`, `form` or `button`                                                                                                         |
| `collapseOnSelect` | Boolean  | No                        | Will collapse whole menu when an item is selected in menu. Typically used in type=`radio`                                                                            |
| `prefixId`         | String   | No                        | The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label`                                                     |
| `prefixLabel`      | String   | No                        | The label to add before each selected item on the button. Cannot be used with `prefix-id` (NOT YET IMPLEMENTED)                                                      |
| `onExpand`         | Function | No                        | Called when content is expanded                                                                                                                                      |
| `onCollapse`       | Function | No                        | Called when content is collapsed                                                                                                                                     |
| `onSelect`         | Function | No                        | props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)                                                                    |
| `onChange`         | Function | No                        | props: (e: event, { index: number, checked: number[], checkedValues: string[] }), triggered on item `checked` change, (for type `radio`/`checkbox` only)             |
| `strategy`         | string   | No                        | Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen. |

## EbayMenuButtonItem Attributes

| Name             | Type     | Required | Description                                                                         |
| ---------------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| `value`          | String   | No       | for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]` |
| `checked`        | Boolean  | No       | for type `radio`, `checkbox`: whether or not the item is checked                    |
| `disabled`       | Boolean  | No       | makes the menu item disabled                                                        |
| `badgeNumber`    | Number   | No       | used as the number to be placed in the badge                                        |
| `badgeAriaLabel` | Number   | No       | used as the number to be placed in the badge (NOT YET IMPLEMENTED)                  |
| `onClick`        | Function | No       | For a non-link menu item, with param `{ originalEvent }`                            |
