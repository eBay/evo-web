import type { ComponentProps, ElementType, ReactNode } from "react";

export type InfotipPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

export type EvoInfotipHeadingProps = ComponentProps<"span"> & {
  /** Element used for the heading. Defaults to `span`. */
  as?: ElementType;
};

export type EvoInfotipProps = ComponentProps<"span"> & {
  /** Controlled open state. When provided, the consumer manages it via `onOpenChange`. */
  open?: boolean;
  /** Initial open state for uncontrolled usage. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Callback fired when the infotip requests to change its open state. */
  onOpenChange?: (open: boolean) => void;
  /** Position of the overlay relative to the trigger button. Defaults to `bottom`. */
  placement?: InfotipPlacement;
  /** Distance between the trigger and overlay in pixels. Defaults to `8`. */
  offset?: number;
  /**
   * Moves the infotip to the opposite side of the button when there is not
   * enough space. Disable this only when the infotip must stay on the selected
   * side. Defaults to `true`.
   */
  flip?: boolean;
  /**
   * Moves the infotip slightly to keep it on screen. Disable this only when the
   * infotip must stay exactly aligned with the button. Defaults to `true`.
   */
  shift?: boolean;
  /** Disables the infotip trigger button. */
  disabled?: boolean;
  /** Custom trigger icon. Defaults to the information icon. */
  icon?: ReactNode;
  /**
   * Accessible label for the trigger button, mapped to `aria-label`.
   * English default to be overridden is `"Help"`.
   */
  a11yIconText: string;
  /**
   * Accessible label for the close button, mapped to `aria-label`.
   * English default to be overridden is `"Dismiss infotip"`.
   */
  a11yCloseText: string;
};
