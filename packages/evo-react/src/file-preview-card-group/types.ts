import type { ComponentProps, ReactNode } from "react";
import type { EvoFilePreviewCardProps } from "../file-preview-card/types";

/** A card descriptor; action callbacks live in each card's named slots. */
export type FilePreviewCardGroupCard = Omit<EvoFilePreviewCardProps, "as">;

export type EvoFilePreviewCardGroupProps = Omit<
  ComponentProps<"div">,
  "children"
> & {
  /** Cards rendered in order, each as an `<li>` in the group's list. */
  cards: readonly FilePreviewCardGroupCard[];
  /** Controlled number of visible cards, before the see-more preview. Defaults to 15. */
  visibleCardCount?: number;
  /** Initial visible count when `visibleCardCount` is omitted. Defaults to 15. */
  defaultVisibleCardCount?: number;
  /** Called when the see-more control requests 15 additional cards. */
  onVisibleCardCountChange?: (count: number) => void;
  /** Localized accessible label for the default see-more control. Defaults to `"See more files"`. */
  a11ySeeMoreText?: string;
  /** Custom see-more control, normally an `EvoFilePreviewCardGroupSeeMoreAction`. */
  seeMoreAction?: ReactNode;
};

export type EvoFilePreviewCardGroupSeeMoreActionProps = Omit<
  ComponentProps<"button">,
  "children" | "aria-label"
> & {
  /** Localized accessible name for the see-more control. Defaults to `"See more files"`. */
  a11yText?: string;
};
