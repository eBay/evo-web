import React, { ComponentProps, ElementType, FC } from "react";
import classnames from "classnames";
import { EbayEventHandler } from "../events";
import { EbayIcon } from "../ebay-icon";

type ToggleProps = {
    open: boolean;
};

export type EbayDetailsProps = Omit<ComponentProps<"details">, "onToggle"> & {
    text: string;
    className?: string;
    size?: "regular" | "small";
    alignment?: "regular" | "center";
    layout?: "regular" | "accordion";
    as?: ElementType;
    onToggle?: EbayEventHandler<HTMLDetailsElement, ToggleProps>;
};

const EbayDetails: FC<EbayDetailsProps> = ({
    size,
    alignment,
    layout,
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
                    {layout === "accordion" ? (
                        <>
                            <EbayIcon className="details__expand" name="add16" />
                            <EbayIcon className="details__collapse" name="remove16" />
                        </>
                    ) : (
                        <EbayIcon name="chevronDown16" />
                    )}
                </span>
            </summary>
            <Component
                className={classnames({
                    details__content: layout === "accordion",
                })}
            >
                {children}
            </Component>
        </details>
    );
};

export default EbayDetails;
