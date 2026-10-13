import { createContext, use, useMemo } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";
import type { MenuButtonVariant } from "./types";

type MenuButtonContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  select: () => void;
  focusOnOpen: RefObject<boolean>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  setReference: (node: Element | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  floatingStyles: CSSProperties;
  menuId: string;
  triggerId: string;
  disabled: boolean;
  reverse: boolean;
  strategy: "absolute" | "fixed";
  fixWidth: boolean;
  variant: MenuButtonVariant;
};

const MenuButtonContext = createContext<MenuButtonContextValue | null>(null);

export function useMenuButton() {
  const context = use(MenuButtonContext);
  if (!context) {
    throw new Error("EvoMenuButton subcomponents must be inside EvoMenuButton");
  }
  return context;
}

export function MenuButtonProvider({
  children,
  open,
  setOpen,
  select,
  focusOnOpen,
  triggerRef,
  setReference,
  setFloating,
  floatingStyles,
  menuId,
  triggerId,
  disabled,
  reverse,
  strategy,
  fixWidth,
  variant,
}: MenuButtonContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      open,
      setOpen,
      select,
      focusOnOpen,
      triggerRef,
      setReference,
      setFloating,
      floatingStyles,
      menuId,
      triggerId,
      disabled,
      reverse,
      strategy,
      fixWidth,
      variant,
    }),
    [
      open,
      setOpen,
      select,
      focusOnOpen,
      triggerRef,
      setReference,
      setFloating,
      floatingStyles,
      menuId,
      triggerId,
      disabled,
      reverse,
      strategy,
      fixWidth,
      variant,
    ],
  );
  return <MenuButtonContext value={value}>{children}</MenuButtonContext>;
}
