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
  /** Size of the accordion. */
  size?: Size;
  /** Localized role description announced to a11y users. English default to be overridden is `"accordion"`. */
  a11yText?: string;
  children?: ReactNode;
};

export type SingleAccordionProps = BaseAccordionProps & {
  /** Controlled id or ids of the open items. Use a string for single-open mode or a string array for multi-open mode. */
  open?: SingleOpenValue;
  /** Initial uncontrolled id or ids of the open items. Use an empty string array for uncontrolled multi-open mode. */
  defaultOpen?: SingleOpenValue;
  /** Fired when the open item id or ids change. */
  onOpenChange?: (open: SingleOpenValue) => void;
};

export type MultipleAccordionProps = BaseAccordionProps & {
  /** Controlled id or ids of the open items. Use a string for single-open mode or a string array for multi-open mode. */
  open?: MultipleOpenValue;
  /** Initial uncontrolled id or ids of the open items. Use an empty string array for uncontrolled multi-open mode. */
  defaultOpen?: MultipleOpenValue;
  /** Fired when the open item id or ids change. */
  onOpenChange?: (open: MultipleOpenValue) => void;
};

export type EvoAccordionProps = SingleAccordionProps | MultipleAccordionProps;

export type EvoAccordionItemProps = Omit<
  ComponentProps<"details">,
  "id" | "open" | "defaultOpen" | "onToggle"
> & {
  id: AccordionId;
  children?: ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export type EvoAccordionSummaryProps = EvoDetailsSummaryProps;
export type EvoAccordionLeadingProps = EvoDetailsLeadingProps;
export type EvoAccordionLabelProps = EvoDetailsLabelProps;
export type EvoAccordionContentProps = EvoDetailsContentProps;
