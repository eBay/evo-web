import { createContext, use, useMemo } from "react";
import type { MouseEvent, ReactNode } from "react";
import type { RovingTabIndex } from "../utils/use-roving-tab-index";
import type { FilterMenuSelection, FilterMenuType } from "./types";

type FilterMenuContextValue = {
  type: FilterMenuType;
  isForm: boolean;
  baseClass: string;
  formName?: string;
  radioName: string;
  itemsId: string;
  selected: readonly string[];
  select: (value: string) => FilterMenuSelection;
  selection: () => FilterMenuSelection;
  onFooterClick?: (
    event: MouseEvent<HTMLButtonElement>,
    selection: FilterMenuSelection,
  ) => void;
  a11yText?: string;
  a11yLabelId?: string;
};

const FilterMenuContext = createContext<FilterMenuContextValue | null>(null);

export function useFilterMenu() {
  const context = use(FilterMenuContext);
  if (!context) {
    throw new Error("EvoFilterMenu subcomponents must be inside EvoFilterMenu");
  }
  return context;
}

export function FilterMenuProvider({
  children,
  type,
  isForm,
  baseClass,
  formName,
  radioName,
  itemsId,
  selected,
  select,
  selection,
  onFooterClick,
  a11yText,
  a11yLabelId,
}: FilterMenuContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      type,
      isForm,
      baseClass,
      formName,
      radioName,
      itemsId,
      selected,
      select,
      selection,
      onFooterClick,
      a11yText,
      a11yLabelId,
    }),
    [
      type,
      isForm,
      baseClass,
      formName,
      radioName,
      itemsId,
      selected,
      select,
      selection,
      onFooterClick,
      a11yText,
      a11yLabelId,
    ],
  );
  return <FilterMenuContext value={value}>{children}</FilterMenuContext>;
}

const FilterMenuItemsContext = createContext<{
  rovingTabIndex: RovingTabIndex<string>;
} | null>(null);

export function useFilterMenuItems() {
  const context = use(FilterMenuItemsContext);
  if (!context) {
    throw new Error("EvoFilterMenuItem must be inside EvoFilterMenuItems");
  }
  return context.rovingTabIndex;
}

export function FilterMenuItemsProvider({
  children,
  rovingTabIndex,
}: {
  children: ReactNode;
  rovingTabIndex: RovingTabIndex<string>;
}) {
  const value = useMemo(() => ({ rovingTabIndex }), [rovingTabIndex]);
  return (
    <FilterMenuItemsContext value={value}>{children}</FilterMenuItemsContext>
  );
}
