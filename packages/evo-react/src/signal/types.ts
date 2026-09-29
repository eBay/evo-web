import type { ComponentProps, ReactNode } from "react";

export type SignalStatus =
  "neutral" | "trustworthy" | "time-sensitive" | "recent";

export type EvoSignalProps = Omit<ComponentProps<"span">, "children"> & {
  /** Visible text that communicates the signal without relying on color. */
  children: ReactNode;
  /** Sets the signal color and meaning. Defaults to `"neutral"`. */
  status?: SignalStatus;
};
