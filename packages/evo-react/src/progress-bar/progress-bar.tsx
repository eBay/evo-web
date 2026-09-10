import classNames from "classnames";
import type { EvoProgressBarProps } from "./types";
import "@ebay/skin/progress-bar.mjs";

/**
 * Progress bars communicate the status of an ongoing task.
 *
 * `EvoProgressBar` renders a native `<progress>` element. Provide `value` for
 * determinate progress and omit it for indeterminate progress. `max` defaults
 * to `100`, while `fluid` fills the available container width.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoProgressBar } from "@evo-web/react/progress-bar";
 *
 * <EvoProgressBar
 *   a11yText="Uploading files"
 *   value={50}
 * />
 * ```
 *
 * @summary Determinate or indeterminate task progress.
 */
export function EvoProgressBar({
  a11yText = "Progress",
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
