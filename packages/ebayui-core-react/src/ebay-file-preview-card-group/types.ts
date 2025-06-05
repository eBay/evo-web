import { EbayEventHandler } from "../common/event-utils/types";
import { MenuActionEventData } from "../ebay-file-preview-card";

type EventData = {
    index: number;
};

type MenuEventGroup = {
    index: number;
    menuActionEvent?: MenuActionEventData;
};

export type FilePreviewCardActionHandler = EbayEventHandler<HTMLElement, EventData>;

export type FilePreviewCardMenuActionHandler = EbayEventHandler<HTMLElement, MenuEventGroup>;
