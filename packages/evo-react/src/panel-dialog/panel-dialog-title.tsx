import classNames from "classnames";
import { EvoDialogTitle } from "../dialog/dialog-title";
import type { EvoPanelDialogTitleProps } from "./types";

/** @summary Heading that labels a panel dialog. */
export function EvoPanelDialogTitle({
  className,
  children,
  ...rest
}: EvoPanelDialogTitleProps) {
  return (
    <EvoDialogTitle
      {...rest}
      className={classNames("panel-dialog__title", className)}
    >
      {children}
    </EvoDialogTitle>
  );
}
