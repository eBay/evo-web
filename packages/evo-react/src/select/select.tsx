import { useId, useState } from "react";
import classNames from "classnames";
import { EvoIconChevronDown12 } from "../icon/icons/chevron-down-12";
import { useFloatingLabel } from "../utils/use-floating-label";
import type { EvoSelectProps } from "./types";
import "@ebay/skin/select.mjs";

/**
 * Selects let users choose from a list of options using the browser's native
 * select control.
 *
 * `EvoSelectOption` renders an option. Place grouped options inside
 * `EvoSelectOptionGroup`; this keeps the native `<optgroup>` structure without
 * inspecting children. `value` and `onValueChange` support controlled use,
 * while `defaultValue` supports uncontrolled use.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoSelect,
 *   EvoSelectOption,
 * } from "@evo-web/react/select";
 *
 * <EvoSelect aria-label="Shipping method" defaultValue="standard">
 *   <EvoSelectOption value="standard">Standard</EvoSelectOption>
 *   <EvoSelectOption value="express">Express</EvoSelectOption>
 * </EvoSelect>
 * ```
 *
 * @summary Native select with Skin styling and optional floating label.
 */
export function EvoSelect({
  "aria-invalid": ariaInvalid,
  borderless = false,
  children,
  className,
  defaultValue,
  disabled,
  floatingLabel: floatingLabelText,
  fluid = false,
  id,
  multiple,
  onBlur,
  onChange,
  onFocus,
  onValueChange,
  ref,
  size = "regular",
  style,
  value,
  ...rest
}: EvoSelectProps) {
  const generatedId = useId();
  const inputId = id ?? (floatingLabelText ? generatedId : undefined);
  const [focused, setFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;
  const floatingLabel = useFloatingLabel({
    disabled,
    focused,
    invalid: ariaInvalid === true || ariaInvalid === "true",
    size,
    text: floatingLabelText,
    value: currentValue,
  });

  const handleChange: NonNullable<EvoSelectProps["onChange"]> = (event) => {
    if (multiple) {
      const nextValue = Array.from(
        event.currentTarget.selectedOptions,
        (option) => option.value,
      );
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onChange?.(event);
      onValueChange?.(nextValue);
    } else {
      const nextValue = event.currentTarget.value;
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onChange?.(event);
      onValueChange?.(nextValue);
    }
  };

  const handleFocus: NonNullable<EvoSelectProps["onFocus"]> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: NonNullable<EvoSelectProps["onBlur"]> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  return (
    <floatingLabel.Container {...floatingLabel.containerProps}>
      <floatingLabel.Label {...floatingLabel.labelProps} htmlFor={inputId} />
      <span
        className={classNames(
          "select",
          size === "large" && "select--large",
          fluid && "select--fluid",
          borderless && "select--borderless",
          className,
        )}
        style={style}
      >
        <select
          {...rest}
          ref={ref}
          aria-invalid={ariaInvalid}
          defaultValue={isControlled ? undefined : defaultValue}
          disabled={disabled}
          id={inputId}
          multiple={multiple}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          value={value}
        >
          {children}
        </select>
        <EvoIconChevronDown12 height="8" width="8" />
      </span>
    </floatingLabel.Container>
  );
}
