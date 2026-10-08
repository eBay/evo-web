import classNames from "classnames";
import { EvoDialogClose } from "../dialog/dialog-close";
import type { EvoPanelDialogCloseProps } from "./types";

/** @summary Close action that requests the containing panel dialog to close. */
export function EvoPanelDialogClose({
  className,
  ...rest
}: EvoPanelDialogCloseProps) {
  return (
    <EvoDialogClose
      {...rest}
      className={classNames("panel-dialog__close", className)}
    />
  );
}
