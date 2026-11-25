import React from "react";
import { EbaySignal, SignalStatus } from "../index";
import { EbayIconPromotion12 } from "../../ebay-icon/icons/ebay-icon-promotion-12";
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

    it("renders status-only classes exactly as before", async () => {
        const { getByText } = await render(<EbaySignal status="recent">Recent</EbaySignal>);
        expect(getByText("Recent").className).toBe("signal signal--recent");
    });

    it("sets the tone class", async () => {
        const { getByText } = await render(<EbaySignal tone="positive">Tone</EbaySignal>);
        expect(getByText("Tone").className).toBe("signal signal--positive");
    });

    it("lets tone override status", async () => {
        const { getByText } = await render(
            <EbaySignal status="recent" tone="warning">
                Override
            </EbaySignal>,
        );
        expect(getByText("Override").className).toBe("signal signal--warning");
    });

    it("adds strong and subtle emphasis classes and none for default", async () => {
        const { getByText } = await render(
            <>
                <EbaySignal emphasis="strong">Strong</EbaySignal>
                <EbaySignal emphasis="subtle">Subtle</EbaySignal>
                <EbaySignal emphasis="default">Plain</EbaySignal>
            </>,
        );
        expect(getByText("Strong").className).toBe("signal signal--neutral signal--strong");
        expect(getByText("Subtle").className).toBe("signal signal--neutral signal--subtle");
        expect(getByText("Plain").className).toBe("signal signal--neutral");
    });

    it("combines emphasis with status and custom class", async () => {
        const { getByText } = await render(
            <EbaySignal status="trustworthy" emphasis="strong" className="custom">
                Combined
            </EbaySignal>,
        );
        expect(getByText("Combined").className).toBe("signal signal--trustworthy signal--strong custom");
    });

    it("renders the icon as the first child before the label", async () => {
        const { getByText } = await render(
            <EbaySignal tone="information" icon={<EbayIconPromotion12 />}>
                Label
            </EbaySignal>,
        );
        const el = getByText("Label");
        const first = el.firstElementChild;
        expect(first?.tagName.toLowerCase()).toBe("svg");
        expect(first).toHaveAttribute("aria-hidden", "true");
        expect(first).toHaveClass("icon", "icon--12");
        expect(el.firstChild).toBe(first);
        expect(el.lastChild?.textContent).toBe("Label");
    });
});
