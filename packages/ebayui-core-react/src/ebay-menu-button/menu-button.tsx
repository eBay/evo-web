import React, { cloneElement, ComponentProps, FC, useEffect, useState, JSX, RefCallback } from "react";
import classnames from "classnames";
import { filterByType, findComponent } from "../common/component-utils";

import { EbayMenu, EbayMenuChangeEventHandler, EbayMenuProps } from "../ebay-menu";
import { EbayButton, EbayButtonProps } from "../ebay-button";
import { EbayIconButton } from "../ebay-icon-button";
import { EbayIcon } from "../ebay-icon";
import { EbayMenuButtonItem, EbayMenuButtonLabel, EbayMenuButtonSeparator, LabelProps, MenuButtonProps } from "./index";
import { randomId } from "../common/random-id";
import { handleEscapeKeydown } from "../common/event-utils";
import { useFloatingDropdown } from "../common/dropdown";

type ButtonProps = Omit<EbayButtonProps, "variant" | "onKeyDown" | "onMouseDown"> &
    Omit<ComponentProps<"button">, "onKeyDown" | "onMouseDown" | "onSelect"> &
    Omit<ComponentProps<"a">, "onKeyDown" | "onMouseDown" | "onSelect">;

const EbayMenuButton: FC<MenuButtonProps> = ({
    type,
    variant = "button",
    className,
    text = "",
    fixWidth,
    reverse,
    expanded: defaultExpanded,
    noToggleIcon,
    checked,
    collapseOnSelect,
    a11yText,
    prefixId,
    prefixLabel,
    onClick = () => {},
    onExpand = () => {},
    onCollapse = () => {},
    onChange = () => {},
    onSelect = () => {},
    children,
    ...rest
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const [menuId, setMenuId] = useState<string | undefined>();

    const { overlayStyles, refs } = useFloatingDropdown({
        open: expanded,
        options: { reverse },
    });

    const buttonRef = refs.host as React.MutableRefObject<HTMLButtonElement>;
    const menuRef = refs.overlay;

    const menuItems = filterByType<typeof EbayMenuButtonItem>(children, [EbayMenuButtonItem, EbayMenuButtonSeparator]);
    const defaultIndexes = menuItems.map((item) => Boolean(item.props.checked));
    const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(defaultIndexes);
    useEffect(() => {
        if (defaultIndexes.join("|") !== checkedIndexes.join("|")) {
            setCheckedIndexes(defaultIndexes);
        }
    }, [defaultIndexes.join("|")]);

    const menuButtonLabel = findComponent(children, EbayMenuButtonLabel);
    const icon = findComponent(children, EbayIcon);
    const label = labelWithPrefixAndIcon({ text, prefixId, prefixLabel, menuButtonLabel, icon });
    const wrapperClasses = classnames("menu-button", className);

    const menuClasses = classnames("menu-button__menu", {
        "menu-button__menu--fix-width": fixWidth,
        "menu-button__menu--reverse": reverse,
    });

    useEffect(() => {
        const handleBackgroundClick = (e: DocumentEventMap["click"]) => {
            const menuEl = menuRef.current as HTMLDivElement;
            const menuClicked = menuEl && menuEl.contains(e.target as Node);
            if (collapseOnSelect || !menuClicked) {
                setExpanded(false);
            }
        };

        if (expanded) {
            onExpand();
            // On React 18 useEffect hooks runs synchronous instead of asynchronous as React 17 or prior
            // causing the event listener to be attached to the document at the same time that the dialog
            // opens. Adding a timeout so the event is attached after the click event that opened the modal
            // is finished.
            setTimeout(() => {
                document.addEventListener("click", handleBackgroundClick, false);
            });
        } else if (expanded === false) {
            onCollapse();
        }
        return () => document.removeEventListener("click", handleBackgroundClick, false);
    }, [expanded]);

    useEffect(() => {
        setMenuId(randomId());
    }, []);

    const handleMenuKeydown = (e) => {
        handleEscapeKeydown(e, () => {
            setExpanded(false);
            buttonRef.current?.focus();
        });
    };

    const buttonProps: Omit<ButtonProps, "type" | "ref"> = {
        ref: refs.setHost,
        className: "menu-button__button",
        "aria-expanded": !!expanded,
        "aria-haspopup": true,
        "aria-label": a11yText,
        "aria-controls": menuId,
        "aria-labelledby": prefixId,
        onClick: (e) => {
            setExpanded(!expanded);
            onClick(e);
        },
        ...rest,
    };

    const handleOnChange: EbayMenuChangeEventHandler = (e, eventProps) => {
        if (type === "radio" || type === "checkbox") {
            const newCheckedIndexes = checkedIndexes.map((_, i) => eventProps.indexes.includes(i));
            setCheckedIndexes(newCheckedIndexes);
        }
        onChange(e, eventProps);
    };

    const checkedIndex = () => {
        const index = checkedIndexes.findIndex(Boolean);
        return index > -1 ? index : checked;
    };

    return (
        <span className={wrapperClasses}>
            {variant === "overflow" ? (
                <EbayIconButton icon="overflowVertical16" {...buttonProps} />
            ) : (
                <EbayButton variant={variant === "form" ? "form" : undefined} {...buttonProps}>
                    {label}
                    {!noToggleIcon ? <EbayIcon name="chevronDown12" /> : null}
                </EbayButton>
            )}
            {expanded && (
                <EbayMenu
                    baseEl="div"
                    ref={refs.setOverlay as unknown as RefCallback<FC<EbayMenuProps>>}
                    type={type}
                    className={menuClasses}
                    tabIndex={-1}
                    id={menuId}
                    autofocus
                    checked={checkedIndex()}
                    onKeyDown={handleMenuKeydown}
                    onChange={handleOnChange}
                    onSelect={onSelect}
                    style={overlayStyles}
                >
                    {menuItems.map((item, i) =>
                        cloneElement(item, {
                            ...item.props,
                            className: classnames(item.props.className, "menu-button__item"),
                            key: i,
                            checked: checkedIndexes[i],
                        }),
                    )}
                </EbayMenu>
            )}
        </span>
    );
};

function labelWithPrefixAndIcon({ text, prefixId, prefixLabel, menuButtonLabel, icon }: LabelProps) {
    const textLabelElement = text.length ? <span>{text}</span> : null;
    const prefixLabelElement = !prefixId && prefixLabel && (
        <>
            <span className="menu-button-prefix-label" key="prefix-label">
                {prefixLabel}
            </span>
            &nbsp;
        </>
    );
    const labelArray = [icon, prefixLabelElement, menuButtonLabel || textLabelElement].filter(Boolean) as JSX.Element[];
    return labelArray.map((item, i) => cloneElement(item, { ...item.props, key: i }));
}

export default EbayMenuButton;
