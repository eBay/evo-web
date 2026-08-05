import classNames from "classnames";
import type { EvoDialogHeaderProps } from "./types";

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
