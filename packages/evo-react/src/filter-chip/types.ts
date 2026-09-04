import type {
  ComponentProps,
  MouseEvent,
  ReactElement,
  ReactNode,
} from "react";

export type FilterChipVariant = "default" | "expressive";

export type FilterChipSelectedEvent = {
  selected: boolean;
};

export type FilterChipOpenEvent = {
  open: boolean;
};

export type FilterChipEvent = FilterChipSelectedEvent | FilterChipOpenEvent;

type BaseFilterChipProps = {
  /** Filter label. */
  children?: ReactNode;
  /** Controlled selected state. */
  selected?: boolean;
  /** Initial selected state when uncontrolled. */
  defaultSelected?: boolean;
  /** Leading icon rendered by the default variant. */
  icon?: ReactElement;
  /** Leading image rendered by the expressive variant. */
  image?: ReactElement<ComponentProps<"img">>;
  /** Localized clipped text announced when an anchor or menu filter is selected. Required with `href`. */
  a11ySelectedText?: string;
  /** Disables interaction. */
  disabled?: boolean;
};

export type AnchorFilterChipProps = Omit<ComponentProps<"a">, "onClick"> &
  BaseFilterChipProps & {
    /** Link destination. Requires `a11ySelectedText` and is unavailable for the menu variant. */
    href: string;
    /** Localized clipped text announced when the anchor filter is selected. */
    a11ySelectedText: string;
    /** Visual and interaction variant. Menu variants toggle open state; all others toggle selected state. */
    variant?: FilterChipVariant;
    open?: never;
    defaultOpen?: never;
    /** Triggered with the click event and `{ selected }`, or `{ open }` for menu variants. */
    onClick?: (
      event: MouseEvent<HTMLAnchorElement>,
      data: FilterChipSelectedEvent,
    ) => void;
  };

export type NativeFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
  BaseFilterChipProps & {
    href?: never;
    /** Visual and interaction variant. Menu variants toggle open state; all others toggle selected state. */
    variant?: FilterChipVariant;
    open?: never;
    defaultOpen?: never;
    /** Triggered with the click event and `{ selected }`, or `{ open }` for menu variants. */
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterChipSelectedEvent,
    ) => void;
  };

export type MenuFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
  BaseFilterChipProps & {
    href?: never;
    /** Visual and interaction variant. Menu variants toggle open state; all others toggle selected state. */
    variant: "menu";
    /** Controlled open state for the menu variant. */
    open?: boolean;
    /** Initial open state for an uncontrolled menu variant. */
    defaultOpen?: boolean;
    /** Triggered with the click event and `{ selected }`, or `{ open }` for menu variants. */
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterChipOpenEvent,
    ) => void;
  };

export type EvoFilterChipProps =
  AnchorFilterChipProps | NativeFilterChipProps | MenuFilterChipProps;
