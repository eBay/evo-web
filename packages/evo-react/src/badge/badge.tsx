import classNames from "classnames";
import type { EvoBadgeProps } from "./types";
import "@ebay/skin/badge.mjs";

export function EvoBadge({
  number,
  type,
  a11yText,
  className,
  ...rest
}: EvoBadgeProps) {
  const parsed = Math.round(parseInt(String(number), 10));

  if (!(parsed > 0)) {
    return null;
  }

  const isImg = type !== "menu" && type !== "icon";

  return (
    <span
      {...rest}
      className={classNames("badge", className)}
      aria-label={a11yText ?? undefined}
      role={isImg ? "img" : undefined}
    >
      {parsed > 99 ? "99+" : parsed}
    </span>
  );
}
