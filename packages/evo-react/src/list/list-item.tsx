import type { ComponentProps, JSX } from "react";
import classNames from "classnames";
import type { EvoListItemProps } from "./types";

/**
 * An item in `EvoList`. Choose `as="button"` for an action or `as="a"` for
 * navigation. The default `<div>` body is static. Add named leading, body,
 * and trailing children in the desired order.
 *
 * @summary Static, button, or link list item.
 */
export function EvoListItem(
  props: Extract<EvoListItemProps, { as: "button" }>,
): JSX.Element;
export function EvoListItem(
  props: Extract<EvoListItemProps, { as: "a" }>,
): JSX.Element;
export function EvoListItem(
  props: Extract<EvoListItemProps, { as?: "div" }>,
): JSX.Element;
export function EvoListItem({
  as = "div",
  className,
  children,
  ...rest
}: EvoListItemProps) {
  const classes = classNames("list__body", className);

  if (as === "button") {
    return (
      <li>
        <button {...(rest as ComponentProps<"button">)} className={classes}>
          {children}
        </button>
      </li>
    );
  }

  if (as === "a") {
    return (
      <li>
        <a {...(rest as ComponentProps<"a">)} className={classes}>
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <div {...(rest as ComponentProps<"div">)} className={classes}>
        {children}
      </div>
    </li>
  );
}
