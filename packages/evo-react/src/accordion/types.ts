import type { ComponentProps, ReactNode } from "react";
import type {
  EvoDetailsContentProps,
  EvoDetailsLabelProps,
  EvoDetailsLeadingProps,
  EvoDetailsSummaryProps,
} from "../details/types";

export type Size = "regular" | "large";
export type AccordionId = string;
export type SingleOpenValue<Id extends string = string> = Id | undefined;
export type MultipleOpenValue<Id extends string = string> = Id[];
export type OpenValue<Id extends string = string> =
  SingleOpenValue<Id> | MultipleOpenValue<Id>;

type BaseAccordionProps = Omit<ComponentProps<"ul">, "aria-roledescription"> & {
  /** Size of the accordion. */
  size?: Size;
  /** Localized role description announced to a11y users. English default to be overridden is `"accordion"`. */
  a11yText?: string;
  /** Heading tag used for each accordion header. Defaults to `"h4"`. */
  a11yHeadingTag?: keyof HTMLElementTagNameMap;
  children?: ReactNode;
};

export type SingleAccordionProps<Id extends string = string> =
  BaseAccordionProps & {
    /** Controlled `open` value. Use a `string` for single-open mode or a `string[]` for multi-open mode. */
    open?: SingleOpenValue<Id>;
    /** Initial uncontrolled `defaultOpen` value. Use an empty `string[]` for uncontrolled multi-open mode. */
    defaultOpen?: SingleOpenValue<Id>;
    /** Fired when the open item `id` or ids change. */
    onOpenChange?: (open: SingleOpenValue<Id>) => void;
  };

export type MultipleAccordionProps<Id extends string = string> =
  BaseAccordionProps & {
    /** Controlled `open` value. Use a `string` for single-open mode or a `string[]` for multi-open mode. */
    open?: MultipleOpenValue<Id>;
    /** Initial uncontrolled `defaultOpen` value. Use an empty `string[]` for uncontrolled multi-open mode. */
    defaultOpen?: MultipleOpenValue<Id>;
    /** Fired when the open item `id` or ids change. */
    onOpenChange?: (open: MultipleOpenValue<Id>) => void;
  };

export type EvoAccordionProps<Id extends string = string> =
  SingleAccordionProps<Id> | MultipleAccordionProps<Id>;

export type EvoAccordionItemProps<Id extends string = string> = Omit<
  ComponentProps<"details">,
  "id" | "open" | "defaultOpen" | "onToggle"
> & {
  /** Unique `id` used by the parent to track this item's `open` state. */
  id: Id;
  /** Summary and content composition for the section. */
  children?: ReactNode;
  /** Called when this item changes `open` state. */
  onOpenChange?: (open: boolean) => void;
};

export type EvoAccordionSummaryProps = EvoDetailsSummaryProps;
export type EvoAccordionLeadingProps = EvoDetailsLeadingProps;
export type EvoAccordionLabelProps = EvoDetailsLabelProps;
export type EvoAccordionContentProps = EvoDetailsContentProps;
