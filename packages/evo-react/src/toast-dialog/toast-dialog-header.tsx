import classNames from "classnames";
import type { EvoToastDialogHeaderProps } from "./types";

/**
 * Holds the `EvoToastDialogTitle` and `EvoToastDialogClose` at the top of the
 * toast window.
 *
 * @summary Header region for a toast dialog.
 */
export function EvoToastDialogHeader({
  className,
  children,
  ...rest
}: EvoToastDialogHeaderProps) {
  return (
    <div {...rest} className={classNames("toast-dialog__header", className)}>
      {children}
    </div>
  );
}
