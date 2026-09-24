import classNames from "classnames";
import type { EvoToastDialogFooterProps } from "./types";

/**
 * Adds an optional action or supporting information after the main content.
 *
 * @summary Footer region for a toast dialog.
 */
export function EvoToastDialogFooter({
  className,
  children,
  ...rest
}: EvoToastDialogFooterProps) {
  return (
    <div {...rest} className={classNames("toast-dialog__footer", className)}>
      {children}
    </div>
  );
}
