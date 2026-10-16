import type { ComponentProps, MouseEventHandler, ReactElement } from "react";

export type EducationNoticeVariant = "none" | "prominent";

export type EvoEducationNoticeProps = Omit<
  ComponentProps<"section">,
  "aria-label" | "aria-labelledby" | "aria-roledescription" | "role"
> & {
  /**
   * Accessible name of the notice region.
   * English default to be overridden is `"Education notice"`.
   */
  a11yText: string;
  /** Describes the region role in the page language. English default to be overridden is `"Notice"`. */
  a11yRoleDescription?: string;
  /** Makes the notice background more prominent. Defaults to `"none"`. */
  variant?: EducationNoticeVariant;
  /** Adds a dismiss button with this accessible name to `EvoEducationNoticeHeader`; include that header to make the notice dismissible. */
  a11yDismissText?: string;
  /**
   * Omit to start visible and let the dismiss button remove the notice.
   * Passing `false` makes the notice controlled: it stays rendered until the
   * parent sets `true` from `onDismiss`.
   */
  dismissed?: boolean;
  /**
   * Called when the user activates the dismiss button, before the notice
   * unmounts. The dismiss button had focus and leaves the DOM with the
   * notice, so move focus here to an element that stays on the page.
   */
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
};

export type EvoEducationNoticeIconProps = {
  /** Custom Evo icon. Configure its accessible label and prominent style on the icon itself. */
  icon?: ReactElement;
  /** Accessible label for the default lightbulb. Defaults to the notice's `a11yText`; the English default to be overridden is `"Education notice"`. */
  a11yText?: string;
  /** Makes the default lightbulb prominent. */
  prominent?: boolean;
};

export type EvoEducationNoticeHeaderProps = ComponentProps<"div">;

export type EvoEducationNoticeTitleProps = ComponentProps<"h2"> & {
  /** Heading level used for the notice title. Defaults to `"h2"`. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type EvoEducationNoticeMainProps = ComponentProps<"div">;

export type EvoEducationNoticeFooterProps = ComponentProps<"div">;
