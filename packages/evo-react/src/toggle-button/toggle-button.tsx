import { useState } from "react";
import classNames from "classnames";
import type { EvoToggleButtonProps } from "./types";
import "@ebay/skin/toggle-button.mjs";

/**
 * Toggle buttons convey whether a choice is pressed. They can be used alone
 * or within a single or multiple selection group.
 *
 * `EvoToggleButton` keeps the button's accessible name stable as its
 * `aria-pressed` state changes. Use `pressed` with `onToggle` for a controlled
 * button, or `defaultPressed` for a button that manages its own state. Choose
 * a `"list"` or `"gallery"` layout when adding an icon or image.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoToggleButton } from "@evo-web/react/toggle-button";
 *
 * <EvoToggleButton title="Show sold items" defaultPressed />
 * ```
 *
 * @summary Button with a pressed or unpressed state.
 */
export function EvoToggleButton({
  pressed,
  defaultPressed = false,
  children,
  className,
  title,
  subtitle,
  layoutType = "minimal",
  icon,
  img,
  onToggle,
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
        onToggle?.(event, { pressed: nextPressed });
      }}
    >
      {icon ? (
        <div className="toggle-button__icon">{icon}</div>
      ) : img ? (
        <span className="toggle-button__image-container">
          {img.fillPlacement ? (
            <span
              role={img.alt ? "img" : undefined}
              aria-label={img.alt || undefined}
              aria-hidden={img.alt ? undefined : true}
              className="toggle-button__image"
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundPosition: img.fillPlacement,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          ) : (
            <span className="toggle-button__image">
              <img src={img.src} alt={img.alt} />
            </span>
          )}
        </span>
      ) : null}
      <div className="toggle-button__content">
        {children || (
          <>
            <p className="toggle-button__title">{title}</p>
            {subtitle && <p className="toggle-button__subtitle">{subtitle}</p>}
          </>
        )}
      </div>
    </button>
  );
}
