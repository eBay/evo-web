import classNames from "classnames";
import { useMenuContext } from "./context";
import type { EvoMenuFooterProps } from "./types";

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
