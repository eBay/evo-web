import React, {
    ChangeEvent,
    FC,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    useEffect,
    useRef,
    useState,
    ComponentProps,
    cloneElement,
} from "react";
import Expander from "makeup-expander";
import classNames from "classnames";
import { filterByType } from "../common/component-utils";
import EbayCalendar, { EbayCalendarProps } from "../ebay-calendar/calendar";
import { EbayTextbox, EbayTextboxPostfixIcon } from "../ebay-textbox";
import { DayISO, dateArgToISO } from "../ebay-calendar/date-utils";
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayMouseEventHandler } from "../common/event-utils/types";
import { isControlled } from "../ebay-textbox/textbox";
import { useFloatingDropdown } from "../common/dropdown";
import { EbayIconCalendar24 } from "../ebay-icon/icons/ebay-icon-calendar-24";
import { parse, format, placeholder, getLocale } from "../utils/dates";

type EventData = {
    selected?: string;
    rangeStart?: string;
    rangeEnd?: string;
};

export type EbayDateTextboxProps = Omit<EbayCalendarProps, "interactive" | "navigable" | "numMonths" | "selected"> &
    ComponentProps<"div"> & {
        className?: string;
        value?: string;
        rangeEnd?: string;
        defaultValue?: string;
        defaultRangeEnd?: string;
        range?: boolean;
        collapseOnSelect?: boolean;
        inputPlaceholderText?: string | string[];
        a11yOpenPopoverText?: string;
        locale?: string;
        onChange?: EbayChangeEventHandler<HTMLInputElement, EventData> &
            EbayMouseEventHandler<HTMLInputElement, EventData> &
            EbayFocusEventHandler<HTMLInputElement, EventData>;
        onInputChange?: EbayChangeEventHandler<HTMLInputElement>;
        onInputRangeEndChange?: EbayChangeEventHandler<HTMLInputElement>;
        onInvalidDate?: (event: { value: string; index: number }) => void;
    };

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;

