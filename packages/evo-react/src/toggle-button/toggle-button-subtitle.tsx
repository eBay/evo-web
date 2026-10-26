import classNames from "classnames";
import type { EvoToggleButtonSubtitleProps } from "./types";

/**
 * Supporting text shown below `EvoToggleButtonTitle`. Place it inside
 * `EvoToggleButtonContent`.
 *
 * @summary Toggle button subtitle.
 */
export function EvoToggleButtonSubtitle({
  children,
  className,
  ...rest
}: EvoToggleButtonSubtitleProps) {
  return (
    <span
      {...rest}
      className={classNames("toggle-button__subtitle", className)}
    >
      {children}
    </span>
  );
}
