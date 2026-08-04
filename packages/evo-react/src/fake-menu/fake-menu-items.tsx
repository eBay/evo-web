import classNames from "classnames";
import type { EvoFakeMenuItemsProps } from "./types";

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
