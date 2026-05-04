import type { ComponentProps, KeyboardEvent } from "react";

export type Priority = "primary" | "secondary" | "tertiary" | "none";
export type Variant = "standard" | "destructive" | "form";
export type Size = "small" | "large";
export type BodyState = "loading" | "expand" | "reset" | "none";
export type Split = "start" | "end";

type BaseButtonProps = {
  fluid?: boolean;
  partiallyDisabled?: boolean;
  truncate?: boolean;
  priority?: Priority;
  variant?: Variant;
  size?: Size;
  bodyState?: BodyState;
  split?: Split;
  transparent?: boolean;
  borderless?: boolean;
  fixedHeight?: boolean;
};

export type AnchorButtonProps = ComponentProps<"a"> &
  BaseButtonProps & {
    href: string;
    onEscape?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
    disabled?: boolean;
  };

export type NativeButtonProps = ComponentProps<"button"> &
  BaseButtonProps & {
    href?: never;
    onEscape?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  };

export type EvoButtonProps = AnchorButtonProps | NativeButtonProps;
