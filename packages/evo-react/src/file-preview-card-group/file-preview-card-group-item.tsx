import type { Ref } from "react";
import { EvoFilePreviewCard } from "../file-preview-card/file-preview-card";
import type { EvoFilePreviewCardGroupItemProps } from "./types";

/**
 * A file preview card rendered as a list item within EvoFilePreviewCardGroup.
 * Pass action components as children, including EvoPreviewCardSeeMore when an
 * application chooses to show additional files.
 *
 * @summary File preview card list item.
 */
export function EvoFilePreviewCardGroupItem({
  ref,
  ...rest
}: EvoFilePreviewCardGroupItemProps) {
  return (
    <EvoFilePreviewCard {...rest} ref={ref as Ref<HTMLDivElement>} as="li" />
  );
}
