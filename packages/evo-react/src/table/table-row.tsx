import type { EvoTableRowProps } from "./types";

/** @summary One row of application supplied table cells. */
export function EvoTableRow({ children, ...rest }: EvoTableRowProps) {
  return <tr {...rest}>{children}</tr>;
}