const EbayDateTextbox: FC<EbayDateTextboxProps> = ({
    className,
    inputPlaceholderText,
    a11yOpenPopoverText = "open calendar",
    range,
    value: controlledValue,
    rangeEnd: controlledRangeEnd,
    defaultValue,
    defaultRangeEnd,
    collapseOnSelect,
    locale,
    children,
    onChange = () => {},
    onInputChange = () => {},
    onInputRangeEndChange = () => {},
    onInvalidDate = () => {},
    ...rest
}) => {
    const expander = useRef<typeof Expander>(null);
    const [internalValue, setInternalValue] = useState<string>(defaultValue || "");
    const [internalRangeEnd, setInternalRangeEnd] = useState<string>(defaultRangeEnd || "");
    const valueToRender = isControlled(controlledValue) ? controlledValue : internalValue;
    const rangeEndToRender = isControlled(controlledRangeEnd) ? controlledRangeEnd : internalRangeEnd;

    const firstSelected = dateArgToISO(valueToRender);
    const secondSelected = dateArgToISO(rangeEndToRender);
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const [numMonths, setNumMonths] = useState(1);

    const EbayTextboxComponentChildren = filterByType(children, EbayTextbox);

    // In range mode: first child = end input, second child = start input
    // In single mode: first child = main input, second child = unused
    // The reason is that the latest element will have the postfix icon
    const EbayTextboxComponentStart = range
        ? EbayTextboxComponentChildren[1] || <EbayTextbox /> // Second child is start in range mode
        : EbayTextboxComponentChildren[0] || <EbayTextbox />; // First child is main in single mode

    const EbayTextboxComponentEnd = range
        ? EbayTextboxComponentChildren[0] || <EbayTextbox /> // First child is end in range mode
        : EbayTextboxComponentChildren[1] || <EbayTextbox />; // Second child unused in single mode

    const { overlayStyles, refs } = useFloatingDropdown({
        open: isPopoverOpen,
    });

    const containerRef = refs.host as React.MutableRefObject<HTMLSpanElement>;

    const openPopover = () => {
        setIsPopoverOpen(true);
    };
    const closePopover = () => {
        setIsPopoverOpen(false);
    };

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        expander.current = new Expander(containerRef.current, {
            hostSelector: ".ebay-date-textbox--main > .icon-btn",
            contentSelector: ".date-textbox__popover",
            expandOnClick: true,
            autoCollapse: true,
        });

        containerRef.current.addEventListener("expander-expand", openPopover);
        containerRef.current.addEventListener("expander-collapse", closePopover);

        const calculateNumMonths = () => {
            setNumMonths(document.documentElement.clientWidth < MIN_WIDTH_FOR_DOUBLE_PANE ? 1 : 2);
        };

        calculateNumMonths();

        window.addEventListener("resize", calculateNumMonths);

        return () => {
            expander.current?.destroy();
            window.removeEventListener("resize", calculateNumMonths);
        };
    }, []);

    const handleInputChange = (event: FocusEvent<HTMLInputElement>, index: number) => {
        const userInput = event.target.value;
        const iso = parse(userInput, locale);

        if (iso === null) {
            onInvalidDate({ value: userInput, index });
            return;
        }

        // Valid date - update internal state with ISO format
        if (index === 0) {
            setInternalValue(iso);
        } else {
            setInternalRangeEnd(iso);
        }

        // Emit onChange with ISO format
        if (range) {
            onChange(event, {
                rangeStart: index === 0 ? iso : firstSelected,
                rangeEnd: index === 1 ? iso : secondSelected,
            });
        } else {
            onChange(event, {
                selected: iso,
            });
        }
    };

    const handlePopoverSelect = (event: MouseEvent<HTMLInputElement>, { iso }: { iso: DayISO }) => {
        setInternalValue(iso);

        if (range) {
            const selected = firstSelected || secondSelected;
            const eventData: EventData = {
                rangeStart: iso,
                rangeEnd: selected,
            };

            if (firstSelected && secondSelected) {
                // both were selected reset selection
                setInternalRangeEnd("");
                eventData.rangeEnd = null;
            } else if (selected) {
                // exactly one was selected; fiture out the order
                if (selected < iso) {
                    setInternalValue(selected);
                    setInternalRangeEnd(iso);
                    eventData.rangeStart = selected;
                    eventData.rangeEnd = iso;
                } else {
                    setInternalValue(iso);
                    setInternalRangeEnd(selected);
                    eventData.rangeStart = iso;
                    eventData.rangeEnd = selected;
                }
            }
            onChange(event, eventData);
        } else {
            onChange(event, {
                selected: iso,
            });
        }

        if (collapseOnSelect) {
            expander.current.expanded = false;
        }
    };

    const handleInternalChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        if (index === 0) {
            setInternalValue(event.target.value);
            onInputChange(event);
        } else {
            setInternalRangeEnd(event.target.value);
            onInputRangeEndChange(event);
        }
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        // Only process if user typed a digit
        if (!/^\d$/.test(event.key)) return;

        const input = event.target as HTMLInputElement;
        const { value } = input;

        // Only auto-insert if cursor is at end
        if (input.selectionStart !== value.length) return;

        const { o: order, s: sep } = getLocale(locale);

        // Find which date segment we're currently in
        let i = 0;
        let start = 0;
        for (let currStart; ~(currStart = value.indexOf(sep[i], start)); ) {
            start = currStart + sep[i].length;
            i++;
        }

        // Check if current segment is complete (2 digits for m/d, 4 for y)
        const segmentLength = order[i] === "y" ? 4 : 2;
        if (value.length - start === segmentLength && sep[i]) {
            input.value += sep[i];
            // Update internal state as well
            if (range && input.className.includes("ebay-date-textbox--main")) {
                setInternalRangeEnd(input.value);
            } else {
                setInternalValue(input.value);
            }
        }
    };

    // Generate locale-aware placeholders
    const autoPlaceholder = placeholder(locale);
    const [rangeStartPlaceholder, mainPlaceholder] = Array.isArray(inputPlaceholderText)
        ? inputPlaceholderText
        : inputPlaceholderText
          ? [inputPlaceholderText, inputPlaceholderText]
          : [autoPlaceholder, autoPlaceholder];

    return (
        <span className={classNames("date-textbox", className)} ref={refs.setHost}>
            {range &&
                cloneElement(EbayTextboxComponentEnd, {
                    value: format(valueToRender as DayISO, locale) || valueToRender,
                    placeholder: rangeStartPlaceholder,
                    onInputChange: (event) => handleInternalChange(event, 0),
                    onBlur: (event) => handleInputChange(event, 0),
                    onKeyUp: handleKeyUp,
                })}

            {cloneElement(
                EbayTextboxComponentStart,
                {
                    ...EbayTextboxComponentStart.props,
                    className: "ebay-date-textbox--main",
                    placeholder: mainPlaceholder,
                    value:
                        format((range ? rangeEndToRender : valueToRender) as DayISO, locale) ||
                        (range ? rangeEndToRender : valueToRender),
                    onInputChange: (event) => handleInternalChange(event, range ? 1 : 0),
                    onBlur: (event) => handleInputChange(event, range ? 1 : 0),
                    onKeyUp: handleKeyUp,
                },
                <EbayTextboxPostfixIcon icon={<EbayIconCalendar24 />} buttonAriaLabel={a11yOpenPopoverText} />,
            )}

            <div hidden={!isPopoverOpen} ref={refs.setOverlay} style={overlayStyles} className="date-textbox__popover">
                <EbayCalendar
                    {...rest}
                    locale={locale}
                    range={range}
                    interactive
                    navigable
                    numMonths={numMonths}
                    selected={
                        firstSelected && secondSelected
                            ? [firstSelected, secondSelected]
                            : firstSelected || secondSelected || undefined
                    }
                    onSelect={handlePopoverSelect}
                />
            </div>
        </span>
    );
};

export default EbayDateTextbox;
