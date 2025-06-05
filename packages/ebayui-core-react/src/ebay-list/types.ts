import { EbayMouseEventHandler } from "../events";

export type ListItemClickEventData = {
    index: number;
};

export type ListItemClickHandler = EbayMouseEventHandler<HTMLButtonElement, ListItemClickEventData>;
