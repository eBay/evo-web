import React, {
    ComponentProps,
    FC,
    Fragment,
    KeyboardEvent,
    MouseEvent,
    RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import * as scrollKeyPreventer from "makeup-prevent-scroll-keys";
import { createLinear } from "makeup-roving-tabindex";
import { filterByType, findComponent, useRandomId, withForwardRef } from "../utils";
import EbayFilterMenuFooterButton, { EbayFilterMenuFooterButtonProps } from "./filter-menu-footer-button";
import EbayFilterMenuItem, { EbayFilterMenuItemProps } from "./filter-menu-item";
import {
    FilterMenuChange,
    FilterMenuEventData,
    FilterMenuFooterClick,
    FilterMenuFormSubmit,
    FilterMenuSearchChange,
    Type,
    Variant,
} from "./types";
import classNames from "classnames";
import { EbayIcon } from "../ebay-icon";
import { EbayButton } from "../ebay-button";

export type EbayFilterMenuProps = Omit<ComponentProps<"span">, "onChange"> & {
    classPrefix?: string;
    formName?: string;
    formAction?: string;
    formMethod?: string;
    variant?: Variant;
    type?: Type;
    searchHeaderValue?: string;
    searchHeaderPlaceholderText?: string;
    a11ySearchHeaderClearText?: string;
    forwardedRef?: RefObject<HTMLSpanElement>;
    onSearchChange?: FilterMenuSearchChange;
    onFormSubmit?: FilterMenuFormSubmit;
    onFooterClick?: FilterMenuFooterClick;
    onChange?: FilterMenuChange;
};

const EbayFilterMenu: FC<EbayFilterMenuProps> = ({
    classPrefix,
    className,
    formMethod,
    formAction,
    formName,
    variant,
    children,
    type,
    searchHeaderValue,
    searchHeaderPlaceholderText,
    a11ySearchHeaderClearText,
    forwardedRef,
    onSearchChange,
    onFormSubmit,
    onFooterClick,
    onChange,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...rest
}) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const isForm = variant === "form";
    const isRadio = type === "radio";
    const baseClass = classPrefix || "filter-menu";
    const footerButton = findComponent(children, EbayFilterMenuFooterButton);
    const items = filterByType(children, EbayFilterMenuItem);
    const menuId = useRandomId();
    const [searchTerm, setSearchTerm] = useState(searchHeaderValue || "");
    const [checkedIndex, setCheckedIndex] = useState<number>(() =>
        items.map((item, index) => item.props.checked && index).find((value) => typeof value === "number"),
    );
    const [checkedItems, setCheckedItems] = useState<boolean[]>(() => items.map((item) => Boolean(item.props.checked)));

    useEffect(() => {
        let rovingTabIndex: ReturnType<typeof createLinear>;

        if (!isForm) {
            rovingTabIndex = createLinear(menuRef.current, `div`, {
                autoInit: "interactive",
            });
            scrollKeyPreventer.add(menuRef.current);
        }

        return () => {
            if (rovingTabIndex) {
                rovingTabIndex.destroy();
                rovingTabIndex = null;
            }
        };
    }, [isForm]);

    const buildCurrentEventData: () => FilterMenuEventData = () => ({
        checked: items
            .filter((item, index) => (isRadio ? checkedIndex === index : checkedItems[index]))
            .map((item) => item.props.value),
        checkedIndex: items
            .map((item, index) => {
                if (isRadio) {
                    return index === checkedIndex && index;
                }

                return checkedItems[index] && index;
            })
            .filter((value) => typeof value === "number"),
    });
    const handleFooterButtonClick = (event) => {
        onFooterClick?.(event, buildCurrentEventData());
    };

    const handleFormSubmit = (event) => {
        onFormSubmit?.(event, buildCurrentEventData());
    };

    const handleClearSearch = (event) => {
        setSearchTerm("");
        onSearchChange?.(event, {
            searchTerm: "",
        });
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearchChange?.(event, {
            searchTerm: event.target.value,
        });
    };

    const Container = isForm ? "form" : Fragment;
    const containerProps = isForm
        ? {
              name: formName,
              action: formAction,
              method: formMethod,
              onSubmit: handleFormSubmit,
          }
        : {};

    const handleItemClick = (
        event: KeyboardEvent<HTMLLabelElement | HTMLDivElement> | MouseEvent<HTMLLabelElement | HTMLDivElement>,
        {
            checked,
            index: indexToToggle,
        }: {
            checked?: boolean;
            index: number;
        },
    ) => {
        const target = event.target as HTMLInputElement;
        // When the item is clicked, an event click is triggered on the Label and
        // then on the checkbox. We need to ignore the click event on the label
        // to avoid triggering the onClick event twice.
        if (isForm && !target.type) {
            return;
        }

        if (isRadio) {
            setCheckedIndex(indexToToggle);
            onChange?.(event, {
                index: indexToToggle,
                checked: [items[indexToToggle].props.value],
                checkedIndex: [indexToToggle],
                currentChecked: checked,
            });
        } else {
            const newCheckedItems = checkedItems.map((itemChecked, itemIndex) => {
                if (itemIndex === indexToToggle) {
                    return checked;
                }
                return itemChecked;
            });

            onChange?.(event, {
                index: indexToToggle,
                checked: items.filter((item, index) => newCheckedItems[index]).map((item) => item.props.value),
                checkedIndex: newCheckedItems
                    .map((isChecked, index) => isChecked && index)
                    .filter((value) => typeof value === "number"),
                currentChecked: checked,
            });

            setCheckedItems(newCheckedItems);
        }
    };

    return (
        <span
            {...rest}
            ref={forwardedRef}
            className={classNames(className, `${classPrefix ? `${baseClass}__menu` : baseClass}`)}
        >
            {searchHeaderPlaceholderText ? (
                <div className="filter-menu__header">
                    <EbayIcon name="search16" />

                    <input
                        type="text"
                        value={searchTerm}
                        className="filter-menu__search"
                        placeholder={searchHeaderPlaceholderText}
                        aria-owns={menuId}
                        onChange={handleSearchChange}
                    />

                    <EbayButton type="button" onClick={handleClearSearch} aria-label={a11ySearchHeaderClearText}>
                        <EbayIcon name="clear20" />
                    </EbayButton>
                </div>
            ) : null}
            <Container {...containerProps}>
                <div
                    id={menuId}
                    ref={menuRef}
                    className={`${baseClass}__items`}
                    role={!isForm ? "menu" : undefined}
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledBy}
                >
                    {items.map((item, index) =>
                        React.cloneElement<EbayFilterMenuItemProps>(item, {
                            __classPrefix: baseClass,
                            __type: type,
                            __variant: variant,
                            checked: isRadio ? index === checkedIndex : checkedItems[index],
                            onClick: (event, { checked, value }) => {
                                if (item.props.disabled) {
                                    return;
                                }

                                item.props.onClick?.(event, { checked, value });
                                handleItemClick(event, {
                                    checked,
                                    index,
                                });
                            },
                            onKeyDown: (event: KeyboardEvent<HTMLLabelElement & HTMLDivElement>) => {
                                if (item.props.disabled) {
                                    return;
                                }

                                item.props.onKeyDown?.(event);
                                // For "Space" key, the onClick event is triggered on checkboxes, so we ignore on forms
                                if (event.key === "Enter" || (event.key === " " && !isForm)) {
                                    const currentChecked = isRadio ? index === checkedIndex : checkedItems[index];
                                    handleItemClick(event, {
                                        checked: !currentChecked,
                                        index,
                                    });
                                }
                            },
                        }),
                    )}
                </div>

                {footerButton &&
                    React.cloneElement<EbayFilterMenuFooterButtonProps>(footerButton, {
                        onClick: handleFooterButtonClick,
                        __classPrefix: baseClass,
                        __variant: variant,
                    })}
            </Container>
        </span>
    );
};

export default withForwardRef(EbayFilterMenu);
