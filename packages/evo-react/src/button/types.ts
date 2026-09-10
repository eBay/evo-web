import type { ComponentProps, ComponentType, KeyboardEvent } from "react";

export type Priority = "primary" | "secondary" | "tertiary" | "none";
export type Variant = "standard" | "destructive" | "form";
export type Size = "small" | "large";
export type BodyState = "loading" | "expand" | "reset" | "none";
export type Split = "start" | "end";

type BaseButtonProps = {
  /** Stretches the button to the width of its containing block. */
  fluid?: boolean;
  /**
   * Exposes `aria-disabled` while leaving a native button focusable and
   * interactive. The consumer must prevent the associated action.
   */
  partiallyDisabled?: boolean;
  /** Truncates overflowing button text with an ellipsis. */
  truncate?: boolean;
  /** Sets the visual emphasis of the button. Defaults to `"secondary"`. */
  priority?: Priority;
  /**
   * Selects the standard, destructive, or form-specific presentation. Defaults
   * to `"standard"`.
   */
  variant?: Variant;
  /** Sets a supported compact or enlarged button size. */
  size?: Size;
  /** Replaces or decorates the button body for loading and expand states. */
  bodyState?: BodyState;
  /** Styles the button as the start or end segment of a split control. */
  split?: Split;
  /** Removes the opaque background while retaining the button border. */
  transparent?: boolean;
  /** Removes the button border and its associated priority styling. */
  borderless?: boolean;
  /** Applies Skin's fixed-height treatment for the selected size. */
  fixedHeight?: boolean;
};

export type AnchorButtonProps = ComponentProps<"a"> &
  BaseButtonProps & {
    /** Destination URL. Its presence renders the button as an anchor. */
    href: string;
    /**
     * Component used instead of the native anchor, typically to integrate with
     * a client-side router. Only applies when `href` is provided.
     */
    as?: ComponentType<ComponentProps<"a">>;
    /** Called after `onKeyDown` when the enabled anchor receives `Escape`. */
    onEscape?: (event: KeyboardEvent<HTMLAnchorElement>) => void;
    /** Removes `href` from the rendered anchor to prevent navigation. */
    disabled?: boolean;
  };

export type NativeButtonProps = ComponentProps<"button"> &
  BaseButtonProps & {
    /** Anchor-only prop. Provide `href` to use the anchor variant. */
    href?: never;
    /** Anchor-only prop. Provide `href` to use a custom link component. */
    as?: never;
    /** Called after `onKeyDown` when the enabled button receives `Escape`. */
    onEscape?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  };

export type EvoButtonProps = AnchorButtonProps | NativeButtonProps;
