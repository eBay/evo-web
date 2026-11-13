import type { ComponentProps, ComponentType } from "react";

export type EvoListProps = ComponentProps<"div"> & {
  /** Accessible name for the list. Use this or `a11yLabelId`. */
  a11yText?: string;
  /** ID of visible text naming the list. Use this or `a11yText`. */
  a11yLabelId?: string;
};

export type EvoListItemProps = ComponentProps<"div">;
export type EvoListItemButtonProps = ComponentProps<"button">;
export type EvoListItemLinkProps = ComponentProps<"a"> & {
  /**
   * Custom component used in place of the native anchor, such as a framework `Link`.
   * It must render an `<a>` element because the list's Skin CSS rules target anchors.
   */
  as?: ComponentType<ComponentProps<"a">>;
};
export type EvoListItemContentProps = ComponentProps<"div">;
export type EvoListItemLeadingProps = ComponentProps<"div">;
export type EvoListItemTrailingProps = ComponentProps<"div">;
export type EvoListSeparatorProps = ComponentProps<"hr">;
