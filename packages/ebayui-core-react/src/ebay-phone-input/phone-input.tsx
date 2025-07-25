import classnames from "classnames";
import React, { ComponentProps, FC, useEffect, useMemo, useRef, useState } from "react";
import { EbayListboxButton, EbayListboxButtonOption } from "../ebay-listbox-button";
import { EbayTextbox, EbayTextboxPrefixText } from "../ebay-textbox";
import { EbayFlag } from "../ebay-flag";
import type { Icon } from "../ebay-flag/types";
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from "../common/event-utils/types";
import type { ChangeEventProps } from "../ebay-listbox-button/listbox-button";

// Import local utilities
import countries, { type CountryInterface } from "./countries";
import mask, { stripNonDigits } from "./mask";

export interface PhoneInputEvent {
    value?: string;
    rawValue?: string;
    callingCode?: string;
    countryCode?: string;
}

type MaskInstance = {
    update: (value: string, mask: string) => void;
    destroy: () => void;
    value: string;
};

export type EbayPhoneInputProps = Omit<ComponentProps<"span">, "onChange"> & {
    countryCode?: string;
    value?: string;
    locale?: string;
    floatingLabel?: string;
    disabled?: boolean;
    readonly?: boolean;
    invalid?: boolean;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, PhoneInputEvent>;
    onBlur?: EbayFocusEventHandler<HTMLInputElement, PhoneInputEvent>;
    onChange?: EbayChangeEventHandler<HTMLInputElement, PhoneInputEvent>;
    onInputChange?: EbayChangeEventHandler<HTMLInputElement, PhoneInputEvent>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, PhoneInputEvent>;
    onKeyPress?: EbayKeyboardEventHandler<HTMLInputElement, PhoneInputEvent>;
    onKeyUp?: EbayKeyboardEventHandler<HTMLInputElement, PhoneInputEvent>;
    onExpand?: () => void;
    onCollapse?: () => void;
};

const getLocaleDefault = (locale?: string): string => {
    return locale || (typeof navigator !== "undefined" ? navigator.language : "en-US");
};

const EbayPhoneInput: FC<EbayPhoneInputProps> = ({
    countryCode,
    value,
    locale,
    floatingLabel,
    disabled,
    readonly,
    invalid,
    className,
    onFocus,
    onBlur,
    onChange,
    onInputChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onExpand,
    onCollapse,
    ...rest
}: EbayPhoneInputProps) => {
    const countryNames = useMemo(() => {
        const normalizedLocale = getLocaleDefault(locale);
        const getName = new Intl.DisplayNames([normalizedLocale], { type: "region" });
        return Object.keys(countries)
            .map((code) => [code, getName.of(code) ?? ""] as [string, string])
            .sort(([, a], [, b]) => a.localeCompare(b));
    }, [locale]);

    const [selectedIndex, setSelectedIndex] = useState(() => {
        if (countryCode) {
            const index = countryNames.findIndex(([code]) => code === countryCode.toUpperCase());
            return index !== -1 ? index : 0;
        }

        return 0;
    });
    const textboxRef = useRef<HTMLInputElement>(null);
    const maskInstance = useRef<MaskInstance | null>(null);

    // Set initial country index based on countryCode prop
    useEffect(() => {
        if (countryCode) {
            const index = countryNames.findIndex(([code]) => code === countryCode.toUpperCase());
            setSelectedIndex(index !== -1 ? index : 0);
        }
    }, [countryCode, countryNames]);

    // Get selected country
    const selectedCountry = (index = selectedIndex) => {
        const [currentCountryCode] = countryNames[index];
        return countries[currentCountryCode];
    };

    // Initialize and manage phone mask
    useEffect(() => {
        if (textboxRef.current && selectedCountry()) {
            if (!maskInstance.current) {
                maskInstance.current = mask(textboxRef.current, selectedCountry().mask);
            }

            maskInstance.current.update(textboxRef.current.value, selectedCountry().mask);
        }
    }, [selectedCountry().mask]);

    // Cleanup mask on unmount
    useEffect(() => {
        return () => {
            if (maskInstance.current) {
                maskInstance.current.destroy();
            }
        };
    }, []);

    // Helper function to create event data
    const createEventData = (index?: number): PhoneInputEvent => ({
        value: maskInstance.current?.value || "",
        rawValue: stripNonDigits(maskInstance.current?.value || ""),
        callingCode: selectedCountry(index).callingCode,
        countryCode: selectedCountry(index).countryCode,
    });

    // Handle country selection change
    const handleCountryChange = (event: React.ChangeEvent<HTMLButtonElement>, { index }: ChangeEventProps) => {
        setSelectedIndex(index);
        if (onChange) {
            onChange(event as React.ChangeEvent<HTMLInputElement>, createEventData(index));
        }
    };

    // Handle textbox events
    const handleTextboxFocus = (event: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onFocus) {
            onFocus(event, createEventData());
        }
    };

    const handleTextboxBlur = (event: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onBlur) {
            onBlur(event, createEventData());
        }
    };

    const handleTextboxChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event, createEventData());
        }
    };

    const handleTextboxInputChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onInputChange) {
            onInputChange(event, createEventData());
        }
    };

    const handleTextboxKeyDown = (event: React.KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onKeyDown) {
            onKeyDown(event, createEventData());
        }
    };

    const handleTextboxKeyPress = (event: React.KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onKeyPress) {
            onKeyPress(event, createEventData());
        }
    };

    const handleTextboxKeyUp = (event: React.KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        if (onKeyUp) {
            onKeyUp(event, createEventData());
        }
    };

    const listboxOptions = countryNames.map(([code, name], index) => {
        const country: CountryInterface = countries[code];
        return (
            <EbayListboxButtonOption
                key={code}
                value={country.callingCode}
                selected={index === selectedIndex}
                icon={<EbayFlag flag={country.countryCode.toLowerCase() as Icon} />}
            >
                <span>
                    {name} ( + {country.callingCode} )
                </span>
            </EbayListboxButtonOption>
        );
    });

    return (
        <span
            {...rest}
            className={classnames("phone-input", className, {
                "phone-input--disabled": disabled,
                "phone-input--readonly": readonly,
                "phone-input--error": invalid,
            })}
        >
            <EbayListboxButton
                split="start"
                disabled={readonly || disabled}
                onChange={handleCountryChange}
                onExpand={onExpand}
                onCollapse={onCollapse}
            >
                {listboxOptions}
            </EbayListboxButton>

            <EbayTextbox
                type="tel"
                value={value}
                disabled={disabled}
                floatingLabel={floatingLabel}
                floatingLabelStatic
                readOnly={readonly}
                invalid={invalid}
                onBlur={handleTextboxBlur}
                onFocus={handleTextboxFocus}
                onKeyDown={handleTextboxKeyDown}
                onKeyPress={handleTextboxKeyPress}
                onKeyUp={handleTextboxKeyUp}
                onChange={handleTextboxChange}
                onInputChange={handleTextboxInputChange}
                ref={textboxRef as unknown as ComponentProps<typeof EbayTextbox>["ref"]}
            >
                <EbayTextboxPrefixText id="phone-prefix">+ {selectedCountry().callingCode}</EbayTextboxPrefixText>
            </EbayTextbox>
        </span>
    );
};

export default EbayPhoneInput;
