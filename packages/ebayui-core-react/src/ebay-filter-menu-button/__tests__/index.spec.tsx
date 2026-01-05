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

    it("should set aria-pressed to true when at least one option is checked", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu").closest("button");
        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should set aria-pressed after selection", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
                <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );

        const button = screen.getByText("Menu").closest("button") as HTMLButtonElement;

        await userEvent.click(button);
        await userEvent.click(screen.getByText("Option 1"));
        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should set aria-pressed to false when no options are checked", async () => {
        render(
            <EbayFilterMenuButton text="Menu">
                <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
            </EbayFilterMenuButton>,
        );
        const button = screen.getByText("Menu").closest("button") as HTMLButtonElement;
        expect(button).toHaveAttribute("aria-pressed", "false");

        await userEvent.click(button);
        await userEvent.click(screen.getByText("Option 1"));
        expect(button).toHaveAttribute("aria-pressed", "true");

        await userEvent.click(screen.getByText("Option 1"));

        expect(button).toHaveAttribute("aria-pressed", "false");
    });
});
