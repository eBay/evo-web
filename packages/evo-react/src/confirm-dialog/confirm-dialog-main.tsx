import classNames from "classnames";
import type { EvoConfirmDialogMainProps } from "./types";
import { useConfirmDialogContext } from "./context";

export function EvoConfirmDialogMain({
  id,
  className,
  children,
  ...rest
}: EvoConfirmDialogMainProps) {
  const { mainId, setMainId } = useConfirmDialogContext();

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
