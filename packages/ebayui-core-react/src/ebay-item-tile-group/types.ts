import { EbayEventHandler } from "../common/event-utils/types";

type EventData = {
    index: number;
};

export type FilePreviewCardActionHandler = EbayEventHandler<HTMLElement, EventData>;
