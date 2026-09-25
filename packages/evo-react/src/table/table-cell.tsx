import classNames from "classnames";
import type { EvoTableCellProps } from "./types";

/**
 * A data cell. Set `rowHeader` for the row's identifying cell and
 * `columnType="layout"` for a horizontal arrangement of its contents.
 *
 * @summary Data or row heading cell.
 */
export function EvoTableCell({
  children,
  className,
  columnType,
  rowHeader = false,
  ...rest
}: EvoTableCellProps) {
  const Cell = rowHeader ? "th" : "td";
  return (
    <Cell
      {...rest}
      scope={rowHeader ? "row" : undefined}
      className={classNames(
        "table-cell",
        columnType && `table-cell--${columnType}`,
        className,
      )}
    >
      {columnType === "layout" ? (
        <div className="table-cell__layout">{children}</div>
      ) : (
        children
      )}
    </Cell>
  );
}
