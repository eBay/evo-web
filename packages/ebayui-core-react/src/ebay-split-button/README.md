# EbaySplitButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-split-button--controls)

## Usage

### Import JS

```jsx harmony
import { EbaySplitButton } from "@ebay/ui-core-react/ebay-split-button";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/split-button";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/split-button.css";
```

### Icon button

```jsx harmony
<EbaySplitButton a11yMenuText="Show save options">
    Save document
    <Item>Save as...</Item>
    <Item>Export</Item>
</EbaySplitButton>
```

## Props

| Name                    | Type     | Stateful | Required | Description                                                                                                                              | Data |
| ----------------------- | -------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| `a11yMenuText`          | String   | No       | Yes      | aria label for menu button part                                                                                                          |
| `href`                  | String   | No       | No       | url for link behaviour (switches to anchor tag)                                                                                          |
| `size`                  | String   | No       | No       | button size: `small` or `large`                                                                                                          |
| `priority`              | String   | No       | No       | `primary`, `secondary` (default), `tertiary`, `none`                                                                                     |
| `bodyState`             | String   | No       | No       | `loading` adds progress spinner, when user interacts with button, `reset` should be called to reset `aria-live` state, default is `none` |
| `a11yButtonLoadingText` | String   | No       | No       | `aria-label` for button when `bodyState` is `loading`                                                                                    |
| `type`                  | String   | No       | No       | menu items type: `radio` or `checkbox`                                                                                                   |
| `transparent`           | Boolean  | No       | No       | for transparent background                                                                                                               |
| `disabled`              | Boolean  | Yes      | No       |
| `partiallyDisabled`     | Boolean  | No       | No       | sets `aria-disabled` but not `disabled` prop                                                                                             |
| `onClick`               | Function | -        | No       | click or action key pressed (`Space` or `Enter`)                                                                                         |
| `onEscape`              | Function | -        | No       | `Esc`-key pressed                                                                                                                        |
| `onFocus`               | Function | -        | No       | triggered on focus                                                                                                                       |
| `onBlur`                | Function | -        | No       | triggered on blur                                                                                                                        |
| `onExpand`              | Function | -        | No       | Called when content is expanded                                                                                                          |
| `onCollapse`            | Function | -        | No       | Called when content is collapsed                                                                                                         |
| `onChange`              | Function | -        | No       | Arguments: (e: event, { index: number, checked: number[], checkedValues: string[] }) for type `radio`/`checkbox`                         |
| `onSelect`              | Function | -        | No       | Arguments: (e: event, { index: number, checked: number[] }), not for use with type `radio`/`checkbox`                                    |
