import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { EbayFilePreviewCardGroup } from '..'
import { EbayFilePreviewCardProps } from '../../ebay-file-preview-card'

const meta: Meta<typeof EbayFilePreviewCardGroup> = {
    title: 'media/ebay-file-preview-card-group',
    component: EbayFilePreviewCardGroup,
    argTypes: {
        a11yCancelUploadText: {
            type: 'string',
            control: { type: 'text' },
            description:
                'a11y text for cancel upload button, applied to all cards'
        },
        deleteText: {
            type: 'string',
            control: { type: 'text' },
            description: 'Text for delete button, applied to all cards'
        },
        a11ySeeMoreText: {
            type: 'string',
            control: { type: 'text' },
            description: 'a11y text for see more button, applied to all cards'
        },
        menuActions: {
            description:
                'Array of menu actions, containing `event` and `label`',
            table: {
                category: 'Menu Actions'
            }
        },
        cards: {
            name: '@card',
            table: {
                category: '@attribute tags'
            },
            description: 'A repeatable attribute tag for each file preview card'
        },
        onMenuAction: {
            action: 'onMenuAction',
            description: 'Triggered when an action is selected from the menu. ',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'name, event /* from ebay-menu-button */'
                }
            }
        },
        onDelete: {
            action: 'onDelete',
            description: 'Triggered when the delete button is clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: ''
                }
            }
        },
        onCancel: {
            action: 'onCancel',
            description: 'Triggered when the cancel button is clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: ''
                }
            }
        }
    },
    args: {
        cards: [
            {
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }
            },
            {
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }
            },
            {
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }
            }
        ]
    }
}
export default meta

export const Default: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => (
    <EbayFilePreviewCardGroup a11yCancelUploadText="cancel upload" {...args} />
)

export const ManyCards: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from(
        { length: 50 },
        () => ({
            file: {
                name: 'file-name.jpg',
                type: 'image',
                src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
            }
        })
    )

    return (
        <EbayFilePreviewCardGroup
            a11yCancelUploadText="cancel upload"
            {...args}
            menuActions={[
                {
                    event: 'action1',
                    label: 'Action 1'
                },
                {
                    event: 'action2',
                    label: 'Action 2'
                }
            ]}
            deleteText="Delete"
            cards={cards}
        />
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
        }
    }))

    return (
        <EbayFilePreviewCardGroup
            a11yCancelUploadText="cancel upload"
            {...args}
            cards={cards}
        />
    )
}
