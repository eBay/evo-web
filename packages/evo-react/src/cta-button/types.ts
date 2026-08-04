import type { ComponentProps, ComponentType } from "react";

/** Supported CTA button size. */
export type CtaButtonSize = "large";

export type EvoCtaButtonProps = ComponentProps<"a"> & {
  /**
   * Custom component used in place of the native anchor, such as a framework Link.
   * It must render an `<a>` element because the CTA button's Skin CSS rules target anchors.
   */
  as?: ComponentType<ComponentProps<"a">>;
  /** Expands the CTA button to the full width of its parent. */
  fluid?: boolean;
  /** Truncates overflowing text to a single line with an ellipsis. */
  truncated?: boolean;
  /** CTA button size. Omit for the default size. */
  size?: CtaButtonSize;
};
