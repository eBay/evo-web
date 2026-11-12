import type { ComponentProps, ReactElement } from "react";

/** A stable value identifying one segment. */
export type SegmentedButtonValue = string | number;

/**
 * `Value` is inferred from `selected`, `defaultSelected`, or `onSelectedChange`,
 * so a `useState` setter can be passed to `onSelectedChange` directly. Each
 * child's `value` must be one of the `Value` options; TypeScript cannot check
 * this through JSX children.
 */
export type EvoSegmentedButtonsProps<
  Value extends SegmentedButtonValue = SegmentedButtonValue,
> = ComponentProps<"div"> & {
  /** Selected segment value. Pass `null` when no segment is selected. */
  selected?: Value | null;
  /** Initial selection when `selected` is omitted. Defaults to `null`. */
  defaultSelected?: Value | null;
  /** Called with the newly selected value after a segment is activated. */
  onSelectedChange?: (selected: Value) => void;
  /** Uses Skin's larger segment size. Omit for the regular size. */
  size?: "large";
  /** Accessible name for the button list. Use this or `a11yLabelId`. */
  a11yText?: string;
  /** ID of visible text naming the button list. Use this or `a11yText`. */
  a11yLabelId?: string;
};

export type EvoSegmentedButtonProps = Omit<
  ComponentProps<"button">,
  "value" | "aria-current"
> & {
  /** Stable value used to identify this segment in the parent's selection. */
  value: SegmentedButtonValue;
  /** Leading icon. Pass an `EvoIcon*` component. */
  icon?: ReactElement;
};
