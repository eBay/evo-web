import classNames from "classnames";
import type { EvoBadgeProps } from "./types";
import "@ebay/skin/badge.mjs";

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
        className={classNames("badge", "badge--wide", className)}
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
        className={classNames("badge", className)}
        aria-label={ariaLabel}
        role={role}
      >
        {number}
      </span>
    );
  }

  return null;
}
