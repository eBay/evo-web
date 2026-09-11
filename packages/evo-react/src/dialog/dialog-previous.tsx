import classNames from "classnames";
import { EvoIconButton } from "../icon-button";
import { EvoIconChevronLeft16 } from "../icon/icons/chevron-left-16";
import type { EvoDialogPreviousProps } from "./types";

/**
 * A previous button lets people move back within a multi-step dialog.
 *
 * Provide localized `a11yText` that identifies the destination or action. The
 * application owns the navigation behavior.
 *
 * @summary Previous-step action for a dialog.
 */
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
