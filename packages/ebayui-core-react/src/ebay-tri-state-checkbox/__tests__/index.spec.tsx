import React from "react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayTriStateCheckbox } from "../index";

const { getByRole } = screen;

describe("<EbayCheckbox>", () => {
    describe("on checkbox-button click", () => {
        it("should fire an event and check which icon is rendered", async () => {
            const spy = vi.fn();
            const { container } = render(<EbayTriStateCheckbox aria-label="checkbox" value="123" onChange={spy} />);
            const input = getByRole("checkbox");
            fireEvent.click(input);
            expect(spy).toHaveBeenCalledWith(eventOfType("change"), { value: "123", checked: "mixed" });
            expect(input).toHaveAttribute("aria-checked", "mixed");
            fireEvent.click(input);
            expect(input).toHaveAttribute("aria-checked", "true");
            const iconSVG = container.querySelector(`.checkbox__checked`);
            expect(iconSVG).toBeInTheDocument();
        });

        it("should fire an event and check which icon is rendered for controlled component", async () => {
            const spy = vi.fn();
            const { container } = render(
                <EbayTriStateCheckbox aria-label="checkbox" checked="false" value="123" onChange={spy} />,
            );
            const input = getByRole("checkbox");
            fireEvent.click(input);
            const iconSVG = container.querySelector(`.checkbox__unchecked`);
            expect(iconSVG).toBeInTheDocument();
        });
    });
    describe("on checkbox-button focus", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            render(<EbayTriStateCheckbox aria-label="checkbox" value="123" onFocus={spy} />);
            const input = getByRole("checkbox");
            fireEvent.focus(input);
            expect(spy).toHaveBeenCalledWith(eventOfType("focus"), { value: "123", checked: "false" });
        });
    });
    describe("on checkbox-button key down", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            render(<EbayTriStateCheckbox aria-label="checkbox" value="123" onKeyDown={spy} />);
            const input = getByRole("checkbox");
            fireEvent.keyDown(input);
            expect(spy).toHaveBeenCalledWith(eventOfType("keydown"), { value: "123", checked: "false" });
        });
    });
});
