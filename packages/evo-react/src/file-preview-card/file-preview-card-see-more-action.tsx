import classNames from "classnames";
import type { EvoFilePreviewCardSeeMoreActionProps } from "./types";

/**
 * Shows how many files remain and activates the consumer's see-more action.
 * Use in `seeMoreAction` to customize the overlay's native button attributes.
 *
 * @summary File preview see-more overlay.
 */
export function EvoFilePreviewCardSeeMoreAction({
  a11yText,
  className,
  count,
  ...rest
}: EvoFilePreviewCardSeeMoreActionProps) {
  return (
    <button
      {...rest}
      type="button"
      aria-label={a11yText}
      className={classNames("file-preview-card__see-more", className)}
    >
      <span>+{count}</span>
    </button>
  );
}
