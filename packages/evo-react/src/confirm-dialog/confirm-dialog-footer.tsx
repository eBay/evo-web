import classNames from "classnames";
import type { EvoConfirmDialogFooterProps } from "./types";

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
