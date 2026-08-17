import classNames from "classnames";
import { useMenuContext } from "./context";
import type { EvoMenuSeparatorProps } from "./types";

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
