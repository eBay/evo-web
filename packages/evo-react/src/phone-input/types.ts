import type { ComponentProps, CSSProperties } from "react";
import type { EvoInputProps, InputSize } from "../input/types";

/** Country metadata used to format a phone number. */
export type PhoneCountry = {
  /** ISO region code for the country selector. */
  countryCode: string;
  /** Calling code displayed beside the input. */
  callingCode: string;
  /** Digit mask used for local number formatting. */
  mask: string;
};

/** Current phone value with its selected country. */
export type PhoneInputValue = {
  /** Phone number formatted using the selected country's mask. */
  value: string;
  /** Phone number digits without punctuation or spaces. */
  rawValue: string;
  /** Calling code without the leading plus sign. */
  callingCode: string;
  /** Selected ISO region code. */
  countryCode: string;
};

export type EvoPhoneInputProps = Omit<
  EvoInputProps,
  | "className"
  | "defaultValue"
  | "fluid"
  | "inputSize"
  | "invalid"
  | "onChange"
  | "postfix"
  | "prefix"
  | "size"
  | "style"
  | "type"
  | "value"
> & {
  /** Controlled phone number. Digits or a formatted number are accepted. */
  value?: string;
  /** Initial number for uncontrolled usage. */
  defaultValue?: string;
  /** Native input change event with the browser's current input value. */
  onChange?: ComponentProps<"input">["onChange"];
  /** Called after a number edit or country change with formatted and raw values. */
  onValueChange?: (value: PhoneInputValue) => void;
  /** Controlled ISO region code; case insensitive. */
  countryCode?: string;
  /** Initial ISO region code for uncontrolled usage. */
  defaultCountryCode?: string;
  /** Called when the country selector requests a new region code. */
  onCountryCodeChange?: (countryCode: string) => void;
  /** Form field name for the country selector's hidden native `<select>`. */
  countryName?: string;
  /** Locale used to sort and name countries. Defaults to the browser locale after hydration. */
  locale?: string;
  /** Accessible base name for the country selector. English default to be overridden is `"Country calling code"`. */
  a11yCountryText?: string;
  /** Localized selected-option text. English default to be overridden is `"selected"`. */
  a11ySelectedText?: string;
  /** Controlled country selector visibility. */
  open?: boolean;
  /** Initial country selector visibility. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called when the country selector opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Makes the combined control fill its containing block. */
  fluid?: boolean;
  /** Sets the regular or large input treatment. Defaults to `"regular"`. */
  size?: InputSize;
  /** Class name applied to the outer `<span>`. */
  className?: string;
  /** Style applied to the outer `<span>`. */
  style?: CSSProperties;
};
