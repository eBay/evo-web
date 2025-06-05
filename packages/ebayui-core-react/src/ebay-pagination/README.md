# EbayPagination

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/navigation-disclosure-ebay-pagination--basic-links)

The `<EbayPagination>` is a tag used to create a pagination navigation. It will display up to 9 page links.
If pagination doesn't fit the page it will adjust to the available width.

## Import JS

```jsx harmony
import { EbayPagination, EbayPaginationItem } from "@ebay/ui-core-react/ebay-pagination";
```

## Import styles from Skin

```jsx harmony
import "@ebay/skin/pagination";
import "@ebay/skin/utility";
```

### or if using CSS/SCSS

```jsx
import "@ebay/skin/pagination.css";
import "@ebay/skin/utility.css";
```

### EbayPagination Usage

```jsx
<EbayPagination a11yPreviousText="Previous page" a11yNextText="Next page" a11yCurrentText="Results Pagination - Page 2">
    <EbayPaginationItem href="#" type="previous" disabled />
    <EbayPaginationItem href="#" current>
        item 1
    </EbayPaginationItem>
    <EbayPaginationItem href="#">item 2</EbayPaginationItem>
    <EbayPaginationItem href="#">item 3</EbayPaginationItem>
    <EbayPaginationItem href="#" type="next" />
</EbayPagination>
```

### EbayPagination Attributes

| Name               | Type    | Stateful | Description                                                                                                                                                                                                                                                                                        |
| ------------------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a11yPreviousText` | String  | No       | a11y text for previous arrow button                                                                                                                                                                                                                                                                |
| `a11yNextText`     | String  | No       | a11y text for next arrow button                                                                                                                                                                                                                                                                    |
| `a11yCurrentText`  | String  | No       | Description for the current page (e.g. Results of Page 1)                                                                                                                                                                                                                                          |
| `variant`          | String  | No       | Either `show-last`, or `show-range` (default). If show-last then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible. |
| `fluid`            | Boolean | No       | Will fill all available horizontal space. Horizontal space will be distributed around each item as necessary.                                                                                                                                                                                      |

### EbayPagination Events

| Event        | Data                        | Description                   |
| ------------ | --------------------------- | ----------------------------- |
| `onPrevious` | `(Event)`                   | clicked previous arrow button |
| `onNext`     | `(Event)`                   | clicked next arrow button     |
| `onSelect`   | `(Event, { value, index })` | page selected clicked         |

## EbayPaginationItem Tag

### EbayPaginationItem Usage

```jsx
<EbayPaginationItem>1</EbayPaginationItem>
```

### EbayPaginationItem Attributes

| Name       | Type    | Stateful | Description                                                                                                                                             |
| ---------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `disabled` | Boolean | No       | Previous/next button is disabled or not                                                                                                                 |
| `href`     | String  | No       | for link that looks like a menu-item; omitting the href will switch to a button                                                                         |
| `current`  | Boolean | No       | the current page                                                                                                                                        |
| `type`     | String  | No       | "previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrow button or a page. If the `type='previous | next'`isn't provided the previous/next arrow buttons will be taken as`disabled` |

Notes:

- If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`.
