import classNames from "classnames";
import type { EvoDialogFooterProps } from "./types";

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
