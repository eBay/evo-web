import { useCallback } from "react";
import classNames from "classnames";
import { EvoIconButton, type NativeIconButtonProps } from "../icon-button";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { useDialogContext } from "./context";
import type { EvoDialogCloseProps } from "./types";

/**
 * A close button gives people a clear way to dismiss a dialog.
 *
 * Provide localized `a11yText` that identifies the action. Activating the
 * button requests the containing dialog to close.
 *
 * @summary Close action for a dialog.
 */
export function EvoDialogClose({
  className,
  onClick,
  ...rest
}: EvoDialogCloseProps) {
  const { requestClose } = useDialogContext();

  const handleClick: NonNullable<NativeIconButtonProps["onClick"]> =
    useCallback(
      (event) => {
        requestClose();
        onClick?.(event);
      },
      [onClick, requestClose],
    );

  return (
    <EvoIconButton
      {...rest}
      className={classNames("dialog__close", className)}
      onClick={handleClick}
    >
      <EvoIconClose16 />
    </EvoIconButton>
  );
}
