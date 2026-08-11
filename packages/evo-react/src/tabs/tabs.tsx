import classNames from "classnames";
import { useCallback, useId, useState } from "react";
import { TabsProvider } from "./context";
import type { EvoTabsProps, TabId } from "./types";
import "@ebay/skin/tabs.mjs";

export function EvoTabs<Id extends TabId>({
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  activation = "auto",
  size = "medium",
  id,
  className,
  children,
  ...rest
}: EvoTabsProps<Id>) {
  const generatedId = useId();
  const tabsId = id ?? `evo-tabs-${generatedId}`;
  const isControlled = selectedProp !== undefined;
  const [uncontrolledSelected, setUncontrolledSelected] = useState<Id>(
    defaultSelected as Id,
  );
  const selected = (isControlled ? selectedProp : uncontrolledSelected) as Id;

  const select = useCallback(
    (nextSelected: TabId) => {
      if (Object.is(selected, nextSelected)) {
        return;
      }

      if (!isControlled) {
        setUncontrolledSelected(nextSelected as Id);
      }
      onSelectedChange?.(nextSelected as Id);
    },
    [isControlled, onSelectedChange, selected],
  );

  return (
    <TabsProvider
      tabsId={tabsId}
      selected={selected}
      activation={activation}
      select={select}
    >
      <div
        {...rest}
        id={id}
        className={classNames(
          "tabs",
          size === "large" && "tabs--large",
          className,
        )}
      >
        {children}
      </div>
    </TabsProvider>
  );
}
