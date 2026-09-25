import type { ComponentProps, MouseEventHandler } from "react";

export type PageNoticeStatus = "attention" | "confirmation" | "information";

export type EvoPageNoticeProps = Omit<
  ComponentProps<"section">,
  "aria-label" | "aria-labelledby"
> & {
  /** Selects the notice status and icon. Defaults to `"attention"`. */
  status?: PageNoticeStatus;
  /** Names the notice for assistive technology. English default to be overridden is `"Attention"` for the default status; other statuses use their matching English names. */
  a11yText?: string;
  /** Overrides the icon label while `a11yText` continues to name the notice. */
  a11yIconText?: string;
  /** Describes the region role in the consumer's language. */
  a11yRoleDescription?: string;
  /** Removes the status icon and header; the notice uses `a11yText` as its accessible name. */
  icon?: "none";
  /** Adds a dismiss button with this accessible name. Do not combine it with `EvoPageNoticeFooter`. */
  a11yDismissText?: string;
  /** Controls whether the notice is omitted from the DOM. Defaults to `false`. */
  dismissed?: boolean;
  /** Called after the user activates the dismiss button. */
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
  /** Called when an action inside `EvoPageNoticeCTA` is clicked. */
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
};

export type EvoPageNoticeMainProps = ComponentProps<"div">;

export type EvoPageNoticeTitleProps = ComponentProps<"h2"> & {
  /** Heading level used for the notice title. Defaults to `"h2"`. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type EvoPageNoticeFooterProps = ComponentProps<"div">;

export type EvoPageNoticeCTAProps = ComponentProps<"p">;
