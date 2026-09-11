import classNames from "classnames";
import type { EvoFakeMenuItemsProps } from "./types";

/**
 * Contains the list of fake menu entries, including items and separators.
 *
 * @summary Fake menu item list.
 */
export function EvoFakeMenuItems({
  className,
  children,
  ...rest
}: EvoFakeMenuItemsProps) {
  return (
    <ul
      {...rest}
      className={classNames("fake-menu__items", className)}
      tabIndex={-1}
    >
      {children}
    </ul>
  );
}
