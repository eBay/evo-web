import classNames from "classnames";
import type { EvoToggleButtonContentProps } from "./types";

/**
 * Wraps the title and optional subtitle of `EvoToggleButton`.
 *
 * @summary Toggle button text content.
 */
export function EvoToggleButtonContent({
  children,
  className,
  ...rest
}: EvoToggleButtonContentProps) {
  return (
    <span {...rest} className={classNames("toggle-button__content", className)}>
      {children}
    </span>
  );
}
