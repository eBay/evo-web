import classNames from "classnames";
import type { EvoConfirmDialogMainProps } from "./types";
import { useConfirmDialogContext } from "./context";

/**
 * Explains the consequence of the decision. Its `id` is referenced by the
 * confirmation button through `aria-describedby`.
 *
 * @summary Confirm dialog message region.
 */
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
