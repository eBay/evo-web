import { EvoToggleButton } from "../toggle-button/toggle-button";
import { useToggleButtonGroupContext } from "./context";
import type {
  EvoToggleButtonGroupItemProps,
  ToggleButtonGroupValue,
} from "./types";

/**
 * Renders one list item and `EvoToggleButton` with group-managed pressed state.
 * Use a stable `value` for each item. Its `layoutType` overrides the group's
 * default layout when provided.
 *
 * @summary Selectable toggle button group item.
 */
export function EvoToggleButtonGroupItem<
  Value extends ToggleButtonGroupValue = ToggleButtonGroupValue,
>({ value, layoutType, ...rest }: EvoToggleButtonGroupItemProps<Value>) {
  const group = useToggleButtonGroupContext();
  const pressed = Array.isArray(group.selected)
    ? group.selected.includes(value)
    : Object.is(group.selected, value);

  return (
    <li>
      <EvoToggleButton
        {...rest}
        layoutType={layoutType ?? group.layoutType}
        pressed={pressed}
        onToggle={() => group.toggle(value)}
      />
    </li>
  );
}
