import React from "react";
import { EbaySignal, SignalStatus } from "../index";
import { render } from "@testing-library/react";

describe("<EbaySignal>", () => {
    const statusInputs: SignalStatus[] = ["neutral", "trustworthy", "time-sensitive", "recent"];
    it(`renders default with neutral status if no status is available`, async () => {
        const text = "Default";
        const { getByText } = await render(<EbaySignal>{text}</EbaySignal>);
        const el = getByText(text);
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("signal");
        expect(el).toHaveClass(`signal--neutral`);
    });

    statusInputs.forEach((thisStatusInput) => {
        it(`renders default with ${thisStatusInput} status`, async () => {
            const status = thisStatusInput;
            const { getByText } = await render(<EbaySignal status={status}>{status}</EbaySignal>);
            const el = getByText(status);
            expect(el).toBeInTheDocument();
            expect(el).toHaveClass("signal");
            expect(el).toHaveClass(`signal--${status}`);
        });
    });
});
