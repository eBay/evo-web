import classNames from "classnames";
import { EvoDialogMain } from "../dialog/dialog-main";
import type { EvoPanelDialogMainProps } from "./types";

/** @summary Scrollable main content region of a panel dialog. */
export function EvoPanelDialogMain({
  className,
  children,
  ...rest
}: EvoPanelDialogMainProps) {
  return (
    <EvoDialogMain
      {...rest}
      className={classNames("panel-dialog__main", className)}
    >
      {children}
    </EvoDialogMain>
  );
}
