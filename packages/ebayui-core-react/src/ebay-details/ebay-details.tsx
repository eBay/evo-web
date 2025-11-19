import React, { ComponentProps, ElementType, FC } from "react";
import classnames from "classnames";
import { EbayEventHandler } from "../events";
import { EbayIconChevronDown16 } from "../ebay-icon/icons/ebay-icon-chevron-down-16";

type ToggleProps = {
    open: boolean;
};

export type EbayDetailsProps = Omit<ComponentProps<"details">, "onToggle"> & {
    text: string;
    className?: string;
    size?: "regular" | "small";
    alignment?: "regular" | "center";
    as?: ElementType;
    onToggle?: EbayEventHandler<HTMLDetailsElement, ToggleProps>;
};

const EbayDetails: FC<EbayDetailsProps> = ({
    size,
    alignment,
    text,
    as: Component = "div",
    className,
    open,
    onToggle,
    children,
    ...rest
}: EbayDetailsProps) => {
    const handleToggle =
        onToggle &&
        ((event: React.SyntheticEvent<HTMLDetailsElement>) => {
            onToggle(event, { open: event.currentTarget.open });
        });

    return (
        <details open={open} onToggle={handleToggle} className={classnames("details", className)} {...rest}>
            <summary
                className={classnames("details__summary", {
                    "details__summary--small": size === "small",
                    "details__summary--center": alignment === "center",
                })}
            >
                <span className="details__label">{text}</span>
                <span className="details__icon" hidden>
                    <EbayIconChevronDown16 />
                </span>
            </summary>
            <Component className="details__content">{children}</Component>
        </details>
    );
};

export default EbayDetails;
