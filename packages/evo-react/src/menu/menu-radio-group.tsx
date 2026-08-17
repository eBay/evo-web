import { useCallback, useState } from "react";
import { RadioGroupProvider } from "./context";
import type { EvoMenuRadioGroupProps, MenuValue } from "./types";

export function EvoMenuRadioGroup<Value extends MenuValue>({
  selected: selectedProp,
  defaultSelected = null,
  onSelectedChange,
  children,
}: EvoMenuRadioGroupProps<Value>) {
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<Value | null>(defaultSelected);
  const isControlled = selectedProp !== undefined;
  const selected = isControlled ? selectedProp : uncontrolledSelected;

  const select = useCallback(
    (value: MenuValue) => {
      const nextSelected = value as Value;
      if (selected === nextSelected) {
        return;
      }

      if (!isControlled) {
        setUncontrolledSelected(nextSelected);
      }
      onSelectedChange?.(nextSelected);
    },
    [isControlled, onSelectedChange, selected],
  );

  return (
    <RadioGroupProvider selected={selected} select={select}>
      {children}
    </RadioGroupProvider>
  );
}
