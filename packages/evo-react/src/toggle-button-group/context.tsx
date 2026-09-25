import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { ToggleButtonLayout } from "../toggle-button/types";
import type { ToggleButtonGroupValue } from "./types";

type ToggleButtonGroupContextValue = {
  selected: ToggleButtonGroupValue | readonly ToggleButtonGroupValue[] | null;
  layoutType: ToggleButtonLayout;
  toggle: (value: ToggleButtonGroupValue) => void;
};

const ToggleButtonGroupContext =
  createContext<ToggleButtonGroupContextValue | null>(null);

type ToggleButtonGroupProviderProps = ToggleButtonGroupContextValue & {
  children: ReactNode;
};

export function ToggleButtonGroupProvider({
  selected,
  layoutType,
  toggle,
  children,
}: ToggleButtonGroupProviderProps) {
  const value = useMemo(
    () => ({ selected, layoutType, toggle }),
    [selected, layoutType, toggle],
  );
  return (
    <ToggleButtonGroupContext value={value}>
      {children}
    </ToggleButtonGroupContext>
  );
}

export function useToggleButtonGroupContext() {
  const context = use(ToggleButtonGroupContext);
  if (!context) {
    throw new Error(
      "EvoToggleButtonGroupItem must be inside EvoToggleButtonGroup",
    );
  }
  return context;
}
