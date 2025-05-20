import React, {  ElementType, FC, ReactNode } from 'react'
import classNames from 'classnames'

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
    if (separator) {
        return <hr />
    }

    return (
        <li>
            <Component
                className={classNames('list__body', className)}
                onClick={onClick}
                {...rest}
            >
                {leading && (
                    <div className="list__leading">
                        {leading}
                    </div>
                )}
                <div className="list__body">
                    {children}
                </div>
                {trailing && (
                    <div className="list__trailing">
                        {trailing}
                    </div>
                )}
            </Component>
        </li>
    )
}

export default EbayListItem
