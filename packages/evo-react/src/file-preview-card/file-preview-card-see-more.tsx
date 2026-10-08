import classNames from "classnames";
import { useFilePreviewCardContext } from "./context";
import type { EvoPreviewCardSeeMoreProps } from "./types";

/**
 * Shows the number of additional files and invokes the consumer's click action.
 * Place this child after the file asset inside `EvoFilePreviewCard`.
 *
 * @summary File preview see-more overlay.
 */
export function EvoPreviewCardSeeMore({
  a11yText,
  className,
  count,
  ...rest
}: EvoPreviewCardSeeMoreProps) {
  useFilePreviewCardContext();
  if (count <= 0) return null;
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
