import classNames from "classnames";
import type { EvoBadgeProps } from "./types";
import "@ebay/skin/badge.mjs";

/**
 * A badge is a visual indicator that notifies users of numeric values.
 *
 * `EvoBadge` also supports an empty indicator and displays counts above 99 as
 * `99+`. Zero and negative values hide the badge, and `a11yText` should explain
 * what the count or indicator means.
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
