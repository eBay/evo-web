import classNames from "classnames";
import type { EvoDetailsLabelProps } from "./types";

/**
 * Names the content revealed by `EvoDetailsSummary`. It belongs inside the
 * summary.
 *
 * @summary Summary label.
 */
export function EvoDetailsLabel({
  children,
  className,
  ...rest
}: EvoDetailsLabelProps) {
  return (
    <span className={classNames("details__label", className)} {...rest}>
      {children}
    </span>
  );
}
