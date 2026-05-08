import type { ComponentProps } from "react";

export type BadgeType = "menu" | "icon";

export type EvoBadgeProps = Omit<ComponentProps<"span">, "role" | "aria-label"> & {
  /**
   * The number to display in the badge.
   */
  number?: number | string;
  /**
   * The badge type. Omit for the default image/img role badge.
   */
  type?: BadgeType;
  /**
   * The accessible label for the badge.
   *
   * English default to be overridden is `"n unread items"`.
   *
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText: string | null;
};
