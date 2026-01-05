/* eslint-disable vitest/expect-expect */
import React from "react";
import { render } from "@testing-library/react";
import { EbayStarRating } from "../";

const htmlSnap = async (ui: React.ReactElement): Promise<void> => {
    const { asFragment } = await render(ui);
    expect(asFragment()).toMatchSnapshot();
};

describe("star-rating-select", () => {
    it("renders defaults", async () => {
        await htmlSnap(<EbayStarRating value="3-5" />);
    });

    it("renders basic fieldset", async () => {
        await htmlSnap(<EbayStarRating />);
    });

    it("renders with 0 selected", async () => {
        await htmlSnap(<EbayStarRating value="0" a11yText="star rating" />);
    });

    it("renders with 2 selected", async () => {
        await htmlSnap(<EbayStarRating value="2" a11yText="star rating" />);
    });

    it("renders with 5 selected", async () => {
        await htmlSnap(<EbayStarRating value="5" />);
    });
});
