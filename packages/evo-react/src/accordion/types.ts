import type { ComponentProps, ReactNode } from "react";
import type {
  EvoDetailsContentProps,
  EvoDetailsLabelProps,
  EvoDetailsLeadingProps,
  EvoDetailsSummaryProps,
} from "../details/types";

export type Size = "regular" | "large";
export type AccordionId = string;
export type SingleOpenValue = AccordionId | undefined;
export type MultipleOpenValue = AccordionId[];
export type OpenValue = SingleOpenValue | MultipleOpenValue;

type BaseAccordionProps = Omit<ComponentProps<"ul">, "aria-roledescription"> & {
  size?: Size;
  a11yText?: string;
  children?: ReactNode;
};

export type SingleAccordionProps = BaseAccordionProps & {
  open?: SingleOpenValue;
  defaultOpen?: SingleOpenValue;
  onOpenChange?: (open: SingleOpenValue) => void;
};

export type MultipleAccordionProps = BaseAccordionProps & {
  open?: MultipleOpenValue;
  defaultOpen?: MultipleOpenValue;
  onOpenChange?: (open: MultipleOpenValue) => void;
};

export type EvoAccordionProps = SingleAccordionProps | MultipleAccordionProps;

export type EvoAccordionItemProps = Omit<
  ComponentProps<"details">,
  "id" | "open" | "defaultOpen" | "onToggle"
> & {
  id: AccordionId;
  children?: ReactNode;
};

export type EvoAccordionSummaryProps = EvoDetailsSummaryProps;
export type EvoAccordionLeadingProps = EvoDetailsLeadingProps;
export type EvoAccordionLabelProps = EvoDetailsLabelProps;
export type EvoAccordionContentProps = EvoDetailsContentProps;
