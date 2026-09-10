import classNames from "classnames";
import type { EvoAlertDialogFooterProps } from "./types";

/**
 * Contains the confirmation action for an alert dialog. The confirm control
 * belongs in this region.
 *
 * @summary Alert dialog action region.
 */
export function EvoAlertDialogFooter({
  className,
  children,
  ...rest
}: EvoAlertDialogFooterProps) {
  return (
    <div {...rest} className={classNames("dialog__footer", className)}>
      {children}
    </div>
  );
}
