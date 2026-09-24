import { createContext, use, useMemo } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";
import type { Priority, Size } from "../button/types";
import type { FakeMenuButtonVariant } from "./types";

type FakeMenuButtonContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  focusOnOpen: RefObject<boolean>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  setReference: (node: Element | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  floatingStyles: CSSProperties;
  menuId: string;
  variant: FakeMenuButtonVariant;
  borderless: boolean;
  priority?: Priority;
  size?: Size;
  transparent: boolean;
  disabled: boolean;
  noToggleIcon: boolean;
  a11yText?: string;
  reverse: boolean;
  strategy: "absolute" | "fixed";
  fixWidth: boolean;
  collapseOnSelect: boolean;
};

const FakeMenuButtonContext = createContext<FakeMenuButtonContextValue | null>(
  null,
);

export function FakeMenuButtonProvider({
  children,
  open,
  setOpen,
  focusOnOpen,
  triggerRef,
  setReference,
  setFloating,
  floatingStyles,
  menuId,
  variant,
  borderless,
  priority,
  size,
  transparent,
  disabled,
  noToggleIcon,
  a11yText,
  reverse,
  strategy,
  fixWidth,
  collapseOnSelect,
}: FakeMenuButtonContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      open,
      setOpen,
      focusOnOpen,
      triggerRef,
      setReference,
      setFloating,
      floatingStyles,
      menuId,
      variant,
      borderless,
      priority,
      size,
      transparent,
      disabled,
      noToggleIcon,
      a11yText,
      reverse,
      strategy,
      fixWidth,
      collapseOnSelect,
    }),
    [
      open,
      setOpen,
      focusOnOpen,
      triggerRef,
      setReference,
      setFloating,
      floatingStyles,
      menuId,
      variant,
      borderless,
      priority,
      size,
      transparent,
      disabled,
      noToggleIcon,
      a11yText,
      reverse,
      strategy,
      fixWidth,
      collapseOnSelect,
    ],
  );
  return (
    <FakeMenuButtonContext value={value}>{children}</FakeMenuButtonContext>
  );
}

export function useFakeMenuButton() {
  const context = use(FakeMenuButtonContext);
  if (!context) {
    throw new Error(
      "Fake menu button regions must be inside EvoFakeMenuButton",
    );
  }
  return context;
}
