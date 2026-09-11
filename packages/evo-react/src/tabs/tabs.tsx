import classNames from "classnames";
import { useCallback, useId, useState } from "react";
import { TabsProvider } from "./context";
import type { EvoTabsProps, TabId } from "./types";
import "@ebay/skin/tabs.mjs";

/**
 * Tabs organize content into sections that users can switch between without
 * leaving the current page.
 *
 * `EvoTabList` contains the triggers, and each `EvoTab` `id` must match its
 * `EvoTabPanel` `id`. `EvoTabPanels` groups the panels; `selected` and
 * `defaultSelected` control state, and switching tabs does not navigate.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoTab,
 *   EvoTabList,
 *   EvoTabPanel,
 *   EvoTabPanels,
 *   EvoTabs,
 * } from "@evo-web/react/tabs";
 *
 * <EvoTabs defaultSelected="overview">
 *   <EvoTabList>
 *     <EvoTab id="overview">Overview</EvoTab>
 *     <EvoTab id="shipping">Shipping</EvoTab>
 *   </EvoTabList>
 *   <EvoTabPanels>
 *     <EvoTabPanel id="overview">Overview content.</EvoTabPanel>
 *     <EvoTabPanel id="shipping">Shipping content.</EvoTabPanel>
 *   </EvoTabPanels>
 * </EvoTabs>
 * ```
 *
 * @summary Interactive tab set.
 */
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
