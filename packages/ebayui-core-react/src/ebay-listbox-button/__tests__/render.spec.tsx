import React from "react";
import { render, within } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const {
    Default,
    PreselectedIndex,
    DefaultNoSelectedOption,
    Borderless,
    Fluid,
    DisabledState,
    InvalidState,
    PrefixLabel,
    FloatingLabel,
} = composeStories(stories);

describe("ebay-listbox-button rendering", () => {
    it("renders default listbox button correctly", () => {
        const { container } = render(<Default />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "Option 2" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();

        const select = listboxButton.querySelector("select");
        expect(select).toHaveClass("listbox-button__native");
        expect(select).toHaveAttribute("hidden", "");

        const options = select.querySelectorAll("option");
        expect(options[0]).toHaveValue("AA");
        expect(options[1]).toHaveValue("BB");
        expect(options[2]).toHaveValue("CC");
    });

    it("renders preselected index correctly", () => {
        const { container } = render(<PreselectedIndex />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "Option 2" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders default listbox button without selected option correctly", () => {
        const { container } = render(<DefaultNoSelectedOption />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "-" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders borderless listbox button correctly", () => {
        const { container } = render(<Borderless />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "Option 2" });
        expect(button).toHaveClass("btn btn--borderless");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders fluid listbox button correctly", () => {
        const { container } = render(<Fluid />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        expect(listboxButton).toHaveClass("listbox-button--fluid");
        const button = within(listboxButton).getByRole("button", { name: "Option 2" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders disabled state correctly", () => {
        const { container } = render(<DisabledState />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "Option 2" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button).toHaveAttribute("disabled");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders invalid state correctly", () => {
        const { container } = render(<InvalidState />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "Option 2" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("aria-invalid", "true");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders prefix label correctly", () => {
        const { container } = render(<PrefixLabel />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button", { name: "Selected: Option 2" });
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });

    it("renders floating label correctly", () => {
        const { container } = render(<FloatingLabel />);

        const listboxButton: HTMLElement = container.querySelector(".listbox-button");
        const button = within(listboxButton).getByRole("button");
        expect(button).toHaveClass("btn btn--form");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "listbox");
        expect(button).toHaveAttribute("type", "button");
        expect(button.querySelector(".btn__floating-label")).toHaveTextContent("Select");
        expect(button.querySelector(".btn__text")).toHaveTextContent("Option 2");
        expect(button.querySelector("svg")).toMatchSnapshot();
    });
});
