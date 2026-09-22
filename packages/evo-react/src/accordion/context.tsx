import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { AccordionId, EvoAccordionProps, OpenValue } from "./types";

export type AccordionContextValue = {
  open: OpenValue;
  isControlled: boolean;
  a11yHeadingTag: EvoAccordionProps["a11yHeadingTag"];
  onItemToggle: (id: AccordionId, open: boolean) => void;
};

export const AccordionContext = createContext<
  AccordionContextValue | undefined
>(undefined);

export function useAccordionContext() {
  const context = use(AccordionContext);

  if (!context) {
    throw new Error(
      "EvoAccordionItem must be used within an EvoAccordion component",
    );
  }

  return context;
}

type AccordionProviderProps = AccordionContextValue & {
  children: ReactNode;
};

export function AccordionProvider({
  open,
  isControlled,
  a11yHeadingTag,
  onItemToggle,
  children,
}: AccordionProviderProps) {
  const value = useMemo(
    () => ({ open, isControlled, a11yHeadingTag, onItemToggle }),
    [open, isControlled, a11yHeadingTag, onItemToggle],
  );
  return <AccordionContext value={value}>{children}</AccordionContext>;
}
