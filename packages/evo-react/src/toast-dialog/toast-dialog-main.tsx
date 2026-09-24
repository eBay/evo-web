import classNames from "classnames";
import type { EvoToastDialogMainProps } from "./types";

/**
 * Holds the message and supporting content after the toast header.
 *
 * @summary Main content region for a toast dialog.
 */
export function EvoToastDialogMain({
  className,
  children,
  ...rest
}: EvoToastDialogMainProps) {
  return (
    <div {...rest} className={classNames("toast-dialog__main", className)}>
      {children}
    </div>
  );
}
