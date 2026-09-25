import classNames from "classnames";
import { EvoIconButton } from "../icon-button/icon-button";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { useFilePreviewCardContext } from "./context";
import type { EvoFilePreviewCardCancelActionProps } from "./types";

/**
 * Cancel control shown while the enclosing `EvoFilePreviewCard` uploads.
 * Defaults to the close icon when no icon child is supplied.
 *
 * @summary Upload cancellation action.
 */
export function EvoFilePreviewCardCancelAction({
  children,
  className,
  ...rest
}: EvoFilePreviewCardCancelActionProps) {
  const { status } = useFilePreviewCardContext();
  if (status !== "uploading") return null;
  return (
    <EvoIconButton
      {...rest}
      className={classNames("file-preview-card__action", className)}
    >
      {children ?? <EvoIconClose16 />}
    </EvoIconButton>
  );
}
