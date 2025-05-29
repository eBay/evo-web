import React from "react";
import { EbayBadge } from "../index";
import { render } from "@testing-library/react";

describe("<EbayBadge>", () => {
    it("renders defaults", async () => {
        const { getByText } = await render(<EbayBadge number={5} />);
        expect(getByText("5")).toBeInTheDocument();
    });

    it("renders number with rounded-up value", async () => {
        const { getByText } = await render(<EbayBadge number={5.6} />);
        expect(getByText("5")).toBeInTheDocument();
    });

    it("does not render with negative value", async () => {
        const { queryByText } = await render(<EbayBadge number={-5} />);
        expect(queryByText(/\d+/)).toBeNull();
    });

    describe("given number is a string", () => {
        it("renders number with coerced string", async () => {
            const { getByText } = await render(<EbayBadge number="5" />);
            expect(getByText("5")).toBeInTheDocument();
        });

        it("renders number with rounded-up string", async () => {
            const { getByText } = await render(<EbayBadge number="5.6" />);
            expect(getByText("5")).toBeInTheDocument();
        });

        it("does not renders with an invalid string", async () => {
            const { queryByText } = await render(<EbayBadge number="five" />);
            expect(queryByText(/\d+/)).toBeNull();
        });

        it("does not renders with a negative string", async () => {
            const { queryByText } = await render(<EbayBadge number="-5" />);
            expect(queryByText(/\d+/)).toBeNull();
        });
    });

    it("truncates when the value is greater than 99", async () => {
        const { getByText } = await render(<EbayBadge number={150} />);
        expect(getByText("99+")).toBeInTheDocument();
    });
});
