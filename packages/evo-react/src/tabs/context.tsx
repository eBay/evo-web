import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { RovingTabIndex } from "../utils/use-roving-tab-index";
import type { Activation, TabId } from "./types";

type TabsContextValue = {
  tabsId: string;
  selected: TabId;
  activation: Activation;
  select: (id: TabId) => void;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export function useTabsContext() {
  const context = use(TabsContext);

  if (!context) {
    throw new Error("Tab components must be used within an EvoTabs component");
  }

  return context;
}

type TabsProviderProps = TabsContextValue & {
  children?: ReactNode;
};

export function TabsProvider({
  tabsId,
  selected,
  activation,
  select,
  children,
}: TabsProviderProps) {
  const context = useMemo(
    () => ({ tabsId, selected, activation, select }),
    [tabsId, selected, activation, select],
  );

  return <TabsContext value={context}>{children}</TabsContext>;
}

type TabListContextValue = {
  rovingTabIndex: RovingTabIndex<TabId>;
};

const TabListContext = createContext<TabListContextValue | undefined>(
  undefined,
);

export function useTabListContext() {
  const context = use(TabListContext);

  if (!context) {
    throw new Error("EvoTab must be used within an EvoTabList component");
  }

  return context;
}

type TabListProviderProps = TabListContextValue & {
  children?: ReactNode;
};

export function TabListProvider({
  rovingTabIndex,
  children,
}: TabListProviderProps) {
  const context = useMemo(() => ({ rovingTabIndex }), [rovingTabIndex]);
  return <TabListContext value={context}>{children}</TabListContext>;
}

export function getTabId(tabsId: string, id: TabId) {
  return `${tabsId}-tab-${id}`;
}

export function getTabPanelId(tabsId: string, id: TabId) {
  return `${tabsId}-tabpanel-${id}`;
}
