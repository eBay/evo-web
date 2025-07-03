import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, Navigable, RangeSelected } from "./index.stories";

jest.useFakeTimers().setSystemTime(new Date("2024-03-05").getTime());

const DefaultStory = composeStory(Default, Meta);
const NavigableStory = composeStory(Navigable, Meta);
const RangeSelectedStory = composeStory(RangeSelected, Meta);

describe("ebay-calendar rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<DefaultStory />);
        expect(container.querySelector(".calendar")).toBeInTheDocument();
        expect(container.querySelector(".calendar__body")).toBeInTheDocument();
        expect(container.querySelector(".calendar__cell--current").textContent.length).toBeGreaterThan(0);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText("Sun")).toBeInTheDocument();
        expect(screen.getByText("Mon")).toBeInTheDocument();
        expect(screen.getByText("Tue")).toBeInTheDocument();
        expect(screen.getByText("Wed")).toBeInTheDocument();
        expect(screen.getByText("Thu")).toBeInTheDocument();
        expect(screen.getByText("Fri")).toBeInTheDocument();
        expect(screen.getByText("Sat")).toBeInTheDocument();
    });

    it("renders navigable story correctly", async () => {
        const { container } = render(<NavigableStory />);
        expect(container.querySelector(".calendar")).toBeInTheDocument();

        const buttonPrev = screen.getByLabelText("Show February 2024");
        expect(buttonPrev).toHaveClass("icon-btn icon-btn--small icon-btn--transparent");
        expect(buttonPrev).toHaveAttribute("type", "button");
        const svgPrev = buttonPrev.querySelector("svg");
        expect(svgPrev).toMatchSnapshot();

        const buttonNext = screen.getByLabelText("Show May 2024");
        expect(buttonNext).toHaveClass("icon-btn icon-btn--small icon-btn--transparent");
        expect(buttonNext).toHaveAttribute("type", "button");
        const svgNext = buttonNext.querySelector("svg");
        expect(svgNext).toMatchSnapshot();

        const [month1, month2] = screen.getAllByRole("heading", { level: 3 });
        expect(month1.textContent).toEqual("March 2024");
        expect(month2.textContent).toEqual("April 2024");

        expect(screen.getByRole("table", { name: "March 2024" })).toBeInTheDocument();
        expect(screen.getByRole("table", { name: "April 2024" })).toBeInTheDocument();

        // todo: fix it in code
        // const selectedDate = screen.getByLabelText('3-selected');

        // await waitFor(() =>
        // expect(selectedDate).toBeInTheDocument()
        // expect(selectedDate).toHaveAttribute('data-iso', '2024-01-03')
        // , { timeout: 5000 })
    });

    // todo: finish after bug fix
    it.skip("renders range selected story correctly", () => {
        const { container } = render(<RangeSelectedStory />);
        expect(container.querySelector(".calendar")).toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
    });
});
