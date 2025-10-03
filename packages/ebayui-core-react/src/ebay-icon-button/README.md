# EbayIconButton

This is a circular button with an icon only.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-icon-button--default)

## Usage

### Import JS

```jsx harmony
import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/icon.css";
import "@ebay/skin/icon-button.css";
```

### Icon button

```jsx harmony
<EbayIconButton icon="settings" aria-label="settings" />
```

with badge:

```jsx harmony
<EbayIconButton icon="menu" badgeNumber={1} badgeAriaLabel="new feature available" />
```

## Attributes

| Name            | Type    | Stateful | Required | Description                                              | Data |
| --------------- | ------- | -------- | -------- | -------------------------------------------------------- | ---- |
| `icon`          | String  | No       | Yes      | icon name                                                |
| `href`          | String  | No       | No       | for link that looks like a button                        |
| `bageNumber`    | Number  | No       | No       | number on the badge                                      |
| `bageAriaLabel` | String  | No       | No       | aria label of the badge                                  |
| `transparent`   | Boolean | No       | No       | for transparent background                               |
| `size`          | String  | No       | No       | alternative size for the icon button, 'large' or 'small' |
| `priority`      | String  | No       | No       | `primary`, `secondary`, `tertiary`, `none` (default)     |

## Callbacks

| Name       | Type     | Required | Description                 | Data              |
| ---------- | -------- | -------- | --------------------------- | ----------------- |
| `onClick`  | Function | No       | triggered on click          | `(MouseEvent)`    |
| `onEscape` | Function | No       | triggered on Esc key press  | `(KeyboardEvent)` |
| `onFocus`  | Function | No       | triggered on keyboard focus | `(FocusEvent)`    |
| `onBlur`   | Function | No       | triggered on focus lost     | `(FocusEvent)`    |
