import React, { useState, FC, ComponentProps } from 'react'
import { filterByType } from '../common/component-utils'
import {
    EbayFilePreviewCard,
    EbayFilePreviewCardProps
} from '../ebay-file-preview-card'
import { FilePreviewCardActionHandler, FilePreviewCardMenuActionHandler } from './types'

export type EbayFilePreviewCardGroupProps = ComponentProps<'div'> & {
    a11ySeeMoreText?: EbayFilePreviewCardProps['a11ySeeMoreText']
    onDelete?: FilePreviewCardActionHandler
    onCancel?: FilePreviewCardActionHandler
    onMenuAction?: FilePreviewCardMenuActionHandler
}

const SHOW_AMOUNT = 15 // default number of cards to show taken from marko's implementation

const EbayFilePreviewGroup: FC<EbayFilePreviewCardGroupProps> = ({
    a11ySeeMoreText,
    onDelete,
    onCancel,
    onMenuAction,
    children,
    ...rest
}) => {
    const [cardsShowing, setCardsShowing] = useState(SHOW_AMOUNT)

    const seeMore = () => {
        setCardsShowing((prev) => prev + SHOW_AMOUNT)
    }

    const filePreviewCards = filterByType(children, EbayFilePreviewCard)
    const notShowing = filePreviewCards.length - cardsShowing
    const fileCardsToShow = filePreviewCards.slice(
        0,
        Math.min(cardsShowing, filePreviewCards.length)
    )

    return (
        <div className="file-preview-card-group" {...rest}>
            <ul>
                {fileCardsToShow.map((previewCard, i) =>
                    React.cloneElement(previewCard, {
                        as: previewCard.props.as || 'li', // default in preview card is 'div', here should be 'li'
                        onDelete: (e) => onDelete && onDelete(e, { index: i }),
                        onCancel: (e) => onCancel && onCancel(e, { index: i }),
                        onMenuAction: (e, data) =>
                            onMenuAction && onMenuAction(e, {
                                index: i,
                                menuActionEvent: data
                            })
                    })
                )}
                {notShowing > 0 &&
                    React.cloneElement(filePreviewCards[cardsShowing], {
                        seeMore: notShowing,
                        a11ySeeMoreText: a11ySeeMoreText,
                        onSeeMore: seeMore,
                        as: filePreviewCards[cardsShowing].props.as || 'li'
                    })}
            </ul>
        </div>
    )
}

export default EbayFilePreviewGroup
