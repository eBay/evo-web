import classNames from "classnames";
import { EvoDialogHeader } from "../dialog/dialog-header";
import type { EvoPanelDialogHeaderProps } from "./types";

/** @summary Header region for a panel dialog. */
export function EvoPanelDialogHeader({
  className,
  children,
  ...rest
}: EvoPanelDialogHeaderProps) {
  return (
    <EvoDialogHeader
      {...rest}
      className={classNames("panel-dialog__header", className)}
    >
      {children}
    </EvoDialogHeader>
  );
}
