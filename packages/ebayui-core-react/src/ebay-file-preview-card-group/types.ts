import { EbayEventHandler } from '../common/event-utils/types'

export type FilePreviewCardMenuAction = {
    event: string
    label: string
}

export type FilePreviewType = {
    name: string
    type?: File['type']
    src?: string
}

type EventData = {
    index: number
}

type MenuActionCardGroupEventData = {
    cardIndex: number
    index?: number
    checked?: number[]
    eventName?: string
}

export type FilePreviewCardActionHandler = EbayEventHandler<Element, EventData>

export type FilePreviewCardMenuActionHandler = EbayEventHandler<
    Element,
    MenuActionCardGroupEventData
>
