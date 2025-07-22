/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { ComponentProps, FC, MutableRefObject, useCallback, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { useFloatingLabel } from "../common/floating-label-utils/hooks";
import { filterByType, findComponent } from "../utils";
import EbayComboboxButton from "./combobox-button";
import EbayComboboxOption from "./combobox-option";
import {
    ActiveDescendantChangeHandler,
    useActiveDescendant,
    useExpander,
    useFloatingDropdown,
} from "../common/dropdown";
import {
    Autocomplete,
    EventData,
    ListSelection,
    ComboboxSelectHandler,
    ComboboxSelectEventArgs,
    ComboboxFocusHandler,
    ComboboxClickHandler,
    ComboboxInputChangeHandler,
    ComboboxChangeHandler,
} from "./types";

export type EbayComboboxProps = Omit<
    ComponentProps<"input">,
    "defaultValue" | "value" | "onFocus" | "onInputChange" | "onChange" | "onSelect" | "autoComplete"
> & {
    floatingLabel?: string;
    fluid?: boolean;
    expanded?: boolean;
    borderless?: boolean;
    value?: string;
    defaultValue?: string;
    autocomplete?: Autocomplete;
    listSelection?: ListSelection;
    opaqueLabel?: boolean;
    dropdownRef?: MutableRefObject<HTMLElement>;
    onFocus?: ComboboxFocusHandler;
    onClick?: ComboboxClickHandler;
    onExpand?: () => void;
    onCollapse?: () => void;
    onInputChange?: ComboboxInputChangeHandler;
    onFloatingLabelInit?: () => void;
    onChange?: ComboboxChangeHandler;
    onSelect?: ComboboxSelectHandler;
};

const EbayCombobox: FC<EbayComboboxProps> = ({
    className,
    floatingLabel: floatingLabelText,
    fluid,
    expanded,
    borderless,
    autocomplete = "none",
    listSelection = "automatic",
    defaultValue = "",
    value: controlledValue,
    placeholder,
    opaqueLabel,
    children,
    dropdownRef,
    onFocus = () => {},
    onClick = () => {},
    onExpand = () => {},
    onCollapse = () => {},
    onInputChange = () => {},
    onFloatingLabelInit = () => {},
    onChange = () => {},
    onSelect = () => {},
    onKeyDown = () => {},
    ...rest
}) => {
    const button = findComponent(children, EbayComboboxButton);
    const options = filterByType(children, EbayComboboxOption);
    const containerRef = useRef(null);
    const comboboxRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLDivElement>(null);

    function filterOptions(): typeof options {
        if (autocomplete === "none") {
            return options || [];
        }

        return options.filter((option) =>
            option.props.text?.toLowerCase().includes(currentValue?.trim()?.toLowerCase()),
        );
    }

    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");
    const currentValue = typeof controlledValue !== "undefined" ? controlledValue : uncontrolledValue;
    if (typeof controlledValue === "undefined" && !onInputChange) {
        console.warn(
            "EbayCombobox: You provided a value prop without an onInputChange handler." +
                "This will render a read-only input field. " +
                "If you want the input to be editable, provide an onInputChange handler.",
        );
    }

    const visibleOptions = useMemo(() => filterOptions(), [autocomplete, currentValue, options]);
    const expander = useExpander(
        {
            ref: visibleOptions.length ? dropdownRef || containerRef : null,
            expanded,
            options: {
                autoCollapse: expanded,
                expandOnFocus: true,
                collapseOnFocusOut: !expanded && Boolean(button),
                contentSelector: '[role="listbox"]',
                hostSelector: '[role="combobox"]',
                expandedClass: "combobox--expanded",
                simulateSpacebarClick: true,
            },
            onExpand,
            onCollapse,
        },
        [expanded, visibleOptions.length > 0],
    );

    const { overlayStyles, refs } = useFloatingDropdown({
        open: expander.isExpanded,
    });

    const setComboboxValueFromSelection = (event: ComboboxSelectEventArgs, text: string) => {
        if (currentValue !== text) {
            setUncontrolledValue(text);

            if (comboboxRef.current) {
                comboboxRef.current.selectionStart = comboboxRef.current.selectionEnd = text.length;
                comboboxRef.current.focus();
            }

            onSelect(event, buildComboboxEventData({ currentInputValue: text }));
        }
    };

    const handleActiveDescendantChange = useCallback<ActiveDescendantChangeHandler>(
        (event, { toIndex }) => {
            if (listSelection === "automatic") {
                const selected = visibleOptions[toIndex];

                if (selected && comboboxRef.current) {
                    // Don't update the state nor call callbacks, but manually set the value of the input so
                    // it doesn't trigger the visibleOptions filter during keyboard navigation
                    comboboxRef.current.value = selected.props.text;
                }
            }
        },
        [listSelection, visibleOptions],
    );

    const activeDescendant = useActiveDescendant({
        ref: containerRef,
        focusElementRef: comboboxRef,
        itemContainerRef: listboxRef,
        disabled: !visibleOptions.length,
        onChange: handleActiveDescendantChange,
        options: {
            activeDescendantClassName: "combobox__option--active",
            autoInit: -1,
            autoReset: -1,
            autoScroll: true,
            axis: "y",
        },
    });

    const containerTagName = fluid ? "div" : "span";
    const floatingLabel = useFloatingLabel({
        text: floatingLabelText,
        disabled: rest.disabled,
        containerTagName,
        opaqueLabel,
        onMount: onFloatingLabelInit,
    });

    const Container = floatingLabelText ? floatingLabel.Container : containerTagName;

    // This prevents the button from closing the listbox when clicked in the blur event of the input.
    const buttonClicked = useRef(false);
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        buttonClicked.current = true;
        button?.props.onClick?.(event);
    };
    const handleButtonMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        buttonClicked.current = true;
        button?.props.onMouseDown?.(event);
    };

    function collapseListbox() {
        expander.collapse();
    }

    function expandListbox() {
        expander.expand();
    }

    function getSelectedOption(currentInputValue: string): { text?: string; value?: string } {
        const selectedOption = visibleOptions.find((option) => option.props.text === currentInputValue);
        return selectedOption ? { text: selectedOption.props.text, value: selectedOption.props.value } : {};
    }

    function buildComboboxEventData(data: EventData): EventData {
        return {
            currentInputValue: data.currentInputValue,
            selectedOption: getSelectedOption(data.currentInputValue),
        };
    }

    const handleComboboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setUncontrolledValue(event.target.value);
        onInputChange(event, buildComboboxEventData({ currentInputValue: inputValue }));
    };

    const lastValue = useRef("");
    const handleComboboxBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!buttonClicked.current) {
            collapseListbox();
        }
        buttonClicked.current = false;

        const inputValue = event.target.value;

        if (inputValue !== lastValue.current) {
            lastValue.current = inputValue;
            onChange(event, buildComboboxEventData({ currentInputValue: inputValue }));
        }
    };

    const handleComboboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement === document.activeElement) {
            expandListbox();
        }

        onClick(event, buildComboboxEventData({ currentInputValue: inputElement.value }));
    };

    const handleComboboxFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        onFocus(event, buildComboboxEventData({ currentInputValue: event.target.value }));
    };

    const handleComboboxKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowDown") {
            expandListbox();
        } else if (event.key === "Escape") {
            collapseListbox();
        } else if (event.key === "Enter") {
            if (expander.isExpanded) {
                const selectedIndex = activeDescendant.getIndex();

                if (selectedIndex !== -1) {
                    setComboboxValueFromSelection(event, visibleOptions[selectedIndex].props.text);
                }

                if (!expanded) {
                    collapseListbox();
                }
            }
        }

        onKeyDown(event);
    };

    return (
        <Container ref={containerRef} className={classNames(`combobox`, className)}>
            <floatingLabel.Label htmlFor={rest.id} />

            <span
                className={classNames("combobox__control", {
                    "combobox__control--actionable": button,
                    "combobox__control--borderless": borderless,
                })}
            >
                <input
                    {...rest}
                    ref={(inputElement) => {
                        refs.setHost(inputElement);
                        comboboxRef.current = inputElement;
                    }}
                    type="text"
                    role="combobox"
                    value={currentValue}
                    aria-autocomplete={autocomplete}
                    aria-haspopup="listbox"
                    autoComplete="off"
                    aria-expanded="false"
                    onChange={handleComboboxChange}
                    onBlur={handleComboboxBlur}
                    onClick={handleComboboxClick}
                    onFocus={handleComboboxFocus}
                    onKeyDown={handleComboboxKeydown}
                    placeholder={placeholder}
                />

                {button
                    ? React.cloneElement(button, {
                          onClick: handleButtonClick,
                          onMouseDown: handleButtonMouseDown,
                      })
                    : null}
            </span>

            {visibleOptions.length > 0 && (
                <div
                    role="listbox"
                    className="combobox__listbox"
                    ref={(listboxElement) => {
                        refs.setOverlay(listboxElement);
                        listboxRef.current = listboxElement;
                    }}
                    style={overlayStyles}
                >
                    {visibleOptions.map((option) =>
                        React.cloneElement(option, {
                            selected: (option.props.value || option.props.text) === currentValue,
                            onClick: (event) => {
                                setComboboxValueFromSelection(event, option.props.text);
                                option.props.onClick?.(event);
                            },
                            onMouseDown: (event) => {
                                setComboboxValueFromSelection(event, option.props.text);
                                option.props.onMouseDown?.(event);
                            },
                        }),
                    )}
                </div>
            )}
        </Container>
    );
};

export default EbayCombobox;
