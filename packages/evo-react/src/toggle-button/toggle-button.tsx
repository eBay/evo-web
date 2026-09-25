import { useState } from "react";
import classNames from "classnames";
import type { EvoToggleButtonProps } from "./types";
import "@ebay/skin/toggle-button.mjs";

/**
 * Toggle buttons convey whether a choice is pressed. They can be used alone
 * or within a single or multiple selection group.
 *
 * `EvoToggleButton` keeps the button's accessible name stable as its
 * `aria-pressed` state changes. Use `pressed` with `onPressedChange` for a
 * controlled button, or `defaultPressed` for a button that manages its own
 * state.
 *
 * Compose an optional `EvoToggleButtonIcon` or `EvoToggleButtonImage`, followed
 * by `EvoToggleButtonContent` around `EvoToggleButtonTitle` and an optional
 * `EvoToggleButtonSubtitle`. Choose a `"list"` or `"gallery"` layout when
 * adding an icon or image.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoToggleButton,
 *   EvoToggleButtonContent,
 *   EvoToggleButtonTitle,
 * } from "@evo-web/react/toggle-button";
 *
 * <EvoToggleButton defaultPressed>
 *   <EvoToggleButtonContent>
 *     <EvoToggleButtonTitle>Show sold items</EvoToggleButtonTitle>
 *   </EvoToggleButtonContent>
 * </EvoToggleButton>
 * ```
 *
 * @summary Button with a pressed or unpressed state.
 */
export function EvoToggleButton({
  pressed,
  defaultPressed = false,
  children,
  className,
  layoutType = "minimal",
  onPressedChange,
  onClick,
  type = "button",
  ...rest
}: EvoToggleButtonProps) {
  const [uncontrolledPressed, setUncontrolledPressed] =
    useState(defaultPressed);
  const isControlled = pressed !== undefined;
  const isPressed = isControlled ? pressed : uncontrolledPressed;

  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        "toggle-button",
        `toggle-button--${layoutType}-layout`,
        className,
      )}
      aria-pressed={isPressed}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        const nextPressed = !isPressed;
        if (!isControlled) {
          setUncontrolledPressed(nextPressed);
        }
        onPressedChange?.(nextPressed);
      }}
    >
      {children}
    </button>
  );
}
