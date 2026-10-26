import type { ComponentProps } from "react";

export type SkeletonColor = "purple" | "green" | "blue";
export type SupportedElements = "div" | "span";
export type SkeletonSize = "small" | "large";

export type EvoSkeletonProps = Omit<
  ComponentProps<"div">,
  "role" | "aria-label"
> & {
  /** Selects a supported color theme. Omit for the default neutral skeleton. */
  color?: SkeletonColor;
  /**
   * Accessible loading description. English default to be overridden is `"Loading..."`.
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText?: string | null;
};

export type BaseSkeletonComponentProps<T extends SupportedElements = "div"> =
  ComponentProps<T> & {
    /** Renders the placeholder part as a `<div>` or `<span>`. Defaults to `<div>`. */
    as?: T;
  };

export type EvoSkeletonAvatarProps<T extends SupportedElements = "div"> =
  BaseSkeletonComponentProps<T>;

export type EvoSkeletonButtonProps<T extends SupportedElements = "div"> =
  BaseSkeletonComponentProps<T> & {
    /** Sets the button placeholder size. Omit for the default size. */
    size?: SkeletonSize;
  };

export type EvoSkeletonImageProps<T extends SupportedElements = "div"> =
  BaseSkeletonComponentProps<T>;

export type EvoSkeletonTextProps<T extends SupportedElements = "div"> =
  BaseSkeletonComponentProps<T> & {
    /** Sets large text placeholder styling. `"small"` uses the default size. */
    size?: SkeletonSize;
    /** Extends the text placeholder to several lines. */
    multiline?: boolean;
  };

export type EvoSkeletonTextboxProps<T extends SupportedElements = "div"> =
  BaseSkeletonComponentProps<T>;
