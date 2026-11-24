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
 * ### Tone, emphasis and icon
 *
 * `status` is deprecated: use `tone` (trustworthy → information, recent →
 * positive, time-sensitive → attention). The icon renders before the label.
 *
 * ```tsx
 * import { EvoIconPromotion12 } from "@evo-web/react/icons/promotion-12";
 *
 * <EvoSignal tone="positive" emphasis="strong" icon={<EvoIconPromotion12 />}>
 *   Listed today
 * </EvoSignal>
 * ```
 *
 * @summary Text signal for a data-backed recommendation.
 */
export function EvoSignal({
  status = "neutral",
  tone,
  emphasis = "default",
  icon,
  className,
  children,
  ...rest
}: EvoSignalProps) {
  return (
    <span
      {...rest}
      className={classNames(
        "signal",
        `signal--${tone ?? status}`,
        emphasis !== "default" && `signal--${emphasis}`,
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
