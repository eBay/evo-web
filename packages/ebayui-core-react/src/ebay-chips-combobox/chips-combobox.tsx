import React, { useState } from "react";
import { ChipsComboboxChangeHandler } from "./types";
import classNames from "classnames";
import { EbayCombobox, EbayComboboxOption, EbayComboboxProps } from "../ebay-combobox";
import { filterByType } from "../utils";
import { EbayChip } from "../ebay-chip";

export type EbayChipsComboboxProps = Omit<EbayComboboxProps, "onChange"> & {
    error?: boolean;
    selected?: string[];
    defaultSelected?: string[];
    disabled?: boolean;
    a11yDeleteButtonText?: string;
    onChange?: ChipsComboboxChangeHandler;
};

const EbayChipsCombobox: React.FC<EbayChipsComboboxProps> = ({
    className,
    fluid,
    error,
    disabled,
    selected: controlledSelected,
    defaultSelected,
    a11yDeleteButtonText = "Remove",
    onChange,
    children,
    ...rest
}) => {
    const options = filterByType(children, EbayComboboxOption);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultSelected || []);
    const currentSelected = controlledSelected || selectedOptions;
    const [inputValue, setInputValue] = useState<string>("");
    const containerRef = React.useRef<HTMLSpanElement>(null);

    const handleSelect = (event, value) => {
        const newSelectedOptions = [...currentSelected, value];
        setSelectedOptions(newSelectedOptions);
        onChange?.(event, { selected: [...newSelectedOptions] });
        setInputValue("");
    };

    const handleDelete = (event, index) => {
        const newSelectedOptions = currentSelected.filter((_, i) => i !== index);
        setSelectedOptions(newSelectedOptions);
        onChange?.(event, { selected: [...newSelectedOptions] });
    };

    const handleKeydown = (event) => {
        if (event.key === "Enter") {
            const value = event.target.value;
            event.preventDefault();
            if (value && !currentSelected.includes(value)) {
                handleSelect(event, value);
            }
        }
    };

    const handleComboboxInputChange = (event, data) => {
        setInputValue(data.currentInputValue);
    };

    if (controlledSelected && defaultSelected) {
        throw new Error('EbayChipsCombobox: You cannot use "selected" and "defaultSelected" at the same time.');
    }

    if (controlledSelected && !onChange) {
        throw new Error('EbayChipsCombobox: You must provide an "onChange" prop when using the "selected" prop.');
    }

    return (
        <span
            ref={containerRef}
            className={classNames(className, "chips-combobox", {
                "chips-combobox--fluid": fluid,
                "chips-combobox--error": error,
            })}
            aria-disabled={disabled ? "true" : undefined}
        >
            {currentSelected.length ? (
                <ul className="chips-combobox__items">
                    {currentSelected.map((option, index) => (
                        <li key={index}>
                            <EbayChip
                                a11yDeleteButtonText={`${a11yDeleteButtonText} ${option}`}
                                onDelete={(event) => handleDelete(event, index)}
                                disabled={disabled}
                            >
                                {option}
                            </EbayChip>
                        </li>
                    ))}
                </ul>
            ) : null}

            <EbayCombobox
                {...rest}
                className="chips-combobox__combobox"
                disabled={disabled}
                dropdownRef={containerRef}
                value={inputValue}
                autocomplete="list"
                onSelect={(event, data) => handleSelect(event, data.selectedOption.text)}
                onInputChange={handleComboboxInputChange}
                onKeyDown={handleKeydown}
            >
                {options.filter((option) => !currentSelected.includes(option.props.text))}
            </EbayCombobox>
        </span>
    );
};

export default EbayChipsCombobox;
