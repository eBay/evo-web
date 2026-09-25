import { useCallback, useState } from "react";
import classNames from "classnames";
import { ToggleButtonGroupProvider } from "./context";
import type {
  EvoToggleButtonGroupProps,
  ToggleButtonGroupValue,
} from "./types";
import "@ebay/skin/toggle-button-group.mjs";

/**
 * Toggle button groups present visual choices for single or multiple selection.
 * They are JavaScript controls and do not submit form values on their own.
 *
 * Put `EvoToggleButtonGroupItem` children inside the group and identify each by
 * a stable `value`. `"checkbox"` allows multiple pressed buttons. `"radio"`
 * keeps one selection, while `"radio-toggle"` allows that selection to be
 * cleared. Provide `a11yText` or `a11yLabelId` to name the button list.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoToggleButtonGroup,
 *   EvoToggleButtonGroupItem,
 * } from "@evo-web/react/toggle-button-group";
 *
 * <EvoToggleButtonGroup a11yText="Listing condition" variant="radio">
 *   <EvoToggleButtonGroupItem value="new" title="New" />
 *   <EvoToggleButtonGroupItem value="used" title="Used" />
 * </EvoToggleButtonGroup>
 * ```
 *
 * @summary Group of toggle buttons for single or multiple selection.
 */
export function EvoToggleButtonGroup<
  Value extends ToggleButtonGroupValue = ToggleButtonGroupValue,
>({
  a11yText,
  a11yLabelId,
  layoutType = "minimal",
  variant = "checkbox",
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  columnsMin,
  columnsXS,
  columnsSM,
  columnsMD,
  columnsXL,
  className,
  children,
  ...rest
}: EvoToggleButtonGroupProps<Value>) {
  type Selection = Value | readonly Value[] | null;
  const [uncontrolledSelected, setUncontrolledSelected] = useState<Selection>(
    defaultSelected ?? (variant === "checkbox" ? [] : null),
  );
  const isControlled = selectedProp !== undefined;
  const selected = isControlled ? selectedProp : uncontrolledSelected;

  const toggle = useCallback(
    (value: ToggleButtonGroupValue) => {
      let next: Selection;
      if (variant === "checkbox") {
        const current = Array.isArray(selected) ? selected : [];
        next = current.includes(value)
          ? current.filter((item) => !Object.is(item, value))
          : [...current, value as Value];
      } else if (Object.is(selected, value)) {
        if (variant === "radio") {
          return;
        }
        next = null;
      } else {
        next = value as Value;
      }

      if (!isControlled) {
        setUncontrolledSelected(next);
      }
      (onSelectedChange as ((next: Selection) => void) | undefined)?.(next);
    },
    [isControlled, onSelectedChange, selected, variant],
  );

  return (
    <div
      {...rest}
      className={classNames("toggle-button-group", className)}
      data-columns-min={columnsMin}
      data-columns-xs={columnsXS}
      data-columns-sm={columnsSM}
      data-columns-md={columnsMD}
      data-columns-xl={columnsXL}
    >
      <ToggleButtonGroupProvider
        selected={selected}
        layoutType={layoutType}
        toggle={toggle}
      >
        <ul aria-label={a11yText} aria-labelledby={a11yLabelId}>
          {children}
        </ul>
      </ToggleButtonGroupProvider>
    </div>
  );
}
