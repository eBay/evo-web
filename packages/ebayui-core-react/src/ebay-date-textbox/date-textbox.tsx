import React, {
    ChangeEvent,
    FC,
    FocusEvent,
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
import { DayISO, dateArgToISO, toISO } from "../ebay-calendar/date-utils";
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayMouseEventHandler } from "../common/event-utils/types";
import { isControlled } from "../ebay-textbox/textbox";
import { useFloatingDropdown } from "../common/dropdown";

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
        onChange?: EbayChangeEventHandler<HTMLInputElement, EventData> &
            EbayMouseEventHandler<HTMLInputElement, EventData> &
            EbayFocusEventHandler<HTMLInputElement, EventData>;
        onInputChange?: EbayChangeEventHandler<HTMLInputElement>;
        onInputRangeEndChange?: EbayChangeEventHandler<HTMLInputElement>;
    };

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;

const EbayDateTextbox: FC<EbayDateTextboxProps> = ({
    className,
    inputPlaceholderText = "YYYY-MM-DD",
    a11yOpenPopoverText = "open calendar",
    range,
    value: controlledValue,
    rangeEnd: controlledRangeEnd,
    defaultValue,
    defaultRangeEnd,
    collapseOnSelect,
    children,
    onChange = () => {},
    onInputChange = () => {},
    onInputRangeEndChange = () => {},
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
        const date = new Date(event.target.value);
        const iso = isNaN(date.getTime()) ? null : toISO(date);

        if (index === 0) {
            setInternalValue(iso || "");
        } else {
            setInternalRangeEnd(iso || "");
        }

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

    const [rangeStartPlaceholder, mainPlaceholder] = Array.isArray(inputPlaceholderText)
        ? inputPlaceholderText
        : [inputPlaceholderText, inputPlaceholderText];

    return (
        <span className={classNames("date-textbox", className)} ref={refs.setHost}>
            {range &&
                cloneElement(EbayTextboxComponentEnd, {
                    value: valueToRender,
                    placeholder: rangeStartPlaceholder,
                    onInputChange: (event) => handleInternalChange(event, 0),
                    onBlur: (event) => handleInputChange(event, 0),
                })}

            {cloneElement(
                EbayTextboxComponentStart,
                {
                    ...EbayTextboxComponentStart.props,
                    className: "ebay-date-textbox--main",
                    placeholder: mainPlaceholder,
                    value: range ? rangeEndToRender : valueToRender,
                    onInputChange: (event) => handleInternalChange(event, range ? 1 : 0),
                    onBlur: (event) => handleInputChange(event, range ? 1 : 0),
                },
                <EbayTextboxPostfixIcon name="calendar24" buttonAriaLabel={a11yOpenPopoverText} />,
            )}

            <div hidden={!isPopoverOpen} ref={refs.setOverlay} style={overlayStyles} className="date-textbox__popover">
                <EbayCalendar
                    {...rest}
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
