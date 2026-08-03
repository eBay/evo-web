import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { RovingTabIndex } from "../utils/use-roving-tab-index";
import type { EvoMenuVariant, MenuValue } from "./types";

type MenuContextValue = {
  baseClass: string;
  classPrefix?: string;
  variant: EvoMenuVariant;
  reverse: boolean;
  fixed: boolean;
  fixWidth: boolean;
  typeaheadTimeoutLength?: number;
};

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function useMenuContext() {
  const context = use(MenuContext);
  if (!context) {
    throw new Error("Menu components must be used within an EvoMenu component");
  }
  return context;
}

type MenuProviderProps = MenuContextValue & {
  children?: ReactNode;
};

export function MenuProvider({
  baseClass,
  classPrefix,
  variant,
  reverse,
  fixed,
  fixWidth,
  typeaheadTimeoutLength,
  children,
}: MenuProviderProps) {
  const value = useMemo(
    () => ({
      baseClass,
      classPrefix,
      variant,
      reverse,
      fixed,
      fixWidth,
      typeaheadTimeoutLength,
    }),
    [
      baseClass,
      classPrefix,
      variant,
      reverse,
      fixed,
      fixWidth,
      typeaheadTimeoutLength,
    ],
  );

  return <MenuContext value={value}>{children}</MenuContext>;
}

type MenuItemsContextValue = {
  rovingTabIndex: RovingTabIndex<string>;
};

const MenuItemsContext = createContext<MenuItemsContextValue | undefined>(
  undefined,
);

export function useMenuItemsContext() {
  const context = use(MenuItemsContext);
  if (!context) {
    throw new Error("Menu items must be used within an EvoMenuItems component");
  }
  return context;
}

type MenuItemsProviderProps = MenuItemsContextValue & {
  children?: ReactNode;
};

export function MenuItemsProvider({
  rovingTabIndex,
  children,
}: MenuItemsProviderProps) {
  const value = useMemo(() => ({ rovingTabIndex }), [rovingTabIndex]);
  return <MenuItemsContext value={value}>{children}</MenuItemsContext>;
}

type RadioGroupContextValue = {
  selected: MenuValue | null;
  select: (value: MenuValue) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined,
);

export function useMenuRadioGroupContext() {
  const context = use(RadioGroupContext);
  if (!context) {
    throw new Error(
      "EvoMenuRadioItem must be used within an EvoMenuRadioGroup component",
    );
  }
  return context;
}

type RadioGroupProviderProps = RadioGroupContextValue & {
  children?: ReactNode;
};

export function RadioGroupProvider({
  selected,
  select,
  children,
}: RadioGroupProviderProps) {
  const value = useMemo(() => ({ selected, select }), [selected, select]);
  return <RadioGroupContext value={value}>{children}</RadioGroupContext>;
}

type CheckboxGroupContextValue = {
  selected: readonly MenuValue[];
  toggle: (value: MenuValue) => void;
};

const CheckboxGroupContext = createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

export function useMenuCheckboxGroupContext() {
  const context = use(CheckboxGroupContext);
  if (!context) {
    throw new Error(
      "EvoMenuCheckboxItem must be used within an EvoMenuCheckboxGroup component",
    );
  }
  return context;
}

type CheckboxGroupProviderProps = CheckboxGroupContextValue & {
  children?: ReactNode;
};

export function CheckboxGroupProvider({
  selected,
  toggle,
  children,
}: CheckboxGroupProviderProps) {
  const value = useMemo(() => ({ selected, toggle }), [selected, toggle]);
  return <CheckboxGroupContext value={value}>{children}</CheckboxGroupContext>;
}
