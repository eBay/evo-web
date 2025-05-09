# EbayCharacterCount

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/building-blocks-ebay-character-count--default)

## Usage

### Import JS

```jsx harmony
import { EbayCharacterCount } from "@ebay/ui-core-react/ebay-character-count";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/character-count";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/character-count.css";
```

```jsx harmony
<EbayCharacterCount value="Hello world" max={120} clippedText="characters remaining" />
```

## Attributes

| Name         | Type     | Required | Description                                                                 | Data                         |
| ------------ | -------- | -------- | --------------------------------------------------------------------------- | ---------------------------- |
| `value`      | String   | Yes      | String to count characters from, or a number representing the current count |                              |
| `max`        | Number   | Yes      | Maximum number of characters allowed                                        |                              |
| `clippedText`| String   | No       | Text to be displayed after the character count                              |                              |
| `onChange`   | Function | No       | Triggered when the character count changes                                  | `({ count, inputAriaLive })` |
