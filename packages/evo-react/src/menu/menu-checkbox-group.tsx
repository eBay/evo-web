import { useCallback, useState } from "react";
import { CheckboxGroupProvider } from "./context";
import type { EvoMenuCheckboxGroupProps, MenuValue } from "./types";

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
