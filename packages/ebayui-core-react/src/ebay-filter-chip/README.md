# EbayFilterChip

## Demo

- [Storybook](https://ebay.github.io/evo-web/ebayui-core-react/?path=/story/form-input-ebay-filter-chip)

## Usage

### Import JS

```jsx
import { EbayFilterChip } from "@ebay/ui-core-react/ebay-filter-chip";
```

### Import following styles from SKIN

```jsx
import "@ebay/skin/filter-chip";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx
import "@ebay/skin/filter-chip.css";
```

```jsx
<EbayFilterChip>Filter Chip</EbayFilterChip>
```

## Props

| Name               | Type                                      | Stateful | Required | Description                                                         |
| ------------------ | ----------------------------------------- | -------- | -------- | ------------------------------------------------------------------- |
| `variant`          | `"default"` \| `"expressive"` \| `"menu"` | No       | No       | The chip variant (default: `"default"`)                             |
| `selected`         | Boolean                                   | Yes      | No       | Whether the chip is selected (default: `false`)                     |
| `defaultSelected`  | Boolean                                   | No       | No       | Initial selected state for uncontrolled usage (default: `false`)    |
| `expanded`         | Boolean                                   | Yes      | No       | Whether the menu chip is expanded (default: `false`)                |
| `defaultExpanded`  | Boolean                                   | No       | No       | Initial expanded state for uncontrolled usage (default: `false`)    |
| `disabled`         | Boolean                                   | No       | No       | Whether the chip is disabled (default: `false`)                     |
| `href`             | String                                    | No       | No       | URL to navigate to (renders as anchor when provided)                |
| `icon`             | Object                                    | No       | No       | Icon props for default variant                                      |
| `image`            | Object                                    | No       | No       | Image props for expressive variant                                  |
| `a11ySelectedText` | String                                    | No       | No       | Accessibility text for selected state (default: `"Filter Applied"`) |
| `onClick`          | Function                                  | No       | No       | props: event, { selected, expanded }                                |
