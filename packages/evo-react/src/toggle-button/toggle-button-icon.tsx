import classNames from "classnames";
import type { EvoToggleButtonIconProps } from "./types";

/**
 * Contains a decorative `EvoIcon*` shown before the toggle button content.
 * Use it instead of `EvoToggleButtonImage`, not alongside it.
 *
 * @summary Toggle button icon media.
 */
export function EvoToggleButtonIcon({
  children,
  className,
  ...rest
}: EvoToggleButtonIconProps) {
  return (
    <span {...rest} className={classNames("toggle-button__icon", className)}>
      {children}
    </span>
  );
}
