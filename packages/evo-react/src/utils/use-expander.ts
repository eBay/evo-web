import {
  arrow,
  autoUpdate,
  flip as floatingFlip,
  inline as floatingInline,
  offset as floatingOffset,
  shift as floatingShift,
  useFloating,
} from "@floating-ui/react";
import type { Middleware, Placement, Strategy } from "@floating-ui/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type UseExpanderOptions = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  strategy?: Strategy;
  offset?: number;
  flip?: boolean;
  shift?: boolean;
  inline?: boolean;
  /** Closes uncontrolled state when the owning component is disabled. */
  resetOnDisabled?: boolean;
};

export function useExpander({
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "bottom-start",
  strategy = "fixed",
  offset = 4,
  flip = true,
  shift = true,
  inline = true,
  resetOnDisabled = false,
}: UseExpanderOptions = {}) {
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const currentOpen = isControlled ? open : uncontrolledOpen;
  const arrowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (resetOnDisabled && !isControlled) {
      setUncontrolledOpen(false);
    }
  }, [isControlled, resetOnDisabled]);

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const middleware = useMemo(() => {
    const result: Middleware[] = [floatingOffset(offset)];

    if (inline) {
      result.push(floatingInline());
    }
    if (flip) {
      result.push(
        floatingFlip({
          fallbackAxisSideDirection: "end",
          flipAlignment: false,
        }),
      );
    }
    if (shift) {
      result.push(floatingShift());
    }
    result.push(arrow({ element: arrowRef, padding: 20 }));

    return result;
  }, [flip, inline, offset, shift]);

  const {
    floatingStyles,
    isPositioned,
    middlewareData,
    placement: finalPlacement,
    refs,
  } = useFloating({
    open: currentOpen,
    onOpenChange: setOpen,
    placement,
    strategy,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const arrowStyles = useMemo<CSSProperties>(() => {
    if (!middlewareData.arrow) {
      return {};
    }

    const { x, y } = middlewareData.arrow;
    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[finalPlacement.split("-")[0]] as "top" | "right" | "bottom" | "left";

    return {
      left: x == null ? "" : `${x}px`,
      top: y == null ? "" : `${y}px`,
      right: "",
      bottom: "",
      [staticSide]: "-4px",
    };
  }, [finalPlacement, middlewareData.arrow]);

  const positionedStyles = useMemo<CSSProperties>(
    () => ({
      ...floatingStyles,
      visibility: currentOpen && !isPositioned ? "hidden" : undefined,
    }),
    [currentOpen, floatingStyles, isPositioned],
  );

  return {
    open: currentOpen,
    setOpen,
    ariaExpanded: currentOpen,
    floatingStyles: positionedStyles,
    arrowStyles,
    refs: {
      reference: refs.reference,
      floating: refs.floating,
      setReference: refs.setReference,
      setFloating: refs.setFloating,
      arrow: arrowRef,
    },
  };
}
