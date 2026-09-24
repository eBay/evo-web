import {
  EvoMenuItem,
  EvoMenuRadioItem,
  EvoMenuCheckboxItem,
} from "../menu/menu-item";
import type { MenuValue } from "../menu/types";
import { useMenuButton } from "./context";
import type {
  EvoMenuButtonCheckboxItemProps,
  EvoMenuButtonItemProps,
  EvoMenuButtonRadioItemProps,
} from "./types";

/**
 * Runs a menu command and, when requested on the parent, closes the popup.
 * Its `onSelect` callback runs before dismissal.
 *
 * @summary Command item for a menu button.
 */
export function EvoMenuButtonItem({
  onSelect,
  ...rest
}: EvoMenuButtonItemProps) {
  const menuButton = useMenuButton();
  return (
    <EvoMenuItem
      {...rest}
      onSelect={(event) => {
        onSelect?.(event);
        if (!event.defaultPrevented) menuButton.select();
      }}
    />
  );
}

/**
 * Selects one value inside an `EvoMenuRadioGroup` and optionally dismisses the
 * menu button. Give each radio item a distinct `value`.
 *
 * @summary Radio choice for a menu button.
 */
export function EvoMenuButtonRadioItem<Value extends MenuValue>({
  onSelect,
  ...rest
}: EvoMenuButtonRadioItemProps<Value>) {
  const menuButton = useMenuButton();
  return (
    <EvoMenuRadioItem
      {...rest}
      onSelect={(event) => {
        onSelect?.(event);
        if (!event.defaultPrevented) menuButton.select();
      }}
    />
  );
}

/**
 * Toggles one value inside an `EvoMenuCheckboxGroup` and optionally dismisses
 * the menu button. Give each checkbox item a distinct `value`.
 *
 * @summary Checkbox choice for a menu button.
 */
export function EvoMenuButtonCheckboxItem<Value extends MenuValue>({
  onSelect,
  ...rest
}: EvoMenuButtonCheckboxItemProps<Value>) {
  const menuButton = useMenuButton();
  return (
    <EvoMenuCheckboxItem
      {...rest}
      onSelect={(event) => {
        onSelect?.(event);
        if (!event.defaultPrevented) menuButton.select();
      }}
    />
  );
}
