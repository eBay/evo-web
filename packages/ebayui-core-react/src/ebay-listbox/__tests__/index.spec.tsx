/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayListbox, EbayListboxProps } from "../listbox";
import { EbayListboxOption } from "../listbox-option";

function renderListbox(props?: Omit<EbayListboxProps, "children">) {
    return render(
        <form>
            <EbayListbox name="listbox-name" {...props}>
                <EbayListboxOption value="1">Option 1</EbayListboxOption>
                <EbayListboxOption value="2">Option 2</EbayListboxOption>
                <EbayListboxOption value="3">Option 3</EbayListboxOption>
            </EbayListbox>
        </form>,
    );
}

describe("<EbayListbox />", () => {
    it("should render the listbox <select> element with the first element selected", () => {
        const { container } = renderListbox();

        expect(container.querySelector("form")?.elements["listbox-name"].value).toBe("1");
    });

    describe("when listSelection=auto", () => {
        it("should emit change event on arrow down key press", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "auto", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();

            await userEvent.keyboard("{arrowdown}{arrowdown}");

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 1, selected: ["2"], wasClicked: false });
        });

        it("should emit change event on arrow up key press", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "auto", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();

            await userEvent.keyboard("{arrowdown}{arrowdown}");
            onChange.mockClear();
            await userEvent.keyboard("{arrowup}");

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 0, selected: ["1"], wasClicked: false });
        });

        it("should not select the option on filtering by typing", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "auto", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();

            await userEvent.keyboard("Option 3");

            expect(onChange).not.toHaveBeenCalled();
        });
    });

    describe("when listSelection=manual", () => {
        it("should not emit change event on arrow down key press", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "manual", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();

            await userEvent.keyboard("{arrowdown}");

            expect(onChange).not.toHaveBeenCalled();
        });

        it("should not emit change event on arrow up key press", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "manual", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();

            await userEvent.keyboard("{arrowup}");

            expect(onChange).not.toHaveBeenCalled();
        });

        it("should emit change event on space key press", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "manual", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard(" ");

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 0, selected: ["1"], wasClicked: false });
        });

        it("should emit change event on enter key press", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "manual", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 0, selected: ["1"], wasClicked: false });

            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 1, selected: ["2"], wasClicked: false });
        });

        it("should emit change event on click", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "manual", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();
            await userEvent.click(screen.getByText("Option 2"));

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 1, selected: ["2"], wasClicked: true });
        });

        it("should select the option on filtering by typing", async () => {
            const onChange = vi.fn();
            renderListbox({ listSelection: "manual", onChange });

            const listbox = screen.getByRole("listbox");
            listbox.focus();

            await userEvent.keyboard("Option 3{enter}");

            expect(onChange).toHaveBeenCalledWith(expect.any(Object), { index: 2, selected: ["3"], wasClicked: false });
        });
    });

    it("should not emit change event when clicking the disabled option", async () => {
        const onChange = vi.fn();
        render(
            <EbayListbox onChange={onChange}>
                <EbayListboxOption value="1">Option 1</EbayListboxOption>
                <EbayListboxOption value="2" disabled>
                    Option 2
                </EbayListboxOption>
                <EbayListboxOption value="3">Option 3</EbayListboxOption>
            </EbayListbox>,
        );

        const listbox = screen.getByRole("listbox");
        listbox.focus();
        await userEvent.click(screen.getByText("Option 2"));

        expect(onChange).not.toHaveBeenCalled();
    });

    it("should emit onEscape when pressing the escape key", async () => {
        const onEscape = vi.fn();
        renderListbox({ onEscape });

        const listbox = screen.getByRole("listbox");
        listbox.focus();
        await userEvent.keyboard("{escape}");

        expect(onEscape).toHaveBeenCalled();
    });

    describe("accessibility", () => {
        it("should have the aria-selected attribute set to true on the selected option", async () => {
            renderListbox({ listSelection: "auto" });

            const listbox = screen.getByRole("listbox");
            listbox.focus();
            await userEvent.keyboard("{arrowdown}");

            const options = screen.getAllByRole("option");

            expect(options[0]).toHaveAttribute("aria-selected", "true");
            expect(options[1]).toHaveAttribute("aria-selected", "false");
            expect(options[2]).toHaveAttribute("aria-selected", "false");
        });

        it("should set the aria-activedescendant attribute on the listbox", async () => {
            renderListbox({ listSelection: "auto" });

            const listbox = screen.getByRole("listbox");
            listbox.focus();
            await userEvent.keyboard("{arrowdown}");

            const options = screen.getAllByRole("option");

            expect(listbox).toHaveAttribute("aria-activedescendant", options[0].id);

            await userEvent.keyboard("{arrowdown}");

            expect(listbox).toHaveAttribute("aria-activedescendant", options[1].id);
        });
    });
});
