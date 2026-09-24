import classNames from "classnames";
import { EvoIconButton } from "../icon-button/icon-button";
import type { EvoFilePreviewCardActionProps } from "./types";

/**
 * Corner action for a file preview. Supply an icon child and localized
 * `a11yText`. Use this component in `action`, `deleteAction`, or `cancelAction`.
 *
 * @summary Icon action positioned on a file preview.
 */
export function EvoFilePreviewCardAction({
  className,
  ...rest
}: EvoFilePreviewCardActionProps) {
  return (
    <EvoIconButton
      {...rest}
      className={classNames("file-preview-card__action", className)}
    />
  );
}
