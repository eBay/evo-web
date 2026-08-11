import classNames from "classnames";
import type { EvoTabPanelListProps } from "./types";

export function EvoTabPanelList({
  className,
  children,
  ...rest
}: EvoTabPanelListProps) {
  return (
    <div {...rest} className={classNames("tabs__content", className)}>
      {children}
    </div>
  );
}
