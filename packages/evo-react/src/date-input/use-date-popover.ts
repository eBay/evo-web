import {
  useCallback,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { Ref, RefCallback } from "react";
import { useRefTee } from "../utils/use-ref-tee";

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;
const DOUBLE_PANE_QUERY = `(min-width: ${MIN_WIDTH_FOR_DOUBLE_PANE}px)`;

export type DatePopoverState<TElement extends HTMLElement = HTMLElement> = {
  open: boolean;
  setOpen: (open: boolean) => void;
  popoverId: string;
  triggerElement: HTMLButtonElement | null;
  setTriggerElement: RefCallback<HTMLButtonElement>;
  focusTrigger: () => void;
  positioningReferenceElement: TElement | null;
  setContainerRef: RefCallback<TElement>;
};

type UseDatePopoverOptions<TElement extends HTMLElement> = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  ref?: Ref<TElement>;
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

export function useResponsiveMonthCount(override?: number) {
  const responsiveMonthCount = useSyncExternalStore(
    subscribeDoublePane,
    getDoublePaneSnapshot,
    getDoublePaneServerSnapshot,
  );

  return override ?? responsiveMonthCount;
}

export function useDatePopover<TElement extends HTMLElement>({
  open,
  defaultOpen = false,
  onOpenChange,
  ref,
}: UseDatePopoverOptions<TElement>): DatePopoverState<TElement> {
  const popoverId = useId();
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const currentOpen = isControlled ? open : uncontrolledOpen;
  const [triggerElement, setTriggerElementState] =
    useState<HTMLButtonElement | null>(null);
  const [positioningReferenceElement, setPositioningReferenceElement] =
    useState<TElement | null>(null);
  const [teeRef] = useRefTee<TElement | null>(ref, null);

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const setTriggerElement = useCallback((node: HTMLButtonElement | null) => {
    setTriggerElementState(node);
  }, []);

  const focusTrigger = useCallback(() => {
    triggerElement?.focus();
  }, [triggerElement]);

  const currentOpenRef = useRef(currentOpen);
  const setOpenRef = useRef(setOpen);
  const focusTriggerRef = useRef(focusTrigger);
  const removeListenersRef = useRef<(() => void) | null>(null);

  currentOpenRef.current = currentOpen;
  setOpenRef.current = setOpen;
  focusTriggerRef.current = focusTrigger;

  const setContainerRef = useCallback(
    (node: TElement | null) => {
      removeListenersRef.current?.();
      removeListenersRef.current = null;
      teeRef(node);
      setPositioningReferenceElement(node);

      if (!node) {
        return;
      }

      const ownerDocument = node.ownerDocument;
      const handlePointerDown = (event: PointerEvent) => {
        if (!currentOpenRef.current || node.contains(event.target as Node)) {
          return;
        }
        setOpenRef.current(false);
      };
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!currentOpenRef.current || event.key !== "Escape") {
          return;
        }
        setOpenRef.current(false);
        focusTriggerRef.current();
      };

      ownerDocument.addEventListener("pointerdown", handlePointerDown);
      ownerDocument.addEventListener("keydown", handleKeyDown);
      removeListenersRef.current = () => {
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("keydown", handleKeyDown);
      };
    },
    [teeRef],
  );

  return {
    open: currentOpen,
    setOpen,
    popoverId,
    triggerElement,
    setTriggerElement,
    focusTrigger,
    positioningReferenceElement,
    setContainerRef,
  };
}
