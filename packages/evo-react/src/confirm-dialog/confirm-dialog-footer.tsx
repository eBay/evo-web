import classNames from "classnames";
import type { EvoConfirmDialogFooterProps } from "./types";

/**
 * Contains the reject and confirm actions for a confirmation dialog.
 *
 * @summary Confirm dialog action region.
 */
export function EvoConfirmDialogFooter({
  className,
  children,
  ...rest
}: EvoConfirmDialogFooterProps) {
  return (
    <div {...rest} className={classNames("dialog__footer", className)}>
      {children}
    </div>
  );
}
