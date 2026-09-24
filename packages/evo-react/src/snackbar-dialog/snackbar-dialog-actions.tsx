import classNames from "classnames";
import type { EvoSnackbarDialogActionsProps } from "./types";

/**
 * Action region placed after `EvoSnackbarDialogMain`.
 *
 * @summary Action area of a snackbar dialog.
 */
export function EvoSnackbarDialogActions({
  children,
  className,
  ref,
  ...rest
}: EvoSnackbarDialogActionsProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("snackbar-dialog__actions", className)}
    >
      {children}
    </div>
  );
}
