import classNames from "classnames";
import type { EvoFakeTabListProps } from "./types";

export function EvoFakeTabList({
  className,
  children,
  ...rest
}: EvoFakeTabListProps) {
  return (
    <ul {...rest} className={classNames("fake-tabs__items", className)}>
      {children}
    </ul>
  );
}
