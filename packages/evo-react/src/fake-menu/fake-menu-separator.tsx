import classNames from "classnames";
import { useFakeMenuContext } from "./context";
import type { EvoFakeMenuSeparatorProps } from "./types";

export function EvoFakeMenuSeparator({
  className,
  ...rest
}: EvoFakeMenuSeparatorProps) {
  const { baseClass } = useFakeMenuContext();

  return (
    <li>
      <hr
        {...rest}
        className={classNames(`${baseClass}__separator`, className)}
      />
    </li>
  );
}
