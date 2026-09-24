import { useEffect } from "react";
import { EvoFakeMenu } from "../fake-menu/fake-menu";
import { useRefTee } from "../utils/use-ref-tee";
import { useFakeMenuButton } from "./context";
import type { EvoFakeMenuButtonMenuProps } from "./types";

/**
 * Popup region for `EvoFakeMenuButton`. Place `EvoFakeMenuItems` containing
 * `EvoFakeMenuItem` or `EvoFakeMenuSeparator` inside it.
 *
 * @summary Positioned fake menu popup.
 */
export function EvoFakeMenuButtonMenu({
  children,
  onClick,
  ref,
  style,
  ...rest
}: EvoFakeMenuButtonMenuProps) {
  const menuButton = useFakeMenuButton();
  const [menuRef, menuElementRef] = useRefTee<HTMLSpanElement>([
    ref,
    menuButton.setFloating,
  ]);

  useEffect(() => {
    if (!menuButton.open || !menuButton.focusOnOpen.current) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      menuElementRef.current
        ?.querySelector<HTMLElement>("a[href], button:not([disabled])")
        ?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [menuButton.open, menuButton.focusOnOpen, menuElementRef]);

  if (!menuButton.open) {
    return null;
  }

  return (
    <EvoFakeMenu
      {...rest}
      ref={menuRef}
      id={menuButton.menuId}
      tabIndex={-1}
      classPrefix="fake-menu-button"
      reverse={menuButton.reverse}
      fixed={menuButton.strategy === "fixed"}
      fixWidth={menuButton.fixWidth}
      style={{ ...style, ...menuButton.floatingStyles }}
      onClick={(event) => {
        onClick?.(event);
        if (
          menuButton.collapseOnSelect &&
          event.target instanceof Element &&
          event.target.closest("a[href], button:not([disabled])")
        ) {
          menuButton.setOpen(false);
        }
      }}
    >
      {children}
    </EvoFakeMenu>
  );
}
