import classNames from "classnames";
import type { EvoAlertDialogMainProps } from "./types";
import { useAlertDialogContext } from "./context";

export function EvoAlertDialogMain({
  id,
  className,
  children,
  ...rest
}: EvoAlertDialogMainProps) {
  const { mainId } = useAlertDialogContext();

  return (
    <div
      {...rest}
      id={id ?? mainId}
      className={classNames("dialog__main", className)}
    >
      {children}
    </div>
  );
}
