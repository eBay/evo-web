import { EbayMouseEventHandler } from "../events";

export type EventData = {
    selected?: boolean;
};

export type FilterClickHandler = EbayMouseEventHandler<HTMLButtonElement & HTMLAnchorElement, EventData>;
