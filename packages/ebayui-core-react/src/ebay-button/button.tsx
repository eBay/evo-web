import React, {
    Children,
    ComponentProps,
    FC,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    ReactNode,
    RefObject,
} from "react";
import classNames from "classnames";
import { withForwardRef } from "../common/component-utils";
import { Priority, Size, BodyState, Variant, Split } from "./types";
import { EbayIcon } from "../ebay-icon";
import EbayButtonLoading from "./button-loading";
import EbayButtonExpand from "./button-expand";

export type EbayButtonProps = {
    fluid?: boolean;
    partiallyDisabled?: boolean;
    truncate?: boolean;
    href?: string;
    priority?: Priority;
    variant?: Variant;
    size?: Size;
    bodyState?: BodyState;
    split?: Split;
    transparent?: boolean;
    onClick?: (e: MouseEvent) => void;
    onEscape?: (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    borderless?: boolean;
    fixedHeight?: boolean;
};

type Props = ComponentProps<"button"> & ComponentProps<"a"> & EbayButtonProps;

const EbayButton: FC<Props> = ({
    priority = "secondary",
    variant = "standard",
    size,
    bodyState,
    split,
    transparent = false,
    fluid = false,
    disabled,
    partiallyDisabled,
    children,
    onKeyDown = () => {},
    onEscape = () => {},
    truncate = false,
    href,
    className: extraClasses,
    forwardedRef,
    borderless,
    fixedHeight,
    ...rest
}) => {
    const classPrefix = href ? "fake-btn" : "btn";
    const priorityStyles: { [key in Priority]: string } = {
        primary: `${classPrefix}--primary`,
        secondary: `${classPrefix}--secondary`,
        tertiary: `${classPrefix}--tertiary`,
        none: "",
    };
    const sizeStyles: { [key in Size]: string } = {
        large: `${classPrefix}--large`,
        small: `${classPrefix}--small`,
    };
    const splitStyles: { [key in Split]: string } = {
        start: `${classPrefix}--split-start`,
        end: `${classPrefix}--split-end`,
    };
    const isDestructive = variant === "destructive";
    const isForm = variant === "form";
    const isLoading = bodyState === "loading";
    const isExpand = bodyState === "expand";
    const isSlim = isForm && (isIconOnly(children) || (isExpand && !children));
    const className = classNames(
        classPrefix,
        extraClasses,
        priorityStyles[isForm || borderless ? "none" : priority],
        sizeStyles[size],
        splitStyles[split],
        isDestructive && `${classPrefix}--destructive`,
        isForm && `${classPrefix}--form`,
        isSlim && `${classPrefix}--slim`,
        transparent && `${classPrefix}--transparent`,
        fluid && `${classPrefix}--fluid`,
        truncate && `${classPrefix}--truncated`,
        borderless && `${classPrefix}--borderless`,
        fixedHeight && (sizeStyles[size] ? `${sizeStyles[size]}-${fixedHeight}` : `${classPrefix}--fixed-height`),
    );

    const keyDownHandler = (e: KeyboardEvent<HTMLButtonElement & HTMLAnchorElement>) => {
        onKeyDown(e);
        if (e.key === "Escape" || e.key === "Esc") {
            onEscape(e);
        }
    };

    const bodyContent = getBodyContent(children, { isLoading, isExpand });
    const ariaLive = isLoading ? `polite` : null;

    return href ? (
        <a
            className={className}
            href={disabled ? undefined : href}
            ref={forwardedRef}
            onKeyDown={keyDownHandler}
            aria-live={ariaLive}
            {...rest}
        >
            {bodyContent}
        </a>
    ) : (
        <button
            disabled={disabled}
            aria-disabled={partiallyDisabled}
            aria-live={ariaLive}
            className={className}
            ref={forwardedRef}
            onKeyDown={keyDownHandler}
            {...rest}
        >
            {bodyContent}
        </button>
    );
};

type bodyContentOptions = {
    isLoading: boolean;
    isExpand: boolean;
};

function getBodyContent(children: ReactNode, { isLoading, isExpand }: bodyContentOptions) {
    switch (true) {
        case isLoading:
            return <EbayButtonLoading />;
        case isExpand:
            return <EbayButtonExpand>{children}</EbayButtonExpand>;
        default:
            return children;
    }
}

function isIconOnly(children: ReactNode): boolean {
    const childrenArray = Children.toArray(children) as ReactElement[];
    return childrenArray.length === 1 && childrenArray[0].type === EbayIcon;
}

export default withForwardRef(EbayButton);
