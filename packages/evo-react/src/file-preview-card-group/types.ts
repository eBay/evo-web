import type { ComponentProps, Ref } from "react";
import type { EvoFilePreviewCardProps } from "../file-preview-card/types";

/** Native list props and preview card children. */
export type EvoFilePreviewCardGroupProps = ComponentProps<"ul">;

/** File preview card props with a list item wrapper. */
export type EvoFilePreviewCardGroupItemProps = Omit<
  EvoFilePreviewCardProps,
  "as" | "ref"
> & {
  /** Native reference to the rendered `<li>`. */
  ref?: Ref<HTMLLIElement>;
};
