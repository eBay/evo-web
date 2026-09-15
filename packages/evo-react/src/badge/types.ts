import type { ComponentProps } from "react";

export type BadgeType = "menu" | "icon";

export type EvoBadgeProps = Omit<
  ComponentProps<"span">,
  "role" | "aria-label" | "children"
> & {
  /**
   * Count displayed in the badge. Values greater than 99 display as `99+`;
   * zero and negative values render nothing. Omit to show an empty indicator.
   */
  number?: number | string;
  /**
   * Removes the default `img` role when the badge labels a menu or icon
   * control whose accessible name already conveys the badge's meaning.
   */
  type?: BadgeType;
  /**
   * Descriptive label for what the badge represents, such as `"5 unread items"`.
   * English default to be overridden is `"notification"` when `number` is omitted,
   * or `"{number} notifications"` otherwise. Pass `null` explicitly _only_ if
   * alternative accessibility information is present.
   */
  a11yText: string | null;
};
