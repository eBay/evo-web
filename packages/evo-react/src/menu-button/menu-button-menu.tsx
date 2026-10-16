import { useEffect } from "react";
import { EvoMenu as BaseEvoMenu } from "../menu/menu";
import { useRefTee } from "../utils/use-ref-tee";
import { useMenuButton } from "./context";
import type { EvoMenuProps } from "./types";

/**
 * Positions and conditionally mounts the menu-button popup. Compose explicit
 * `EvoMenuItems` and optional `EvoMenuFooter` children inside it.
 *
 * @summary Popup menu for a menu button.
 */
export function EvoMenu({ children, ref, style, ...rest }: EvoMenuProps) {
  const menuButton = useMenuButton();
  const [menuRef, menuElementRef] = useRefTee<HTMLSpanElement>([
    ref,
    menuButton.setFloating,
  ]);

  useEffect(() => {
    if (
      !menuButton.open ||
      !menuButton.focusOnOpen.current ||
      menuButton.floatingStyles.visibility === "hidden"
    ) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      menuElementRef.current
        ?.querySelector<HTMLElement>(
          '[role^="menuitem"]:not([aria-disabled="true"])',
        )
        ?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [
    menuButton.open,
    menuButton.focusOnOpen,
    menuButton.floatingStyles.visibility,
    menuElementRef,
  ]);

  if (!menuButton.open) return null;

  return (
    <BaseEvoMenu
      {...rest}
      variant={menuButton.variant === "filter" ? "filter" : "none"}
      ref={menuRef}
      id={menuButton.menuId}
      tabIndex={-1}
      classPrefix="menu-button"
      reverse={menuButton.reverse}
      fixed={menuButton.strategy === "fixed"}
      fixWidth={menuButton.fixWidth}
      style={{ ...style, ...menuButton.floatingStyles }}
    >
      {children}
    </BaseEvoMenu>
  );
}
