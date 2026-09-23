import type { SyntheticEvent } from "react";
import classNames from "classnames";
import type { EvoDetailsProps } from "./types";
import { DetailsProvider } from "./context";
import "@ebay/skin/details.mjs";

/**
 * Details let users reveal secondary content on demand.
 *
 * `EvoDetails` uses the native `<details>`/`<summary>` disclosure model and is
 * composed from `EvoDetailsSummary` and `EvoDetailsContent`.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoDetails,
 *   EvoDetailsContent,
 *   EvoDetailsLabel,
 *   EvoDetailsSummary,
 * } from "@evo-web/react/details";
 *
 * <EvoDetails>
 *   <EvoDetailsSummary>
 *     <EvoDetailsLabel>More information</EvoDetailsLabel>
 *   </EvoDetailsSummary>
 *   <EvoDetailsContent>Additional information.</EvoDetailsContent>
 * </EvoDetails>
 * ```
 *
 * @summary Native expandable disclosure.
 */
export function EvoDetails({
  size,
  alignment,
  open,
  onToggle,
  children,
  className,
  ...rest
}: EvoDetailsProps) {
  const handleToggle =
    onToggle &&
    ((event: SyntheticEvent<HTMLDetailsElement>) => {
      onToggle(event, { open: event.currentTarget.open });
    });

  return (
    <DetailsProvider size={size} alignment={alignment}>
      <details
        open={open}
        onToggle={handleToggle}
        className={classNames("details", className)}
        {...rest}
      >
        {children}
      </details>
    </DetailsProvider>
  );
}
