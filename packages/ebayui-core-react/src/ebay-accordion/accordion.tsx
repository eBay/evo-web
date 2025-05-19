import classnames from 'classnames'
import React, { ComponentProps, FC, ReactElement, useRef } from 'react'
import { EbayDetails, EbayDetailsProps } from '../ebay-details'
import { filterByType } from '../utils'
import { EbayEventHandler } from '../events'

type ToggleProps = {
    open: boolean
    index: number
}

export type EbayAccordionProps = ComponentProps<'ul'> & {
    size?: 'regular' | 'large'
    autoCollapse?: boolean
    children: ReactElement<EbayDetailsProps> | ReactElement<EbayDetailsProps>[]
    onToggle?: EbayEventHandler<HTMLDetailsElement, ToggleProps>
}

const EbayAccordion: FC<EbayAccordionProps> = ({
    size,
    autoCollapse,
    className,
    children,
    onToggle,
    'aria-roledescription': ariaRoledescription = 'accordion',
    ...rest
}: EbayAccordionProps) => {
    const listRef = useRef<HTMLUListElement>(null)

    const details = filterByType(children, EbayDetails)
    if (!details.length) {
        throw new Error(`EbayAccordion: Please use a
        EbayDetails that defines the sections of the accordion`)
    }

    const detailsWithAccordionProps = details.map((detailComponent, detailsIndex) =>
        React.cloneElement(detailComponent as ReactElement<EbayDetailsProps>, {
            onToggle: (event, { open }) => {
                if (autoCollapse && open) {
                    const detailsElements = listRef.current?.querySelectorAll('details')
                    detailsElements?.forEach((detailElement, elementIndex) => {
                        if (elementIndex !== detailsIndex) {
                            detailElement.open = false
                        }
                    })
                }

                detailComponent.props.onToggle?.(event, { open })
                onToggle?.(event, {
                    open,
                    index: detailsIndex
                })
            },
            layout: 'accordion'
        }))

    return (
        <ul
            {...rest}
            ref={listRef}
            className={classnames('accordion', className, {
                'accordion--large': size === 'large'
            })}
            aria-roledescription={ariaRoledescription}
        >
            {detailsWithAccordionProps.map(detail => (
                <li key={detail.key}>
                    {detail}
                </li>
            ))}
        </ul>
    )
}

export default EbayAccordion
