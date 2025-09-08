import React, {
    Children,
    cloneElement,
    useEffect,
    useRef,
    useState,
    ComponentProps,
    FC,
    KeyboardEvent,
    ReactElement,
    useCallback,
    ChangeEvent,
} from "react";
import classNames from "classnames";
import { EbayIcon } from "../ebay-icon";
import { EbayChangeEventHandler, Key } from "../common/event-utils/types";
import { filterByType } from "../common/component-utils";
import EbayListboxButtonOption, { EbayListboxButtonOptionProps } from "./listbox-button-option";
import { useFloatingDropdown } from "../common/dropdown";

export type ChangeEventProps = {
    index: number;
    selected: string[];
    wasClicked: boolean;
};

export type EbayListboxButtonProps = Omit<ComponentProps<"button">, "onChange"> & {
    selected?: number;
    borderless?: boolean;
    fluid?: boolean;
    maxHeight?: string;
    prefixId?: string;
    prefixLabel?: string;
    floatingLabel?: string;
    split?: "none" | "start" | "end";
    unselectedText?: string;
    onChange?: EbayChangeEventHandler<HTMLButtonElement, ChangeEventProps>;
    onCollapse?: () => void;
    onExpand?: () => void;
};

const ListboxButton: FC<EbayListboxButtonProps> = ({
    children,
    name,
    value,
    selected,
    borderless,
    fluid,
    className,
    maxHeight,
    prefixId,
    prefixLabel,
    floatingLabel,
    split,
    unselectedText = "-",
    onChange = () => {},
    onCollapse = () => {},
    onExpand = () => {},
    ...rest
}) => {
    const optionsContainerRef = useRef<HTMLDivElement>(null);
    const optionsByIndexRef = useRef(new Map());

    const listBoxButtonOptions = filterByType(children, EbayListboxButtonOption);
    if (!listBoxButtonOptions.length) {
        throw new Error(`EbayListboxButton: Please use a
        EbayListboxButtonOption that defines the options of the listbox`);
    }
    const getInitialSelectedOption = (): { option: (typeof listBoxButtonOptions)[0]; index: number } => {
        const selectedIndex =
            selected !== undefined
                ? selected
                : listBoxButtonOptions.findIndex(
                      ({ props }) => (value !== undefined && props.value === value) || props.selected,
                  );
        const index = selectedIndex > -1 || floatingLabel ? selectedIndex : undefined;
        return {
            option: listBoxButtonOptions[index],
            index,
        };
    };

    // Get the default Selected value and set it in the state
    const { option: selectedOptionFromValue, index: initialSelectedOptionIndex } = getInitialSelectedOption();
    // Update the selected option to the state
    const [selectedOption, setSelectedOption] = useState(selectedOptionFromValue);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedOptionIndex);
    // Update the expanded status to the state
    const [expanded, setExpanded] = useState<boolean | undefined>();
    // Additional flag to avoid multiple re-render when users tries to open and close
    const [optionsOpened, setOptionsOpened] = useState(false);
    const [wasClicked, setWasClicked] = useState<boolean>();

    const { overlayStyles, refs } = useFloatingDropdown({
        open: expanded,
    });

    const buttonRef = refs.host as React.MutableRefObject<HTMLButtonElement>;
    const optionsParentContainerRef = refs.overlay as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        setSelectedOption(selectedOptionFromValue);
    }, [value]);

    const childrenArray = Children.toArray(children) as ReactElement<EbayListboxButtonOptionProps>[];
    const getSelectedValueByIndex = (index: number) => childrenArray[index].props.value;
    const getIndexByValue = useCallback(
        (selectedValue) => childrenArray.findIndex(({ props }) => props.value === selectedValue),
        [childrenArray],
    );
    const getSelectedOption = (currentIndex: number) => optionsByIndexRef.current.get(currentIndex);

    const collapseListbox = () => {
        setExpanded(false);
        onCollapse();
    };

    const expandListbox = () => {
        setExpanded(true);
        onExpand();
    };

    const toggleListbox = () => {
        if (expanded) {
            collapseListbox();
        } else {
            expandListbox();
        }
    };

    const onOptionsSelect = (e, index) => {
        // OnSelect set the selectedValue to the state and expanded to false to close the list box
        setSelectedOption(childrenArray[index]);
        setSelectedIndex(index);
        collapseListbox();
        buttonRef.current.focus();
        onChange(e, { index, selected: [String(getSelectedValueByIndex(index))], wasClicked });
        setWasClicked(false);
    };

    const reset = () => {
        collapseListbox();
        setSelectedOption(childrenArray[initialSelectedOptionIndex]);
    };

    const makeOptionActive = (index: number) => {
        const optionEle = optionsContainerRef.current.children[index];
        optionEle.setAttribute(`aria-selected`, "true");
        optionEle.classList.add(`listbox-button__option--active`);
    };

    const makeOptionInActive = (index: number) => {
        const optionEle = optionsContainerRef.current.children[index];
        optionEle.setAttribute(`aria-selected`, "false");
        optionEle.classList.remove(`listbox-button__option--active`);
    };

    // Followed the implementation from W3
    // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
    const scrollOptions = (index: number) => {
        const listboxOptionsContainerNode = optionsParentContainerRef.current;
        const currentTarget = getSelectedOption(index);
        if (listboxOptionsContainerNode.scrollHeight > listboxOptionsContainerNode.clientHeight) {
            const scrollBottom = listboxOptionsContainerNode.clientHeight + listboxOptionsContainerNode.scrollTop;
            const elementBottom = currentTarget.offsetTop + currentTarget.offsetHeight;
            if (elementBottom > scrollBottom) {
                listboxOptionsContainerNode.scrollTop = elementBottom - listboxOptionsContainerNode.clientHeight;
            } else if (currentTarget.offsetTop < listboxOptionsContainerNode.scrollTop) {
                listboxOptionsContainerNode.scrollTop = currentTarget.offsetTop;
            }
        }
    };

    const makeSelections = (updatedIndex) => {
        makeOptionActive(selectedIndex === undefined || updatedIndex === -1 ? 0 : updatedIndex);
        makeOptionInActive(selectedIndex === undefined || selectedIndex === -1 ? 0 : selectedIndex);
        scrollOptions(updatedIndex);
        setSelectedIndex(updatedIndex);
        setSelectedOption(childrenArray[updatedIndex]);
    };

    const focusOptionsContainer = (focusOptions?: FocusOptions) =>
        setTimeout(() => optionsContainerRef?.current?.focus(focusOptions), 0);
    const onButtonClick = () => {
        toggleListbox();
        focusOptionsContainer({ preventScroll: true });
    };
    const onButtonKeyup = (e: KeyboardEvent<HTMLButtonElement>) => {
        switch (e.key as Key) {
            case "Escape":
                collapseListbox();
                break;
            case "Enter":
                focusOptionsContainer();
                break;
            default:
                break;
        }
    };
    const onOptionContainerKeydown = (e: KeyboardEvent): void => {
        switch (e.key as Key) {
            case " ":
            case "PageUp":
            case "PageDown":
            case "Home":
            case "End":
                e.preventDefault();
                break;
            case "Down":
            case "ArrowDown":
                e.preventDefault();
                if (selectedIndex !== listBoxButtonOptions.length - 1) {
                    makeSelections(selectedIndex < listBoxButtonOptions.length - 1 ? selectedIndex + 1 : 0);
                }
                break;
            case "Up":
            case "ArrowUp":
                e.preventDefault();
                if (selectedIndex !== 0) {
                    makeSelections(selectedIndex > 0 ? selectedIndex - 1 : listBoxButtonOptions.length - 1);
                }
                break;
            case "Enter":
                collapseListbox();
                setTimeout(() => setSelectedOption(childrenArray[selectedIndex]));
                setTimeout(() => buttonRef.current.focus(), 0);
                onChange(e as unknown as ChangeEvent<HTMLButtonElement>, {
                    index: selectedIndex,
                    selected: [String(getSelectedValueByIndex(selectedIndex))],
                    wasClicked,
                });
                break;
            case "Esc":
            case "Escape":
                reset();
                break;
            default:
                break;
        }
    };

    // We want to mimic the select box behavior, so we take the onSelect that passed
    // at the parent level and use it for the OnClick on the list box since it is a fake dropdown
    const updateListBoxButtonOptions = listBoxButtonOptions.map((child, index) =>
        cloneElement(child, {
            index,
            key: index,
            selected: selectedOption && child.props.value === selectedOption.props.value,
            id: child.props.id || `listbox_btn_${child.props.value}_${index}`,
            onClick: (e) => onOptionsSelect(e, index),
            innerRef: (optionNode) => {
                if (!optionNode) {
                    optionsByIndexRef.current.delete(index);
                } else {
                    optionsByIndexRef.current.set(index, optionNode);
                }
            },
        }),
    );
    const wrapperClassName = classNames("listbox-button", className, { "listbox-button--fluid": fluid });
    const buttonClassName = classNames("btn", {
        "btn--form": !borderless,
        "btn--borderless": borderless,
        "btn--floating-label": floatingLabel && selectedOption,
        [`btn--split-${split}`]: split && split !== "none",
    });
    const expandBtnTextId = prefixId && "expand-btn-text";

    const buttonLabel = (
        <>
            {floatingLabel && <span className="btn__floating-label">{floatingLabel}</span>}
            {prefixLabel && <span className="btn__label">{prefixLabel}</span>}
            <span className="btn__text" id={expandBtnTextId}>
                {selectedOption?.props.icon || selectedOption?.props.children || unselectedText}
            </span>
        </>
    );

    return (
        <span className={wrapperClassName}>
            <button
                {...rest}
                onFocus={() => setOptionsOpened(true)}
                type="button"
                className={buttonClassName}
                aria-expanded={!!expanded}
                aria-haspopup="listbox"
                aria-labelledby={prefixId && `${prefixId} ${expandBtnTextId}`}
                onClick={onButtonClick}
                // https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
                onMouseDown={(e) => e.preventDefault()}
                onKeyUp={onButtonKeyup}
                ref={refs.setHost}
            >
                <span className="btn__cell">
                    {buttonLabel}
                    <EbayIcon name="chevronDown16" />
                </span>
            </button>
            {(expanded || optionsOpened) && (
                <div
                    className="listbox-button__listbox"
                    ref={refs.setOverlay}
                    style={{ ...overlayStyles, maxHeight: maxHeight }}
                >
                    <div
                        className="listbox-button__options"
                        role="listbox"
                        tabIndex={expanded ? 0 : -1}
                        ref={optionsContainerRef}
                        aria-activedescendant={updateListBoxButtonOptions[selectedIndex]?.props.id}
                        onKeyDown={(e) => onOptionContainerKeydown(e)}
                        // adding onMouseDown preventDefault b/c on IE the onClick event is not being fired on each
                        // option https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setWasClicked(true);
                        }}
                        onBlur={() => {
                            collapseListbox();
                            setTimeout(() => buttonRef.current.focus(), 0);
                        }}
                    >
                        {updateListBoxButtonOptions}
                    </div>
                </div>
            )}
            <select
                hidden
                className="listbox-button__native"
                name={name}
                onChange={(e) => onOptionsSelect(e, getIndexByValue(e.target.value))}
                value={selectedOption ? selectedOption?.props.value : ""}
            >
                {updateListBoxButtonOptions.map((option, i) => (
                    <option value={option.props.value} key={i} />
                ))}
            </select>
        </span>
    );
};

export default ListboxButton;
