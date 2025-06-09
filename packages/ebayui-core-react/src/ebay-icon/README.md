# EbayIcon

The component will include the actual SVG markup in the HTML and then reference the chosen icon.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/graphics-icons-ebay-icon--docs)

## Usage

```jsx
import { EbayIcon } from "@ebay/ui-core-react/ebay-icon";
import "@ebay/skin/icon";

<EbayIcon name="arrowLeft16" />;
```

### Notes

Make sure you use `<EbaySvg />` in your code (ideally on server side only), so that actual SVG icons exist inside HTML.

## Attributes

| Name            | Type    | Stateful | Required | Description                                                                                               |
| --------------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `name`          | String  | No       | Yes      | name of the icon from [Skin](./types.ts), transparent versions of colored icons has `-transparent` suffix |
| `noSkinClasses` | Boolean | No       | No       | Used for special cases where `icon` classes from Skin should not be applied                               |
| `a11yText`      | String  | No       | Yes      | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed               |
| `type`          | String  | No       | no       | 'icon' or 'program-badge' default 'icon' (DEPRECATED, use <EbayProgramBadge /> instead)                   |
