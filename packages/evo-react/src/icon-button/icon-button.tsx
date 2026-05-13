import type { ComponentProps, KeyboardEvent } from "react";
import React from "react";
import classNames from "classnames";
import { EvoBadge } from "../badge/badge";
import type {
  AnchorIconButtonProps,
  EvoIconButtonProps,
  NativeIconButtonProps,
  Priority,
  Size,
} from "./types";

import "@ebay/skin/icon-button.mjs";
import "@ebay/skin/button.mjs";
import "@ebay/skin/link.mjs";

export function EvoIconButton(props: AnchorIconButtonProps): React.JSX.Element;
export function EvoIconButton(
  props: NativeIconButtonProps,
): React.JSX.Element;
export function EvoIconButton(
  props: AnchorIconButtonProps | NativeIconButtonProps,
): React.JSX.Element {
  const {
    href,
    as: _as,
    transparent,
    priority = "none",
    size,
    partiallyDisabled,
    badgeNumber,
    badgeA11yText,
    a11yText = "button",
    children,
    className: extraClasses,
    onKeyDown,
    onEscape,
    disabled,
    ...rest
  } = props as EvoIconButtonProps;

  const classPrefix = href ? "icon-link" : "icon-btn";

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

  const className = classNames(
    extraClasses,
    classPrefix,
    priorityStyles[priority],
    size && sizeStyles[size],
    badgeNumber !== undefined && `${classPrefix}--badged`,
    transparent && `${classPrefix}--transparent`,
  );

  const keyDownHandler = (
    event: KeyboardEvent<HTMLButtonElement & HTMLAnchorElement>,
  ) => {
    onKeyDown?.(
      event as KeyboardEvent<HTMLButtonElement> &
        KeyboardEvent<HTMLAnchorElement>,
    );
    if (event.key === "Escape" && !disabled) {
      onEscape?.(
        event as KeyboardEvent<HTMLButtonElement> &
          KeyboardEvent<HTMLAnchorElement>,
      );
    }
  };

  const content = (
    <>
      {children}
      {badgeNumber !== undefined && (
        <EvoBadge type="icon" number={badgeNumber} a11yText={badgeA11yText ?? null} />
      )}
    </>
  );

  if (href) {
    const Component = (_as as AnchorIconButtonProps["as"]) ?? "a";
    return (
      <Component
        {...(rest as ComponentProps<"a">)}
        aria-label={a11yText ?? undefined}
        className={className}
        href={disabled ? undefined : href}
        onKeyDown={keyDownHandler}
      >
        {content}
      </Component>
    );
  }

  return (
    <button
      {...(rest as React.ComponentProps<"button">)}
      type="button"
      aria-label={a11yText ?? undefined}
      aria-disabled={partiallyDisabled ? "true" : undefined}
      disabled={disabled}
      className={className}
      onKeyDown={keyDownHandler}
    >
      {content}
    </button>
  );
}
