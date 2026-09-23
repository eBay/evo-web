import classNames from "classnames";
import { useCallback, useState } from "react";
import type { JSX } from "react";
import { AccordionProvider } from "./context";
import type {
  AccordionId,
  EvoAccordionProps,
  MultipleAccordionProps,
  OpenValue,
  SingleAccordionProps,
} from "./types";
import "@ebay/skin/accordion.mjs";

function getNextOpenValue(
  currentOpen: OpenValue,
  id: AccordionId,
  isOpen: boolean,
): OpenValue {
  if (Array.isArray(currentOpen)) {
    if (isOpen) {
      return currentOpen.includes(id) ? currentOpen : [...currentOpen, id];
    }

    return currentOpen.includes(id)
      ? currentOpen.filter((openId) => openId !== id)
      : currentOpen;
  }

  if (isOpen) {
    return id;
  }

  return currentOpen === id ? undefined : currentOpen;
}

/**
 * An accordion is a vertically stacked set of sections that users can expand
 * or collapse to reveal related content.
 *
 * A `string` `open` value keeps one section open, while a `string[]` value allows
 * multiple sections to remain open. Localize the `a11yText` value, which
 * defaults to `"accordion"`.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoAccordion,
 *   EvoAccordionContent,
 *   EvoAccordionItem,
 *   EvoAccordionLabel,
 *   EvoAccordionSummary,
 * } from "@evo-web/react/accordion";
 *
 * <EvoAccordion>
 *   <EvoAccordionItem id="shipping">
 *     <EvoAccordionSummary>
 *       <EvoAccordionLabel>Shipping</EvoAccordionLabel>
 *     </EvoAccordionSummary>
 *     <EvoAccordionContent>Shipping details.</EvoAccordionContent>
 *   </EvoAccordionItem>
 *   <EvoAccordionItem id="returns">
 *     <EvoAccordionSummary>
 *       <EvoAccordionLabel>Returns</EvoAccordionLabel>
 *     </EvoAccordionSummary>
 *     <EvoAccordionContent>Return details.</EvoAccordionContent>
 *   </EvoAccordionItem>
 * </EvoAccordion>
 * ```
 *
 * @summary Expandable group of related sections.
 */
export function EvoAccordion(props: MultipleAccordionProps): JSX.Element;
export function EvoAccordion(props: SingleAccordionProps): JSX.Element;
export function EvoAccordion(props: EvoAccordionProps) {
  const {
    size,
    a11yText = "accordion",
    open,
    defaultOpen,
    onOpenChange,
    className,
    children,
    ...rest
  } = props;
  const [uncontrolledOpen, setUncontrolledOpen] =
    useState<OpenValue>(defaultOpen);
  const [interacted, setInteracted] = useState(false);
  const isControlled = "open" in props;
  const currentOpen = isControlled ? open : uncontrolledOpen;

  const onItemToggle = useCallback(
    (id: AccordionId, isOpen: boolean) => {
      const nextOpen = getNextOpenValue(currentOpen, id, isOpen);

      if (nextOpen === currentOpen) {
        return;
      }

      setInteracted(true);

      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      if (Array.isArray(currentOpen)) {
        (onOpenChange as MultipleAccordionProps["onOpenChange"])?.(
          nextOpen as AccordionId[],
        );
      } else {
        (onOpenChange as SingleAccordionProps["onOpenChange"])?.(
          nextOpen as AccordionId | undefined,
        );
      }
    },
    [currentOpen, isControlled, onOpenChange],
  );

  return (
    <AccordionProvider
      open={currentOpen}
      isControlled={isControlled}
      onItemToggle={onItemToggle}
    >
      <ul
        {...rest}
        aria-roledescription={a11yText}
        className={classNames(
          "accordion",
          size === "large" && "accordion--large",
          interacted && "accordion--animated",
          className,
        )}
      >
        {children}
      </ul>
    </AccordionProvider>
  );
}
