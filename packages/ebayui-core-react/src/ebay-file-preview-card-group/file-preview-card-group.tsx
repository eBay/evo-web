import React, { useState, FC, ComponentProps } from 'react'
import {
    EbayFilePreviewCard,
    EbayFilePreviewCardProps
} from '../ebay-file-preview-card'
import {
    FilePreviewCardActionHandler,
    FilePreviewCardMenuActionHandler
} from './types'

export type EbayFilePreviewCardGroupProps = ComponentProps<'div'> & {
    cards?: EbayFilePreviewCardProps[]
    a11yCancelUploadText?: EbayFilePreviewCardProps['a11yCancelUploadText']
    deleteText?: EbayFilePreviewCardProps['deleteText']
    menuActions?: EbayFilePreviewCardProps['menuActions']
    a11ySeeMoreText?: EbayFilePreviewCardProps['a11ySeeMoreText']
    onMenuAction?: FilePreviewCardMenuActionHandler
    onDelete?: FilePreviewCardActionHandler
    onCancel?: FilePreviewCardActionHandler
}

const SHOW_AMOUNT = 15 // default number of cards to show taken from marko's implementation

const EbayFilePreviewGroup: FC<EbayFilePreviewCardGroupProps> = ({
    cards = [],
    a11yCancelUploadText,
    deleteText,
    menuActions,
    a11ySeeMoreText,
    onMenuAction,
    onDelete,
    onCancel,
    ...rest
}) => {
    const [cardsShowing, setCardsShowing] = useState(() => SHOW_AMOUNT)

    const seeMore = () => {
        setCardsShowing((prev) => prev + SHOW_AMOUNT)
    }

    const notShowing = cards.length - cardsShowing

    const items = []
    for (let i = 0; i < Math.min(cardsShowing, cards.length); i++) {
        items.push(
            <EbayFilePreviewCard
                key={i}
                as="li"
                a11yCancelUploadText={a11yCancelUploadText}
                deleteText={deleteText}
                menuActions={menuActions}
                {...cards[i]}
                onCancel={(e) => onCancel?.(e, { index: i })}
                onDelete={(e) => onDelete?.(e, { index: i })}
                onMenuAction={(e, eventData) =>
                    onMenuAction?.(e, {
                        cardIndex: i,
                        ...eventData
                    })
                }
            />
        )
    }

    return (
        <div className="file-preview-card-group" {...rest}>
            <ul>
                {items}
                {notShowing > 0 && (
                    <EbayFilePreviewCard
                        as="li"
                        file={cards[cardsShowing].file}
                        seeMore={notShowing}
                        a11ySeeMoreText={a11ySeeMoreText}
                        onSeeMore={seeMore}
                    />
                )}
            </ul>
        </div>
    )
}

export default EbayFilePreviewGroup
