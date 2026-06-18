/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayFilterMenuButton, EbayFilterMenuItem } from "../index";

function setupMockEnv() {
    // Mock these properties only in test environment
    // but tests with display:none and hidden attribute will fail
    // those tests need to shift to browser tests
    if (
        typeof window !== "undefined" &&
        (window.navigator.userAgent.includes("Node.js") || window.navigator.userAgent.includes("jsdom"))
    ) {
        // Save original methods to restore later if needed
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetWidth");
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetHeight");

        // Mock offsetWidth/Height
        Object.defineProperties(HTMLElement.prototype, {
            offsetWidth: {
                get() {
                    return 1;
                },
            },
            offsetHeight: {
                get() {
                    return 1;
                },
            },
        });

        // Mock getClientRects
        // @ts-expect-error here we are mocking the method, ignoring type methods
        HTMLElement.prototype.getClientRects = function () {
            return [{ width: 1, height: 1 }];
        };
    }
}

describe("EbayFilterMenuButton", () => {
    it("should call onExpand when the menu is expanded", async () => {
        const onExpand = vi.fn();
        render(
            <EbayFilterMenuButton onExpand={onExpand} text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
                <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu");

        await userEvent.click(button);

        expect(onExpand).toHaveBeenCalled();
    });

    it("should call onCollapse when the menu is collapsed", async () => {
        const onCollapse = vi.fn();
        render(
            <EbayFilterMenuButton onCollapse={onCollapse} text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
                <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu");

        await userEvent.click(button); // Expand
        await userEvent.click(button); // Collapse

        expect(onCollapse).toHaveBeenCalled();
    });

    it("should call onCollapse when Escape key is pressed", async () => {
        setupMockEnv();
        const onCollapse = vi.fn();
        render(
            <EbayFilterMenuButton onCollapse={onCollapse} text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
                <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu");

        await userEvent.click(button); // Expand
        await userEvent.keyboard("{Escape}");

        expect(onCollapse).toHaveBeenCalled();
    });

    it("should add active and filter-chip--selected classes when at least one option is checked", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu").closest("button");
        expect(button).toHaveClass("filter-menu-button__button--active");
        expect(button).toHaveClass("filter-chip--selected");
        expect(button).not.toHaveAttribute("aria-pressed");
    });

    it("should add active class after selection", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
                <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );

        const button = screen.getByText("Menu").closest("button") as HTMLButtonElement;

        await userEvent.click(button);
        await userEvent.click(screen.getByText("Option 1"));
        expect(button).toHaveClass("filter-menu-button__button--active");
        expect(button).toHaveClass("filter-chip--selected");
        expect(button).not.toHaveAttribute("aria-pressed");
    });

    it("should remove active class when no options are checked", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu").closest("button") as HTMLButtonElement;
        expect(button).not.toHaveClass("filter-menu-button__button--active");
        expect(button).not.toHaveClass("filter-chip--selected");
        expect(button).not.toHaveAttribute("aria-pressed");

        await userEvent.click(button);
        await userEvent.click(screen.getByText("Option 1"));
        expect(button).toHaveClass("filter-menu-button__button--active");
        expect(button).toHaveClass("filter-chip--selected");

        await userEvent.click(screen.getByText("Option 1"));

        expect(button).not.toHaveClass("filter-menu-button__button--active");
        expect(button).not.toHaveClass("filter-chip--selected");
    });

    it("should show clipped a11y text when items are selected", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        expect(screen.getByText("Filter Applied")).toBeInTheDocument();
    });

    it("should hide clipped a11y text when no items are selected", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        expect(screen.queryByText("Filter Applied")).not.toBeInTheDocument();
    });

    it("should use custom a11yFilterAppliedText when provided", async () => {
        render(
            <EbayFilterMenuButton text="Menu" a11yFilterAppliedText="Filtre appliqué">
                <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        expect(screen.getByText("Filtre appliqué")).toBeInTheDocument();
    });

    it("should render count when count prop is provided and items are selected", async () => {
        render(
            <EbayFilterMenuButton text="Menu" count={3}>
                <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        expect(screen.getByText("(+3)")).toBeInTheDocument();
    });

    it("should render countContent when provided", async () => {
        render(
            <EbayFilterMenuButton text="Menu" countContent={<span>Custom count</span>}>
                <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        expect(screen.getByText("Custom count")).toBeInTheDocument();
    });
});
