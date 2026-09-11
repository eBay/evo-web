import classNames from "classnames";
import type { EvoDialogHeaderProps } from "./types";

/**
 * Use the header to keep the dialog title and any previous or close actions
 * together at the top of the dialog.
 *
 * @summary Header region for a dialog.
 */
export function EvoDialogHeader({
  className,
  children,
  ...rest
}: EvoDialogHeaderProps) {
  return (
    <div {...rest} className={classNames("dialog__header", className)}>
      {children}
    </div>
  );
}
