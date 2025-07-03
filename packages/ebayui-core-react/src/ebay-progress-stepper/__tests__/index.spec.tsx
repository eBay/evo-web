import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, Blocked, CustomTitles, VerticalColumn } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const BlockedStory = composeStory(Blocked, Meta);
const CustomTitlesStory = composeStory(CustomTitles, Meta);
const VerticalColumnStory = composeStory(VerticalColumn, Meta);

describe("ebay-progress-stepper rendering", () => {
    it("renders default story correctly", () => {
        render(<DefaultStory />);
        const stepper = screen.getByRole("list");
        expect(stepper).toHaveClass("progress-stepper__items");

        const [stepStarted, stepShipped, stepTransit, stepDelivered] = screen.getAllByRole("listitem");
        expect(stepStarted).toHaveClass("progress-stepper__item");
        const icon = stepStarted.querySelector(".progress-stepper__icon");
        expect(icon).toBeInTheDocument();
        const svg = stepStarted.querySelector("svg");
        expect(svg).toMatchSnapshot();
        const stepperText = stepStarted.querySelector(".progress-stepper__text");
        expect(stepperText.textContent).toEqual("Started");

        const separator = stepper.querySelector("hr");
        expect(separator).toHaveAttribute("role", "presentation");
        expect(separator).toHaveClass("progress-stepper__separator");

        expect(stepShipped).toHaveClass("progress-stepper__item");
        const svg2 = stepShipped.querySelector("svg");
        expect(svg2).toMatchSnapshot();
        const stepperText2 = stepShipped.querySelector(".progress-stepper__text");
        expect(stepperText2.textContent).toEqual("Shipped");

        expect(stepTransit).toHaveClass("progress-stepper__item");
        const svg3 = stepTransit.querySelector("svg");
        expect(svg3).toMatchSnapshot();
        const stepperText3 = stepTransit.querySelector(".progress-stepper__text");
        expect(stepperText3.textContent).toEqual("Transit");

        expect(stepDelivered).toHaveClass("progress-stepper__item");
        const svg5 = stepDelivered.querySelector("svg");
        expect(svg5).toMatchSnapshot();
        const stepperText5 = stepDelivered.querySelector(".progress-stepper__text");
        expect(stepperText5.textContent).toEqual("Delivered");
    });

    it("renders blocked story correctly", () => {
        render(<BlockedStory />);

        const [stepStarted, stepShipped, stepBlocked, stepDelivered] = screen.getAllByRole("listitem");
        expect(stepStarted).toHaveClass("progress-stepper__item");
        const svg = stepStarted.querySelector("svg");
        expect(svg).toMatchSnapshot();
        const stepperText = stepStarted.querySelector(".progress-stepper__text");
        expect(stepperText.textContent).toEqual("Started");

        expect(stepShipped).toHaveClass("progress-stepper__item");
        const svg2 = stepShipped.querySelector("svg");
        expect(svg2).toMatchSnapshot();
        const stepperText2 = stepShipped.querySelector(".progress-stepper__text");
        expect(stepperText2.textContent).toEqual("Shipped");

        expect(stepBlocked).toHaveClass("progress-stepper__item");
        const svg3 = stepBlocked.querySelector("svg");
        expect(svg3).toMatchSnapshot();
        const stepperText3 = stepBlocked.querySelector(".progress-stepper__text");
        expect(stepperText3.textContent).toEqual("Blocked");

        expect(stepDelivered).toHaveClass("progress-stepper__item");
        const svg5 = stepDelivered.querySelector("svg");
        expect(svg5).toHaveAttribute("aria-label", "upcoming");
        const stepperText5 = stepDelivered.querySelector(".progress-stepper__text");
        expect(stepperText5.textContent).toEqual("Delivered");
    });

    it("renders custom titles story correctly", () => {
        render(<CustomTitlesStory />);

        const [step1, step2, step3] = screen.getAllByRole("listitem");
        expect(step1).toHaveClass("progress-stepper__item");
        const svg = step1.querySelector("svg");
        expect(svg).toMatchSnapshot();
        const stepperText = step1.querySelector(".progress-stepper__text");
        const h1 = stepperText.querySelector("h1");
        expect(h1.textContent).toEqual("H1");

        expect(step2).toHaveClass("progress-stepper__item");
        const svg2 = step2.querySelector("svg");
        expect(svg2).toMatchSnapshot();
        const stepperText2 = step2.querySelector(".progress-stepper__text");
        const small = stepperText2.querySelector("small");
        expect(small.textContent).toEqual("Small");

        expect(step3).toHaveClass("progress-stepper__item");
        const svg3 = step3.querySelector("svg");
        expect(svg3).toMatchSnapshot();
        const stepperText3 = step3.querySelector(".progress-stepper__text");
        const h2 = stepperText3.querySelector("h2");
        expect(h2.textContent).toEqual("H2");
    });

    it("renders vertical column story correctly", () => {
        const { container } = render(<VerticalColumnStory />);

        const stepper = container.querySelector(".progress-stepper");
        expect(stepper).toHaveClass("progress-stepper--vertical");

        const [stepPlaced, stepPreparing, stepDelivered] = screen.getAllByRole("listitem");
        expect(stepPlaced).toHaveClass("progress-stepper__item");
        const svg = stepPlaced.querySelector("svg");
        expect(svg).toMatchSnapshot();
        const stepperText = stepPlaced.querySelector(".progress-stepper__text");
        expect(stepperText.textContent).toEqual("Order placedNew Mens Addidas Ultra BoostOrder total $220");

        expect(stepPreparing).toHaveClass("progress-stepper__item");
        const svg2 = stepPreparing.querySelector("svg");
        expect(svg2).toMatchSnapshot();
        const stepperText2 = stepPreparing.querySelector(".progress-stepper__text");
        expect(stepperText2.textContent).toEqual("Preparing for shipmentWe will notify you once it ships.");

        expect(stepDelivered).toHaveClass("progress-stepper__item");
        const svg3 = stepDelivered.querySelector("svg");
        expect(svg3).toMatchSnapshot();
        const stepperText3 = stepDelivered.querySelector(".progress-stepper__text");
        expect(stepperText3.textContent).toEqual("DeliveredGuaranteed Wednesday, October 09.");
    });
});
