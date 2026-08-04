import { useId, useState } from "react";
import classNames from "classnames";
import { EvoIconButton } from "../icon-button";
import { useFloatingLabel } from "../utils/use-floating-label";
import type { EvoInputProps } from "./types";
import "@ebay/skin/textbox.mjs";

function hasContent(content: unknown) {
  return (
    content !== undefined && content !== null && typeof content !== "boolean"
  );
}

function joinIds(...values: Array<string | undefined>) {
  const ids = values.flatMap((value) => value?.trim().split(/\s+/) ?? []);
  return [...new Set(ids)].filter(Boolean).join(" ") || undefined;
}

export function EvoInput({
  "aria-describedby": ariaDescribedBy,
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
  placeholder,
  postfix,
  prefix,
  readOnly,
  ref,
  style,
  value,
  ...rest
}: EvoInputProps) {
  const generatedInputId = useId();
  const generatedPrefixId = useId();
  const generatedPostfixId = useId();
  const [focused, setFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const {
    content: prefixContent,
    icon: prefixIcon,
    id: customPrefixId,
    ...prefixTextProps
  } = prefix ?? {};
  const {
    buttonProps: postfixButtonProps,
    content: postfixContent,
    icon: postfixIcon,
    id: customPostfixId,
    ...postfixTextProps
  } = postfix ?? {};

  const hasPrefixContent = hasContent(prefixContent);
  const hasPostfixContent = hasContent(postfixContent);
  const prefixId = customPrefixId || generatedPrefixId;
  const postfixId = customPostfixId || generatedPostfixId;
  const inputId = id ?? (floatingLabelText ? generatedInputId : undefined);
  const currentValue = value !== undefined ? value : uncontrolledValue;
  const floatingLabel = useFloatingLabel({
    alwaysUp: floatingLabelStatic,
    containerTagName: fluid ? "div" : "span",
    disabled,
    focused,
    invalid,
    size: inputSize,
    text: floatingLabelText,
    value: currentValue,
  });
  const describedBy = joinIds(
    ariaDescribedBy,
    hasPrefixContent ? prefixId : undefined,
    hasPostfixContent ? postfixId : undefined,
  );

  const handleChange: NonNullable<EvoInputProps["onChange"]> = (event) => {
    if (value === undefined) {
      setUncontrolledValue(event.currentTarget.value);
    }
    onChange?.(event);
  };

  const handleFocus: NonNullable<EvoInputProps["onFocus"]> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: NonNullable<EvoInputProps["onBlur"]> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  const Wrapper = fluid ? "div" : "span";

  return (
    <floatingLabel.Container {...floatingLabel.containerProps}>
      <floatingLabel.Label {...floatingLabel.labelProps} htmlFor={inputId} />
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
        {prefixIcon}
        {hasPrefixContent && (
          <span {...prefixTextProps} id={prefixId}>
            {prefixContent}
          </span>
        )}
        <input
          {...rest}
          id={inputId}
          ref={ref}
          className="textbox__control"
          aria-describedby={describedBy}
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
        {hasPostfixContent && (
          <span {...postfixTextProps} id={postfixId}>
            {postfixContent}
          </span>
        )}
        {postfixIcon && postfixButtonProps ? (
          <EvoIconButton
            {...postfixButtonProps}
            disabled={disabled || postfixButtonProps.disabled}
            transparent
          >
            {postfixIcon}
          </EvoIconButton>
        ) : (
          postfixIcon
        )}
      </Wrapper>
    </floatingLabel.Container>
  );
}
