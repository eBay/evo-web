import classNames from "classnames";
import { EvoDialog } from "../dialog/dialog";
import type { EvoPanelDialogProps } from "./types";
import "@ebay/skin/panel-dialog.mjs";

/**
 * Panel dialogs focus attention on content or tasks in a side panel. The
 * dialog uses a native modal and shares `EvoDialog`'s controlled `open` and
 * `onOpenChange` API. Place named panel regions inside the panel window.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoPanelDialog,
 *   EvoPanelDialogClose,
 *   EvoPanelDialogHeader,
 *   EvoPanelDialogMain,
 *   EvoPanelDialogTitle,
 * } from "@evo-web/react/panel-dialog";
 *
 * <EvoPanelDialog open={open} onOpenChange={setOpen}>
 *   <EvoPanelDialogHeader>
 *     <EvoPanelDialogTitle>Order details</EvoPanelDialogTitle>
 *     <EvoPanelDialogClose a11yText="Close order details" />
 *   </EvoPanelDialogHeader>
 *   <EvoPanelDialogMain>Review your order.</EvoPanelDialogMain>
 * </EvoPanelDialog>
 * ```
 *
 * @summary Modal side panel for focused tasks or information.
 */
export function EvoPanelDialog({
  animated = true,
  children,
  className,
  position = "start",
  ...rest
}: EvoPanelDialogProps) {
  return (
    <EvoDialog
      {...rest}
      role="dialog"
      className={classNames(
        "panel-dialog",
        animated && "panel-dialog--mask-fade-slow",
        !animated && "panel-dialog--no-animation",
        className,
      )}
    >
      <div
        className={classNames(
          "panel-dialog__window",
          "panel-dialog__window--slide",
          position === "end" && "panel-dialog__window--end",
        )}
      >
        {children}
      </div>
    </EvoDialog>
  );
}
