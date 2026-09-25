import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type ChipsComboboxContextValue = {
  selected: readonly string[];
};

const ChipsComboboxContext = createContext<ChipsComboboxContextValue | null>(
  null,
);

export function useChipsComboboxContext() {
  const value = use(ChipsComboboxContext);
  if (!value) {
    throw new Error("EvoChipsComboboxOption must be inside EvoChipsCombobox");
  }
  return value;
}

type ChipsComboboxProviderProps = ChipsComboboxContextValue & {
  children?: ReactNode;
};

export function ChipsComboboxProvider({
  selected,
  children,
}: ChipsComboboxProviderProps) {
  const value = useMemo(() => ({ selected }), [selected]);
  return <ChipsComboboxContext value={value}>{children}</ChipsComboboxContext>;
}
