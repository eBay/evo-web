# EbayFakeLink

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/buttons-ebay-fake-link--documentation)

## Usage

### Import JS

```jsx harmony
import { EbayFakeLink } from "@ebay/ui-core-react/ebay-fake-link";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/link";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/link.css";
```

```jsx harmony
<EbayFakeLink>Fake Link</EbayFakeLink>
```

## Attributes

It supports all `<button>` attributes and the below:

| Name       | Type     | Required | Description                                                                                                                 | Data             |
| ---------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `variant`  | String   | No       | Should only be standalone when it is clear contextually that this is a link, regardless of styles, `inline` or `standalone` |                  |
| `onEscape` | Function | No       | Triggered on escape key                                                                                                     | `(event: Event)` |
