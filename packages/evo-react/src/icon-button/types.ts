import type { ComponentProps, ComponentType, KeyboardEvent, Ref } from "react";
import type { Priority, Size } from "../button/types";
import type { EvoBadgeProps } from "../badge/types";

export type { Priority, Size };

type BaseIconButtonProps = {
  transparent?: boolean;
  priority?: Priority;
  size?: Size;
  partiallyDisabled?: boolean;
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

// `type` is always "icon" and `a11yText` is always null for icon-button badges
// (the button's a11yText covers screen reader context, matching the evo-marko pattern).
export type EvoIconButtonBadgeProps = Omit<EvoBadgeProps, "type" | "a11yText">;
