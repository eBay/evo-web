import { createContext, use, useMemo } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";
import type { Priority, Size, Split } from "../button/types";
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
  variant: MenuButtonVariant;
  borderless: boolean;
  priority?: Priority;
  size?: Size;
  transparent: boolean;
  disabled: boolean;
  partiallyDisabled: boolean;
  noToggleIcon: boolean;
  a11yText?: string;
  hasSelection: boolean;
  a11ySelectedText: string;
  reverse: boolean;
  strategy: "absolute" | "fixed";
  fixWidth: boolean;
  split?: Split;
  prefixId?: string;
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
  variant,
  borderless,
  priority,
  size,
  transparent,
  disabled,
  partiallyDisabled,
  noToggleIcon,
  a11yText,
  hasSelection,
  a11ySelectedText,
  reverse,
  strategy,
  fixWidth,
  split,
  prefixId,
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
      variant,
      borderless,
      priority,
      size,
      transparent,
      disabled,
      partiallyDisabled,
      noToggleIcon,
      a11yText,
      hasSelection,
      a11ySelectedText,
      reverse,
      strategy,
      fixWidth,
      split,
      prefixId,
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
      variant,
      borderless,
      priority,
      size,
      transparent,
      disabled,
      partiallyDisabled,
      noToggleIcon,
      a11yText,
      hasSelection,
      a11ySelectedText,
      reverse,
      strategy,
      fixWidth,
      split,
      prefixId,
    ],
  );
  return <MenuButtonContext value={value}>{children}</MenuButtonContext>;
}
