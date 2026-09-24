import type { ComponentProps } from "react";

export type InlineNoticeStatus = "attention" | "confirmation" | "information";

export type EvoInlineNoticeProps = Omit<
  ComponentProps<"div">,
  "aria-label" | "hidden"
> & {
  /**
   * Names the status icon for assistive technology. English default to be
   * overridden is `"Attention"` for the default status; confirmation and
   * information use their matching English status names.
   */
  a11yText?: string;
  /** Omits the notice from the DOM while hidden. Defaults to `false`. */
  hidden?: boolean;
  /** Called when the notice first appears or changes from hidden to visible. */
  onNoticeShow?: () => void;
  /** Selects the notice status and icon. Defaults to `"attention"`. */
  status?: InlineNoticeStatus;
};

export type EvoInlineNoticeMainProps = ComponentProps<"span">;
