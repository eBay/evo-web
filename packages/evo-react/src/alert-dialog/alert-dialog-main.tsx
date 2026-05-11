import classNames from "classnames";
import type { EvoAlertDialogMainProps } from "./types";
import { useAlertDialogContext } from "./context";

export function EvoAlertDialogMain({
  id,
  className,
  children,
  ...rest
}: EvoAlertDialogMainProps) {
  const { mainId, setMainId } = useAlertDialogContext();

  if (id) {
    setMainId(id);
  }

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
