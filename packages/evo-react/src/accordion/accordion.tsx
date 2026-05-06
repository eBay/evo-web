import classNames from "classnames";
import { useCallback, useState } from "react";
import type { JSX } from "react";
import { AccordionContext } from "./context";
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

  const onItemToggle = useCallback((id: AccordionId, isOpen: boolean) => {
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
  }, [currentOpen, isControlled, onOpenChange]);

  return (
    <AccordionContext value={{ open: currentOpen, isControlled, onItemToggle }}>
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
    </AccordionContext>
  );
}
