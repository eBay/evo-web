import classNames from "classnames";
import type { EvoFakeTabPanelProps } from "./types";

export function EvoFakeTabPanel({
  className,
  children,
  ...rest
}: EvoFakeTabPanelProps) {
  return (
    <div {...rest} className={classNames("fake-tabs__content", className)}>
      <div className="fake-tabs__panel">
        <div className="fake-tabs__cell">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
