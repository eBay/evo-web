import { createContext, use, useId, useMemo } from "react";
import type { ReactNode } from "react";

type ChipContextValue = {
  textId: string;
};

const ChipContext = createContext<ChipContextValue | null>(null);

export function useChipContext() {
  const context = use(ChipContext);

  if (!context) {
    throw new Error(
      "EvoChip sub-components must be used within an EvoChip component",
    );
  }

  return context;
}

type ChipProviderProps = {
  children: ReactNode;
};

export function ChipProvider({ children }: ChipProviderProps) {
  const textId = useId();
  const value = useMemo(() => ({ textId }), [textId]);

  return <ChipContext value={value}>{children}</ChipContext>;
}
