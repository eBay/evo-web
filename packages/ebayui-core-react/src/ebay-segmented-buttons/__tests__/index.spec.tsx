import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { Default, WithIcons } = composeStories(stories);

describe("<EbaySegmentedButtons>", () => {
    it("should render the default", () => {
        render(<Default />);

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getAllByRole("listitem")).toHaveLength(4);
        expect(screen.getAllByRole("button")).toHaveLength(4);

        const firstButton = screen.getByRole("button", { name: "Q1" });
        expect(firstButton).toBeInTheDocument();
        expect(firstButton).toHaveAttribute("aria-current", "true");
    });

    it("should handle button clicks", () => {
        const spy = jest.fn();
        render(<Default onChange={spy} />);

        const firstButton = screen.getByRole("button", { name: "Q1" });
        const secondButton = screen.getByRole("button", { name: "Q2" });
        expect(secondButton).toBeInTheDocument();
        expect(secondButton).not.toHaveAttribute("aria-current");

        fireEvent.click(secondButton);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(firstButton).not.toHaveAttribute("aria-current");
        expect(secondButton).toHaveAttribute("aria-current", "true");
    });

    it("should render buttons with icons", () => {
        render(<WithIcons />);
        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
});
