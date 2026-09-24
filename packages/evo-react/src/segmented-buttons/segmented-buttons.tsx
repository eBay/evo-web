import { useCallback, useState } from "react";
import classNames from "classnames";
import { SegmentedButtonsProvider } from "./context";
import type { EvoSegmentedButtonsProps, SegmentedButtonValue } from "./types";
import "@ebay/skin/segmented-buttons.mjs";

/**
 * Segmented buttons offer a compact set of related views or choices. One
 * segment can be current at a time.
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
 * @summary Compact buttons with a single current choice.
 */
export function EvoSegmentedButtons({
  selected: selectedProp,
  defaultSelected = null,
  onSelectedChange,
  size,
  a11yText,
  a11yLabelId,
  className,
  children,
  ...rest
}: EvoSegmentedButtonsProps) {
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<SegmentedButtonValue | null>(defaultSelected);
  const isControlled = selectedProp !== undefined;
  const selected = isControlled ? selectedProp : uncontrolledSelected;

  const select = useCallback(
    (next: SegmentedButtonValue) => {
      if (Object.is(next, selected)) return;
      if (!isControlled) setUncontrolledSelected(next);
      onSelectedChange?.(next);
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
