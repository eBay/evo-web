import classnames from "classnames";
import React, {
    ComponentProps,
    FC,
    ReactNode,
    useState,
    useLayoutEffect,
    ReactElement,
    MouseEventHandler,
} from "react";
import { EbayMouseEventHandler } from "../events";
import { EbayIconChevronDown12 } from "../ebay-icon/icons/ebay-icon-chevron-down-12";

export interface FilterChipEvent {
    expanded: boolean;
    selected: boolean;
}

export type EbayFilterChipProps = Omit<ComponentProps<"button">, "onClick"> &
    Omit<ComponentProps<"a">, "onClick"> & {
        children?: ReactNode;
        selected?: boolean;
        defaultSelected?: boolean;
        expanded?: boolean;
        defaultExpanded?: boolean;
        variant?: "default" | "expressive" | "menu";
        icon?: ReactElement;
        image?: ReactElement<ComponentProps<"img">>;
        a11ySelectedText?: string;
        href?: string;
        disabled?: boolean;
        onClick?: EbayMouseEventHandler<Element, FilterChipEvent>;
    };

const EbayFilterChip: FC<EbayFilterChipProps> = ({
    children,
    selected: selectedControlled,
    defaultSelected = false,
    expanded: expandedControlled,
    defaultExpanded = false,
    variant = "default",
    icon,
    image,
    a11ySelectedText = "Filter Applied",
    href,
    className,
    onClick,
    disabled,
    ...rest
}: EbayFilterChipProps) => {
    const [uncontrolledSelected, setUncontrolledSelected] = useState(defaultSelected);
    const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
    const containerRef = React.useRef<HTMLButtonElement & HTMLAnchorElement>(null);

    const selected = selectedControlled !== undefined ? selectedControlled : uncontrolledSelected;
    const expanded = expandedControlled !== undefined ? expandedControlled : uncontrolledExpanded;

    const isAnchor = !!href && variant !== "menu";

    useLayoutEffect(() => {
        containerRef.current?.classList?.add("filter-chip--animated");
    }, []);

    const handleClick: MouseEventHandler = (event) => {
        if (!disabled) {
            let newExpanded = expanded;
            let newSelected = selected;

            if (variant === "menu") {
                newExpanded = !expanded;
                setUncontrolledExpanded(newExpanded);
            } else {
                newSelected = !selected;
                setUncontrolledSelected(newSelected);
            }

            onClick?.(event, {
                expanded: newExpanded,
                selected: newSelected,
            });
        }
    };

    const classNames = classnames(
        "filter-chip",
        {
            "filter-chip--expressive": variant === "expressive",
            "filter-chip--selected": isAnchor && selected,
        },
        className,
    );

    const Container = isAnchor ? "a" : "button";

    return (
        <Container
            {...rest}
            ref={containerRef}
            className={classNames}
            onClick={handleClick}
            href={!disabled ? href : undefined}
            type={!isAnchor ? "button" : undefined}
            aria-pressed={!isAnchor ? (selected ? "true" : "false") : undefined}
            aria-expanded={variant === "menu" ? (expanded ? "true" : "false") : undefined}
            disabled={!isAnchor ? disabled : undefined}
        >
            {variant === "expressive" ? <span className="filter-chip__media">{image}</span> : null}

            {variant === "default" ? icon : null}

            <span className="filter-chip__text">
                {children}
                {selected && isAnchor ? <span className="clipped">- {a11ySelectedText}</span> : null}
            </span>

            {variant === "menu" ? <EbayIconChevronDown12 className="filter-chip__trailing" /> : null}
        </Container>
    );
};

export default EbayFilterChip;
