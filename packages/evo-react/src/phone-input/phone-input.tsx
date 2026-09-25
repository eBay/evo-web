import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ChangeEvent } from "react";
import classNames from "classnames";
import { EvoInput } from "../input/input";
import { EvoListboxButton } from "../listbox-button/listbox-button";
import type { EvoListboxOption } from "../listbox/types";
import { countries } from "./countries";
import { applyMask, applyMaskWithCursor, stripNonDigits } from "./mask";
import type {
  EvoPhoneInputProps,
  PhoneCountry,
  PhoneInputValue,
} from "./types";
import "@ebay/skin/flag.mjs";
import "@ebay/skin/phone-input.mjs";

type LocalizedCountry = PhoneCountry & { name: string };

function getPhoneValue(
  maskedValue: string,
  country: PhoneCountry,
): PhoneInputValue {
  return {
    value: maskedValue,
    rawValue: stripNonDigits(maskedValue),
    callingCode: country.callingCode,
    countryCode: country.countryCode,
  };
}

/**
 * Phone inputs combine a country calling code selector with a masked number
 * field. Country names are localized, while the number mask follows the
 * selected country.
 *
 * The number accepts `value`/`defaultValue`; the selector accepts
 * `countryCode`/`defaultCountryCode`. `onValueChange` reports both formatted and
 * raw digits with country metadata. Native input event handlers remain native.
 * Give the number an accessible name with `floatingLabel`, `aria-label`, or an
 * external `<label>`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoPhoneInput } from "@evo-web/react/phone-input";
 *
 * <EvoPhoneInput
 *   countryCode="US"
 *   floatingLabel="Phone number"
 *   name="phone"
 *   onValueChange={(phone) => setPhone(phone.rawValue)}
 * />;
 * ```
 *
 * @summary Country-aware phone number field.
 */
export function EvoPhoneInput({
  a11yCountryText = "Country calling code",
  a11ySelectedText = "selected",
  "aria-invalid": ariaInvalid,
  className,
  countryCode,
  countryName,
  defaultCountryCode,
  defaultOpen,
  defaultValue = "",
  disabled = false,
  floatingLabel,
  fluid = false,
  locale,
  onChange,
  onCountryCodeChange,
  onOpenChange,
  onValueChange,
  open,
  readOnly = false,
  ref,
  size = "regular",
  style,
  value,
  ...inputProps
}: EvoPhoneInputProps) {
  const prefixId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pendingCursorPosition = useRef<number | null>(null);
  const [browserLocale, setBrowserLocale] = useState("en-US");
  const [uncontrolledCountryCode, setUncontrolledCountryCode] = useState(
    defaultCountryCode?.toUpperCase() ?? null,
  );
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  useEffect(() => {
    if (locale === undefined && typeof navigator !== "undefined") {
      setBrowserLocale(navigator.language || "en-US");
    }
  }, [locale]);

  const effectiveLocale = locale ?? browserLocale;
  const localizedCountries = useMemo(() => {
    const displayNames = new Intl.DisplayNames([effectiveLocale], {
      type: "region",
    });
    const collator = new Intl.Collator(effectiveLocale);
    return Object.values(countries)
      .map((country): LocalizedCountry => ({
        ...country,
        name: displayNames.of(country.countryCode) ?? country.countryCode,
      }))
      .sort((first, second) => collator.compare(first.name, second.name));
  }, [effectiveLocale]);

  const requestedCountryCode =
    countryCode?.toUpperCase() ?? uncontrolledCountryCode;
  const selectedCountry =
    localizedCountries.find(
      (country) => country.countryCode === requestedCountryCode,
    ) ?? localizedCountries[0];
  const rawValue = stripNonDigits(value ?? uncontrolledValue);
  const maskedValue = applyMask(rawValue, selectedCountry.mask);
  const invalid = ariaInvalid === true || ariaInvalid === "true";
  const countryOptions = useMemo<readonly EvoListboxOption<string>[]>(
    () =>
      localizedCountries.map((country) => ({
        value: country.countryCode,
        text: `${country.name} ( + ${country.callingCode} )`,
        icon: (
          <span
            className={`fflag fflag--${country.countryCode.toLowerCase()}`}
            aria-hidden="true"
          />
        ),
      })),
    [localizedCountries],
  );

  useEffect(() => {
    if (pendingCursorPosition.current !== null && inputRef.current) {
      const position = pendingCursorPosition.current;
      inputRef.current.setSelectionRange(position, position);
      pendingCursorPosition.current = null;
    }
  });

  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref],
  );

  function handleCountryChange(nextCountryCode: string) {
    const nextCountry = countries[nextCountryCode];
    if (!nextCountry) return;
    if (countryCode === undefined) setUncontrolledCountryCode(nextCountryCode);
    onCountryCodeChange?.(nextCountryCode);
    onValueChange?.(
      getPhoneValue(applyMask(rawValue, nextCountry.mask), nextCountry),
    );
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const isDelete =
      typeof InputEvent !== "undefined" &&
      event.nativeEvent instanceof InputEvent &&
      /delete.*Backward/.test(event.nativeEvent.inputType);
    const result = applyMaskWithCursor(
      input.value,
      selectedCountry.mask,
      input.selectionStart ?? input.value.length,
      isDelete,
    );
    pendingCursorPosition.current = result.cursorPosition ?? null;
    const nextRawValue = stripNonDigits(result.maskedValue);
    if (value === undefined) setUncontrolledValue(nextRawValue);
    onValueChange?.(getPhoneValue(result.maskedValue, selectedCountry));
    onChange?.(event);
  }

  return (
    <span
      className={classNames(
        "phone-input",
        disabled && "phone-input--disabled",
        readOnly && "phone-input--readonly",
        invalid && "phone-input--error",
        fluid && "phone-input--fluid",
        size === "large" && "phone-input--large",
        className,
      )}
      style={style}
    >
      <EvoListboxButton
        a11yText={`${a11yCountryText}: ${selectedCountry.name} +${selectedCountry.callingCode}`}
        a11ySelectedText={a11ySelectedText}
        options={countryOptions}
        selected={selectedCountry.countryCode}
        onSelectedChange={handleCountryChange}
        name={countryName}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        disabled={disabled || readOnly}
        split="start"
      />
      <EvoInput
        {...inputProps}
        ref={setInputRef}
        type="tel"
        value={maskedValue}
        onChange={handleInputChange}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={ariaInvalid}
        invalid={invalid}
        floatingLabel={floatingLabel}
        floatingLabelStatic
        inputSize={size}
        fluid={fluid}
        prefix={{ id: prefixId, content: `+ ${selectedCountry.callingCode}` }}
      />
    </span>
  );
}
