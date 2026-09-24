import type { ComponentProps, MouseEventHandler } from "react";

export type SectionNoticeStatus = "attention" | "confirmation" | "information";

export type EvoSectionNoticeProps = Omit<
  ComponentProps<"section">,
  "aria-label" | "aria-labelledby"
> & {
  /** Selects the notice status and icon. Omit for an iconless notice. */
  status?: SectionNoticeStatus;
  /** Names the notice for assistive technology. English default to be overridden is `"Notice"` without a status; status variants use their matching English names. */
  a11yText?: string;
  /** Overrides the icon label while `a11yText` continues to name the notice. */
  a11yIconText?: string;
  /** Describes the region role in the consumer's language. English default to be overridden is `"Notice"`. */
  a11yRoleDescription?: string;
  /** Removes the status icon and header; the notice uses `a11yText` as its accessible name. */
  icon?: "none";
  /** Adds a dismiss button with this accessible name. Do not combine it with `EvoSectionNoticeFooter`. */
  a11yDismissText?: string;
  /** Controls whether the notice is omitted from the DOM. Defaults to `false`. */
  dismissed?: boolean;
  /** Called after the user activates the dismiss button. */
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
  /** Called when an action inside `EvoSectionNoticeCTA` is clicked. */
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
};

export type EvoSectionNoticeMainProps = ComponentProps<"span">;

export type EvoSectionNoticeTitleProps = ComponentProps<"h2"> & {
  /** Heading level used for the notice title. Defaults to `"h2"`. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type EvoSectionNoticeFooterProps = ComponentProps<"div">;

export type EvoSectionNoticeCTAProps = ComponentProps<"p">;
