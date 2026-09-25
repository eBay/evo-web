import { EvoPreviewCardSeeMore } from "../file-preview-card/file-preview-card-see-more";
import { useFilePreviewCardGroup } from "./context";
import type { EvoFilePreviewCardGroupSeeMoreActionProps } from "./types";

/**
 * Shows the remaining count and reveals up to 15 more cards on activation.
 * Use in the group's `seeMoreAction` slot to customize button attributes.
 *
 * @summary Progressive disclosure control for a file preview card group.
 */
export function EvoFilePreviewCardGroupSeeMoreAction({
  a11yText = "See more files",
  onClick,
  ...rest
}: EvoFilePreviewCardGroupSeeMoreActionProps) {
  const { remaining, showMore } = useFilePreviewCardGroup();
  return (
    <EvoPreviewCardSeeMore
      {...rest}
      count={remaining}
      a11yText={a11yText}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) showMore();
      }}
    />
  );
}
