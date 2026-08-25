import { useCallback, useSyncExternalStore } from "react";
import type { Ref } from "react";
import type { Strategy } from "@floating-ui/react";
import { useExpander } from "../utils/use-expander";
import { useRefTee } from "../utils/use-ref-tee";

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;
const DOUBLE_PANE_QUERY = `(min-width: ${MIN_WIDTH_FOR_DOUBLE_PANE}px)`;

type UseDatePopoverOptions = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  strategy?: Strategy;
  visibleMonthCount?: number;
  ref?: Ref<HTMLSpanElement | null>;
};

function subscribeDoublePane(onStoreChange: () => void) {
  const media = window.matchMedia(DOUBLE_PANE_QUERY);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getDoublePaneSnapshot() {
  return window.matchMedia(DOUBLE_PANE_QUERY).matches ? 2 : 1;
}

function getDoublePaneServerSnapshot() {
  return 1;
}

export function useDatePopover({
  open,
  defaultOpen = false,
  onOpenChange,
  strategy = "absolute",
  visibleMonthCount: visibleMonthCountOverride,
  ref,
}: UseDatePopoverOptions) {
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement: "bottom-start",
    strategy,
    inline: false,
  });
  const [teeRef] = useRefTee<HTMLSpanElement | null>(ref, null);
  const responsiveMonthCount = useSyncExternalStore(
    subscribeDoublePane,
    getDoublePaneSnapshot,
    getDoublePaneServerSnapshot,
  );

  const setContainerRef = useCallback(
    (node: HTMLSpanElement | null) => {
      teeRef(node);
      if (!node) {
        return;
      }

      const ownerDocument = node.ownerDocument;
      const handlePointerDown = (event: PointerEvent) => {
        if (!expander.open || node.contains(event.target as Node)) {
          return;
        }
        expander.setOpen(false);
      };
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!expander.open || event.key !== "Escape") {
          return;
        }
        expander.setOpen(false);
        const trigger = expander.refs.reference.current;
        if (trigger instanceof HTMLElement) {
          trigger.focus();
        }
      };

      ownerDocument.addEventListener("pointerdown", handlePointerDown);
      ownerDocument.addEventListener("keydown", handleKeyDown);
      return () => {
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("keydown", handleKeyDown);
        teeRef(null);
      };
    },
    [expander.open, expander.refs.reference, expander.setOpen, teeRef],
  );

  return {
    expander,
    visibleMonthCount: visibleMonthCountOverride ?? responsiveMonthCount,
    setContainerRef,
  };
}
