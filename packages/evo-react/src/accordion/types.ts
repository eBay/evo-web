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
  /** Controlled `open` value. Use a `string` for single-open mode or a `string[]` for multi-open mode. */
  open?: SingleOpenValue;
  /** Initial uncontrolled `defaultOpen` value. Use an empty `string[]` for uncontrolled multi-open mode. */
  defaultOpen?: SingleOpenValue;
  /** Fired when the open item `id` or ids change. */
  onOpenChange?: (open: SingleOpenValue) => void;
};

export type MultipleAccordionProps = BaseAccordionProps & {
  /** Controlled `open` value. Use a `string` for single-open mode or a `string[]` for multi-open mode. */
  open?: MultipleOpenValue;
  /** Initial uncontrolled `defaultOpen` value. Use an empty `string[]` for uncontrolled multi-open mode. */
  defaultOpen?: MultipleOpenValue;
  /** Fired when the open item `id` or ids change. */
  onOpenChange?: (open: MultipleOpenValue) => void;
};

export type EvoAccordionProps = SingleAccordionProps | MultipleAccordionProps;

export type EvoAccordionItemProps = Omit<
  ComponentProps<"details">,
  "id" | "open" | "defaultOpen" | "onToggle"
> & {
  /** Unique `id` used by the parent to track this item's `open` state. */
  id: AccordionId;
  /** Summary and content composition for the section. */
  children?: ReactNode;
  /** Called when this item changes `open` state. */
  onOpenChange?: (open: boolean) => void;
};

export type EvoAccordionSummaryProps = EvoDetailsSummaryProps;
export type EvoAccordionLeadingProps = EvoDetailsLeadingProps;
export type EvoAccordionLabelProps = EvoDetailsLabelProps;
export type EvoAccordionContentProps = EvoDetailsContentProps;
