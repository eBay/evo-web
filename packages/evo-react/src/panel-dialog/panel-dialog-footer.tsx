import classNames from "classnames";
import { EvoDialogFooter } from "../dialog/dialog-footer";
import type { EvoPanelDialogFooterProps } from "./types";

/** @summary Footer action region of a panel dialog. */
export function EvoPanelDialogFooter({
  className,
  children,
  ...rest
}: EvoPanelDialogFooterProps) {
  return (
    <EvoDialogFooter
      {...rest}
      className={classNames("panel-dialog__footer", className)}
    >
      {children}
    </EvoDialogFooter>
  );
}
