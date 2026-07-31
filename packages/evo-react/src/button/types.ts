import type { ComponentProps, ComponentType, KeyboardEvent } from "react";

export type Priority = "primary" | "secondary" | "tertiary" | "none";
export type Variant = "standard" | "destructive" | "form";
export type Size = "small" | "large";
export type BodyState = "loading" | "expand" | "reset" | "none";
export type Split = "start" | "end";

type BaseButtonProps = {
  /** Full-width button. */
  fluid?: boolean;
  /** Partially disabled state (`aria-disabled`). */
  partiallyDisabled?: boolean;
  /** Truncates text with an ellipsis. */
  truncate?: boolean;
  /** Button priority level. */
  priority?: Priority;
  /** Button variant style. */
  variant?: Variant;
  /** Button size. */
  size?: Size;
  /** Button body state. */
  bodyState?: BodyState;
  /** Split button position. */
  split?: Split;
  /** Transparent background. */
  transparent?: boolean;
  /** Removes the border. */
  borderless?: boolean;
  /** Applies a fixed height. */
  fixedHeight?: boolean;
};

export type AnchorButtonProps = ComponentProps<"a"> &
  BaseButtonProps & {
    /** Link URL. Its presence renders the button as an anchor. */
    href: string;
    /** Custom component used in place of the native anchor. Only applies when `href` is provided. */
    as?: ComponentType<ComponentProps<"a">>;
    onEscape?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
    /** Disabled state. */
    disabled?: boolean;
  };

export type NativeButtonProps = ComponentProps<"button"> &
  BaseButtonProps & {
    href?: never;
    as?: never;
    onEscape?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  };

export type EvoButtonProps = AnchorButtonProps | NativeButtonProps;
