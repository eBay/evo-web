import classNames from "classnames";
import type { EvoDetailsContentProps } from "./types";

/**
 * Contains the information revealed by `EvoDetailsSummary`. It belongs inside
 * `EvoDetails` after the summary; `as` changes its semantic element.
 *
 * @summary Expandable details region.
 */
export function EvoDetailsContent({
  as: Component = "div",
  children,
  className,
  ...rest
}: EvoDetailsContentProps) {
  return (
    <Component className={classNames("details__content", className)} {...rest}>
      {children}
    </Component>
  );
}
