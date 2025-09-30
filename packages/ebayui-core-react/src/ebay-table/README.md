# EbayTable

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/data-display-ebay-table--docs)

## Usage

### Import JS

```tsx
import {
    EbayTable,
    EbayTableHeader,
    EbayTableRow,
    EbayTableCell,
    type TableSelectHandler,
    type TableSortHandler,
    type TableRowSelectHandler,
    type TableHeaderSortHandler,
} from "@ebay/ui-core-react/ebay-table";
```

### Import following styles from SKIN

```tsx
import "@ebay/skin/table";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```tsx
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```tsx
import "@ebay/skin/table.css";
```

```tsx
<EbayTable>
    <EbayTableHeader>
        <EbayTableRow>
            <EbayTableCell>Column 1</EbayTableCell>
            <EbayTableCell>Column 2</EbayTableCell>
            <EbayTableCell>Column 3</EbayTableCell>
        </EbayTableRow>
    </EbayTableHeader>
    <EbayTableRow>
        <EbayTableCell>Row 1, Cell 1</EbayTableCell>
        <EbayTableCell>Row 1, Cell 2</EbayTableCell>
        <EbayTableCell>Row 1, Cell 3</EbayTableCell>
    </EbayTableRow>
    <EbayTableRow>
        <EbayTableCell>Row 2, Cell 1</EbayTableCell>
        <EbayTableCell>Row 2, Cell 2</EbayTableCell>
        <EbayTableCell>Row 2, Cell 3</EbayTableCell>
    </EbayTableRow>
</EbayTable>
```

## Attributes

### EbayTable

| Name                | Type     | Required | Description                                                   | Data                                        |
| ------------------- | -------- | -------- | ------------------------------------------------------------- | ------------------------------------------- |
| `density`           | String   | No       | Table density, `compact`, `relaxed`, `none`                   |                                             |
| `mode`              | String   | No       | Table mode, `selection`, `none`                               |                                             |
| `frozenHeader`      | Boolean  | No       | If true, the header will be frozen                            |                                             |
| `allSelected`       | String   | No       | Select all tri-state checkbox state, `true`, `false`, `mixed` |                                             |
| `a11ySelectAllText` | String   | No       | Accessibility text for select all checkbox                    |                                             |
| `a11ySelectRowText` | String   | No       | Accessibility text for select row checkbox                    |                                             |
| `onSelect`          | Function | No       | Triggered on selection                                        | `(event: Event, { selected, allSelected })` |
| `onSort`            | Function | No       | Triggered on column sort                                      | `(event: Event, { sorted })`                |

### EbayTableHeader

| Name         | Type     | Required | Description                                                          | Data             |
| ------------ | -------- | -------- | -------------------------------------------------------------------- | ---------------- |
| `columnType` | String   | No       | Column type, `normal`, `numeric`, `layout`, `icon-action`            |                  |
| `name`       | String   | No       | Column name that will be used in the EbayTable event `sorted` object |                  |
| `sort`       | String   | No       | Defines which icon will be shown, `asc`, `desc`, `none`              |                  |
| `rowHeader`  | Boolean  | No       | Defines if the column is a row header                                |                  |
| `onSort`     | Function | No       | Triggered on column sort                                             | `(event: Event)` |

### EbayTableRow

| Name                | Type     | Required | Description                                                              | Data                                 |
| ------------------- | -------- | -------- | ------------------------------------------------------------------------ | ------------------------------------ |
| `name`              | String   | No       | Column name that will be used in the EbayTable events objects `selected` |                                      |
| `selected`          | Boolean  | No       | Defines if the row is selected                                           |                                      |
| `mode`              | String   | No       | Row mode, `selection`, `none`                                            |                                      |
| `a11ySelectRowText` | String   | No       | Accessibility text for select row checkbox                               |                                      |
| `onSelect`          | Function | No       | Triggered on row selection                                               | `(event: Event, { name, selected })` |

### EbayTableCell

| Name         | Type    | Required | Description                                               | Data |
| ------------ | ------- | -------- | --------------------------------------------------------- | ---- |
| `rowHeader`  | Boolean | No       | Defines if the cell is a row header (`<th>`)              |      |
| `columnType` | String  | No       | Column type, `normal`, `numeric`, `layout`, `icon-action` |      |
