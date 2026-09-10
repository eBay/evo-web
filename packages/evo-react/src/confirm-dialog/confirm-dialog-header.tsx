import classNames from "classnames";
import type { EvoConfirmDialogHeaderProps } from "./types";
import { useConfirmDialogContext } from "./context";

/**
 * Names the decision in the confirmation dialog. Include it in
 * `EvoConfirmDialog` so its `id` supplies the dialog's accessible name.
 *
 * @summary Confirm dialog heading.
 */
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
