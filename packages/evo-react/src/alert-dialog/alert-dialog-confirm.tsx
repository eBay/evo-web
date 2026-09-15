import type { EvoAlertDialogConfirmProps } from "./types";
import { useAlertDialogContext } from "./context";
import { useRefTee } from "../utils/use-ref-tee";
import { EvoButton, type NativeButtonProps } from "../button";
import { useCallback } from "react";

/**
 * Acknowledges the alert and closes the dialog. It receives initial focus and
 * belongs in `EvoAlertDialogFooter`.
 *
 * @summary Alert acknowledgement action.
 */
export function EvoAlertDialogConfirm({
  ref,
  onClick,
  children,
  ...rest
}: EvoAlertDialogConfirmProps) {
  const { mainId, onConfirmClick } = useAlertDialogContext();
  const [buttonRef] = useRefTee<HTMLButtonElement | null>(ref);

  const handleClick: NonNullable<NativeButtonProps["onClick"]> = useCallback(
    (e) => {
      onConfirmClick();
      onClick?.(e);
    },
    [onClick, onConfirmClick],
  );

  return (
    <EvoButton
      {...rest}
      autoFocus
      ref={(button) => {
        buttonRef(button);
        // React doesn't set autofocus on the DOM element inside a dialog
        // https://github.com/facebook/react/issues/23301
        if (button) button.autofocus = true;
      }}
      priority="primary"
      aria-describedby={mainId}
      onClick={handleClick}
    >
      {children}
    </EvoButton>
  );
}
