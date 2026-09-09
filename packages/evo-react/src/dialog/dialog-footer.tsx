import classNames from "classnames";
import type { EvoDialogFooterProps } from "./types";

/**
 * Use the footer for supporting information or actions that belong at the end
 * of a dialog.
 *
 * @summary Footer action region for a dialog.
 */
export function EvoDialogFooter({
  className,
  children,
  ...rest
}: EvoDialogFooterProps) {
  return (
    <div {...rest} className={classNames("dialog__footer", className)}>
      {children}
    </div>
  );
}
