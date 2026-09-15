import classNames from "classnames";
import type { EvoAlertDialogMainProps } from "./types";
import { useAlertDialogContext } from "./context";

/**
 * Contains the message the user must acknowledge. Its `id` is referenced by
 * the confirmation button through `aria-describedby`.
 *
 * @summary Alert dialog message region.
 */
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
