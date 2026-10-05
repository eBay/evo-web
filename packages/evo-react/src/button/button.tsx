import type { KeyboardEvent } from "react";
import React from "react";
import classNames from "classnames";
import type {
  AnchorButtonProps,
  EvoButtonProps,
  NativeButtonProps,
  Priority,
  Size,
  Split,
} from "./types";
import { EvoIconChevronDown16 } from "../icon/icons/chevron-down-16";
import "@ebay/skin/button.mjs";

/**
 * Buttons help direct and capture user action and intent.
 *
 * Without `href`, `EvoButton` renders a `<button>` for an in-page action. With
 * `href`, it renders an `<a>` for navigation; `as` can adapt that anchor to a
 * client-side router. Native button and anchor attributes are also supported.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoButton } from "@evo-web/react/button";
 *
 * <EvoButton priority="primary" onClick={save}>
 *   Save
 * </EvoButton>
 *
 * <EvoButton href="/orders">View orders</EvoButton>
 * ```
 *
 * @summary Action or navigation control.
 */
export function EvoButton(props: AnchorButtonProps): React.JSX.Element;
export function EvoButton(props: NativeButtonProps): React.JSX.Element;
export function EvoButton({
  priority = "secondary",
  variant = "standard",
  size,
  bodyState,
  split,
  transparent = false,
  fluid = false,
  disabled,
  partiallyDisabled,
  children,
  onKeyDown,
  onEscape,
  truncate = false,
  href,
  as: _as,
  className: extraClasses,
  borderless,
  fixedHeight,
  ...rest
}: EvoButtonProps) {
  const priorityStyles: { [key in Priority]: string } = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    tertiary: "btn--tertiary",
    none: "",
  };
  const sizeStyles: { [key in Size]: string } = {
    large: "btn--large",
    small: "btn--small",
  };
  const splitStyles: { [key in Split]: string } = {
    start: "btn--split-start",
    end: "btn--split-end",
  };
  const isDestructive = variant === "destructive";
  const isForm = variant === "form";
  const isLink = variant === "link";
  const className = classNames(
    "btn",
    extraClasses,
    priorityStyles[isForm || isLink || borderless ? "none" : priority],
    size && sizeStyles[size],
    split && splitStyles[split],
    isDestructive && "btn--destructive",
    isForm && "btn--form",
    isLink && "btn--link",
    transparent && "btn--transparent",
    fluid && "btn--fluid",
    truncate && "btn--truncated",
    borderless && "btn--borderless",
    fixedHeight &&
      (size && sizeStyles[size]
        ? `${sizeStyles[size]}-fixed-height`
        : "btn--fixed-height"),
  );

  const bodyContent = (() => {
    switch (bodyState) {
      case "loading":
        return (
          <span className="btn__cell">
            {/* TODO: Replace with <EvoProgressSpinner /> when available */}
            <span>Loading...</span>
          </span>
        );
      case "expand":
        return (
          <span className="btn__cell">
            <span className="btn__text">{children}</span>
            <EvoIconChevronDown16 />
          </span>
        );
      default:
        return children;
    }
  })();

  const ariaLive = bodyState === "loading" ? "polite" : undefined;

  const keyDownHandler = (
    event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    onKeyDown?.(
      event as KeyboardEvent<HTMLButtonElement> &
        KeyboardEvent<HTMLAnchorElement>,
    );
    if (event.key === "Escape" && !disabled && onEscape) {
      onEscape(
        event as KeyboardEvent<HTMLButtonElement> &
          KeyboardEvent<HTMLAnchorElement>,
      );
    }
  };

  if (href) {
    const Component = (_as as AnchorButtonProps["as"]) ?? "a";
    return (
      <Component
        {...(rest as React.ComponentProps<"a">)}
        className={className}
        href={disabled ? undefined : href}
        onKeyDown={keyDownHandler}
        aria-live={ariaLive}
      >
        {bodyContent}
      </Component>
    );
  }

  return (
    <button
      type="button"
      {...(rest as React.ComponentProps<"button">)}
      disabled={disabled}
      aria-disabled={partiallyDisabled ? "true" : undefined}
      aria-live={ariaLive}
      className={className}
      onKeyDown={keyDownHandler}
    >
      {bodyContent}
    </button>
  );
}
