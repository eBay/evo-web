import React, { ElementType, FC, ReactNode, Children, isValidElement } from 'react'
import classNames from 'classnames'
import EbayListItemLeading from './list-item-leading'
import EbayListItemTrailing from './list-item-trailing'

export type EbayListItemProps = {
    as?: ElementType;
    separator?: boolean;
    leading?: ReactNode;
    trailing?: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>

const EbayListItem: FC<EbayListItemProps> = ({
    className,
    as: Component = 'div',
    separator,
    leading,
    trailing,
    children,
    onClick,
    ...rest
}) => {
    if (separator) return <hr />

    // Find custom leading component
    let leadingChild: ReactNode = null
    let trailingChild: ReactNode = null
    const contentChildren: ReactNode[] = []

    Children.forEach(children, child => {
        if (isValidElement(child)) {
            if (child.type === EbayListItemLeading) {
                leadingChild = child
                return
            }
            if (child.type === EbayListItemTrailing) {
                trailingChild = child
                return
            }
        }
        contentChildren.push(child)
    })


    const renderLeading = leadingChild || (leading && <EbayListItemLeading>{leading}</EbayListItemLeading>);
    const renderTrailing = trailingChild || (trailing && <EbayListItemTrailing>{trailing}</EbayListItemTrailing>);

    return (
        <li>
            <Component
                className={classNames('list__body', className)}
                onClick={onClick}
                {...rest}
            >
                {renderLeading}
                <div className="list__body">
                    {contentChildren}
                </div>
                {renderTrailing}
            </Component>
        </li>
    )
}

export default EbayListItem