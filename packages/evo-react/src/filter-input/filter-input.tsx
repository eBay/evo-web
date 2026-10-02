import { useState } from "react";
import classNames from "classnames";
import { EvoIconClear16 } from "../icon/icons/clear-16";
import { EvoIconSearch16 } from "../icon/icons/search-16";
import { EvoInput } from "../input";
import type { EvoInputProps } from "../input";
import type { EvoFilterInputProps } from "./types";
import "@ebay/skin/filter-input.mjs";

/**
 * A filter input is a text box used to filter visible content.
 *
 * `EvoFilterInput` renders a search box with a leading search icon. Supply
 * `a11yControlsId` for the results it controls. When `a11yClearButtonText` is
 * provided, the trailing button clears the value and calls `onValueChange`
 * with an empty string. Native input props and a React 19 `ref` are supported.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFilterInput } from "@evo-web/react/filter-input";
 *
 * <EvoFilterInput
 *   a11yControlsId="filtered-items"
 *   a11yClearButtonText="Clear filter"
 *   aria-label="Filter items"
 *   placeholder="Filter items"
 * />
 * <ul id="filtered-items">...</ul>
 * ```
 *
 * @summary Search box for filtering content.
 */
export function EvoFilterInput({
  a11yClearButtonText,
  a11yControlsId,
  className,
  defaultValue,
  disabled,
  onChange,
  onValueChange,
  placeholder = "Filter",
  ref,
  size,
  value,
  ...rest
}: EvoFilterInputProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    String(defaultValue ?? ""),
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;

  const handleChange: NonNullable<EvoInputProps["onChange"]> = (event) => {
    const nextValue = event.currentTarget.value;
    if (!isControlled) {
      setUncontrolledValue(nextValue);
    }
    onChange?.(event);
    onValueChange?.(nextValue);
  };

  const handleClear = () => {
    if (!isControlled) {
      setUncontrolledValue("");
    }
    onValueChange?.("");
  };

  return (
    <span
      className={classNames(
        "filter-input",
        size && `filter-input--${size}`,
        className,
      )}
    >
      <EvoInput
        {...rest}
        aria-controls={a11yControlsId}
        disabled={disabled}
        fluid
        inputSize={size === "large" ? "large" : "regular"}
        onChange={handleChange}
        placeholder={placeholder}
        postfix={
          a11yClearButtonText
            ? {
                icon: <EvoIconClear16 />,
                buttonProps: {
                  a11yText: a11yClearButtonText,
                  className: "filter-input__clear-btn",
                  onClick: handleClear,
                  size: "small",
                },
              }
            : undefined
        }
        prefix={{ icon: <EvoIconSearch16 /> }}
        ref={ref}
        type="search"
        value={currentValue}
      />
    </span>
  );
}
