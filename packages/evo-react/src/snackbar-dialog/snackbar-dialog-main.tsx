import classNames from "classnames";
import type { EvoSnackbarDialogMainProps } from "./types";

/**
 * Main message region of `EvoSnackbarDialog`.
 *
 * @summary Main content of a snackbar dialog.
 */
export function EvoSnackbarDialogMain({
  children,
  className,
  ref,
  ...rest
}: EvoSnackbarDialogMainProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("snackbar-dialog__main", className)}
    >
      {children}
    </div>
  );
}
