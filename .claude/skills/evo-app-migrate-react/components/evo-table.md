# ebay-table → evo-table

`EvoTable` uses named components for the table head, body, rows, headers, and cells. Applications own row selection and sorting state. The outer `<div role="group">` and inner native `<table>` remain, with Skin density, frozen header, and selection layout classes.

```tsx
import {
  EvoTable,
  EvoTableBody,
  EvoTableCell,
  EvoTableHead,
  EvoTableHeader,
  EvoTableRow,
} from "@evo-web/react/table";
import { EvoCheckbox } from "@evo-web/react/checkbox";
import { EvoTriStateCheckbox } from "@evo-web/react/tri-state-checkbox";

<EvoTable aria-label="Active listings" mode="selection">
  <EvoTableHead>
    <EvoTableHeader>
      <EvoTriStateCheckbox
        aria-label="Select all rows"
        values={rowIds}
        checkedValues={selectedIds}
        onCheckedValuesChange={setSelectedIds}
      />
    </EvoTableHeader>
    <EvoTableHeader sort={sort} onSortChange={setSort}>
      Item
    </EvoTableHeader>
  </EvoTableHead>
  <EvoTableBody>
    {rows.map((row) => (
      <EvoTableRow key={row.id}>
        <EvoTableCell rowHeader>
          <EvoCheckbox
            aria-label={`Select ${row.item}`}
            checked={selectedIds.includes(row.id)}
            onChange={(event) => toggleRow(row.id, event.currentTarget.checked)}
          />
        </EvoTableCell>
        <EvoTableCell>{row.item}</EvoTableCell>
      </EvoTableRow>
    ))}
  </EvoTableBody>
</EvoTable>;
```

`EvoTableHead` wraps headers in `<thead><tr>`; `EvoTableBody` wraps rows in `<tbody>`. Put `rowHeader` on the identifying cell instead of a column header. `sort` is controlled and `onSortChange(nextSort)` replaces `onSort(event, { sorted })`; sort row data in the application. `mode="selection"` applies sizing only; use checkbox components and app state for individual and select-all behavior. `a11ySelectAllText`, `a11ySelectRowText`, `allSelected`, and `onSelect` move to those controls and application state.
