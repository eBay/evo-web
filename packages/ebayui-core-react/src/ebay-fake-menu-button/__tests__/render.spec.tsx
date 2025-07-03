import React from "react";
import { getAllByRole, getByRole, render, screen, within } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, {
    Borderless,
    Default,
    Disabled,
    Expanded,
    FixedWidth,
    Priorities,
    Variants,
    WithCustomLabel,
    WithIcon,
    WithoutToggleIcon,
    WithSeparator,
} from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const ExpandedStory = composeStory(Expanded, Meta);
const DisabledStory = composeStory(Disabled, Meta);
const BorderlessStory = composeStory(Borderless, Meta);
const FixedWidthStory = composeStory(FixedWidth, Meta);
const PrioritiesStory = composeStory(Priorities, Meta);
const VariantsStory = composeStory(Variants, Meta);
const WithIconStory = composeStory(WithIcon, Meta);
const WithoutToggleIconStory = composeStory(WithoutToggleIcon, Meta);
const WithCustomLabelStory = composeStory(WithCustomLabel, Meta);
const WithSeparatorStory = composeStory(WithSeparator, Meta);

describe("ebay-fake-menu-button rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<DefaultStory />);
        const buttonContainer: HTMLElement = container.querySelector(".fake-menu-button");
        const button = getByRole(buttonContainer, "button");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "true");
        expect(button).toHaveClass("btn fake-menu-button__button btn--secondary");
        expect(button).toHaveTextContent("eBay Menu");
        const svg = buttonContainer.querySelector("svg");
        expect(svg).toMatchSnapshot();
    });

    it("renders expanded story correctly", () => {
        const { container } = render(<ExpandedStory />);
        const buttonContainer: HTMLElement = container.querySelector(".fake-menu-button");
        const button = getByRole(buttonContainer, "button");
        expect(button).toHaveAttribute("aria-expanded", "true");
        expect(button).toHaveAttribute("aria-haspopup", "true");
        expect(button).toHaveClass("btn fake-menu-button__button btn--secondary");
        expect(button).toHaveTextContent("eBay Menu");
        const menu: HTMLElement = buttonContainer.querySelector(".fake-menu");
        expect(menu).toHaveClass("fake-menu-button__menu");
        expect(menu).toHaveAttribute("tabindex", "-1");
        const itemList = getByRole(menu, "list");
        expect(itemList).toHaveClass("fake-menu__items");
        expect(itemList).toHaveAttribute("tabIndex", "-1");
        const [link1, link2, link3] = getAllByRole(itemList, "link");
        expect(link1).toHaveAttribute("href", "http://ebay.com");
        expect(link1).toHaveClass("fake-menu-button__item fake-menu__item");
        expect(link1).toHaveTextContent("item 1 that has very long text");
        const svg = link1.querySelector("svg");
        expect(svg).toMatchSnapshot();
        expect(link2).toHaveAttribute("href", "http://ebay.de");
        expect(link2).toHaveTextContent("item 2");
        expect(link3).toHaveAttribute("href", "http://ebay.co.uk");
        expect(link3).toHaveTextContent("item 3");
    });

    it("renders disabled story correctly", () => {
        const { container } = render(<DisabledStory />);
        const buttonContainer: HTMLElement = container.querySelector(".fake-menu-button");
        const button = getByRole(buttonContainer, "button");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "true");
        expect(button).toHaveAttribute("disabled", "");
        expect(button).toHaveClass("btn fake-menu-button__button btn--secondary");
        expect(button).toHaveTextContent("eBay Menu");
        const svg = buttonContainer.querySelector("svg");
        expect(svg).toMatchSnapshot();
    });

    it("renders borderless story correctly", () => {
        const { container } = render(<BorderlessStory />);
        const buttonContainer: HTMLElement = container.querySelector(".fake-menu-button");
        const button = getByRole(buttonContainer, "button");
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).toHaveAttribute("aria-haspopup", "true");
        expect(button).toHaveClass("btn fake-menu-button__button btn--borderless");
        expect(button).toHaveTextContent("eBay Menu");
        const svg = buttonContainer.querySelector("svg");
        expect(svg).toMatchSnapshot();
    });

    it("renders fixed width story correctly", () => {
        const { container } = render(<FixedWidthStory expanded />);
        const buttonContainer: HTMLElement = container.querySelector(".fake-menu-button");
        const button = getByRole(buttonContainer, "button");
        expect(button).toHaveAttribute("aria-expanded", "true");
        expect(button).toHaveAttribute("aria-haspopup", "true");
        expect(button).toHaveClass("btn fake-menu-button__button btn--secondary");
        expect(button).toHaveTextContent("Menu has a button width");
        const menu = buttonContainer.querySelector(".fake-menu");
        expect(menu).toHaveClass("fake-menu-button__menu menu-button__menu--fix-width");
    });

    it("renders priorities story correctly", () => {
        render(<PrioritiesStory />);
        const [buttonPrimary, buttonTertiary] = screen.getAllByRole("button");
        expect(buttonPrimary).toHaveClass("btn fake-menu-button__button btn--primary");
        expect(buttonPrimary).toHaveTextContent("Primary");
        expect(buttonTertiary).toHaveClass("btn fake-menu-button__button btn--tertiary");
        expect(buttonTertiary).toHaveTextContent("Tertiary");
    });

    it("renders variants story correctly", () => {
        render(<VariantsStory />);
        const [button, buttonForm, buttonOverflow] = screen.getAllByRole("button");
        expect(button).toHaveClass("btn fake-menu-button__button btn--secondary");
        expect(button).toHaveTextContent("Button");
        expect(button).toHaveAttribute("aria-label", "Menu");

        expect(buttonForm).toHaveClass("btn fake-menu-button__button btn--form");
        expect(buttonForm).toHaveTextContent("Form");
        expect(buttonForm).toHaveAttribute("aria-label", "Menu inside the form");

        expect(buttonOverflow).toHaveClass("fake-menu-button__button icon-btn");
        expect(buttonOverflow).toHaveAttribute("aria-label", "Menu");
        expect(buttonOverflow).toHaveAttribute("type", "button");
        expect(buttonOverflow.querySelector("svg")).toMatchSnapshot();
        expect(buttonOverflow).toHaveTextContent("");
    });

    it("renders with icon story correctly", () => {
        render(<WithIconStory />);
        const button = screen.getByRole("button");
        expect(button.querySelector("svg")).toMatchSnapshot();
        expect(button).toHaveTextContent("Settings");
    });

    it("renders without toggle icon story correctly", () => {
        render(<WithoutToggleIconStory />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Menu");
        expect(button.querySelector("svg")).toBeNull();
    });

    it("renders with custom label story correctly", () => {
        render(<WithCustomLabelStory />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Fun with flags!");
    });

    it("renders with separator story correctly", () => {
        render(<WithSeparatorStory expanded />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Complex menu");
        const menu = screen.getByRole("list");
        const [link1, link2, separatorItem, link3] = getAllByRole(menu, "listitem");
        expect(link1).toHaveTextContent("Link 1");
        expect(link2).toHaveTextContent("Current link");
        const separator = within(separatorItem).getByRole("separator");
        expect(separator).toHaveClass("fake-menu-button__item menu-button__separator");
        expect(separator).toHaveTextContent("");
        expect(link3).toHaveTextContent("Link 3 (disabled)");
    });
});
