import type { ComponentProps } from "react";

/** Density of table rows and cells. */
export type TableDensity = "compact" | "relaxed";
/** Visual treatment for tables with row selection controls. */
export type TableMode = "none" | "selection";
/** Layout treatment applied to a table cell. */
export type TableColumnType = "normal" | "numeric" | "layout" | "icon-action";
/** Current sort direction of one column. */
export type TableSort = "none" | "asc" | "desc";

export type EvoTableProps = ComponentProps<"div"> & {
  /** Applies selection cell sizing when row controls are supplied. */
  mode?: TableMode;
  /** Adjusts table row and cell spacing. */
  density?: TableDensity;
  /** Keeps the header visible when scrolling the table wrapper. */
  frozenHeader?: boolean;
};

/** Native head attributes; wraps header cells in one table row. */
export type EvoTableHeadProps = ComponentProps<"thead">;
/** Native body attributes for application supplied rows. */
export type EvoTableBodyProps = ComponentProps<"tbody">;
/** Native row attributes for application supplied cells. */
export type EvoTableRowProps = ComponentProps<"tr">;

export type EvoTableCellProps = Omit<ComponentProps<"td">, "scope"> & {
  /** Renders a row header `<th scope="row">` instead of `<td>`. */
  rowHeader?: boolean;
  /** Applies a Skin cell treatment such as numeric or layout. */
  columnType?: TableColumnType;
};

export type EvoTableHeaderProps = Omit<ComponentProps<"th">, "aria-sort"> & {
  /** Applies a Skin cell treatment such as numeric or layout. */
  columnType?: TableColumnType;
  /** Controlled sort direction. Omit when the column is not sortable. */
  sort?: TableSort;
  /** Called with the next direction after activating a sortable header. */
  onSortChange?: (sort: TableSort) => void;
  /** Optional heading link destination; renders an anchor instead of a button. */
  href?: string;
};
