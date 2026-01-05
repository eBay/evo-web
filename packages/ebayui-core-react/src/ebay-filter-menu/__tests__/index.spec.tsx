/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EbayFilterMenu from "../filter-menu";
import EbayFilterMenuItem from "../filter-menu-item";
import EbayFilterMenuFooterButton from "../filter-menu-footer-button";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("EbayFilterMenu Component", () => {
    it("should render the filter menu with items", () => {
        render(
            <EbayFilterMenu>
                <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
                <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
            </EbayFilterMenu>,
        );
        const menuItems = screen.getAllByRole("menuitemcheckbox");
        expect(menuItems).toHaveLength(2);
    });

    it("should update search term on input change", async () => {
        render(<EbayFilterMenu searchHeaderPlaceholderText="Search..." />);
        const searchInput = screen.getByPlaceholderText("Search...");
        await userEvent.type(searchInput, "test");
        expect(searchInput).toHaveValue("test");
    });

    it("should call onSearchChange correctly", async () => {
        const handleSearchChange = vi.fn();
        render(<EbayFilterMenu searchHeaderPlaceholderText="Search..." onSearchChange={handleSearchChange} />);
        const searchInput = screen.getByPlaceholderText("Search...");
        await userEvent.type(searchInput, "test");
        expect(handleSearchChange).toHaveBeenCalledWith(eventOfType("change"), {
            searchTerm: "t",
        });
        expect(handleSearchChange).toHaveBeenCalledWith(eventOfType("change"), {
            searchTerm: "te",
        });
        expect(handleSearchChange).toHaveBeenCalledWith(eventOfType("change"), {
            searchTerm: "tes",
        });
        expect(handleSearchChange).toHaveBeenCalledWith(eventOfType("change"), {
            searchTerm: "test",
        });
    });

    it("should call onChange handler with correct parameters for radio type", async () => {
        const handleChange = vi.fn();
        render(
            <EbayFilterMenu onChange={handleChange} type="radio">
                <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
                <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
            </EbayFilterMenu>,
        );
        const menuItems = screen.getAllByRole("menuitemradio");
        await userEvent.click(menuItems[0]);
        expect(handleChange).toHaveBeenCalledWith(eventOfType("click"), {
            index: 0,
            checked: ["item1"],
            checkedIndex: [0],
            currentChecked: true,
        });

        await userEvent.click(menuItems[1]);
        expect(handleChange).toHaveBeenCalledWith(eventOfType("click"), {
            index: 1,
            checked: ["item2"],
            checkedIndex: [1],
            currentChecked: true,
        });
    });

    it("should call onChange handler with correct parameters for checkbox type with multiple selections", async () => {
        const handleChange = vi.fn();
        render(
            <EbayFilterMenu onChange={handleChange} type="checkbox">
                <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
                <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
            </EbayFilterMenu>,
        );
        const menuItems = screen.getAllByRole("menuitemcheckbox");
        await userEvent.click(menuItems[0]);
        await userEvent.click(menuItems[1]);
        expect(handleChange).toHaveBeenCalledWith(eventOfType("click"), {
            index: 1,
            checked: ["item1", "item2"],
            checkedIndex: [0, 1],
            currentChecked: true,
        });
    });

    it("should update selected elements correctly when unselecting a checkbox", async () => {
        const handleChange = vi.fn();
        render(
            <EbayFilterMenu onChange={handleChange} type="checkbox">
                <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
                <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
            </EbayFilterMenu>,
        );
        const menuItems = screen.getAllByRole("menuitemcheckbox");
        await userEvent.click(menuItems[0]);
        await userEvent.click(menuItems[1]);
        await userEvent.click(menuItems[0]); // Unselect the first item
        expect(handleChange).toHaveBeenCalledWith(eventOfType("click"), {
            index: 0,
            checked: ["item2"],
            checkedIndex: [1],
            currentChecked: false,
        });
    });

    it("should call onFormSubmit handler with correct parameters", async () => {
        const handleFormSubmit = vi.fn((event) => {
            event.preventDefault();
        });
        render(
            <EbayFilterMenu onFormSubmit={handleFormSubmit} variant="form">
                <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
                <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
                <EbayFilterMenuFooterButton>Submit</EbayFilterMenuFooterButton>
            </EbayFilterMenu>,
        );
        const menuItems = screen.getAllByRole("menuitemcheckbox");
        await userEvent.click(menuItems[0]); // Select the first item
        const footerButton = screen.getByText("Submit");
        await userEvent.click(footerButton);
        expect(handleFormSubmit).toHaveBeenCalledWith(eventOfType("submit"), {
            checked: ["item1"],
            checkedIndex: [0],
        });
    });

    it("should call onFormSubmit handler with correct parameters for radio buttons", async () => {
        const handleFormSubmit = vi.fn((event) => {
            event.preventDefault();
        });
        render(
            <EbayFilterMenu onFormSubmit={handleFormSubmit} variant="form" type="radio">
                <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
                <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
                <EbayFilterMenuFooterButton>Submit</EbayFilterMenuFooterButton>
            </EbayFilterMenu>,
        );
        const menuItems = screen.getAllByRole("menuitemradio");
        await userEvent.click(menuItems[0]); // Select the first item
        const footerButton = screen.getByText("Submit");
        await userEvent.click(footerButton);
        expect(handleFormSubmit).toHaveBeenCalledWith(eventOfType("submit"), {
            checked: ["item1"],
            checkedIndex: [0],
        });
    });

    it("should handle footer button click", async () => {
        const handleFooterClick = vi.fn();
        render(
            <EbayFilterMenu onFooterClick={handleFooterClick}>
                <EbayFilterMenuFooterButton>Footer Button</EbayFilterMenuFooterButton>
            </EbayFilterMenu>,
        );
        const footerButton = screen.getByRole("button");
        await userEvent.click(footerButton);
        expect(handleFooterClick).toHaveBeenCalled();
    });
});
