import classNames from "classnames";
import type { EvoFakeTabPanelProps } from "./types";

/**
 * Contains page content associated with fake tab navigation. Route changes,
 * rather than this component, determine which page is shown.
 *
 * @summary Fake tab content region.
 */
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
