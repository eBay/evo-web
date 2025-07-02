import React from "react";
import { render, within } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { Default, Disabled, Controls, Loading, Size, Transparent, Truncated } = composeStories(stories);

jest.mock("../../common/random-id");

describe("ebay-split-button rendering", () => {
    it("renders split button correctly", () => {
        const { container } = render(<Default />);

        const [splitButton, splitButtonWithSeparator, splitButtonTertiary] =
            container.querySelectorAll(".split-button");
        const buttonSave = within(splitButton as HTMLElement).getByRole("button", { name: "Save document" });
        expect(buttonSave).toHaveClass("btn btn--primary btn--split-start");

        const menuButtonContainer: HTMLElement = splitButton.querySelector(".menu-button");
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show save options" });
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--primary btn--split-end");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();

        const buttonWithSeparator = within(splitButtonWithSeparator as HTMLElement).getByRole("button", {
            name: "Split Button Menu with Separator",
        });
        expect(buttonWithSeparator).toHaveClass("btn btn--secondary btn--split-start");

        const menuButtonWithSeparatorContainer: HTMLElement = splitButtonWithSeparator.querySelector(".menu-button");
        const buttonMenuWithSeparator = within(menuButtonWithSeparatorContainer).getByRole("button", { name: "Menu" });
        expect(buttonMenuWithSeparator).toHaveClass("btn menu-button__button btn--secondary btn--split-end");
        expect(buttonMenuWithSeparator).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenuWithSeparator).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenuWithSeparator).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenuWithSeparator.querySelector("svg")).toMatchSnapshot();

        const buttonTertiary = within(splitButtonTertiary as HTMLElement).getByRole("button", {
            name: "Tertiary button menu with icons",
        });
        expect(buttonTertiary).toHaveClass("btn btn--tertiary btn--split-start");

        const menuButtonTertiaryContainer: HTMLElement = splitButtonTertiary.querySelector(".menu-button");
        const buttonMenuTertiary = within(menuButtonTertiaryContainer).getByRole("button", { name: "Expand" });
        expect(buttonMenuTertiary).toHaveClass("btn menu-button__button btn--tertiary btn--split-end");
        expect(buttonMenuTertiary).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenuTertiary).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenuTertiary).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenuTertiary.querySelector("svg")).toMatchSnapshot();
    });

    it("renders disabled split button correctly", () => {
        const { container } = render(<Disabled />);

        const splitButton: HTMLElement = container.querySelector(".split-button");
        const buttonSave = within(splitButton).getByRole("button", { name: "Disabled Split Button" });
        expect(buttonSave).toBeDisabled();

        const menuButtonContainer: HTMLElement = splitButton.querySelector(".menu-button");
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show options" });
        expect(buttonMenu).toBeDisabled();
    });

    it("renders split button with controls correctly", () => {
        const { container } = render(<Controls />);

        const splitButton: HTMLElement = container.querySelector(".split-button");
        const buttonSave = within(splitButton).getByRole("button", { name: "Save document" });
        expect(buttonSave).toHaveClass("btn btn--secondary btn--split-start");

        const menuButtonContainer: HTMLElement = splitButton.querySelector(".menu-button");
        const buttonMenu = within(menuButtonContainer).getByRole("button");
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--secondary btn--split-end");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();
    });

    it("renders split button with pre-loading state correctly", () => {
        const { container } = render(<Loading />);

        const splitButton: HTMLElement = container.querySelector(".split-button");
        const buttonSave = within(splitButton).getByRole("button", { name: "Load" });
        expect(buttonSave).toHaveClass("btn btn--secondary btn--split-start");

        const menuButtonContainer: HTMLElement = splitButton.querySelector(".menu-button");
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show options" });
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--secondary btn--split-end");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();
    });

    it("renders split button with loading state correctly", () => {
        const { container } = render(<Loading bodyState="loading" />);

        const splitButton: HTMLElement = container.querySelector(".split-button");
        const buttonSave = within(splitButton).getByRole("button", { name: "Stand by or stop loading by using menu" });
        expect(buttonSave).toHaveClass("btn btn--secondary btn--split-start");

        const menuButtonContainer: HTMLElement = splitButton.querySelector(".menu-button");
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show options" });
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--secondary btn--split-end");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();
    });

    it("renders split button with size correctly", () => {
        const { container } = render(<Size />);

        const splitButton = container.querySelector(".split-button") as HTMLElement;
        const buttonSave = within(splitButton).getByRole("button", { name: "Primary multi-select" });
        expect(buttonSave).toHaveClass("btn btn--primary btn--large btn--split-start");

        const menuButtonContainer = splitButton.querySelector(".menu-button") as HTMLElement;
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show options" });
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--primary btn--large btn--split-end");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();
    });

    it("renders transparent split button correctly", () => {
        const { container } = render(<Transparent />);

        const splitButton: HTMLElement = container.querySelector(".split-button");
        const buttonSave = within(splitButton).getByRole("button", { name: "Transparent split button" });
        expect(buttonSave).toHaveClass("btn btn--secondary btn--split-start btn--transparent");

        const menuButtonContainer: HTMLElement = splitButton.querySelector(".menu-button");
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show options" });
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--secondary btn--split-end btn--transparent");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();
    });

    it("renders truncated split button correctly", () => {
        const { container } = render(<Truncated />);

        const [splitButton] = container.querySelectorAll(".split-button");
        const buttonSave = within(splitButton as HTMLElement).getByRole("button", {
            name: "Primary Split Button with truncated text label",
        });
        expect(buttonSave).toHaveClass("btn btn--primary btn--split-start btn--truncated");

        const menuButtonContainer = splitButton.querySelector(".menu-button") as HTMLElement;
        const buttonMenu = within(menuButtonContainer).getByRole("button", { name: "Show options" });
        expect(buttonMenu).toHaveClass("btn menu-button__button btn--primary btn--split-end");
        expect(buttonMenu).toHaveAttribute("aria-expanded", "false");
        expect(buttonMenu).toHaveAttribute("aria-haspopup", "true");
        expect(buttonMenu).toHaveAttribute("aria-controls", "abc123");
        expect(buttonMenu.querySelector("svg")).toMatchSnapshot();
    });
});
