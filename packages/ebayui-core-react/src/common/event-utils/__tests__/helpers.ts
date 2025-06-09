import { EventType } from "@testing-library/react";

export type eventtype = Lowercase<EventType | "toggle">;
export const eventOfType = (type: eventtype) => expect.objectContaining({ type });
