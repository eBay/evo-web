import React, { ChangeEvent, cloneElement, FC, KeyboardEvent, MouseEvent, useEffect } from "react";
import { createLinear } from "makeup-active-descendant";
import * as scrollKeyPreventer from "makeup-prevent-scroll-keys";
import typeahead from "makeup-typeahead";
import classNames from "classnames";
import { ComponentProps, ReactNode, useRef, useState } from "react";
import { filterByType, scroll } from "../utils";
import { EbayListboxOption } from "./listbox-option";
import { EbayChangeEventHandler } from "../events";

const TYPEAHEAD_TIMEOUT_LENGTH = 1300;

export type ChangeEventProps = {
    index: number;
    selected: string[];
    wasClicked: boolean;
};

export type EbayListboxProps = Omit<ComponentProps<"div">, "onChange"> & {
    name?: string;
    disabled?: boolean;
    children: ReactNode;
    listSelection?: "auto" | "manual";
    typeaheadTimeoutLength?: number;
    maxHeight?: string | number;
    selectClassName?: string;
    onChange?: EbayChangeEventHandler<HTMLSpanElement, ChangeEventProps>;
    onEscape?: () => void;
};

export const EbayListbox: FC<EbayListboxProps> = ({
    name,
    className,
    disabled,
    children,
    tabIndex = 0,
    listSelection,
    maxHeight,
    typeaheadTimeoutLength,
    selectClassName,
    onChange = () => {},
    onEscape = () => {},
    ...rest
}) => {
    const options = filterByType(children, EbayListboxOption);
    const selectedOptionComponentIndex = options.findIndex((option) => option.props.selected);

    const [selectedIndex, setSelectedIndex] = useState(options.findIndex((option) => option.props.selected));

    useEffect(() => {
        if (selectedOptionComponentIndex !== selectedIndex) {
            setSelectedIndex(selectedOptionComponentIndex);
        }
    }, [selectedOptionComponentIndex]);

    const containerRef = useRef<HTMLDivElement>(null);
    const activeDescendantRef = useRef<ReturnType<typeof createLinear>>(null);
    const typeaheadRef = useRef<ReturnType<typeof typeahead>>(null);
    const wasClickedRef = useRef(false);

    function handleChange(
        event: MouseEvent | CustomEvent | Event | KeyboardEvent,
        nextSelectedIndex: number,
        wasClicked: boolean,
    ) {
        if (nextSelectedIndex === selectedIndex) {
            return;
        }

        const option = options[nextSelectedIndex];

        if (option.props.disabled) {
            return;
        }

        setSelectedIndex(nextSelectedIndex);
        onChange(event as unknown as ChangeEvent<HTMLSpanElement>, {
            index: nextSelectedIndex,
            selected: [options[nextSelectedIndex].props.value],
            wasClicked,
        });
    }

    function handleKeyDown(event: KeyboardEvent) {
        switch (event.code) {
            case "Esc":
            case "Escape":
                onEscape();
                break;
            case "Space":
            case "Enter":
                handleChange(event, activeDescendantRef.current.index, false);
                break;
            default:
                break;
        }

        const itemIndex = typeaheadRef.current.getIndex(
            containerRef.current.children,
            event.key,
            typeaheadTimeoutLength || TYPEAHEAD_TIMEOUT_LENGTH,
        );

        if (itemIndex !== -1) {
            activeDescendantRef.current.index = itemIndex;
            const selectedOption = containerRef.current.querySelectorAll("[role=option]")[itemIndex] as HTMLElement;
            containerRef.current.scrollTop = selectedOption.offsetTop - containerRef.current.offsetHeight / 2;
        }
    }

    function handleMouseDown() {
        wasClickedRef.current = true;
    }

    useEffect(() => {
        const handleListboxChange = (event: CustomEvent) => {
            const nextSelectedIndex = parseInt(event.detail.toIndex, 10);
            const el = containerRef.current
                ? (containerRef.current.querySelectorAll("[role=option]")[selectedIndex] as HTMLElement)
                : null;

            const wasClicked = wasClickedRef.current;

            scroll(el);

            if (wasClickedRef.current) {
                wasClickedRef.current = false;
            }

            handleChange(event, nextSelectedIndex, wasClicked);
        };

        if (options.length && !disabled) {
            const container = containerRef.current;
            const optionsContainer = containerRef.current;

            activeDescendantRef.current = createLinear(
                container,
                optionsContainer,
                optionsContainer,
                ".listbox__option[role=option]",
                {
                    activeDescendantClassName: "listbox__option--active",
                    autoInit: selectedIndex,
                    autoReset: null,
                    autoScroll: listSelection !== "auto",
                },
            );

            // Add scroll key prevention to the options container
            scrollKeyPreventer.add(container);

            typeaheadRef.current = typeahead();
        }

        if (listSelection === "auto") {
            containerRef.current.addEventListener("activeDescendantChange", handleListboxChange);
        }

        return () => {
            if (activeDescendantRef.current) {
                activeDescendantRef.current.reset();
                activeDescendantRef.current.destroy();
                activeDescendantRef.current = undefined;
            }

            if (typeaheadRef.current) {
                typeaheadRef.current.destroy();
                typeaheadRef.current = undefined;
            }

            if (containerRef.current) {
                containerRef.current.removeEventListener("activeDescendantChange", handleListboxChange);
                // Remove scroll key prevention
                scrollKeyPreventer.remove(containerRef.current);
            }
        };
    }, [selectedIndex, disabled, listSelection]);

    return (
        <>
            <div
                {...rest}
                tabIndex={tabIndex}
                ref={containerRef}
                role="listbox"
                onKeyDown={listSelection !== "auto" ? handleKeyDown : undefined}
                className={classNames("listbox__options", className)}
                style={{ maxHeight }}
            >
                {options.map((option, index) =>
                    cloneElement(option, {
                        key: option.props.value || index,
                        ...option.props,
                        onMouseDown: listSelection === "auto" ? handleMouseDown : undefined,
                        onClick: (event) => {
                            if (listSelection !== "auto") {
                                handleChange(event, index, true);
                            }
                        },
                        selected: index === selectedIndex,
                    }),
                )}
            </div>

            <select
                hidden
                className={classNames("listbox__native", selectClassName)}
                name={name}
                disabled={disabled}
                value={options[selectedIndex]?.props.value}
                onChange={/* NO-OP, this is to hide React warnings */ () => {}}
            >
                {options.map((option, index) => (
                    <option
                        key={option.props.value || index}
                        value={option.props.value}
                        disabled={option.props.disabled}
                    />
                ))}
            </select>
        </>
    );
};
