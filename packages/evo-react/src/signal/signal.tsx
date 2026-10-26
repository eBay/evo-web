import classNames from "classnames";
import type { EvoSignalProps } from "./types";
import "@ebay/skin/signal.mjs";

/**
 * Signals are non-interactive, informational elements that show data-backed
 * recommendations to help users make informed decisions.
 *
 * `EvoSignal` renders a `<span>` with a status color. Keep the visible text
 * descriptive so it communicates the meaning without color alone. Native
 * `<span>` attributes and a React 19 `ref` pass through.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoSignal } from "@evo-web/react/signal";
 *
 * <EvoSignal status="recent">Listed today</EvoSignal>
 * ```
 *
 * @summary Text signal for a data-backed recommendation.
 */
export function EvoSignal({
  status = "neutral",
  className,
  ...rest
}: EvoSignalProps) {
  return (
    <span
      {...rest}
      className={classNames("signal", `signal--${status}`, className)}
    />
  );
}
