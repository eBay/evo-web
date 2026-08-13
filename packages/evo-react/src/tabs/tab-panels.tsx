import classNames from "classnames";
import type { EvoTabPanelsProps } from "./types";

export function EvoTabPanels({
  className,
  children,
  ...rest
}: EvoTabPanelsProps) {
  return (
    <div {...rest} className={classNames("tabs__content", className)}>
      {children}
    </div>
  );
}
