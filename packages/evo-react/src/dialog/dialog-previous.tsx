import classNames from "classnames";
import { EvoIconButton } from "../icon-button";
import { EvoIconChevronLeft16 } from "../icon/icons/chevron-left-16";
import type { EvoDialogPreviousProps } from "./types";

export function EvoDialogPrevious({
  className,
  ...rest
}: EvoDialogPreviousProps) {
  return (
    <EvoIconButton {...rest} className={classNames("dialog__prev", className)}>
      <EvoIconChevronLeft16 />
    </EvoIconButton>
  );
}
