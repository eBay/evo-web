# EbayFilterInput

## Demo

- [Storybook](https://ebay.github.io/evo-web/ebayui-core-react/?path=/story/form-input-ebay-filter-input)

## Usage

### Import JS

```jsx
import { EbayFilterInput } from "@ebay/ui-core-react/ebay-filter-input";
```

### Import following styles from SKIN

```jsx
import "@ebay/skin/filter-input";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx
import "@ebay/skin/filter-input.css";
```

```jsx
<EbayFilterInput placeholder="Search items" />
```

## Props

| Name              | Type                   | Stateful | Required | Description                                                    |
| ----------------- | ---------------------- | -------- | -------- | -------------------------------------------------------------- |
| `size`            | `"large"` \| `"small"` | No       | No       | The input size variant                                         |
| `placeholder`     | String                 | No       | No       | Placeholder text (default: `"Filter"`)                         |
| `a11yClearButton` | String                 | No       | No       | Aria-label for clear button. When provided, shows clear button |
| `a11yControlsId`  | String                 | No       | No       | ID of element that this input controls (for `aria-controls`)   |
| `onClear`         | Function               | No       | No       | Callback for clear button click: `(event, { value }) => void`  |
| `onChange`        | Function               | No       | No       | Callback for input blur: `(event, { value }) => void`          |
| `onInputChange`   | Function               | No       | No       | Callback for input value change: `(event, { value }) => void`  |
| `onFocus`         | Function               | No       | No       | Callback for input focus: `(event, { value }) => void`         |
| `onBlur`          | Function               | No       | No       | Callback for input blur: `(event, { value }) => void`          |
| `onKeyDown`       | Function               | No       | No       | Callback for key down: `(event, { value }) => void`            |
| `onKeyPress`      | Function               | No       | No       | Callback for key press: `(event, { value }) => void`           |
| `onKeyUp`         | Function               | No       | No       | Callback for key up: `(event, { value }) => void`              |

## Examples

### Basic Filter Input

```jsx
<EbayFilterInput placeholder="Filter results" />
```

### With Clear Button

```jsx
<EbayFilterInput
    placeholder="Filter results"
    a11yClearButton="Clear filters"
    onClear={(event, { value }) => console.log("Cleared:", value)}
/>
```

### With Size Variants

```jsx
<EbayFilterInput size="large" placeholder="Large filter input" />
<EbayFilterInput size="small" placeholder="Small filter input" />
```

### With Event Handlers

```jsx
<EbayFilterInput
    placeholder="Search items"
    a11yClearButton="Clear search"
    onInputChange={(event, { value }) => console.log("Input changed:", value)}
    onKeyDown={(event, { value }) => {
        if (event.key === "Enter") {
            console.log("Search submitted:", value);
        }
    }}
    onClear={(event, { value }) => console.log("Search cleared")}
/>
```

### Controlling Results List

```jsx
<EbayFilterInput
    placeholder="Filter list items"
    a11yControlsId="filtered-list"
    onInputChange={(event, { value }) => filterList(value)}
/>
<ul id="filtered-list">
    {/* Filtered list items */}
</ul>
```
