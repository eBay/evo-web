import classNames from "classnames";
import { useMenuContext } from "./context";
import type { EvoMenuSeparatorProps } from "./types";

/**
 * Divides groups of commands or choices inside `EvoMenuItems`.
 *
 * @summary Menu group separator.
 */
export function EvoMenuSeparator({
  className,
  ...rest
}: EvoMenuSeparatorProps) {
  const { baseClass } = useMenuContext();
  return (
    <hr
      {...rest}
      className={classNames(`${baseClass}__separator`, className)}
    />
  );
}
