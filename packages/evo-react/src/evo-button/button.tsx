import type { KeyboardEvent } from "react";
import React from "react";
import classNames from "classnames";
import type {
  AnchorButtonProps,
  NativeButtonProps,
  Priority,
  Size,
  Split,
} from "./types";
import "@ebay/skin/button";

export function EvoButton(props: AnchorButtonProps): React.JSX.Element;
export function EvoButton(props: NativeButtonProps): React.JSX.Element;
export function EvoButton(
  props: AnchorButtonProps | NativeButtonProps,
): React.JSX.Element {
  const {
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
    className: extraClasses,
    borderless,
    fixedHeight,
    ...rest
  } = props;
  const classPrefix = href ? "fake-btn" : "btn";
  const priorityStyles: { [key in Priority]: string } = {
    primary: `${classPrefix}--primary`,
    secondary: `${classPrefix}--secondary`,
    tertiary: `${classPrefix}--tertiary`,
    none: "",
  };
  const sizeStyles: { [key in Size]: string } = {
    large: `${classPrefix}--large`,
    small: `${classPrefix}--small`,
  };
  const splitStyles: { [key in Split]: string } = {
    start: `${classPrefix}--split-start`,
    end: `${classPrefix}--split-end`,
  };
  const isDestructive = variant === "destructive";
  const isForm = variant === "form";
  const className = classNames(
    classPrefix,
    extraClasses,
    priorityStyles[isForm || borderless ? "none" : priority],
    size && sizeStyles[size],
    split && splitStyles[split],
    isDestructive && `${classPrefix}--destructive`,
    isForm && `${classPrefix}--form`,
    transparent && `${classPrefix}--transparent`,
    fluid && `${classPrefix}--fluid`,
    truncate && `${classPrefix}--truncated`,
    borderless && `${classPrefix}--borderless`,
    fixedHeight &&
      (size && sizeStyles[size]
        ? `${sizeStyles[size]}-fixed-height`
        : `${classPrefix}--fixed-height`),
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
            {/* TODO: Replace with <EvoIconChevronDown16 /> when available */}
            <span>▼</span>
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
    return (
      <a
        {...(rest as React.ComponentProps<"a">)}
        className={className}
        href={disabled ? undefined : href}
        onKeyDown={keyDownHandler}
        aria-live={ariaLive}
      >
        {bodyContent}
      </a>
    );
  }

  return (
    <button
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
