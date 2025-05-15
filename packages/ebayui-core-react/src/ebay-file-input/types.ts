import { EbayChangeEventHandler } from '../common/event-utils/types';

export interface FileInputEvent {
    files: FileList;
}

export type FileInputHandler = EbayChangeEventHandler<HTMLInputElement, FileInputEvent>;
