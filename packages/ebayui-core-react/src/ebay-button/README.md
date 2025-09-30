# EbayButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-button--default)

## Usage

### Import JS

```jsx harmony
import { EbayButton } from "@ebay/ui-core-react/ebay-button";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/button";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/button.css";
```

### Big button

```jsx harmony
<EbayButton size="large">I'm a big button!</EbayButton>
```

### Icon button

```jsx
<EbayButton aria-label="Menu button">
    <EbayIconMenu20 />
</EbayButton>
```

### Complex button

```jsx
<EbayButton priority="primary" fluid>
    <EbayButtonCell style={{ justifyContent: "space-between" }}>
        <span>Label</span>
        <span>Filter</span>
    </EbayButtonCell>
</EbayButton>
```

## Attributes

| Name                | Type     | Stateful | Required | Description                                                                                                     | Data                     |
| ------------------- | -------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------- |
| `priority`          | String   | No       | No       | `primary`, `secondary` (default), `tertiary`, `none`                                                            |
| `variant`           | String   | Yes      | No       | `standard` (default), `destructive`, `form`                                                                     |
| `size`              | String   | No       | No       | `small` or `large`                                                                                              |
| `bodyState`         | String   | No       | No       | `loading`, `expand`                                                                                             |
| `href`              | String   | No       | No       | for link that looks like a button                                                                               |
| `fluid`             | Boolean  | No       | No       | takes the whole width of the parent element                                                                     |
| `disabled`          | Boolean  | Yes      | No       |
| `partiallyDisabled` | Boolean  | No       | No       | sets `aria-disabled` but not `disabled` prop                                                                    |
| `transparent`       | Boolean  | Yes      | No       | transparent background color (overrides `priority` prop)                                                        |
| `truncate`          | Boolean  | No       | No       | will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows |
| `borderless`        | Boolean  | No       | No       | shows button without border                                                                                     |
| `fixedHeight`       | Boolean  | No       | No       | fixes the height based on `size`                                                                                |
| `onClick`           | Function | -        | No       | click or action key pressed (`Space` / `Enter`)                                                                 | `(event: MouseEvent      | KeyboardEvent)` |
| `onEscape`          | Function | -        | No       | `Esc`-key pressed                                                                                               | `(event: KeyboardEvent)` |
| `onFocus`           | Function | -        | No       | triggered on focus                                                                                              | `(event: FocusEvent)`    |
| `onBlur`            | Function | -        | No       | triggered on blur                                                                                               | `(event: FocusEvent)`    |
