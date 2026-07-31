import { useCallback } from "react";
import classNames from "classnames";
import { EvoIconButton } from "../icon-button";
import type { NativeIconButtonProps } from "../icon-button";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { useDialogContext } from "./context";
import type { EvoDialogCloseProps } from "./types";

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
