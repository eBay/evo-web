import classNames from "classnames";
import type { EvoDialogMainProps } from "./types";

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
