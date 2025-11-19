# EbayIcon

The `EbayIcon` component will include the actual SVG markup in the HTML and then reference the chosen icon.
Each icon has its own component and all the available icons are listed in the [icons](./icons) folder

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/graphics-icons-ebay-icon--docs)

## Usage

```jsx
import { EbayIconArrowLeft16 } from "@ebay/ui-core-react/icons/ebay-icon-arrow-left-16";
import "@ebay/skin/icon";

<EbayIconArrowLeft16 />;
```

### Add the `EbayIconProvider`

In the root of your app, add the `EbayIconProvider` component to avoid loading the SVG markup multiple times for a better server and client performance.

```jsx
import { EbayIconProvider } from "@ebay/ui-core-react/ebay-icon";

<EbayIconProvider>
    <App />
</EbayIconProvider>;
```

## `EbayIcon` Attributes

| Name            | Type    | Stateful | Required | Description                                                                                               |
| --------------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `name`          | String  | No       | Yes      | name of the icon from [Skin](./types.ts), transparent versions of colored icons has `-transparent` suffix |
| `noSkinClasses` | Boolean | No       | No       | Used for special cases where `icon` classes from Skin should not be applied                               |
| `a11yText`      | String  | No       | Yes      | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed               |
| `type`          | String  | No       | no       | 'icon' or 'program-badge' default 'icon' (DEPRECATED, use <EbayProgramBadge /> instead)                   |
