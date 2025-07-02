/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { Default, WithDescription } = composeStories(stories);

describe("ebay-listbox rendering", () => {
    it("renders default listbox correctly", () => {
        render(<Default />);

        const listbox = screen.getByRole("listbox");
        expect(listbox).toHaveAttribute("tabindex", "0");
        expect(listbox).toHaveAttribute("id");

        const options = screen.getAllByRole("option");
        expect(options[0]).toHaveAttribute("aria-selected", "false");
        expect(options[0]).toHaveAttribute("id");
        expect(options[0]).toHaveAttribute("value", "AA");

        expect(options[1]).toHaveAttribute("aria-selected", "false");
        expect(options[1]).toHaveAttribute("id");
        expect(options[1]).toHaveAttribute("value", "BB");

        expect(options[2]).toHaveAttribute("aria-selected", "false");
        expect(options[2]).toHaveAttribute("id");
        expect(options[2]).toHaveAttribute("value", "CC");
    });

    it("render the listbox with description correctly", () => {
        render(<WithDescription />);
        const description = screen.getByText("Option 1 extra info");
        expect(description).toHaveClass("listbox__description");
        expect(description.closest("[role=option]")).toBeInTheDocument();
    });
});
