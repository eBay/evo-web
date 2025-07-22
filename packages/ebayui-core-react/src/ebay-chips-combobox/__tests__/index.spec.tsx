/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayChipsCombobox } from "../";
import { EbayComboboxOption } from "../../ebay-combobox";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("EbayChipsCombobox", () => {
    it("should renders the component", () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        expect(screen.getByPlaceholderText("Select options")).toBeInTheDocument();
    });

    it("should selects an option when clicked", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange}>
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        await userEvent.click(screen.getByText("Option 1"));
        expect(handleChange).toHaveBeenCalledWith(eventOfType("mousedown"), { selected: ["Option 1"] });
    });

    it("should add a chip when Enter is pressed", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        await userEvent.type(screen.getByPlaceholderText("Select options"), "Option 1{enter}");
        expect(handleChange).toHaveBeenCalledWith(eventOfType("keydown"), { selected: ["Option 1"] });
    });

    it("should add a chip when Enter is pressed and the option is not in the list", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        await userEvent.type(screen.getByPlaceholderText("Select options"), "New Option{enter}");
        expect(handleChange).toHaveBeenCalledWith(eventOfType("keydown"), { selected: ["New Option"] });
    });

    it("should maintain previous selected options", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        await userEvent.click(screen.getByText("Option 2"));
        expect(handleChange).toHaveBeenCalledWith(eventOfType("mousedown"), { selected: ["Option 2"] });
        await userEvent.click(screen.getByText("Option 1"));
        expect(handleChange).toHaveBeenCalledWith(eventOfType("mousedown"), { selected: ["Option 2", "Option 1"] });
    });

    it("should hide the option from the combobox when selected", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        await userEvent.click(screen.getByText("Option 1"));
        const options = screen.getAllByRole("option");
        expect(options.length).toBe(2);
        expect(options[0]).toHaveTextContent("Option 2");
        expect(options[1]).toHaveTextContent("Option 3");
    });

    it("should remove a chip when the delete button is clicked", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );
        await userEvent.click(screen.getByText("Option 1"));
        expect(screen.getByText("Option 1")).toBeInTheDocument();
        expect(handleChange).toHaveBeenCalledWith(eventOfType("mousedown"), { selected: ["Option 1"] });
        await userEvent.click(screen.getByRole("button", { name: "Remove Option 1" }));
        expect(handleChange).toHaveBeenCalledWith(eventOfType("click"), { selected: [] });
    });

    it("should support control of selected options", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} selected={["Option 1"]} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );

        await userEvent.click(screen.getByText("Option 2"));
        expect(handleChange).toHaveBeenCalledWith(eventOfType("mousedown"), { selected: ["Option 1", "Option 2"] });

        const options = screen.getAllByRole("option");

        // Option 2 is still available as the "selected" didn't change
        expect(options.length).toBe(2);
        expect(options[0]).toHaveTextContent("Option 2");
    });

    it('should update the list when "selected" prop changes', () => {
        const handleChange = jest.fn();
        const { rerender } = render(
            <EbayChipsCombobox onChange={handleChange} selected={["Option 1"]} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );

        rerender(
            <EbayChipsCombobox onChange={handleChange} selected={["Option 1", "Option 2"]} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );

        const options2 = screen.getAllByRole("option");
        expect(options2.length).toBe(1);
        expect(options2[0]).toHaveTextContent("Option 3");
    });

    it('should throw an error when "selected" prop is used with "defaultSelected"', () => {
        const handleChange = jest.fn();
        expect(() =>
            render(
                <EbayChipsCombobox
                    onChange={handleChange}
                    selected={["Option 1"]}
                    defaultSelected={["Option 2"]}
                    placeholder="Select options"
                >
                    <EbayComboboxOption text="Option 1" />
                    <EbayComboboxOption text="Option 2" />
                    <EbayComboboxOption text="Option 3" />
                </EbayChipsCombobox>,
            ),
        ).toThrow('EbayChipsCombobox: You cannot use "selected" and "defaultSelected" at the same time.');
    });

    it('should throw an error when "selected" prop is used without "onChange"', () => {
        expect(() =>
            render(
                <EbayChipsCombobox selected={["Option 1"]} placeholder="Select options">
                    <EbayComboboxOption text="Option 1" />
                    <EbayComboboxOption text="Option 2" />
                    <EbayComboboxOption text="Option 3" />
                </EbayChipsCombobox>,
            ),
        ).toThrow('EbayChipsCombobox: You must provide an "onChange" prop when using the "selected" prop.');
    });

    it("should support uncontrolled when passing defaultSelected", async () => {
        const handleChange = jest.fn();
        render(
            <EbayChipsCombobox onChange={handleChange} defaultSelected={["Option 1"]} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );

        await userEvent.click(screen.getByText("Option 2"));
        expect(handleChange).toHaveBeenCalledWith(eventOfType("mousedown"), { selected: ["Option 1", "Option 2"] });

        const options = screen.getAllByRole("option");

        expect(options.length).toBe(1);
        expect(options[0]).toHaveTextContent("Option 3");
    });

    it("should properly render when all options are selected", async () => {
        render(
            <EbayChipsCombobox defaultSelected={["Option 1", "Option 2", "Option 3"]} placeholder="Select options">
                <EbayComboboxOption text="Option 1" />
                <EbayComboboxOption text="Option 2" />
                <EbayComboboxOption text="Option 3" />
            </EbayChipsCombobox>,
        );

        const optionToRemove = screen.getByLabelText("Remove Option 2");
        await userEvent.click(optionToRemove);

        const options = screen.getAllByRole("option");
        expect(options.length).toBe(1);
        expect(options[0]).toBeVisible();
    });
});
