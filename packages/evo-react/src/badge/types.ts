import type { ComponentProps } from "react";

export type BadgeType = "menu" | "icon";

export type EvoBadgeProps = Omit<
  ComponentProps<"span">,
  "role" | "aria-label" | "children"
> & {
  /** Number displayed in the badge. */
  number?: number | string;
  /** Badge type. Omit for the default image badge (`role="img"`). */
  type?: BadgeType;
  /**
   * Descriptive label for what the badge represents, such as `"5 unread items"`.
   * English default to be overridden is `"notification"` when `number` is omitted,
   * or `"{number} notifications"` otherwise. Pass `null` explicitly _only_ if
   * alternative accessibility information is present.
   */
  a11yText: string | null;
};
