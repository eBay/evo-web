import { EvoMenuItems as BaseEvoMenuItems } from "../menu/menu-items";
import { useMenuButton } from "./context";
import type { EvoMenuItemsProps } from "../menu/types";

/**
 * Provides keyboard navigation and an accessible name for the popup items.
 * Defaults to the menu-button trigger as its label.
 *
 * @summary Navigable menu items for a menu button.
 */
export function EvoMenuItems({
  a11yText,
  a11yLabelId,
  ...rest
}: EvoMenuItemsProps) {
  const menuButton = useMenuButton();
  const accessibleNameProps =
    a11yText !== undefined
      ? { a11yText }
      : { a11yLabelId: a11yLabelId ?? menuButton.triggerId };

  return <BaseEvoMenuItems {...rest} {...accessibleNameProps} />;
}
