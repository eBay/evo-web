import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import classNames from "classnames";
import { EvoIconCheckboxChecked18 } from "../icon/icons/checkbox-checked-18";
import { EvoIconCheckboxChecked24 } from "../icon/icons/checkbox-checked-24";
import { EvoIconCheckboxMixed18 } from "../icon/icons/checkbox-mixed-18";
import { EvoIconCheckboxMixed24 } from "../icon/icons/checkbox-mixed-24";
import { EvoIconCheckboxUnchecked18 } from "../icon/icons/checkbox-unchecked-18";
import { EvoIconCheckboxUnchecked24 } from "../icon/icons/checkbox-unchecked-24";
import { useRefTee } from "../utils/use-ref-tee";
import type { EvoTriStateCheckboxProps, TriStateCheckboxState } from "./types";
import "@ebay/skin/checkbox.mjs";

/**
 * A tri-state checkbox toggles between unchecked, partially checked, and fully
 * checked states. It uses a native checkbox with Skin icons.
 *
 * `checked` and `onCheckedChange` support controlled standalone use. Provide
 * `values` and `checkedValues` to derive the state of a controlled group, then
 * update the group through `onCheckedValuesChange`. Give the input a visible
 * label or another accessible name.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoTriStateCheckbox } from "@evo-web/react/tri-state-checkbox";
 *
 * <label>
 *   <EvoTriStateCheckbox
 *     checked={selectionState}
 *     onCheckedChange={setSelectionState}
 *   />
 *   Select all items
 * </label>
 * ```
 *
 * @summary Three-state checkbox for grouped selections.
 */
export function EvoTriStateCheckbox({
  checked,
  checkedValues,
  className,
  defaultChecked = "false",
  onChange,
  onCheckedChange,
  onCheckedValuesChange,
  ref,
  size = "regular",
  skipMixed = false,
  style,
  values,
  ...rest
}: EvoTriStateCheckboxProps) {
  const [uncontrolledChecked, setUncontrolledChecked] =
    useState<TriStateCheckboxState>(defaultChecked);
  const [inputRef, internalRef] = useRefTee<HTMLInputElement | null>(ref, null);
  const lastMixed = useRef<string[] | null>(null);
  const isGroup = values !== undefined && checkedValues !== undefined;
  const selectedCount = isGroup
    ? values.filter((value) => checkedValues.includes(value)).length
    : 0;
  const effectiveChecked: TriStateCheckboxState = isGroup
    ? selectedCount === 0
      ? "false"
      : selectedCount === values.length
        ? "true"
        : "mixed"
    : (checked ?? uncontrolledChecked);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.indeterminate = effectiveChecked === "mixed";
    }
  }, [effectiveChecked, internalRef]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    if (isGroup) {
      let nextValues: string[];
      if (effectiveChecked === "true") {
        nextValues = [];
      } else if (effectiveChecked === "mixed") {
        lastMixed.current = [...checkedValues];
        nextValues = [...values];
      } else {
        nextValues = lastMixed.current ?? [...values];
      }
      onCheckedValuesChange?.(nextValues);
      return;
    }

    const nextChecked: TriStateCheckboxState =
      effectiveChecked === "true"
        ? "false"
        : effectiveChecked === "false" && !skipMixed
          ? "mixed"
          : "true";
    if (checked === undefined) {
      setUncontrolledChecked(nextChecked);
    }
    onCheckedChange?.(nextChecked);
  };

  const large = size === "large";
  const icon =
    effectiveChecked === "true" ? (
      large ? (
        <EvoIconCheckboxChecked24 className="checkbox__checked" />
      ) : (
        <EvoIconCheckboxChecked18 className="checkbox__checked" />
      )
    ) : effectiveChecked === "mixed" ? (
      large ? (
        <EvoIconCheckboxMixed24 />
      ) : (
        <EvoIconCheckboxMixed18 />
      )
    ) : large ? (
      <EvoIconCheckboxUnchecked24 className="checkbox__unchecked" />
    ) : (
      <EvoIconCheckboxUnchecked18 className="checkbox__unchecked" />
    );

  return (
    <span
      className={classNames("checkbox", large && "checkbox--large", className)}
      style={style}
    >
      <input
        {...rest}
        ref={inputRef}
        aria-checked={effectiveChecked}
        checked={effectiveChecked === "true"}
        className="checkbox__control"
        onChange={handleChange}
        type="checkbox"
      />
      <span className="checkbox__icon" hidden>
        {icon}
      </span>
    </span>
  );
}
