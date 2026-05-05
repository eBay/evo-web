import { createContext, use } from "react";
import type { AccordionId, OpenValue } from "./types";

export type AccordionContextValue = {
  open: OpenValue;
  isControlled: boolean;
  onItemToggle: (id: AccordionId, open: boolean) => void;
};

export const AccordionContext = createContext<
  AccordionContextValue | undefined
>(undefined);

export function useAccordionContext() {
  const context = use(AccordionContext);

  if (!context) {
    throw new Error(
      "EvoAccordionDetails must be used within an EvoAccordion component",
    );
  }

  return context;
}
