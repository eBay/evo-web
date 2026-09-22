import { useCallback, useId, useMemo, useRef, useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import classNames from "classnames";
import { EvoIconAdd24 } from "../icon/icons/add-24";
import { EvoIconDelete24 } from "../icon/icons/delete-24";
import { EvoIconRemove24 } from "../icon/icons/remove-24";
import { EvoIconButton } from "../icon-button";
import { EvoInput } from "../input";
import { useRefTee } from "../utils/use-ref-tee";
import type { EvoNumberInputProps } from "./types";
import "@ebay/skin/number-input.mjs";

type AnimationModifier =
  "increment" | "decrement" | "increment-disabled" | "decrement-disabled";

/**
 * Number inputs let users select a number from a range of values with larger
 * increment and decrement buttons than the browser's default spin controls.
 * A delete action can be added for quantity-input patterns such as shopping
 * carts.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoNumberInput } from "@evo-web/react/number-input";
 *
 * <EvoNumberInput
 *   label="Item quantity"
 *   min={1}
 *   defaultValue={2}
 * />
 * ```
 *
 * @summary Numeric input with increment and decrement controls.
 */
export function EvoNumberInput({
  a11yDeleteText,
  a11yText = "Number input",
  className,
  defaultValue,
  id,
  label,
  max,
  min,
  onChange,
  onDecrement,
  onDelete,
  onIncrement,
  ref,
  value,
  ...rest
}: EvoNumberInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hasDelete = Boolean(a11yDeleteText);
  const resolvedMin = min ?? (hasDelete ? 1 : 0);
  const resolvedMax = max ?? Infinity;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? resolvedMin,
  );
  const containerRef = useRef<HTMLSpanElement>(null);
  const [mergedInputRef, inputRef] = useRefTee<HTMLInputElement | null>(
    ref,
    null,
  );
  const displayValue = value !== undefined ? value : uncontrolledValue;

  const checkBoundary = useCallback(
    (nextValue: number) => {
      if (Number.isNaN(nextValue)) {
        return resolvedMin;
      }
      return Math.min(Math.max(nextValue, resolvedMin), resolvedMax);
    },
    [resolvedMax, resolvedMin],
  );

  const handleAnimation = useCallback((modifier: AnimationModifier) => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    element.classList.remove(
      "number-input--increment",
      "number-input--decrement",
      "number-input--increment-disabled",
      "number-input--decrement-disabled",
    );
    void element.offsetWidth;
    element.classList.add(`number-input--${modifier}`);
  }, []);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleIncrement = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const nextValue = checkBoundary(displayValue + 1);
      handleAnimation(
        nextValue >= resolvedMax ? "increment-disabled" : "increment",
      );
      if (value === undefined) {
        setUncontrolledValue(nextValue);
      }
      onIncrement?.(event, nextValue);
      focusInput();
    },
    [
      checkBoundary,
      displayValue,
      focusInput,
      handleAnimation,
      onIncrement,
      resolvedMax,
      value,
    ],
  );

  const handleDecrement = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const nextValue = checkBoundary(displayValue - 1);
      handleAnimation(
        nextValue <= resolvedMin ? "decrement-disabled" : "decrement",
      );
      if (value === undefined) {
        setUncontrolledValue(nextValue);
      }
      onDecrement?.(event, nextValue);
      focusInput();
    },
    [
      checkBoundary,
      displayValue,
      focusInput,
      handleAnimation,
      onDecrement,
      resolvedMin,
      value,
    ],
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = checkBoundary(parseInt(event.currentTarget.value, 10));

      event.currentTarget.value = String(nextValue);
      if (value === undefined) {
        setUncontrolledValue(nextValue);
      }
      onChange?.(event);
    },
    [checkBoundary, onChange, value],
  );

  const prefix = useMemo(
    () => ({
      icon: (
        <>
          {label && <label htmlFor={inputId}>{label}</label>}
          <EvoIconButton
            aria-hidden="true"
            a11yText={null}
            className="number-input__decrement"
            disabled={displayValue <= resolvedMin}
            onClick={handleDecrement}
            size="small"
            tabIndex={-1}
            transparent
          >
            <EvoIconRemove24 />
          </EvoIconButton>
        </>
      ),
    }),
    [displayValue, handleDecrement, inputId, label, resolvedMin],
  );

  const postfix = useMemo(
    () => ({
      icon: (
        <>
          {hasDelete && (
            <EvoIconButton
              a11yText={a11yDeleteText ?? null}
              className="number-input__delete"
              onClick={onDelete}
              size="small"
              transparent
            >
              <EvoIconDelete24 />
            </EvoIconButton>
          )}
          <EvoIconButton
            aria-hidden="true"
            a11yText={null}
            className="number-input__increment"
            disabled={displayValue >= resolvedMax}
            onClick={handleIncrement}
            size="small"
            tabIndex={-1}
            transparent
          >
            <EvoIconAdd24 />
          </EvoIconButton>
        </>
      ),
    }),
    [
      a11yDeleteText,
      displayValue,
      handleIncrement,
      hasDelete,
      onDelete,
      resolvedMax,
    ],
  );

  const numberInputClasses = classNames(
    "number-input",
    hasDelete && displayValue === 1 && "number-input--show-delete",
    className,
  );

  return (
    <span ref={containerRef} className={numberInputClasses}>
      <EvoInput
        {...rest}
        aria-label={label ? undefined : (a11yText ?? undefined)}
        id={inputId}
        ref={mergedInputRef}
        type="number"
        value={displayValue}
        min={resolvedMin}
        max={resolvedMax}
        onChange={handleInputChange}
        prefix={prefix}
        postfix={postfix}
      />
    </span>
  );
}
