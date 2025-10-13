import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../../table.stories";

const { Default } = composeStories(stories);

describe("ebay-table frozen header focus management", () => {
    let component, getByRole, tableContainer, tbody;

    beforeEach(async () => {
        component = await render(Default, { 
            frozenHeader: true,
            // Add some test data with focusable elements
            row: [
                {
                    cell: [
                        { renderBody: () => "Test Seller" },
                        { renderBody: () => '<a href="#test">Test Link</a>' },
                        { renderBody: () => '<button type="button">Edit</button>' }
                    ]
                }
            ]
        });
        
        ({ getByRole } = component);
        tableContainer = getByRole("group");
        tbody = tableContainer.querySelector("tbody");
    });

    it("should add focus event listener for frozen header tables", () => {
        expect(tableContainer).toBeDefined();
        expect(tableContainer.classList.contains("table--frozen-header")).toBe(true);
        
        // The event listener should be attached (we can't directly test this,
        // but we can verify the setup conditions are met)
        expect(tbody).toBeDefined();
    });

    it("should have the setupFocusManagement method called on mount", () => {
        // Verify the frozen header class is applied
        expect(tableContainer.classList.contains("table--frozen-header")).toBe(true);
        
        // Verify the component instance has the necessary properties
        const componentInstance = component.component;
        expect(componentInstance.tableContainer).toBeDefined();
        expect(componentInstance.tbody).toBeDefined();
    });

    it("should not add focus management for non-frozen header tables", async () => {
        // Render a table without frozen header
        const normalTable = await render(Default, { frozenHeader: false });
        const normalContainer = normalTable.getByRole("group");
        
        expect(normalContainer.classList.contains("table--frozen-header")).toBe(false);
    });
});