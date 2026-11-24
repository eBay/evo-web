import type { ComponentProps, ReactNode } from "react";

export type SignalTone =
  "neutral" | "information" | "positive" | "warning" | "attention";

export type SignalEmphasis = "default" | "strong" | "subtle";

export type EvoSignalProps = Omit<ComponentProps<"span">, "children"> & {
  /** Visible text that communicates the signal without relying on color. */
  children: ReactNode;
  /** Sets the signal color and meaning. Defaults to `"neutral"`. */
  tone?: SignalTone;
  /** Visual emphasis. Defaults to `"default"`. */
  emphasis?: SignalEmphasis;
  /**
   * Optional leading icon, rendered before the label. Pass a 12px icon such as
   * `<EvoIconPromotion12 />`. Icons are `aria-hidden` unless `a11yText` is
   * given, so don't pass it.
   */
  icon?: ReactNode;
};
