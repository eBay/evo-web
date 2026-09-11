import { createContext, use, useMemo } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";

export type TooltipContextValue = {
  open: boolean;
  tooltipId: string;
  setReference: (node: Element | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  arrowRef: RefObject<HTMLElement | null>;
  floatingStyles: CSSProperties;
  arrowStyles: CSSProperties;
};

const TooltipContext = createContext<TooltipContextValue | null>(null);

export function useTooltipContext() {
  const value = use(TooltipContext);

  if (!value) {
    throw new Error(
      "EvoTooltip sub-components must be used within an EvoTooltip component",
    );
  }

  return value;
}

type TooltipProviderProps = TooltipContextValue & {
  children: ReactNode;
};

export function TooltipProvider({
  open,
  tooltipId,
  setReference,
  setFloating,
  arrowRef,
  floatingStyles,
  arrowStyles,
  children,
}: TooltipProviderProps) {
  const value = useMemo(
    () => ({
      open,
      tooltipId,
      setReference,
      setFloating,
      arrowRef,
      floatingStyles,
      arrowStyles,
    }),
    [
      open,
      tooltipId,
      setReference,
      setFloating,
      arrowRef,
      floatingStyles,
      arrowStyles,
    ],
  );

  return <TooltipContext value={value}>{children}</TooltipContext>;
}
