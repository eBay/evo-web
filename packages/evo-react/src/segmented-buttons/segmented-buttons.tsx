import { useCallback, useState } from "react";
import classNames from "classnames";
import { SegmentedButtonsProvider } from "./context";
import type { EvoSegmentedButtonsProps, SegmentedButtonValue } from "./types";
import "@ebay/skin/segmented-buttons.mjs";

/**
 * Segmented buttons provide a compact way to display multiple mutually
 * exclusive options. They can also be used to switch or sort views, such as
 * switching between a list view and a grid view.
 *
 * Put `EvoSegmentedButton` children inside `EvoSegmentedButtons`, and give each
 * a stable `value`. Use `selected` and `onSelectedChange` to control the choice,
 * or `defaultSelected` for local state. Give the button list an accessible name
 * with `a11yText` or `a11yLabelId`.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoSegmentedButton,
 *   EvoSegmentedButtons,
 * } from "@evo-web/react/segmented-buttons";
 *
 * <EvoSegmentedButtons a11yText="Listing view" defaultSelected="grid">
 *   <EvoSegmentedButton value="grid">Grid</EvoSegmentedButton>
 *   <EvoSegmentedButton value="list">List</EvoSegmentedButton>
 * </EvoSegmentedButtons>
 * ```
 *
 * @summary Compact set of mutually exclusive options.
 */
export function EvoSegmentedButtons<Value extends SegmentedButtonValue>({
  selected: selectedProp,
  defaultSelected = null,
  onSelectedChange,
  size,
  a11yText,
  a11yLabelId,
  className,
  children,
  ...rest
}: EvoSegmentedButtonsProps<Value>) {
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<Value | null>(defaultSelected);
  const isControlled = selectedProp !== undefined;
  const selected = isControlled ? selectedProp : uncontrolledSelected;

  const select = useCallback(
    (next: SegmentedButtonValue) => {
      if (Object.is(next, selected)) return;
      // Children's values are not type-checked against `Value`; see the props JSDoc.
      const value = next as Value;
      if (!isControlled) setUncontrolledSelected(value);
      onSelectedChange?.(value);
    },
    [isControlled, onSelectedChange, selected],
  );

  return (
    <div
      {...rest}
      className={classNames(
        "segmented-buttons",
        size === "large" && "segmented-buttons--large",
        className,
      )}
    >
      <SegmentedButtonsProvider selected={selected} select={select}>
        <ul aria-label={a11yText} aria-labelledby={a11yLabelId}>
          {children}
        </ul>
      </SegmentedButtonsProvider>
    </div>
  );
}
