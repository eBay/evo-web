import { useCallback } from "react";
import type { EvoConfirmDialogRejectProps } from "./types";
import { useConfirmDialogContext } from "./context";
import { EvoButton } from "../button";
import type { NativeButtonProps } from "../button/types";

export function EvoConfirmDialogReject({
  onClick,
  children,
  ...rest
}: EvoConfirmDialogRejectProps) {
  const { onRejectClick } = useConfirmDialogContext();

  const handleClick: NonNullable<NativeButtonProps["onClick"]> = useCallback(
    (e) => {
      onRejectClick();
      onClick?.(e);
    },
    [onClick, onRejectClick],
  );

  return (
    <EvoButton {...rest} onClick={handleClick}>
      {children}
    </EvoButton>
  );
}
