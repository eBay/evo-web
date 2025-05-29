# EbayBreadcrumbs

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/navigation-disclosure-ebay-breadcrumbs--default)

## Usage

### Import JS

```jsx
import { EbayBreadcrumbs, EbayBreadcrumbItem } from "@ebay/ui-core-react/ebay-breadcrumbs";
```

### Import styles from Skin

```jsx
import "@ebay/skin/breadcrumbs";
import "@ebay/skin/utility";
```

### Breadcrumbs

```jsx
<EbayBreadcrumbs a11yHeadingText="Page navigation">
    <EbayBreadcrumbItem href="https://ebay.com">eBay</EbayBreadcrumbItem>
    <EbayBreadcrumbItem href="https://ebay.com/cars">Auto Parts and Vehicles</EbayBreadcrumbItem>
    <EbayBreadcrumbItem>Motors Parts and Accessories</EbayBreadcrumbItem>
</EbayBreadcrumbs>
```

If you render breadcrumbs dynamically don't forget about [keys](../../../#notes)

## EbayBreadcrumb Attributes

| Name              | Type     | Stateful | Description                                                               | Data                |
| ----------------- | -------- | -------- | ------------------------------------------------------------------------- | ------------------- | --------------- |
| `a11yHeadingText` | String   | No       | heading for breadcrumb which will be clipped (default: 'Page navigation') |
| `a11yHeadingTag`  | String   | No       | heading tag for breadcrumb (default: `h2`)                                |
| `onSelect`        | Function | No       | click breadcrumb items                                                    | `(event: MouseEvent | KeyboardEvent)` |

All other props will be applied to the main wrapper (`nav`) element.

## EbayBreadcrumbItem Attributes

| Name   | Type   | Stateful | Description                                            |
| ------ | ------ | -------- | ------------------------------------------------------ |
| `href` | String | No       | anchor href; omitting the href will switch to a button |

Notes:

- custom `EbayBreadcrumbItem` props like `_sp` will be passed to `a`/`button` tag
- If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`. Alternatively you can manually `preventDefault` the provided `originalEvent` on the `breadcrumb-select` event.
