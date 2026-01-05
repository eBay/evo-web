/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayTable, EbayTableCell, EbayTableHeader, EbayTableRow } from "../index";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

const renderComponent = (props) =>
    render(
        <EbayTable {...props}>
            <EbayTableHeader>Column</EbayTableHeader>
            <EbayTableRow a11ySelectRowText="Select value 1">
                <EbayTableCell>Value 1</EbayTableCell>
            </EbayTableRow>
            <EbayTableRow a11ySelectRowText="Select value 2">
                <EbayTableCell>Value 2</EbayTableCell>
            </EbayTableRow>
        </EbayTable>,
    );

describe("<EbayTable />", () => {
    it("should call onSelect with the event and { selected, allSelected } object when selecting a row", async () => {
        const onSelect = vi.fn();
        renderComponent({ mode: "selection", onSelect });

        const checkbox = screen.getByLabelText("Select value 1");
        await userEvent.click(checkbox);

        expect(onSelect).toHaveBeenCalledWith(eventOfType("change"), {
            selected: {
                "0": true,
                "1": false,
            },
            allSelected: "mixed",
        });
    });

    it("should call onSelect with the event and { selected, allSelected } object when selecting all rows", async () => {
        const onSelect = vi.fn();
        renderComponent({ mode: "selection", onSelect });

        const checkbox = screen.getByRole("checkbox", { name: "Select all rows" });
        await userEvent.click(checkbox);

        expect(onSelect).toHaveBeenCalledWith(eventOfType("change"), {
            selected: {
                "0": true,
                "1": true,
            },
            allSelected: "true",
        });
    });

    it("should use the row name in the selected state", async () => {
        const onSelect = vi.fn();
        render(
            <EbayTable mode="selection" onSelect={onSelect}>
                <EbayTableHeader>Column</EbayTableHeader>
                <EbayTableRow name="row1" a11ySelectRowText="Select value 1">
                    <EbayTableCell>Value 1</EbayTableCell>
                </EbayTableRow>
                <EbayTableRow name="row2" a11ySelectRowText="Select value 2">
                    <EbayTableCell>Value 2</EbayTableCell>
                </EbayTableRow>
            </EbayTable>,
        );

        const checkbox = screen.getByLabelText("Select value 1");
        await userEvent.click(checkbox);

        expect(onSelect).toHaveBeenCalledWith(eventOfType("change"), {
            selected: {
                row1: true,
                row2: false,
            },
            allSelected: "mixed",
        });
    });

    it("should call onSort with the event and { sorted } object when sorting a column", async () => {
        const onSort = vi.fn();
        render(
            <EbayTable mode="selection" onSort={onSort}>
                <EbayTableHeader sort="none">Column</EbayTableHeader>
                <EbayTableRow>
                    <EbayTableCell>Value 1</EbayTableCell>
                </EbayTableRow>
            </EbayTable>,
        );

        const header = screen.getByText("Column");
        await userEvent.click(header);

        expect(onSort).toHaveBeenCalledWith(eventOfType("click"), {
            sorted: {
                "0": "asc",
            },
        });

        await userEvent.click(header);

        expect(onSort).toHaveBeenCalledWith(eventOfType("click"), {
            sorted: {
                "0": "desc",
            },
        });

        await userEvent.click(header);

        expect(onSort).toHaveBeenCalledWith(eventOfType("click"), {
            sorted: {
                "0": "none",
            },
        });
    });

    it("should update the allSelected checkbox to mixed when some rows are selected", async () => {
        renderComponent({ mode: "selection" });

        const checkbox1 = screen.getByLabelText("Select value 1");

        await userEvent.click(checkbox1);

        const checkboxAll = screen.getByRole("checkbox", { name: "Select all rows" });
        expect(checkboxAll).toHaveAttribute("aria-checked", "mixed");
    });

    it("should update the allSelected checkbox to all rows after selecting a mixed state", async () => {
        renderComponent({ mode: "selection" });

        const checkbox1 = screen.getByLabelText("Select value 1") as HTMLInputElement;
        const checkbox2 = screen.getByLabelText("Select value 2") as HTMLInputElement;

        // Select first row
        await userEvent.click(checkbox1);

        const checkboxAll = screen.getByRole("checkbox", { name: "Select all rows" });
        expect(checkboxAll).toHaveAttribute("aria-checked", "mixed");

        await userEvent.click(checkboxAll);

        expect(checkboxAll).toHaveAttribute("aria-checked", "true");
        expect(checkbox2.checked).toBe(true);
    });

    it("should update the allSelected checkbox to true when all rows are selected", async () => {
        renderComponent({ mode: "selection" });

        const checkboxAll = screen.getByRole("checkbox", { name: "Select all rows" });
        await userEvent.click(checkboxAll);

        expect(checkboxAll).toHaveAttribute("aria-checked", "true");
    });

    it("should update the allSelected checkbox to false when no rows are selected", async () => {
        renderComponent({ mode: "selection" });

        const checkboxAll = screen.getByRole("checkbox", { name: "Select all rows" });
        // Select all rows
        await userEvent.click(checkboxAll);

        // Deselect all rows
        await userEvent.click(checkboxAll);

        expect(checkboxAll).toHaveAttribute("aria-checked", "false");
    });

    it("should select all rows when the allSelected checkbox is checked", async () => {
        const onSelect = vi.fn();
        renderComponent({ mode: "selection", onSelect });

        const checkboxAll = screen.getByRole("checkbox", { name: "Select all rows" });
        await userEvent.click(checkboxAll);

        const checkbox1 = screen.getByLabelText("Select value 1") as HTMLInputElement;
        const checkbox2 = screen.getByLabelText("Select value 2") as HTMLInputElement;

        expect(checkbox1.checked).toBe(true);
        expect(checkbox2.checked).toBe(true);
    });

    it("should deselect all rows when the allSelected checkbox is unchecked", async () => {
        const onSelect = vi.fn();
        renderComponent({ mode: "selection", onSelect });

        const checkboxAll = screen.getByRole("checkbox", { name: "Select all rows" });
        // Select all rows
        await userEvent.click(checkboxAll);

        // Deselect all rows
        await userEvent.click(checkboxAll);

        const checkbox1 = screen.getByLabelText("Select value 1") as HTMLInputElement;
        const checkbox2 = screen.getByLabelText("Select value 2") as HTMLInputElement;

        expect(checkbox1.checked).toBe(false);
        expect(checkbox2.checked).toBe(false);
    });
});
