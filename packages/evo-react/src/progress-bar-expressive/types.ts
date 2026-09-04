import type { ComponentProps, ReactNode } from "react";

export type ProgressBarExpressiveSize = "medium" | "large";

export type ProgressBarExpressiveMessage = {
  /** Content displayed for this message. */
  content: ReactNode;

  /** Time in milliseconds that the message remains visible. Defaults to 1500. */
  duration?: number;
};

export type EvoProgressBarExpressiveProps = Omit<
  ComponentProps<"div">,
  "aria-label" | "children"
> & {
  /**
   * Localized accessible label for the progress bar.
   * English default to be overridden is `"Loading..."`.
   */
  a11yText: string;

  /** Messages displayed in order while progress continues. */
  messages?: readonly ProgressBarExpressiveMessage[];

  /** Message text size. Defaults to `"large"`. */
  size?: ProgressBarExpressiveSize;
};
