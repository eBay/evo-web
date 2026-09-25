import classNames from "classnames";
import { EvoIconButton } from "../icon-button/icon-button";
import { useFilePreviewCardContext } from "./context";
import type { EvoFilePreviewCardActionProps } from "./types";

/**
 * Corner action for a file preview. Supply an icon child and localized
 * `a11yText`. Render as a child of `EvoFilePreviewCard` when not uploading.
 *
 * @summary Icon action positioned on a file preview.
 */
export function EvoFilePreviewCardAction({
  className,
  ...rest
}: EvoFilePreviewCardActionProps) {
  const { status } = useFilePreviewCardContext();
  if (status === "uploading") return null;
  return (
    <EvoIconButton
      {...rest}
      className={classNames("file-preview-card__action", className)}
    />
  );
}
