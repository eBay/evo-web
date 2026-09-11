import { useId, useState } from "react";
import classNames from "classnames";
import { useFloatingLabel } from "../utils/use-floating-label";
import type { EvoTextareaProps } from "./types";
import "@ebay/skin/textbox.mjs";

/**
 * Text areas allow users to enter text across multiple lines.
 *
 * `EvoTextarea` supports the `floatingLabel`, `invalid`, and `fluid` props. It
 * accepts native controlled and uncontrolled `value` and `defaultValue` patterns
 * and native `<textarea>` props.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoTextarea } from "@evo-web/react/textarea";
 *
 * <EvoTextarea floatingLabel="Description" rows={4} />
 * ```
 *
 * @summary Multi-line text input.
 */
export function EvoTextarea({
  "aria-invalid": ariaInvalid,
  className,
  defaultValue,
  disabled,
  floatingLabel: floatingLabelText,
  floatingLabelStatic,
  fluid,
  id,
  inputSize = "regular",
  invalid,
  onBlur,
  onChange,
  onFocus,
  opaqueLabel,
  placeholder,
  readOnly,
  ref,
  style,
  value,
  ...rest
}: EvoTextareaProps) {
  const generatedId = useId();
  const [focused, setFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const textareaId = id ?? (floatingLabelText ? generatedId : undefined);
  const currentValue = value !== undefined ? value : uncontrolledValue;
  const floatingLabel = useFloatingLabel({
    alwaysUp: floatingLabelStatic,
    containerTagName: fluid ? "div" : "span",
    disabled,
    focused,
    invalid,
    opaque: opaqueLabel,
    size: inputSize,
    text: floatingLabelText,
    value: currentValue,
  });

  const handleChange: NonNullable<EvoTextareaProps["onChange"]> = (event) => {
    if (value === undefined) {
      setUncontrolledValue(event.currentTarget.value);
    }
    onChange?.(event);
  };

  const handleFocus: NonNullable<EvoTextareaProps["onFocus"]> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: NonNullable<EvoTextareaProps["onBlur"]> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  const Wrapper = fluid ? "div" : "span";

  return (
    <floatingLabel.Container {...floatingLabel.containerProps}>
      <floatingLabel.Label {...floatingLabel.labelProps} htmlFor={textareaId} />
      <Wrapper
        className={classNames(
          "textbox",
          disabled && "textbox--disabled",
          invalid && "textbox--invalid",
          readOnly && "textbox--readonly",
          inputSize === "large" && "textbox--large",
          fluid && "textbox--fluid",
          className,
        )}
        style={style}
      >
        <textarea
          {...rest}
          id={textareaId}
          ref={ref}
          className="textbox__control"
          aria-invalid={invalid ? "true" : ariaInvalid}
          defaultValue={defaultValue}
          disabled={disabled}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={floatingLabel.showPlaceholder ? placeholder : undefined}
          readOnly={readOnly}
          value={value}
        />
      </Wrapper>
    </floatingLabel.Container>
  );
}
