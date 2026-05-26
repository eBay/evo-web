import { useCallback } from "react";
import type { EvoConfirmDialogConfirmProps } from "./types";
import { useConfirmDialogContext } from "./context";
import { useRefTee } from "../utils/use-ref-tee";
import { EvoButton } from "../button";
import type { NativeButtonProps } from "../button/types";

export function EvoConfirmDialogConfirm({
  ref,
  onClick,
  children,
  ...rest
}: EvoConfirmDialogConfirmProps) {
  const { mainId, onConfirmClick } = useConfirmDialogContext();
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
