import classNames from "classnames";
import type { EvoDialogMainProps } from "./types";

/**
 * The main region holds the information or task at the center of a dialog.
 *
 * @summary Main content region for a dialog.
 */
export function EvoDialogMain({
  className,
  children,
  ...rest
}: EvoDialogMainProps) {
  return (
    <div {...rest} className={classNames("dialog__main", className)}>
      {children}
    </div>
  );
}
