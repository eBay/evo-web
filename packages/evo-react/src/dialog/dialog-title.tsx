import classNames from "classnames";
import { useDialogContext } from "./context";
import type { EvoDialogTitleProps } from "./types";

/**
 * Every dialog needs a title that clearly describes its purpose.
 *
 * The title automatically labels the dialog. Use `as` to choose the heading
 * level that fits the page hierarchy, and provide `id` only when another part
 * of the page needs to reference the title.
 *
 * @summary Accessible title for a dialog.
 */
export function EvoDialogTitle({
  as: As = "h2",
  id,
  className,
  children,
  ...rest
}: EvoDialogTitleProps) {
  const { headerId, setHeaderId } = useDialogContext();
  const resolvedId = id ?? headerId;

  if (id) {
    setHeaderId(id);
  }

  return (
    <As
      {...rest}
      id={resolvedId}
      className={classNames("dialog__title", className)}
    >
      {children}
    </As>
  );
}
