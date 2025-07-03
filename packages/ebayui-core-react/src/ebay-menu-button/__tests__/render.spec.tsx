import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const {
    Default,
    Expanded,
    Disabled,
    WithIcon,
    WithoutToggleIcon,
    Variants,
    Priorities,
    Borderless,
    WithCustomLabel,
    WithSeparator,
    SingleSelectMenuButtonItemChecked,
    SingleSelectMenuButtonMenuChecked,
    MultiSelectMenuButton,
    FixedWidth,
    ReverseMenuGrowsToTheLeft,
} = composeStories(stories);

describe("EbayMenuButton rendering", () => {
    describe("Default", () => {
        it("should render correctly", () => {
            render(<Default />);
            const [firstButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            const svg = firstButton.querySelector("svg");
            expect(svg).toMatchSnapshot();
        });
    });

    describe("Expanded", () => {
        it("should render correctly", () => {
            render(<Expanded />);
            const [firstButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            expect(firstButton).toHaveAttribute("aria-expanded", "true");
            const [item] = screen.getAllByRole("menuitem");
            expect(item.textContent).toEqual("item 1 that has very long text");
        });
    });

    describe("Disabled", () => {
        it("should render correctly", () => {
            render(<Disabled />);
            const [firstButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            expect(firstButton).toHaveAttribute("disabled", "");
            const svg = firstButton.querySelector("svg");
            expect(svg).toMatchSnapshot();
        });
    });

    describe("WithIcon", () => {
        it("should render correctly", () => {
            render(<WithIcon />);
            const [firstButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            const [iconSvg, chevronSvg] = firstButton.querySelectorAll("svg");
            expect(iconSvg).toMatchSnapshot();
            expect(chevronSvg).toMatchSnapshot();
        });
    });

    describe("WithoutToggleIcon", () => {
        it("should render correctly", () => {
            render(<WithoutToggleIcon />);
            const [firstButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            const svg = firstButton.querySelector("svg");
            expect(svg).toBeNull();
        });
    });

    describe("Variants", () => {
        it("should render correctly", () => {
            render(<Variants />);
            const [firstButton, secondButton, thirdButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            const firstSvg = firstButton.querySelector("svg");
            expect(firstSvg).toMatchSnapshot();

            expect(secondButton).toHaveClass("btn menu-button__button btn--form");
            const secondSvg = secondButton.querySelector("svg");
            expect(secondSvg).toMatchSnapshot();

            expect(thirdButton).toHaveClass("menu-button__button icon-btn");
            const thirdSvg = thirdButton.querySelector("svg");
            expect(thirdSvg).toMatchSnapshot();
        });
    });

    describe("Priorities", () => {
        it("should render correctly", () => {
            render(<Priorities />);
            const [firstButton, secondButton] = screen.getAllByRole("button");

            expect(firstButton).toHaveClass("btn menu-button__button btn--primary");
            const firstSvg = firstButton.querySelector("svg");
            expect(firstSvg).toMatchSnapshot();

            expect(secondButton).toHaveClass("btn menu-button__button btn--tertiary");
            const secondSvg = secondButton.querySelector("svg");
            expect(secondSvg).toMatchSnapshot();
        });
    });

    describe("Borderless", () => {
        it("should render correctly", () => {
            render(<Borderless />);
            const [firstButton] = screen.getAllByRole("button");
            expect(firstButton).toHaveClass("btn menu-button__button btn--borderless");
        });
    });

    describe("WithCustomLabel", () => {
        it("should render correctly", () => {
            render(<WithCustomLabel />);
            const [firstButton] = screen.getAllByRole("button");
            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");
            expect(firstButton).toHaveTextContent("Fun with flags!");
        });
    });

    describe("WithSeparator", () => {
        it("should render correctly", () => {
            render(<WithSeparator expanded />);
            const [firstButton] = screen.getAllByRole("button");
            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");

            const separators = screen.getAllByRole("separator");
            expect(separators.length).toEqual(2);
        });
    });

    describe("SingleSelectMenuButtonItemChecked", () => {
        it("should render correctly", () => {
            render(<SingleSelectMenuButtonItemChecked expanded />);
            const [firstButton] = screen.getAllByRole("button");
            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");

            const [firstItem, secondItem, thirdItem] = screen.getAllByRole("menuitemradio");
            expect(firstItem).toHaveAttribute("aria-checked", "false");
            expect(secondItem).toHaveAttribute("aria-checked", "true");
            expect(thirdItem).toHaveAttribute("aria-checked", "false");
        });
    });

    describe("SingleSelectMenuButtonMenuChecked", () => {
        it("should render correctly", () => {
            render(<SingleSelectMenuButtonMenuChecked expanded />);
            const [firstButton] = screen.getAllByRole("button");
            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");

            const [firstItem, secondItem, thirdItem] = screen.getAllByRole("menuitemradio");
            expect(firstItem).toHaveAttribute("aria-checked", "false");
            expect(secondItem).toHaveAttribute("aria-checked", "true");
            expect(thirdItem).toHaveAttribute("aria-checked", "false");
        });
    });

    describe("MultiSelectMenuButton", () => {
        it("should render correctly", () => {
            render(<MultiSelectMenuButton expanded />);
            const [firstButton] = screen.getAllByRole("button");
            expect(firstButton).toHaveClass("btn menu-button__button btn--secondary");

            const [firstItem, secondItem, thirdItem] = screen.getAllByRole("menuitemcheckbox");
            expect(firstItem).toHaveAttribute("aria-checked", "true");
            expect(secondItem).toHaveAttribute("aria-checked", "false");
            expect(thirdItem).toHaveAttribute("aria-checked", "true");
        });
    });

    describe("FixedWidth", () => {
        it("should render correctly", () => {
            render(<FixedWidth expanded />);
            const menu = screen.getByRole("menu");
            expect(menu.parentElement).toHaveClass("menu-button__menu menu-button__menu--fix-width menu");
        });
    });

    describe("ReverseMenuGrowsToTheLeft", () => {
        it("should render correctly", () => {
            render(<ReverseMenuGrowsToTheLeft expanded />);
            const menu = screen.getByRole("menu");
            expect(menu.parentElement).toHaveClass("menu-button__menu menu-button__menu--reverse");
        });
    });
});
