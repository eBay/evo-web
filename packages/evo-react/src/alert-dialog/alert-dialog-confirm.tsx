import type { MouseEvent } from "react";
import type { EvoAlertDialogConfirmProps } from "./types";
import { useAlertDialogContext } from "./context";
import { EvoButton } from "../button/button";

export function EvoAlertDialogConfirm({
  onClick,
  children,
  ...rest
}: EvoAlertDialogConfirmProps) {
  const { mainId, onConfirmClick } = useAlertDialogContext();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    onConfirmClick();
    onClick?.(e);
  }

  return (
    <div className="dialog__footer">
      <EvoButton
        {...rest}
        autoFocus
        ref={(button) => {
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
    </div>
  );
}
