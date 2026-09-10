import { useCallback, useState } from "react";
import { CheckboxGroupProvider } from "./context";
import type { EvoMenuCheckboxGroupProps, MenuValue } from "./types";

/**
 * Manages an array of selected values for checkbox menu items. `selected`
 * makes the group controlled; `defaultSelected` initializes local state.
 *
 * @summary Multi-selection menu group.
 */
export function EvoMenuCheckboxGroup<Value extends MenuValue>({
  selected: selectedProp,
  defaultSelected = [],
  onSelectedChange,
  children,
}: EvoMenuCheckboxGroupProps<Value>) {
  const [uncontrolledSelected, setUncontrolledSelected] = useState<Value[]>(
    () => [...defaultSelected],
  );
  const isControlled = selectedProp !== undefined;
  const selected = isControlled ? selectedProp : uncontrolledSelected;

  const toggle = useCallback(
    (value: MenuValue) => {
      const itemValue = value as Value;
      const nextSelected = selected.includes(itemValue)
        ? selected.filter((selectedValue) => selectedValue !== itemValue)
        : [...selected, itemValue];

      if (!isControlled) {
        setUncontrolledSelected(nextSelected);
      }
      onSelectedChange?.(nextSelected);
    },
    [isControlled, onSelectedChange, selected],
  );

  return (
    <CheckboxGroupProvider selected={selected} toggle={toggle}>
      {children}
    </CheckboxGroupProvider>
  );
}
