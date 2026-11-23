import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { SegmentedButtonValue } from "./types";

type SegmentedButtonsContextValue = {
  selected: SegmentedButtonValue | null;
  select: (value: SegmentedButtonValue) => void;
};

const SegmentedButtonsContext = createContext<
  SegmentedButtonsContextValue | undefined
>(undefined);

export function useSegmentedButtonsContext() {
  const context = use(SegmentedButtonsContext);
  if (!context) {
    throw new Error(
      "EvoSegmentedButton must be used within EvoSegmentedButtons",
    );
  }
  return context;
}

type SegmentedButtonsProviderProps = SegmentedButtonsContextValue & {
  children?: ReactNode;
};

export function SegmentedButtonsProvider({
  selected,
  select,
  children,
}: SegmentedButtonsProviderProps) {
  const value = useMemo(() => ({ selected, select }), [selected, select]);
  return (
    <SegmentedButtonsContext value={value}>{children}</SegmentedButtonsContext>
  );
}
