import { useCallback, useId, useRef } from "react";
import type { FocusEvent, MouseEvent, PointerEvent } from "react";
import classNames from "classnames";
import { TooltipProvider } from "./context";
import type { EvoTooltipProps } from "./types";
import { useExpander } from "../utils/use-expander";
import { useRefTee } from "../utils/use-ref-tee";
import "@ebay/skin/tooltip.mjs";

export function EvoTooltip({
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "bottom",
  offset = 8,
  flip = true,
  shift = true,
  inline = true,
  noHover = false,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onPointerDown,
  ref,
  ...rest
}: EvoTooltipProps) {
  const tooltipId = useId();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalityRef = useRef<"keyboard" | "pointer" | null>(null);
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement,
    strategy: "absolute",
    offset,
    flip,
    shift,
    inline,
  });

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current !== null) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      onMouseEnter?.(event);
      if (!noHover) {
        clearHoverTimeout();
        expander.setOpen(true);
      }
    },
    [clearHoverTimeout, expander.setOpen, noHover, onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      onMouseLeave?.(event);
      if (!noHover) {
        clearHoverTimeout();
        hoverTimeoutRef.current = setTimeout(() => {
          expander.setOpen(false);
        }, 300);
      }
    },
    [clearHoverTimeout, expander.setOpen, noHover, onMouseLeave],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLSpanElement>) => {
      onFocus?.(event);
      if (!noHover || modalityRef.current !== "pointer") {
        clearHoverTimeout();
        expander.setOpen(true);
      }
    },
    [clearHoverTimeout, expander.setOpen, noHover, onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLSpanElement>) => {
      onBlur?.(event);
      if (!event.currentTarget.contains(event.relatedTarget)) {
        clearHoverTimeout();
        expander.setOpen(false);
      }
    },
    [clearHoverTimeout, expander.setOpen, onBlur],
  );

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLSpanElement>) => {
      onPointerDown?.(event);
      modalityRef.current = "pointer";
      if (noHover) {
        clearHoverTimeout();
        expander.setOpen(false);
      }
    },
    [clearHoverTimeout, expander.setOpen, noHover, onPointerDown],
  );

  const [rootRef] = useRefTee(ref, null);
  const lifecycleRef = useCallback(
    (root: HTMLSpanElement | null) => {
      rootRef(root);
      if (!root) {
        return;
      }

      const ownerDocument = root.ownerDocument;
      const handleKeyDown = (event: KeyboardEvent) => {
        modalityRef.current = "keyboard";
        if (expander.open && (event.key === "Escape" || event.key === "Esc")) {
          clearHoverTimeout();
          expander.setOpen(false);
        }
      };

      ownerDocument.addEventListener("keydown", handleKeyDown);

      return () => {
        ownerDocument.removeEventListener("keydown", handleKeyDown);
        clearHoverTimeout();
        rootRef(null);
      };
    },
    [clearHoverTimeout, expander.open, expander.setOpen, rootRef],
  );

  return (
    <TooltipProvider
      open={expander.open}
      tooltipId={tooltipId}
      setReference={expander.refs.setReference}
      setFloating={expander.refs.setFloating}
      arrowRef={expander.refs.arrow}
      floatingStyles={expander.floatingStyles}
      arrowStyles={expander.arrowStyles}
    >
      <span
        {...rest}
        ref={lifecycleRef}
        className={classNames(
          "tooltip",
          expander.open && "tooltip--expanded",
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPointerDown={handlePointerDown}
      >
        {children}
      </span>
    </TooltipProvider>
  );
}
