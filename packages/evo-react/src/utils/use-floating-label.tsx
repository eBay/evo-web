import type { ComponentProps } from "react";
import classNames from "classnames";
import "@ebay/skin/floating-label.mjs";

type FloatingLabelContainerProps = ComponentProps<"div"> &
  ComponentProps<"span">;
type FloatingLabelLabelProps = ComponentProps<"label">;

type UseFloatingLabelProps = {
  alwaysUp?: boolean;
  containerClassName?: string;
  containerTagName?: "div" | "span";
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  labelClassName?: string;
  opaque?: boolean;
  size?: "regular" | "large";
  text?: string;
  value?: unknown;
};

function FragmentContainer({ children }: FloatingLabelContainerProps) {
  return <>{children}</>;
}

function EmptyLabel() {
  return null;
}

function hasValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== undefined && value !== null && String(value).length > 0;
}

export function useFloatingLabel({
  alwaysUp,
  containerClassName,
  containerTagName = "span",
  disabled,
  focused,
  invalid,
  labelClassName,
  opaque,
  size,
  text,
  value,
}: UseFloatingLabelProps) {
  const isFloating = hasValue(value) || focused || alwaysUp;
  const Container = text ? containerTagName : FragmentContainer;
  const Label: "label" | ((props: FloatingLabelLabelProps) => null) = text
    ? "label"
    : EmptyLabel;

  return {
    Container,
    Label,
    containerProps: text
      ? {
          className: classNames(
            "floating-label",
            size === "large" && "floating-label--large",
            opaque && "floating-label--opaque",
            containerClassName,
          ),
        }
      : {},
    labelProps: text
      ? {
          children: text,
          className: classNames(
            "floating-label__label",
            "floating-label__label--animate",
            disabled && "floating-label__label--disabled",
            invalid && "floating-label__label--invalid",
            !isFloating && "floating-label__label--inline",
            isFloating && "floating-label__label--focus",
            labelClassName,
          ),
        }
      : {},
    showPlaceholder: !text || Boolean(isFloating),
  };
}
