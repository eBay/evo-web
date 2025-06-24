# EbayFlag

The component will include the actual SVG markup in the HTML and then reference the chosen flag.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/graphics-icons-ebay-flag--docs)

## Usage

```jsx
import { EbayFlag } from "@ebay/ui-core-react/ebay-flag";
import "@ebay/skin/icon";
import "@ebay/skin/flag";

<EbayFlag name="us" />;
```

### Notes

Make sure you use `<EbaySvg flags />` in your code (ideally on server side only), so that actual SVG icons exist inside HTML.

## Attributes

| Name       | Type   | Stateful | Required | Description                                                                                 |
| ---------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------- |
| `name`     | String | No       | Yes      | name of the flags from [Skin](./types.ts)                                                   |
| `a11yText` | String | No       | Yes      | text for non-decorative inline flag; flag is assumed to be decorative if this is not passed |
