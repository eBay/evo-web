# EbayStarRatingSelect

use (rating from 0-5)

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-star-rating-select--isolated)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import { EbayStarRatingSelect } from "@ebay/ui-core-react/ebay-star-rating-select";
```

## Import following styles from Skin

```jsx harmony
import "@ebay/skin/star-rating-select";
```

## ...or using SCSS/CSS

```jsx harmony
import "@ebay/skin/star-rating.css";
```

```jsx harmony
<EbayStarRatingSelect value={1}>
```

## Attributes

| Name           | Type    | Stateful | Description                      |
| -------------- | ------- | -------- | -------------------------------- | ---------------------------------------------------------------------- |
| `a11yStarText` | array   | No       | Yes                              | array of strings for star inputs                                       |
| `a11yText`     | String  | No       | Yes                              | container aria-label                                                   |
| `value`        | String  | No       | Yes                              | The amount of stars to be filled. Can be "2-5" for 2 and a half stars. |
| `disabled`     | Boolean | No       | Rating stars are disabled or not |

## Callbacks

| Name        | Type     | Required | Description               | Data                                 |
| ----------- | -------- | -------- | ------------------------- | ------------------------------------ |
| `onChange`  | Function | No       | triggered on value change | `(ChangeEvent, { value: number })`   |
| `onFocus`   | Function | No       | triggered on focus        | `(FocusEvent, { value: number })`    |
| `onKeydown` | Function | No       | triggered on keydown      | `(KeyboardEvent, { value: number })` |
