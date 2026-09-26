import type { ComponentProps, MouseEvent, ReactNode } from "react";

export type FilterSelectionEvent = {
  /** Selected state after the click is handled. */
  selected: boolean;
};

type BaseFilterProps = {
  /** Visible label for the filter. */
  children?: ReactNode;
  /** Controlled selection state. */
  selected?: boolean;
  /** Initial selection state when `selected` is omitted. Defaults to `false`. */
  defaultSelected?: boolean;
  /** Localized clipped text announced after a selected link. English default to be overridden is `"Selected"`. */
  a11ySelectedText?: string;
  /** Omits `aria-pressed` from a selected button when set to `false`. Defaults to `true`. */
  useAriaPressed?: boolean;
  /** Disables selection; a disabled link cannot navigate. */
  disabled?: boolean;
};

export type AnchorFilterProps = Omit<
  ComponentProps<"a">,
  "onClick" | "aria-pressed"
> &
  BaseFilterProps & {
    /** Destination of the link form. */
    href: string;
    /** Called with the next selection state when an enabled link is clicked. */
    onClick?: (
      event: MouseEvent<HTMLAnchorElement>,
      data: FilterSelectionEvent,
    ) => void;
  };

export type NativeFilterProps = Omit<
  ComponentProps<"button">,
  "onClick" | "aria-pressed"
> &
  BaseFilterProps & {
    href?: never;
    /** Called with the next selection state when an enabled button is clicked. */
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterSelectionEvent,
    ) => void;
  };

export type EvoFilterProps = AnchorFilterProps | NativeFilterProps;
