import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { EbayFilePreviewCardGroup } from '..'
import {
    EbayFilePreviewCardProps,
    EbayFilePreviewCard
} from '../../ebay-file-preview-card'

const meta: Meta<typeof EbayFilePreviewCardGroup> = {
    title: 'media/ebay-file-preview-card-group',
    component: EbayFilePreviewCardGroup,
    argTypes: {
        a11ySeeMoreText: {
            type: 'string',
            control: { type: 'text' },
            description: 'a11y text for see more button, applied to all cards'
        }
    }
}
export default meta

export const Default: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from({ length: 3 }, () => ({
        file: {
            name: 'file-name.jpg',
            type: 'image',
            src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
        },
        deleteText: 'Delete text',
        onDelete: action('onDelete')
    }))
    return (
        <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard
                    key={index}
                    {...cardFile}
                    onMenuAction={(e, data) => console.log(e, data)}
                />
            ))}
        </EbayFilePreviewCardGroup>
    )
}

export const ManyCards: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from(
        { length: 50 },
        () => ({
            menuActions: [
                {
                    event: 'action1',
                    label: 'Action 1'
                },
                {
                    event: 'action2',
                    label: 'Action 2'
                }
            ],
            file: {
                name: 'file-name.jpg',
                type: 'image',
                src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
            },
            deleteText: 'Delete',
            onMenuAction: action('onMenuAction'),
            onDelete: action('onDelete'),
            as: 'div'
        })
    )

    return (
        <EbayFilePreviewCardGroup a11ySeeMoreText="see more text" {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard key={index} {...cardFile} />
            ))}
        </EbayFilePreviewCardGroup>
    )
}
export const CardsUploading: StoryFn<typeof EbayFilePreviewCardGroup> = (
    args
) => {
    const cards: EbayFilePreviewCardProps[] = Array.from({ length: 5 }, () => ({
        status: 'uploading',
        file: {
            name: 'file-name.jpg',
            type: 'image',
            src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
        },
        a11yCancelUploadText: 'cancel upload text',
        onCancel: action('onCancel')
    }))

    return (
        <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard key={index} {...cardFile} />
            ))}
        </EbayFilePreviewCardGroup>
    )
}
