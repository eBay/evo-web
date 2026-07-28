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
  children?: ReactNode;
  selected?: boolean;
  defaultSelected?: boolean;
  icon?: ReactElement;
  image?: ReactElement<ComponentProps<"img">>;
  a11ySelectedText?: string;
  disabled?: boolean;
};

export type AnchorFilterChipProps = Omit<ComponentProps<"a">, "onClick"> &
  BaseFilterChipProps & {
    href: string;
    a11ySelectedText: string;
    variant?: FilterChipVariant;
    open?: never;
    defaultOpen?: never;
    onClick?: (
      event: MouseEvent<HTMLAnchorElement>,
      data: FilterChipSelectedEvent,
    ) => void;
  };

export type NativeFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
  BaseFilterChipProps & {
    href?: never;
    variant?: FilterChipVariant;
    open?: never;
    defaultOpen?: never;
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterChipSelectedEvent,
    ) => void;
  };

export type MenuFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
  BaseFilterChipProps & {
    href?: never;
    variant: "menu";
    open?: boolean;
    defaultOpen?: boolean;
    onClick?: (
      event: MouseEvent<HTMLButtonElement>,
      data: FilterChipOpenEvent,
    ) => void;
  };

export type EvoFilterChipProps =
  | AnchorFilterChipProps
  | NativeFilterChipProps
  | MenuFilterChipProps;
