/* eslint-disable vitest/expect-expect */
import React from "react";
import { render } from "@testing-library/react";
import { EbayEek } from "../index";

let wrapper;
async function ratingCheck(max, min, rating, number) {
    const eekClass = number ? `eek--rating-${number}` : "eek";

    wrapper = render(<EbayEek max={max} min={min} rating={rating} />);

    wrapper.getAllByRole("figure").forEach((figure) => {
        expect(figure).toHaveClass(eekClass);
    });
}

describe("<EbayEek>", () => {
    it("renders default eek", async () => {
        const input = {
            max: "A+++",
            min: "D",
            rating: "B",
        };
        wrapper = render(<EbayEek {...input} />);

        expect(wrapper.getByText("A+++")).toHaveProperty("nextElementSibling");
        expect(wrapper.getByText("D")).toHaveProperty("previousElementSibling");
        expect(wrapper.getByText("B")).toHaveClass("eek__rating");
        expect(wrapper.getByRole("figure")).toHaveClass("eek--rating-5");
    });

    it("renders invalid eek", async () => {
        const input = {
            max: "A",
            min: "D",
            rating: "B",
        };
        wrapper = render(<EbayEek {...input} />);

        expect(wrapper.getByText("A")).toHaveProperty("nextElementSibling");
        expect(wrapper.getByText("D")).toHaveProperty("previousElementSibling");
        expect(wrapper.getByText("B")).toHaveClass("eek__rating");
        expect(wrapper.getByRole("figure")).toHaveClass("eek");
    });

    it("renders the correct eek if rating is outside", async () => {
        await ratingCheck("A+", "D", "A++", "");
    });

    it("renders rating 1", async () => {
        await ratingCheck("A++", "E", "A++", "1");
    });

    it("renders rating 2", async () => {
        await ratingCheck("A++", "E", "A+", "2");
    });

    it("renders rating 3", async () => {
        await ratingCheck("A++", "E", "A", "3");
    });

    it("renders rating 4", async () => {
        await ratingCheck("A++", "E", "B", "4");
    });

    it("renders rating 5", async () => {
        await ratingCheck("A++", "E", "C", "5");
    });

    it("renders rating 6", async () => {
        await ratingCheck("A++", "E", "D", "6");
    });

    it("renders rating 7", async () => {
        await ratingCheck("A++", "E", "E", "7");
    });

    it("renders rating 7 (not 8)", async () => {
        await ratingCheck("A++", "G", "F", "7");
        await ratingCheck("A++", "G", "G", "7");
    });
});
