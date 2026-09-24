import type { ComponentProps, MouseEvent, ReactElement } from "react";

export type ToggleButtonLayout = "minimal" | "list" | "gallery";

export type ToggleButtonImage = {
  /** URL of the image displayed in the button. */
  src: string;
  /** Image alternative text. Use an empty string when adjacent text already describes it. */
  alt: string;
  /** Background image position when the image fills its frame. */
  fillPlacement?: string;
};

export type EvoToggleButtonProps = Omit<
  ComponentProps<"button">,
  "title" | "aria-pressed"
> & {
  /**
   * Controlled pressed state. When provided, update it in `onToggle`.
   * Defaults to an uncontrolled state initialized by `defaultPressed`.
   */
  pressed?: boolean;
  /** Initial pressed state for an uncontrolled button. Defaults to `false`. */
  defaultPressed?: boolean;
  /**
   * Visible title. `children` take precedence when provided. This replaces
   * the native button `title` attribute, as in the legacy component.
   */
  title?: string;
  /** Supporting text shown below the visible title. */
  subtitle?: string | string[];
  /** Visual arrangement. Defaults to `"minimal"`; use `"list"` or `"gallery"` with media. */
  layoutType?: ToggleButtonLayout;
  /** Icon element displayed before the title. Pass an `EvoIcon*` component. */
  icon?: ReactElement;
  /** Image displayed before the title when `icon` is absent. */
  img?: ToggleButtonImage;
  /** Fired after a click requests a state change, with `(event, { pressed })`. */
  onToggle?: (
    event: MouseEvent<HTMLButtonElement>,
    data: { pressed: boolean },
  ) => void;
};
