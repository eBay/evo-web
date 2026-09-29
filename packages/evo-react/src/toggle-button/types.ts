import type { ComponentProps } from "react";

export type ToggleButtonLayout = "minimal" | "list" | "gallery";

export type EvoToggleButtonProps = Omit<
  ComponentProps<"button">,
  "aria-pressed" | "onToggle"
> & {
  /**
   * Controlled pressed state. When provided, update it in `onPressedChange`.
   * Defaults to an uncontrolled state initialized by `defaultPressed`.
   */
  pressed?: boolean;
  /** Initial pressed state for an uncontrolled button. Defaults to `false`. */
  defaultPressed?: boolean;
  /**
   * Visual arrangement. Omit it for Skin's default minimal layout; use
   * `"list"` or `"gallery"` with media. When set, adds the matching
   * `toggle-button--<layoutType>-layout` class.
   */
  layoutType?: ToggleButtonLayout;
  /** Fired with the requested pressed state after a click that is not prevented. */
  onPressedChange?: (pressed: boolean) => void;
};

export type EvoToggleButtonIconProps = ComponentProps<"span">;

type ToggleButtonImageSource = {
  /** URL of the image displayed in the button. */
  src: string;
  /** Image alternative text. Use an empty string when adjacent text already describes it. */
  alt: string;
};

export type EvoToggleButtonFillImageProps = Omit<
  ComponentProps<"span">,
  "children" | "role" | "aria-label" | "aria-hidden"
> &
  ToggleButtonImageSource & {
    /**
     * CSS `background-position` of an image that covers its frame. Its presence
     * renders the image as a background on a `<span>`.
     */
    fillPlacement: string;
  };

export type EvoToggleButtonInlineImageProps = Omit<
  ComponentProps<"img">,
  "src" | "alt" | "children"
> &
  ToggleButtonImageSource & {
    /** Fill-only prop. Provide `fillPlacement` to use the background image variant. */
    fillPlacement?: never;
  };

export type EvoToggleButtonImageProps =
  EvoToggleButtonFillImageProps | EvoToggleButtonInlineImageProps;

export type EvoToggleButtonContentProps = ComponentProps<"span">;

export type EvoToggleButtonTitleProps = ComponentProps<"span">;

export type EvoToggleButtonSubtitleProps = ComponentProps<"span">;
