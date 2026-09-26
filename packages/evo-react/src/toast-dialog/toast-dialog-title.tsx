import classNames from "classnames";
import { useToastDialog } from "./context";
import type { EvoToastDialogTitleProps } from "./types";

/**
 * Names the toast dialog and automatically supplies its `aria-labelledby`
 * reference. Use `as` to match the surrounding heading hierarchy.
 *
 * @summary Accessible title for a toast dialog.
 */
export function EvoToastDialogTitle({
  as: As = "h2",
  id,
  className,
  children,
  ...rest
}: EvoToastDialogTitleProps) {
  const { headerId, setHeaderId } = useToastDialog();
  const resolvedId = id ?? headerId;
  if (id) setHeaderId(id);

  return (
    <As
      {...rest}
      id={resolvedId}
      className={classNames("toast-dialog__title", className)}
    >
      {children}
    </As>
  );
}
