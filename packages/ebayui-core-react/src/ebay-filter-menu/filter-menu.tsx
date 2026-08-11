import React, {
    ComponentProps,
    FC,
    Fragment,
    KeyboardEvent,
    Key,
    MouseEvent,
    ReactElement,
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
import { EbayButton } from "../ebay-button";
import { EbayIconClear20 } from "../ebay-icon/icons/ebay-icon-clear-20";
import { EbayIconSearch16 } from "../ebay-icon/icons/ebay-icon-search-16";

type FilterMenuItemElement = ReactElement<EbayFilterMenuItemProps>;
type ItemIdentity = NonNullable<Key>;

const getItemIdentity = (item: FilterMenuItemElement, index: number): ItemIdentity =>
    (item.props.value ?? item.key ?? index) as ItemIdentity;

const getCheckedItemIds = (items: FilterMenuItemElement[]): ItemIdentity[] =>
    items.reduce<ItemIdentity[]>((checkedItemIds, item, index) => {
        if (item.props.checked) {
            return [...checkedItemIds, getItemIdentity(item, index)];
        }

        return checkedItemIds;
    }, []);

const getCheckedItemId = (items: FilterMenuItemElement[]): ItemIdentity | undefined => {
    const checkedIndex = items.findIndex((item) => item.props.checked);

    return checkedIndex > -1 ? getItemIdentity(items[checkedIndex], checkedIndex) : undefined;
};

const updateCheckedItemIds = (checkedItemIds: ItemIdentity[], itemId: ItemIdentity, checked?: boolean) => {
    if (checked) {
        return checkedItemIds.includes(itemId) ? checkedItemIds : [...checkedItemIds, itemId];
    }

    return checkedItemIds.filter((checkedItemId) => checkedItemId !== itemId);
};

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
    const [checkedItemId, setCheckedItemId] = useState<ItemIdentity | undefined>(() => getCheckedItemId(items));
    const [checkedItemIds, setCheckedItemIds] = useState<ItemIdentity[]>(() => getCheckedItemIds(items));

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

            if (menuRef.current) {
                scrollKeyPreventer.remove(menuRef.current);
            }
        };
    }, [isForm]);

    const isItemChecked = (
        item: FilterMenuItemElement,
        index: number,
        selectedItemId = checkedItemId,
        selectedItemIds = checkedItemIds,
    ) => {
        const itemId = getItemIdentity(item, index);

        return isRadio ? selectedItemId === itemId : selectedItemIds.includes(itemId);
    };

    const buildCurrentEventData = (
        selectedItemId = checkedItemId,
        selectedItemIds = checkedItemIds,
    ): FilterMenuEventData => ({
        checked: items
            .filter((item, index) => isItemChecked(item, index, selectedItemId, selectedItemIds))
            .map((item) => item.props.value),
        checkedIndex: items
            .map((item, index) => isItemChecked(item, index, selectedItemId, selectedItemIds) && index)
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

        const itemId = getItemIdentity(items[indexToToggle], indexToToggle);

        if (isRadio) {
            setCheckedItemId(itemId);
            onChange?.(event, {
                index: indexToToggle,
                ...buildCurrentEventData(itemId, checkedItemIds),
                currentChecked: checked,
            });
        } else {
            const newCheckedItemIds = updateCheckedItemIds(checkedItemIds, itemId, checked);

            onChange?.(event, {
                index: indexToToggle,
                ...buildCurrentEventData(checkedItemId, newCheckedItemIds),
                currentChecked: checked,
            });

            setCheckedItemIds(newCheckedItemIds);
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
                    <EbayIconSearch16 />

                    <input
                        type="text"
                        value={searchTerm}
                        className="filter-menu__search"
                        placeholder={searchHeaderPlaceholderText}
                        aria-owns={menuId}
                        onChange={handleSearchChange}
                    />

                    <EbayButton type="button" onClick={handleClearSearch} aria-label={a11ySearchHeaderClearText}>
                        <EbayIconClear20 />
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
                            checked: isItemChecked(item, index),
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
                                    const currentChecked = isItemChecked(item, index);
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

EbayFilterMenu.displayName = "EbayFilterMenu";

export default withForwardRef(EbayFilterMenu);
