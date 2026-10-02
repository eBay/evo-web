import type { ComponentProps, MouseEventHandler, ReactElement } from "react";

export type EducationNoticeStatus =
  "attention" | "confirmation" | "information";
export type EducationNoticeVariant = "none" | "prominent";

export type EvoEducationNoticeProps = Omit<
  ComponentProps<"section">,
  "aria-label" | "aria-labelledby"
> & {
  /** Selects a status icon; omitting it uses the education lightbulb. */
  status?: EducationNoticeStatus;
  /** Accessible notice name. English default to be overridden is `"Education notice"`. */
  a11yText?: string;
  /** Overrides the icon's accessible label while `a11yText` names the notice. */
  a11yIconText?: string;
  /** Describes the region role in the page language. English default to be overridden is `"Notice"`. */
  a11yRoleDescription?: string;
  /** Hides the icon while retaining the header and title. */
  icon?: "none";
  /** Custom Evo icon in place of the education lightbulb when `status` is omitted. Supply its accessible label and prominent styling directly. */
  educationIcon?: ReactElement;
  /** Makes the notice background more prominent. Defaults to `"none"`. */
  variant?: EducationNoticeVariant;
  /** Makes the default or status icon prominent. Defaults to `"none"`. */
  iconVariant?: EducationNoticeVariant;
  /** Adds a dismiss button with this accessible name. */
  a11yDismissText?: string;
  /** Controls whether the notice is omitted from the DOM. Defaults to `false`. */
  dismissed?: boolean;
  /** Called after the user activates the dismiss button. */
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
  /** Called when an action inside `EvoEducationNoticeCTA` is clicked. */
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
};

export type EvoEducationNoticeHeaderProps = Omit<ComponentProps<"div">, "id">;

export type EvoEducationNoticeTitleProps = ComponentProps<"h2"> & {
  /** Heading level used for the notice title. Defaults to `"h2"`. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type EvoEducationNoticeMainProps = ComponentProps<"div">;

export type EvoEducationNoticeFooterProps = ComponentProps<"div">;

export type EvoEducationNoticeCTAProps = ComponentProps<"p">;
