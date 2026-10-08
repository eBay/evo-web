import classNames from "classnames";
import { EvoDialogPrevious } from "../dialog/dialog-previous";
import type { EvoPanelDialogPreviousProps } from "./types";

/** @summary Previous-step action in a panel dialog. */
export function EvoPanelDialogPrevious({
  className,
  ...rest
}: EvoPanelDialogPreviousProps) {
  return (
    <EvoDialogPrevious
      {...rest}
      className={classNames("panel-dialog__prev", className)}
    />
  );
}
