import classNames from "classnames";
import { getTabId, getTabPanelId, useTabsContext } from "./context";
import type { EvoTabPanelProps, TabId } from "./types";

export function EvoTabPanel<Id extends TabId>({
  id,
  className,
  children,
  ...rest
}: EvoTabPanelProps<Id>) {
  const { tabsId, selected } = useTabsContext();

  return (
    <div
      {...rest}
      id={getTabPanelId(tabsId, id)}
      role="tabpanel"
      aria-labelledby={getTabId(tabsId, id)}
      hidden={!Object.is(selected, id)}
      className={classNames("tabs__panel", className)}
    >
      <div className="tabs__cell">{children}</div>
    </div>
  );
}
