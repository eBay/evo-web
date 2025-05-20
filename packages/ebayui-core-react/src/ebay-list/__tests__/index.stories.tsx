import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { EbayList, EbayListItem } from '../index'
import { EbayIcon } from '../../ebay-icon'
import { EbaySwitch } from '../../ebay-switch'

const meta: Meta<typeof EbayList> = {
    component: EbayList,
    title: 'building blocks/ebay-list',
    argTypes: {
        onButtonClick: {
            action: 'onButtonClick',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ index }',
                },
            },
            description: 'Triggered on item click when the item is rendered as a button',
        },
    },
}

export default meta

export const Static: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem leading={<EbayIcon name="folder16" />}>
            Item 1
        </EbayListItem>
        <EbayListItem leading={<EbayIcon name="lamp16" />}>
            Item 2
        </EbayListItem>
        <EbayListItem leading={<EbayIcon name="file16" />}>
            Item 3
        </EbayListItem>
    </EbayList>
)

export const Interactive: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem as="button">
            Item 1
        </EbayListItem>
        <EbayListItem as="a" href="https://www.ebay.com" trailing={<EbayIcon name="chevronRight16" />}>
            Item 2
        </EbayListItem>
        <EbayListItem id="switch-item" trailing={<EbaySwitch aria-labelledby="switch-item" />}>
            Item 3
        </EbayListItem>
    </EbayList>
)

export const WithSeparator: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem leading={<EbayIcon name="folder16" />}>
            Item 1
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem leading={<EbayIcon name="lamp16" />}>
            Item 2
        </EbayListItem>
        <EbayListItem leading={<EbayIcon name="file16" />}>
            Item 3
        </EbayListItem>
        <EbayListItem leading={<EbayIcon name="file16" />}>
            Item 4
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem leading={<EbayIcon name="lightbulb16" />}>
            Item 5
        </EbayListItem>
    </EbayList>
)
