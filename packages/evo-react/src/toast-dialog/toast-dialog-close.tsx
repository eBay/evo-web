import classNames from "classnames";
import { EvoIconButton } from "../icon-button/icon-button";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { useToastDialog } from "./context";
import type { EvoToastDialogCloseProps } from "./types";

/**
 * Requests the enclosing toast dialog to close. Provide localized `a11yText`
 * that names this action. The button uses the transparent Skin treatment.
 *
 * @summary Close control for a toast dialog.
 */
export function EvoToastDialogClose({
  className,
  onClick,
  ...rest
}: EvoToastDialogCloseProps) {
  const { requestClose } = useToastDialog();
  return (
    <EvoIconButton
      {...rest}
      transparent
      className={classNames("toast-dialog__close", className)}
      onClick={(event) => {
        requestClose();
        onClick?.(event);
      }}
    >
      <EvoIconClose16 />
    </EvoIconButton>
  );
}
