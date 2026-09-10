import classNames from "classnames";
import type { EvoDetailsLeadingProps } from "./types";

/**
 * Contains optional leading content for `EvoDetailsSummary`, such as a
 * decorative icon.
 *
 * @summary Leading summary content.
 */
export function EvoDetailsLeading({
  children,
  className,
  ...rest
}: EvoDetailsLeadingProps) {
  return (
    <span className={classNames("details__leading", className)} {...rest}>
      {children}
    </span>
  );
}
