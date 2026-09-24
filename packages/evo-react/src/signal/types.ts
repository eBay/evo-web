import type { ComponentProps } from "react";

export type SignalStatus =
  "neutral" | "trustworthy" | "time-sensitive" | "recent";

export type EvoSignalProps = ComponentProps<"span"> & {
  /** Sets the signal color and meaning. Defaults to `"neutral"`. */
  status?: SignalStatus;
};
