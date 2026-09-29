import classNames from "classnames";
import type { EvoToggleButtonTitleProps } from "./types";

/**
 * Visible label of `EvoToggleButton`. Place it inside
 * `EvoToggleButtonContent`; keep it unchanged as the pressed state changes.
 *
 * @summary Toggle button title.
 */
export function EvoToggleButtonTitle({
  children,
  className,
  ...rest
}: EvoToggleButtonTitleProps) {
  return (
    <span {...rest} className={classNames("toggle-button__title", className)}>
      {children}
    </span>
  );
}
