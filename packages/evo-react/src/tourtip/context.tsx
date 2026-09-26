import { createContext, use, useMemo } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";

type TourtipContextValue = {
  open: boolean;
  close: () => void;
  a11yCloseText: string;
  overlayId: string;
  hostRef: RefObject<HTMLElement | null>;
  setReference: (node: Element | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  arrowRef: RefObject<HTMLElement | null>;
  floatingStyles: CSSProperties;
  arrowStyles: CSSProperties;
};

const TourtipContext = createContext<TourtipContextValue | null>(null);

export function useTourtip() {
  const context = use(TourtipContext);
  if (!context) {
    throw new Error("EvoTourtip subcomponents must be inside EvoTourtip");
  }
  return context;
}

export function TourtipProvider({
  children,
  open,
  close,
  a11yCloseText,
  overlayId,
  hostRef,
  setReference,
  setFloating,
  arrowRef,
  floatingStyles,
  arrowStyles,
}: TourtipContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      open,
      close,
      a11yCloseText,
      overlayId,
      hostRef,
      setReference,
      setFloating,
      arrowRef,
      floatingStyles,
      arrowStyles,
    }),
    [
      open,
      close,
      a11yCloseText,
      overlayId,
      hostRef,
      setReference,
      setFloating,
      arrowRef,
      floatingStyles,
      arrowStyles,
    ],
  );
  return <TourtipContext value={value}>{children}</TourtipContext>;
}

type HeadingContextValue = {
  headingId: string;
  setHeadingId: (id: string) => void;
};

const HeadingContext = createContext<HeadingContextValue | null>(null);

export function useTourtipHeading() {
  const context = use(HeadingContext);
  if (!context) {
    throw new Error(
      "EvoTourtipHeading must be inside EvoTourtipContent.heading",
    );
  }
  return context;
}

export function TourtipHeadingProvider({
  children,
  headingId,
  setHeadingId,
}: HeadingContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({ headingId, setHeadingId }),
    [headingId, setHeadingId],
  );
  return <HeadingContext value={value}>{children}</HeadingContext>;
}
