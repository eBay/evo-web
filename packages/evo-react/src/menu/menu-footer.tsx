import classNames from "classnames";
import { useMenuContext } from "./context";
import type { EvoMenuFooterProps } from "./types";

/**
 * Contains menu-related actions, such as Apply or Cancel. It belongs after
 * `EvoMenuItems` inside `EvoMenu`.
 *
 * @summary Menu action footer.
 */
export function EvoMenuFooter({
  className,
  children,
  ...rest
}: EvoMenuFooterProps) {
  const { baseClass } = useMenuContext();
  return (
    <div {...rest} className={classNames(`${baseClass}__footer`, className)}>
      {children}
    </div>
  );
}
