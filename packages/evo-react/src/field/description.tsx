import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoFieldDescriptionProps } from "./types";
import "@ebay/skin/field.mjs";

/**
 * Adds supporting or status text to a field. Give it an `id` and reference that
 * ID from the control's `aria-describedby`.
 *
 * @summary Field description or status text.
 */
export function EvoFieldDescription({
  type,
  position = "below",
  className,
  children,
  ...rest
}: EvoFieldDescriptionProps) {
  const classes = classNames(
    "field__description",
    type && `field__description--${type}`,
    className,
  );
  if (position === "below") {
    return (
      <div {...(rest as ComponentProps<"div">)} className={classes}>
        {children}
      </div>
    );
  }
  return (
    <span {...(rest as ComponentProps<"span">)} className={classes}>
      {children}
    </span>
  );
}
