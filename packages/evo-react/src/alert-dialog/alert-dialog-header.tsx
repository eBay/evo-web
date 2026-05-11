import classNames from "classnames";
import type { EvoAlertDialogHeaderProps } from "./types";
import { useAlertDialogContext } from "./context";

export function EvoAlertDialogHeader({
  as: As = "h2",
  id,
  className,
  children,
  ...rest
}: EvoAlertDialogHeaderProps) {
  const { headerId, setHeaderId } = useAlertDialogContext();

  const resolvedId = id ?? headerId;

  if (id) {
    setHeaderId(id);
  }

  return (
    <div className="dialog__header">
      <As
        {...rest}
        id={resolvedId}
        className={classNames("dialog__title", className)}
      >
        {children}
      </As>
    </div>
  );
}
