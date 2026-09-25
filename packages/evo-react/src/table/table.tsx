import classNames from "classnames";
import type { EvoTableProps } from "./types";
import "@ebay/skin/table.mjs";

/**
 * Tables present structured data in rows and columns. Compose a table head,
 * body, rows, and cells as named components. The outer group can receive a
 * descriptive `aria-label` when its purpose is not clear from surrounding
 * content.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoTable,
 *   EvoTableBody,
 *   EvoTableCell,
 *   EvoTableHead,
 *   EvoTableHeader,
 *   EvoTableRow,
 * } from "@evo-web/react/table";
 *
 * <EvoTable aria-label="Active listings">
 *   <EvoTableHead>
 *     <EvoTableHeader>Item</EvoTableHeader>
 *     <EvoTableHeader>Price</EvoTableHeader>
 *   </EvoTableHead>
 *   <EvoTableBody>
 *     <EvoTableRow>
 *       <EvoTableCell rowHeader>Camera</EvoTableCell>
 *       <EvoTableCell columnType="numeric">$120</EvoTableCell>
 *     </EvoTableRow>
 *   </EvoTableBody>
 * </EvoTable>
 * ```
 *
 * @summary Scrollable table for structured data.
 */
export function EvoTable({
  children,
  className,
  density,
  frozenHeader,
  mode = "none",
  ref,
  tabIndex = 0,
  ...rest
}: EvoTableProps) {
  return (
    <div
      {...rest}
      ref={ref}
      role="group"
      tabIndex={tabIndex}
      className={classNames(
        "table",
        mode === "selection" && "table--mode-selection",
        frozenHeader && "table--frozen-header",
        density && `table--density-${density}`,
        className,
      )}
    >
      <table>{children}</table>
    </div>
  );
}
