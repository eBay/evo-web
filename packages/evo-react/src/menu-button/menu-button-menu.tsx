import { useEffect } from "react";
import { EvoMenu as BaseEvoMenu } from "../menu/menu";
import { useRefTee } from "../utils/use-ref-tee";
import { useMenuButton } from "./context";
import type { EvoMenuProps } from "./types";

/**
 * Positions the menu-button popup. Compose explicit `EvoMenuItems` and
 * optional `EvoMenuFooter` children inside it, and render it after
 * `EvoMenuButtonTrigger`. The popup stays mounted so item and group state
 * survive closing; Skin shows it only after an expanded trigger.
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

  return (
    <BaseEvoMenu
      {...rest}
      variant={menuButton.variant === "filter" ? "filter" : "none"}
      ref={menuRef}
      id={menuButton.menuId}
      tabIndex={-1}
      classPrefix="menu-button"
      reverse={menuButton.reverse}
      fixed={menuButton.detachPopover}
      fixWidth={menuButton.fixWidth}
      style={{ ...style, ...menuButton.floatingStyles }}
    >
      {children}
    </BaseEvoMenu>
  );
}
