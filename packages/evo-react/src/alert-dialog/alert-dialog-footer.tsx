import classNames from "classnames";
import type { EvoAlertDialogFooterProps } from "./types";

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
