import classNames from "classnames";
import type { EvoConfirmDialogHeaderProps } from "./types";
import { useConfirmDialogContext } from "./context";

export function EvoConfirmDialogHeader({
  as: As = "h2",
  id,
  className,
  children,
  ...rest
}: EvoConfirmDialogHeaderProps) {
  const { headerId, setHeaderId } = useConfirmDialogContext();

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
