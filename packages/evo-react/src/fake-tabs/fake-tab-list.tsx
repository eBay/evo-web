import classNames from "classnames";
import type { EvoFakeTabListProps } from "./types";

/**
 * Contains the links in a fake tab strip.
 *
 * @summary Fake tab link list.
 */
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
