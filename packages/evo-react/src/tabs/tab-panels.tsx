import classNames from "classnames";
import type { EvoTabPanelsProps } from "./types";

/**
 * Groups the panels belonging to a tab set.
 *
 * @summary Tab content container.
 */
export function EvoTabPanels({
  className,
  children,
  ...rest
}: EvoTabPanelsProps) {
  return (
    <div {...rest} className={classNames("tabs__content", className)}>
      {children}
    </div>
  );
}
