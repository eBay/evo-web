# EbayStarRating

For full stars use (rating from 0-5): ebay-star-rating-{rating} For half stars use: ebay-star-rating-{rating}-5 DS v1.0.0

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/graphics-icons-ebay-star-rating--stars)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import { EbayStarRating } from "@ebay/ui-core-react/ebay-star-rating";
```

## Import following styles from Skin

```jsx harmony
import "@ebay/skin/star-rating";
```

## ...or using SCSS/CSS

```jsx harmony
import "@ebay/skin/star-rating.css";
```

```jsx harmony
<EbayStarRating aria-label="Star Rating" value="1"/>
<EbayStarRating aria-label="Star Rating" value="0-5"/>
```

## Attributes

| Name       | Type   | Stateful | Description |
| ---------- | ------ | -------- | ----------- | ------------------------------------------------------------------------------------------- |
| `a11yText` | String | No       | Yes         | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed |
| `value`    | String | No       | Yes         | The amount of stars to be filled. Can be "2-5" for 2 and a half stars.                      |
