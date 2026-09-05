import classNames from "classnames";
import type { EvoProgressBarProps } from "./types";
import "@ebay/skin/progress-bar.mjs";

export function EvoProgressBar({
  a11yText,
  value,
  max = 100,
  fluid,
  className,
  ref,
  ...rest
}: EvoProgressBarProps) {
  return (
    <progress
      {...rest}
      ref={ref}
      aria-label={a11yText ?? undefined}
      className={classNames("progress-bar", className, {
        "progress-bar--fluid": fluid,
      })}
      value={value}
      max={max}
    />
  );
}
