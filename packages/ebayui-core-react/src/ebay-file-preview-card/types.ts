import { EbayEventHandler } from "../common/event-utils/types";

export type FilePreviewCardMenuAction = {
    event: string;
    label: string;
};

export type FilePreviewType = {
    name: string;
    type?: File["type"];
    src?: string;
};

export type MenuActionEventData = {
    index: number;
    checked: number[];
    eventName?: string;
};

export type FilePreviewCardMenuActionHandler = EbayEventHandler<HTMLElement, MenuActionEventData>;
