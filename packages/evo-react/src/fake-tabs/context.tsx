import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { FakeTabId } from "./types";

type FakeTabsContextValue = {
  selected: FakeTabId | null;
  ariaCurrent: "page" | "true";
};

const FakeTabsContext = createContext<FakeTabsContextValue | undefined>(
  undefined,
);

export function useFakeTabsContext() {
  const ctx = use(FakeTabsContext);
  if (!ctx) {
    throw new Error("EvoFakeTab must be used within an EvoFakeTabs component");
  }
  return ctx;
}

type FakeTabsProviderProps = FakeTabsContextValue & {
  children?: ReactNode;
};

export function FakeTabsProvider({
  selected,
  ariaCurrent,
  children,
}: FakeTabsProviderProps) {
  const value = useMemo(
    () => ({ selected, ariaCurrent }),
    [selected, ariaCurrent],
  );
  return <FakeTabsContext value={value}>{children}</FakeTabsContext>;
}
