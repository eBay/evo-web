import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { Priority, Size } from "../button/types";

type SplitButtonContextValue = {
  priority?: Priority;
  size?: Size;
  disabled: boolean;
  partiallyDisabled: boolean;
  transparent: boolean;
  borderless: boolean;
  a11yMenuText: string;
};

const SplitButtonContext = createContext<SplitButtonContextValue | null>(null);

export function useSplitButton() {
  const context = use(SplitButtonContext);
  if (!context)
    throw new Error(
      "EvoSplitButton subcomponents must be inside EvoSplitButton",
    );
  return context;
}

export function SplitButtonProvider({
  a11yMenuText,
  borderless,
  children,
  disabled,
  partiallyDisabled,
  priority,
  size,
  transparent,
}: SplitButtonContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      a11yMenuText,
      borderless,
      disabled,
      partiallyDisabled,
      priority,
      size,
      transparent,
    }),
    [
      a11yMenuText,
      borderless,
      disabled,
      partiallyDisabled,
      priority,
      size,
      transparent,
    ],
  );
  return <SplitButtonContext value={value}>{children}</SplitButtonContext>;
}
