import React, { ElementType, FC, ReactNode } from "react";
import classNames from "classnames";
import { findComponent, excludeComponent } from "../utils";
import EbayListItemLeading from "./list-item-leading";
import EbayListItemTrailing from "./list-item-trailing";

export type EbayListItemProps = {
    as?: ElementType;
    separator?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const EbayListItem: FC<EbayListItemProps> = ({
    className,
    as: Component = "div",
    separator,
    children,
    onClick,
    ...rest
}) => {
    if (separator) return <hr />;

    // Find leading and trailing components
    const leadingChild = findComponent(children, EbayListItemLeading);
    const trailingChild = findComponent(children, EbayListItemTrailing);

    // Get content children (excluding leading and trailing components)
    const contentChildren = excludeComponent(excludeComponent(children, EbayListItemLeading), EbayListItemTrailing);

    return (
        <li>
            <Component className={classNames("list__body", className)} onClick={onClick} {...rest}>
                {leadingChild}
                <div className="list__body">{contentChildren}</div>
                {trailingChild}
            </Component>
        </li>
    );
};

export default EbayListItem;
