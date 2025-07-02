import React from "react";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { RegularA, A, ValidA } from "./index.stories";

const RegularAStory = composeStory(RegularA, Meta);
const AStory = composeStory(A, Meta);
const ValidAStory = composeStory(ValidA, Meta);

describe("EbayEek rendering", () => {
    it("RegularA story", () => {
        const { container } = render(<RegularAStory />);
        const eek = container.querySelector(".eek");
        const eekContainer = eek.querySelector(".eek__container");
        const eekRating = eekContainer.querySelector(".eek__rating");
        const eekRatingRange = eekContainer.querySelector(".eek__rating-range");

        expect(eek).toHaveClass("eek--rating-1");
        expect(eek).toHaveAttribute("aria-label", "Energy Rating: A. Range: A - G.");
        expect(eekRating.textContent).toBe("A");
        expect(eekRatingRange.textContent).toBe("AG");
    });

    it("A story", () => {
        const { container } = render(<AStory />);
        const eek = container.querySelector(".eek");
        const eekContainer = eek.querySelector(".eek__container");
        const eekRating = eekContainer.querySelector(".eek__rating");
        const eekRatingRange = eekContainer.querySelector(".eek__rating-range");

        expect(eek).toHaveClass("eek--rating-1");
        expect(eek).toHaveAttribute("aria-label", "Energy Rating: A++. Range: A++ - E.");
        expect(eekRating.textContent).toBe("A++");
        expect(eekRatingRange.textContent).toBe("A++E");
    });

    it("ValidA story", () => {
        const { container } = render(<ValidAStory />);
        const eek = container.querySelector(".eek");
        const eekContainer = eek.querySelector(".eek__container");
        const eekRating = eekContainer.querySelector(".eek__rating");
        const eekRatingRange = eekContainer.querySelector(".eek__rating-range");

        expect(eek).toHaveClass("eek--rating-1");
        expect(eek).toHaveAttribute("aria-label", "Energy Rating: A+++. Range: A+++ - D.");
        expect(eekRating.textContent).toBe("A+++");
        expect(eekRatingRange.textContent).toBe("A+++D");
    });
});
