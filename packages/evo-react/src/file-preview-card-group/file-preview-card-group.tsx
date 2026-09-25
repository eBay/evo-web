import { useCallback, useState } from "react";
import classNames from "classnames";
import { EvoFilePreviewCard } from "../file-preview-card/file-preview-card";
import { FilePreviewCardGroupProvider } from "./context";
import { EvoFilePreviewCardGroupSeeMoreAction } from "./file-preview-card-group-see-more-action";
import type { EvoFilePreviewCardGroupProps } from "./types";
import "@ebay/skin/file-preview-card-group.mjs";

const PAGE_SIZE = 15;

/**
 * File preview card groups render a grid of cards and progressively reveal
 * more cards in batches of 15. Card data avoids inspecting or cloning React
 * children. Each card provides its own named actions.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFilePreviewCardGroup } from "@evo-web/react/file-preview-card-group";
 *
 * <EvoFilePreviewCardGroup
 *   cards={[{ file: { name: "photo.jpg", type: "image/jpeg", src: url } }]}
 *   a11ySeeMoreText="See more photos"
 * />
 * ```
 *
 * @summary Grid of file previews with progressive disclosure.
 */
export function EvoFilePreviewCardGroup({
  a11ySeeMoreText = "See more files",
  cards,
  className,
  defaultVisibleCardCount = PAGE_SIZE,
  onVisibleCardCountChange,
  ref,
  seeMoreAction,
  visibleCardCount,
  ...rest
}: EvoFilePreviewCardGroupProps) {
  const [internalVisibleCount, setInternalVisibleCount] = useState(
    defaultVisibleCardCount,
  );
  const showing = Math.max(0, visibleCardCount ?? internalVisibleCount);
  const remaining = Math.max(0, cards.length - showing);
  const showMore = useCallback(() => {
    const next = Math.min(cards.length, showing + PAGE_SIZE);
    if (visibleCardCount === undefined) setInternalVisibleCount(next);
    onVisibleCardCountChange?.(next);
  }, [cards.length, onVisibleCardCountChange, showing, visibleCardCount]);

  return (
    <FilePreviewCardGroupProvider remaining={remaining} showMore={showMore}>
      <div
        {...rest}
        ref={ref}
        className={classNames("file-preview-card-group", className)}
      >
        <ul>
          {cards.slice(0, showing).map((card, index) => (
            <EvoFilePreviewCard key={index} {...card} as="li" />
          ))}
          {remaining > 0 && (
            <EvoFilePreviewCard as="li" file={cards[showing]?.file}>
              {seeMoreAction ?? (
                <EvoFilePreviewCardGroupSeeMoreAction
                  a11yText={a11ySeeMoreText}
                />
              )}
            </EvoFilePreviewCard>
          )}
        </ul>
      </div>
    </FilePreviewCardGroupProvider>
  );
}
