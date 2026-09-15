import classNames from "classnames";
import type { EvoBadgeProps } from "./types";
import "@ebay/skin/badge.mjs";

/**
 * Badges draw attention to new or important information, such as unread
 * messages or an item count. Place a badge next to the label or control it
 * describes.
 *
 * Use `number` to show a count, or omit it for a simple indicator. Counts above
 * 99 appear as `99+`; zero and negative values hide the badge. Make sure the
 * badge's accessible label explains what the count or indicator means.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoBadge } from "@evo-web/react/badge";
 *
 * <EvoBadge number={5} a11yText="5 unread messages" />
 * ```
 *
 * @summary Count or status indicator.
 */
export function EvoBadge({
  number,
  type,
  a11yText = number ? `${number} notifications` : "notification",
  className,
  ...rest
}: EvoBadgeProps) {
  const role = type !== "menu" && type !== "icon" ? "img" : undefined;
  const ariaLabel = a11yText ?? undefined;

  if (number == null) {
    return (
      <span
        {...rest}
        className={classNames("badge", className)}
        aria-label={ariaLabel}
        role={role}
      />
    );
  }

  if (+number > 99) {
    return (
      <span
        {...rest}
        className={classNames("badge", className)}
        aria-label={ariaLabel}
        role={role}
      >
        99+
      </span>
    );
  }

  if (+number > 0) {
    return (
      <span
        {...rest}
        className={classNames("badge", "badge--circle", className)}
        aria-label={ariaLabel}
        role={role}
      >
        {number}
      </span>
    );
  }

  return null;
}
