import type { EvoTableBodyProps } from "./types";

/** @summary Body region for table rows. */
export function EvoTableBody({ children, ...rest }: EvoTableBodyProps) {
  return <tbody {...rest}>{children}</tbody>;
}
