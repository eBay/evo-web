import classNames from "classnames";
import type { ComponentProps } from "react";

/**
 * Adds a short leading label before the trigger's action text.
 *
 * @summary Prefix label for a menu button trigger.
 */
export function EvoMenuButtonLabel({
  className,
  children,
  ...rest
}: ComponentProps<"span">) {
  return (
    <span
      {...rest}
      className={classNames("menu-button-prefix-label", className)}
    >
      {children}
    </span>
  );
}
