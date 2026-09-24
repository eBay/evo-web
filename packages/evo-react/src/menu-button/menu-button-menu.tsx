import { useEffect } from "react";
import { EvoMenu } from "../menu/menu";
import { EvoMenuItems } from "../menu/menu-items";
import { useRefTee } from "../utils/use-ref-tee";
import { useMenuButton } from "./context";
import type { EvoMenuButtonMenuProps } from "./types";

/**
 * Positioned popup for `EvoMenuButton`. Place command items, separators, or
 * radio and checkbox groups inside. A `footer` slot follows the items region.
 *
 * @summary Menu popup and keyboard navigation region.
 */
export function EvoMenuButtonMenu({
  children,
  footer,
  onClick,
  ref,
  style,
  ...rest
}: EvoMenuButtonMenuProps) {
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
    <EvoMenu
      {...rest}
      ref={menuRef}
      id={menuButton.menuId}
      tabIndex={-1}
      classPrefix="menu-button"
      variant={menuButton.variant === "filter" ? "filter" : "none"}
      reverse={menuButton.reverse}
      fixed={menuButton.strategy === "fixed"}
      fixWidth={menuButton.fixWidth}
      style={{ ...style, ...menuButton.floatingStyles }}
      onClick={onClick}
    >
      <EvoMenuItems a11yLabelId={menuButton.triggerId}>{children}</EvoMenuItems>
      {footer}
    </EvoMenu>
  );
}
