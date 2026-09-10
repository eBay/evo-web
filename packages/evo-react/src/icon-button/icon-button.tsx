import type { ComponentProps, KeyboardEvent } from "react";
import React from "react";
import classNames from "classnames";
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

/**
 * Icon buttons trigger an action using only an icon, with no visible text
 * label.
 *
 * `a11yText` supplies the required accessible label. Without `href`, the
 * component renders a `<button>`; with `href`, it renders an `<a>`. Use `as` for
 * a router link, and prefer a text button when the icon is ambiguous.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoIconButton } from "@evo-web/react/icon-button";
 * import { EvoIconSearch24 } from "@evo-web/react/icons/search-24";
 *
 * <EvoIconButton a11yText="Search" onClick={openSearch}>
 *   <EvoIconSearch24 />
 * </EvoIconButton>
 * ```
 *
 * @summary Icon-only action or link.
 */
export function EvoIconButton(props: AnchorIconButtonProps): React.JSX.Element;
export function EvoIconButton(props: NativeIconButtonProps): React.JSX.Element;
export function EvoIconButton({
  href,
  as: _as,
  transparent,
  priority = "none",
  size,
  partiallyDisabled,
  a11yText = "button",
  children,
  className: extraClasses,
  onKeyDown,
  onEscape,
  disabled,
  ...rest
}: EvoIconButtonProps) {
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
        {children}
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
      {children}
    </button>
  );
}
