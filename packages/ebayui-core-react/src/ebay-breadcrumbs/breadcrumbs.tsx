import React, { Children, cloneElement, ComponentProps, FC, ReactElement, ReactNode, JSX } from "react";
import classNames from "classnames";
import { EbayEventHandler } from "../common/event-utils/types";
import { BreadcrumbItemProps } from "./breadcrumb-item";

type BreadcrumbProps = Omit<ComponentProps<"div">, "onSelect"> & {
    /**
     * Breadcrumbs expects `<EbayBreadcrumbItem/>` as children.
     * Other elements will not work.
     *
     * @see Docs https://github.com/eBay/ebayui-core-react/tree/main/src/components/ebay-breadcrumb#usage
     */
    children: ReactNode;
    id?: string;
    a11yHeadingTag?: keyof JSX.IntrinsicElements;
    a11yHeadingText?: string;
    onSelect?: EbayEventHandler<HTMLElement>;
};

const Breadcrumbs: FC<BreadcrumbProps> = ({
    a11yHeadingText = "Page navigation",
    a11yHeadingTag = "h2",
    id = "ebay-breadcrumb",
    children: breadcrumbItems = [],
    className,
    onSelect = () => {},
    ...rest
}) => {
    const headingId = `${id}-breadcrumbs-heading`;
    const lastItemIndex = Children.count(breadcrumbItems) - 1;
    const A11yHeadingTag = a11yHeadingTag;
    const anyLink = Children.toArray(breadcrumbItems).some(
        (item: ReactElement<BreadcrumbItemProps>) => item.props.href,
    );
    const tag = anyLink ? "a" : "button";

    return (
        <nav {...rest} aria-labelledby={headingId} className={classNames("breadcrumbs", className)} role="navigation">
            <A11yHeadingTag id={headingId} className="clipped">
                {a11yHeadingText}
            </A11yHeadingTag>
            <ul>
                {Children.map(breadcrumbItems, (item: ReactElement<BreadcrumbItemProps>, index) => {
                    const isLastItem = index === lastItemIndex;
                    const { href, children } = item.props;
                    const itemProps = {
                        tag,
                        isLastItem,
                        href,
                        children,
                        onClick: (event) => onSelect(event),
                    } as BreadcrumbItemProps;

                    return cloneElement(item, itemProps);
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
