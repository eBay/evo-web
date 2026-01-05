/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayCombobox, EbayComboboxButton, EbayComboboxOption } from "../index";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

const renderCombobox = (props?) =>
    render(
        <EbayCombobox {...props}>
            <EbayComboboxOption text="option 1" />
            <EbayComboboxOption text="option 2" />
        </EbayCombobox>,
    );

describe("<EbayCombobox />", () => {
    it("should update input value on arrow down", async () => {
        renderCombobox();
        const input = screen.getByRole("combobox");

        await userEvent.type(input, "{arrowdown}");

        expect(input).toHaveValue("option 1");

        await userEvent.type(input, "{arrowdown}");
        expect(input).toHaveValue("option 2");
    });

    it('should filter options on typing when autocomplete is "list"', async () => {
        renderCombobox({ autocomplete: "list" });
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        await userEvent.type(input, "2");

        expect(screen.queryByRole("option", { name: "option 1" })).not.toBeInTheDocument();
        expect(screen.getByRole("option", { name: "option 2" })).toBeInTheDocument();
    });

    it('should not filter options on typing when autocomplete is "none"', async () => {
        renderCombobox({ autocomplete: "none" });
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        await userEvent.type(input, "2");

        expect(screen.getByRole("option", { name: "option 1" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "option 2" })).toBeInTheDocument();
    });

    it("should not render the listbox when there is no matching option", async () => {
        renderCombobox({ autocomplete: "list" });
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        await userEvent.type(input, "3");

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    it("should have the correct aria-active-descendant on arrow down", async () => {
        renderCombobox();
        const input = screen.getByRole("combobox");

        await userEvent.type(input, "{arrowdown}");

        const option1 = screen.getByRole("option", { name: "option 1" });
        const option1Id = option1.getAttribute("id");
        expect(input).toHaveAttribute("aria-activedescendant", option1Id);

        await userEvent.type(input, "{arrowdown}");
        const option2 = screen.getByRole("option", { name: "option 2" });
        const option2Id = option2.getAttribute("id");
        expect(input).toHaveAttribute("aria-activedescendant", option2Id);
    });

    it("should set the aria-expanded on combobox on focus", async () => {
        renderCombobox();
        const input = screen.getByRole("combobox");

        await userEvent.click(input);

        const listbox = screen.getByRole("listbox");
        expect(input).toHaveAttribute("aria-expanded", "true");
        expect(input).toHaveAttribute("aria-controls", listbox.getAttribute("id"));
    });

    it("should set the aria-expanded as false on escape", async () => {
        renderCombobox();
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        expect(input).toHaveAttribute("aria-expanded", "true");

        await userEvent.type(input, "{escape}");
        expect(input).toHaveAttribute("aria-expanded", "false");
    });

    it("should set the aria-expanded as false on clicking the option", async () => {
        renderCombobox();
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        expect(input).toHaveAttribute("aria-expanded", "true");

        const option = screen.getByRole("option", { name: "option 1" });
        await userEvent.click(option);
        expect(input).toHaveAttribute("aria-expanded", "false");
    });

    it("should not set the aria-expanded as false on clicking the button", async () => {
        render(
            <EbayCombobox>
                <EbayComboboxButton>Button</EbayComboboxButton>
                <EbayComboboxOption text="option 1" />
                <EbayComboboxOption text="option 2" />
            </EbayCombobox>,
        );
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        expect(input).toHaveAttribute("aria-expanded", "true");

        const button = screen.getByText("Button");
        await userEvent.click(button);
        expect(input).toHaveAttribute("aria-expanded", "true");
    });

    it("should set aria-selected on the selected option", async () => {
        renderCombobox();
        const input = screen.getByRole("combobox");

        await userEvent.click(input);
        await userEvent.type(input, "option 1");

        const option1 = screen.getByRole("option", { name: "option 1" });
        expect(option1).toHaveAttribute("aria-selected", "true");

        const option2 = screen.getByRole("option", { name: "option 2" });
        expect(option2).toHaveAttribute("aria-selected", "false");
    });

    it("should render the floating label", () => {
        renderCombobox({ floatingLabel: "Label" });
        expect(screen.getByText("Label")).toBeInTheDocument();
    });

    it("should render the floating label on update", () => {
        const { rerender } = renderCombobox({ floatingLabel: "Label" });
        expect(screen.getByText("Label")).toBeInTheDocument();

        const input = screen.getByRole("combobox");
        userEvent.click(input);

        rerender(<EbayCombobox floatingLabel="New Label" />);
        expect(screen.getByText("New Label")).toBeInTheDocument();
    });

    it("should render the floating label on update when initial value is not set", () => {
        const { rerender } = renderCombobox();

        rerender(<EbayCombobox floatingLabel="New Label" />);
        expect(screen.getByText("New Label")).toBeInTheDocument();
    });

    it('should add the "floating-label__label--focus" class on focus after a floatingLabel update', async () => {
        const { rerender } = renderCombobox();

        rerender(<EbayCombobox floatingLabel="Label" />);
        rerender(<EbayCombobox floatingLabel="New Label" />);
        const input = screen.getByRole("combobox");
        await userEvent.tab();
        expect(document.activeElement).toBe(input);

        expect(screen.getByText("New Label")).toHaveClass("floating-label__label--focus");
    });

    describe("event handlers", () => {
        it("should call EbayComboboxButton onClick event handler when clicked", async () => {
            const onClick = vi.fn();
            render(
                <EbayCombobox>
                    <EbayComboboxButton onClick={onClick}>Button</EbayComboboxButton>
                    <EbayComboboxOption text="option 1" />
                    <EbayComboboxOption text="option 2" />
                </EbayCombobox>,
            );

            const button = screen.getByText("Button");
            await userEvent.click(button);

            expect(onClick).toHaveBeenCalledTimes(1);
        });

        it("should call onExpand on clicking the combobox input", async () => {
            const onExpand = vi.fn();
            renderCombobox({ onExpand });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);

            expect(onExpand).toHaveBeenCalledTimes(1);
        });

        it("should call onExpand once on arrow down event", async () => {
            const onExpand = vi.fn();
            renderCombobox({ onExpand });
            const input = screen.getByRole("combobox");

            await userEvent.type(input, "{arrowdown}");
            await userEvent.type(input, "{arrowdown}");
            await userEvent.type(input, "{arrowdown}");

            expect(onExpand).toHaveBeenCalledTimes(1);
        });

        it("should call onCollapse on escape", async () => {
            const onCollapse = vi.fn();
            renderCombobox({ onCollapse });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            await userEvent.type(input, "{escape}");

            expect(onCollapse).toHaveBeenCalledTimes(1);
        });

        it("should call onCollapse when tabing out of the input", async () => {
            const onCollapse = vi.fn();
            renderCombobox({ onCollapse });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);

            expect(onCollapse).not.toHaveBeenCalled();

            await userEvent.tab();

            expect(onCollapse).toHaveBeenCalledTimes(1);
        });

        it("should call onCollapse when clicking the option", async () => {
            const onCollapse = vi.fn();
            renderCombobox({ onCollapse });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            const option = screen.getByRole("option", { name: "option 1" });

            await userEvent.click(option);

            expect(onCollapse).toHaveBeenCalledTimes(1);
        });

        it("should not call onCollapse when clicking the button", async () => {
            const onCollapse = vi.fn();
            render(
                <EbayCombobox onCollapse={onCollapse}>
                    <EbayComboboxButton>Button</EbayComboboxButton>
                    <EbayComboboxOption text="option 1" />
                    <EbayComboboxOption text="option 2" />
                </EbayCombobox>,
            );

            const button = screen.getByText("Button");
            await userEvent.click(button);

            expect(onCollapse).not.toHaveBeenCalled();
        });

        it("should call onInputChange event handler on typing in the input", async () => {
            const onInputChange = vi.fn();
            renderCombobox({ onInputChange });
            const input = screen.getByRole("combobox");

            await userEvent.type(input, "a");

            expect(onInputChange).toHaveBeenCalledTimes(1);
            expect(onInputChange).toHaveBeenCalledWith(eventOfType("change"), {
                currentInputValue: "a",
                selectedOption: {},
            });
        });

        it("should call onInputChange with the selected option when an option is selected", async () => {
            const onInputChange = vi.fn();
            renderCombobox({ onInputChange });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            await userEvent.type(input, "option 1");

            // Call onInputChange on each key press above
            expect(onInputChange).toHaveBeenCalledTimes(8);
            expect(onInputChange).toHaveBeenCalledWith(eventOfType("change"), {
                currentInputValue: "option 1",
                selectedOption: { text: "option 1" },
            });
        });

        it("should call onChange event handler on blur of the input", async () => {
            const onChange = vi.fn();
            renderCombobox({ onChange });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            await userEvent.type(input, "option 1");
            await userEvent.tab();

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(eventOfType("blur"), {
                currentInputValue: "option 1",
                selectedOption: { text: "option 1" },
            });
        });

        it("should not call onChange event handler on blur when the value is the same", async () => {
            const onChange = vi.fn();
            renderCombobox({ onChange });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            await userEvent.type(input, "option 1");
            await userEvent.tab();
            onChange.mockClear();

            await userEvent.click(input);
            await userEvent.tab();

            expect(onChange).not.toHaveBeenCalled();
        });

        it("should call onClick event handler when clicking the input", async () => {
            const onClick = vi.fn();
            renderCombobox({ onClick });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);

            expect(onClick).toHaveBeenCalledTimes(1);
            expect(onClick).toHaveBeenCalledWith(eventOfType("click"), {
                currentInputValue: "",
                selectedOption: {},
            });
        });

        it("should call onClick event handler with the selected option when an option is selected", async () => {
            const onClick = vi.fn();
            renderCombobox({ onClick });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            await userEvent.type(input, "option 1");
            await userEvent.click(input);

            expect(onClick).toHaveBeenCalledWith(eventOfType("click"), {
                currentInputValue: "option 1",
                selectedOption: { text: "option 1" },
            });
        });

        it("should call onFocus event handler when focusing the input", async () => {
            const onFocus = vi.fn();
            renderCombobox({ onFocus });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);

            expect(onFocus).toHaveBeenCalledTimes(1);
            expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), {
                currentInputValue: "",
                selectedOption: {},
            });
        });

        it("should call onFocus event handler with the selected option when an option is selected", async () => {
            const onFocus = vi.fn();
            renderCombobox({ onFocus });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            await userEvent.type(input, "option 1");
            await userEvent.tab();
            await userEvent.click(input);

            expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), {
                currentInputValue: "option 1",
                selectedOption: { text: "option 1" },
            });
        });

        it("should call onSelect event handler when pressing enter", async () => {
            const onSelect = vi.fn();
            renderCombobox({ onSelect });
            const input = screen.getByRole("combobox");

            await userEvent.type(input, "{arrowdown}");
            await userEvent.type(input, "{arrowdown}");
            await userEvent.type(input, "{enter}");

            expect(onSelect).toHaveBeenCalledTimes(1);
            expect(onSelect).toHaveBeenCalledWith(eventOfType("keydown"), {
                currentInputValue: "option 2",
                selectedOption: { text: "option 2" },
            });
        });

        it("should not call onSelect on arrow down", async () => {
            const onSelect = vi.fn();
            renderCombobox({ onSelect });
            const input = screen.getByRole("combobox");

            await userEvent.type(input, "{arrowdown}");

            expect(onSelect).not.toHaveBeenCalled();
        });

        it("should call onSelect when the option is clicked", async () => {
            const onSelect = vi.fn();
            renderCombobox({ onSelect });
            const input = screen.getByRole("combobox");

            await userEvent.click(input);
            const option = screen.getByRole("option", { name: "option 1" });
            await userEvent.click(option);

            expect(onSelect).toHaveBeenCalledTimes(1);
            expect(onSelect).toHaveBeenCalledWith(eventOfType("mousedown"), {
                currentInputValue: "option 1",
                selectedOption: { text: "option 1" },
            });
        });

        it("should call onClick event of the EbayComboboxOption when clicked", async () => {
            const onClick = vi.fn();
            render(
                <EbayCombobox>
                    <EbayComboboxOption onClick={onClick} text="option 1" />
                    <EbayComboboxOption text="option 2" />
                </EbayCombobox>,
            );

            const option = screen.getByRole("option", { name: "option 1" });
            await userEvent.click(option);

            expect(onClick).toHaveBeenCalledTimes(1);
        });

        it("should call onFloatingLabelInit on floating label init and update", () => {
            const onFloatingLabelInit = vi.fn();
            const { rerender } = renderCombobox({ floatingLabel: "Label", onFloatingLabelInit });

            expect(onFloatingLabelInit).toHaveBeenCalledTimes(1);
            rerender(<EbayCombobox floatingLabel="New Label" onFloatingLabelInit={onFloatingLabelInit} />);
            expect(onFloatingLabelInit).toHaveBeenCalledTimes(2);
        });
    });
});
