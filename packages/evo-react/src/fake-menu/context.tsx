import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type FakeMenuContextValue = {
  baseClass: string;
};

const FakeMenuContext = createContext<FakeMenuContextValue | undefined>(
  undefined,
);

export function useFakeMenuContext() {
  const context = use(FakeMenuContext);
  if (!context) {
    throw new Error(
      "Fake menu components must be used within an EvoFakeMenu component",
    );
  }
  return context;
}

type FakeMenuProviderProps = FakeMenuContextValue & {
  children?: ReactNode;
};

export function FakeMenuProvider({
  baseClass,
  children,
}: FakeMenuProviderProps) {
  const value = useMemo(() => ({ baseClass }), [baseClass]);
  return <FakeMenuContext value={value}>{children}</FakeMenuContext>;
}
