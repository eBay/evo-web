import type {
  ComponentProps,
  MouseEvent,
  ReactElement,
  ReactNode,
} from "react";

export type FilterChipVariant = "default" | "expressive";

export type FilterChipSelectedEvent = {
  /** The `selected` state after the click is handled. */
  selected: boolean;
};

export type FilterChipOpenEvent = {
  /** The `open` state after the click is handled. */
  open: boolean;
};

export type FilterChipEvent = FilterChipSelectedEvent | FilterChipOpenEvent;

type BaseFilterChipProps = {
  /** Filter label. */
  children?: ReactNode;
  /** Controlled `selected` state. */
  selected?: boolean;
  /** Initial `selected` state when uncontrolled. */
  defaultSelected?: boolean;
  /** Leading icon rendered by the default variant. */
  icon?: ReactElement;
  /** Leading image rendered by the expressive variant. */
  image?: ReactElement<ComponentProps<"img">>;
  /** Localized clipped text announced when an `<a>` or menu filter is `selected`. Required with `href`. */
  a11ySelectedText?: string;
  /** Disables interaction. */
  disabled?: boolean;
};

export type AnchorFilterChipProps = Omit<ComponentProps<"a">, "onClick"> &
  BaseFilterChipProps & {
    /** Link destination. Its presence selects the `<a>` form; it requires `a11ySelectedText` and is unavailable for the menu variant. */
    href: string;
    /** Localized clipped text announced when the `<a>` filter is `selected`. */
    a11ySelectedText: string;
    /** Visual variant. `"expressive"` permits image content; the `<a>` form is selected by `href`. */
    variant?: FilterChipVariant;
    open?: never;
    defaultOpen?: never;
    /** Called after an enabled `<a>` is clicked with its next `selected` state. */
    onClick?: (
      event: MouseEvent<HTMLAnchorElement>,
      data: FilterChipSelectedEvent,
    ) => void;
  };

export type NativeFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
  BaseFilterChipProps & {
    href?: never;
    /** Visual variant. `"expressive"` permits image content; the `<button>` form toggles `selected` state. */
    variant?: FilterChipVariant;
    open?: never;
    defaultOpen?: never;
    /** Called after an enabled `<button>` is clicked with its next `selected` state. */
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterChipSelectedEvent,
    ) => void;
  };

export type MenuFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
  BaseFilterChipProps & {
    href?: never;
    /** Selects the menu form, which toggles `open` state. */
    variant: "menu";
    /** Controlled `open` state for the menu variant. */
    open?: boolean;
    /** Initial `open` state for an uncontrolled menu variant. */
    defaultOpen?: boolean;
    /** Called after a menu chip is clicked with its next `open` state. */
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterChipOpenEvent,
    ) => void;
  };

export type EvoFilterChipProps =
  AnchorFilterChipProps | NativeFilterChipProps | MenuFilterChipProps;
