import { KeyboardEvent, SyntheticEvent, MouseEvent } from "react";

export type DialogCloseEvent = SyntheticEvent<HTMLElement> | KeyboardEvent<HTMLElement> | MouseEvent<Element>;

export type DialogCloseEventHandler = (event: DialogCloseEvent) => void;
