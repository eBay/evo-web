import type { EvoTableHeadProps } from "./types";

/** @summary Column header row of a table. */
export function EvoTableHead({ children, ...rest }: EvoTableHeadProps) {
  return (
    <thead {...rest}>
      <tr>{children}</tr>
    </thead>
  );
}
