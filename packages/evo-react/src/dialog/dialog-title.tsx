import classNames from "classnames";
import { useDialogContext } from "./context";
import type { EvoDialogTitleProps } from "./types";

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
