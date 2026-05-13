import type { ComponentProps, ComponentType, KeyboardEvent, Ref } from "react";
import type { Priority, Size } from "../button/types";

export type { Priority, Size };

type BaseIconButtonProps = {
  transparent?: boolean;
  priority?: Priority;
  size?: Size;
  partiallyDisabled?: boolean;
  badgeNumber?: number;
  /**
   * The accessible label of the badge.
   *
   * English default to be overridden is `""`
   *
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  badgeA11yText?: string | null;
  /**
   * The `aria-label` of the button.
   *
   * English default to be overridden is `"button"`
   *
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText: string | null;
};

export type AnchorIconButtonProps = Omit<ComponentProps<"a">, "ref"> &
  BaseIconButtonProps & {
    href: string;
    as?: ComponentType<ComponentProps<"a">>;
    ref?: Ref<HTMLAnchorElement>;
    onEscape?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
    disabled?: boolean;
  };

export type NativeIconButtonProps = Omit<ComponentProps<"button">, "ref"> &
  BaseIconButtonProps & {
    href?: never;
    as?: never;
    ref?: Ref<HTMLButtonElement>;
    onEscape?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  };

export type EvoIconButtonProps = AnchorIconButtonProps | NativeIconButtonProps;
