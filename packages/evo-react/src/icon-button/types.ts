import type { ComponentProps, ComponentType, KeyboardEvent, Ref } from "react";
import type { Priority, Size } from "../button/types";
import type { EvoBadgeProps } from "../badge/types";

export type { Priority, Size };

type BaseIconButtonProps = {
  /** Transparent background. */
  transparent?: boolean;
  /** Button priority level. */
  priority?: Priority;
  /** Alternative size: `large` or `small`. */
  size?: Size;
  /** Visually disabled but still focusable (`aria-disabled`). */
  partiallyDisabled?: boolean;
  /**
   * Accessible label for the button, mapped to `aria-label`. English default to
   * be overridden is `"button"`. Pass `null` explicitly _only_ if alternative
   * accessibility information is present.
   */
  a11yText: string | null;
};

export type AnchorIconButtonProps = Omit<ComponentProps<"a">, "ref"> &
  BaseIconButtonProps & {
    /** Renders as an anchor element when provided. */
    href: string;
    /** Custom component used in place of the native anchor. Only applies when `href` is provided. */
    as?: ComponentType<ComponentProps<"a">>;
    ref?: Ref<HTMLAnchorElement>;
    /** Triggered on Escape key press. */
    onEscape?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
    /** Fully disabled. */
    disabled?: boolean;
  };

export type NativeIconButtonProps = Omit<ComponentProps<"button">, "ref"> &
  BaseIconButtonProps & {
    href?: never;
    as?: never;
    ref?: Ref<HTMLButtonElement>;
    /** Triggered on Escape key press. */
    onEscape?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  };

export type EvoIconButtonProps = AnchorIconButtonProps | NativeIconButtonProps;

// `type` is always "icon" and `a11yText` is always null for icon-button badges
// (the button's a11yText covers screen reader context, matching the evo-marko pattern).
export type EvoIconButtonBadgeProps = Omit<EvoBadgeProps, "type" | "a11yText">;
