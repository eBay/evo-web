import {
  EvoMenuCheckboxItem as BaseEvoMenuCheckboxItem,
  EvoMenuItem as BaseEvoMenuItem,
  EvoMenuRadioItem as BaseEvoMenuRadioItem,
} from "../menu/menu-item";
import type {
  EvoMenuCheckboxItemProps,
  EvoMenuItemProps,
  EvoMenuRadioItemProps,
  MenuValue,
} from "../menu/types";
import { useMenuButton } from "./context";

/**
 * Performs one command. Its `onSelect` callback runs before optional popup
 * dismissal through the parent `collapseOnSelect` setting.
 *
 * @summary Command item for a menu button.
 */
export function EvoMenuItem({ onSelect, ...rest }: EvoMenuItemProps) {
  const menuButton = useMenuButton();
  return (
    <BaseEvoMenuItem
      {...rest}
      onSelect={(event) => {
        onSelect?.(event);
        menuButton.select();
      }}
    />
  );
}

/**
 * Selects one value in an `EvoMenuRadioGroup` and optionally dismisses the
 * popup. Give each radio item a distinct `value`.
 *
 * @summary Single-selection item for a menu button.
 */
export function EvoMenuRadioItem<Value extends MenuValue>({
  onSelect,
  ...rest
}: EvoMenuRadioItemProps<Value>) {
  const menuButton = useMenuButton();
  return (
    <BaseEvoMenuRadioItem
      {...rest}
      onSelect={(event) => {
        onSelect?.(event);
        menuButton.select();
      }}
    />
  );
}

/**
 * Toggles one value in an `EvoMenuCheckboxGroup` and optionally dismisses the
 * popup. Give each checkbox item a distinct `value`.
 *
 * @summary Multi-selection item for a menu button.
 */
export function EvoMenuCheckboxItem<Value extends MenuValue>({
  onSelect,
  ...rest
}: EvoMenuCheckboxItemProps<Value>) {
  const menuButton = useMenuButton();
  return (
    <BaseEvoMenuCheckboxItem
      {...rest}
      onSelect={(event) => {
        onSelect?.(event);
        menuButton.select();
      }}
    />
  );
}
