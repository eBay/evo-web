import React from "react";
import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayRadio } from "../index";
import { EbayLabel } from "../../ebay-field";

describe("<EbayRadio>", () => {
    describe("on radio-button click", () => {
        it("should fire onChange event", () => {
            const value = "test";
            const spy = vi.fn();
            render(
                <EbayRadio value={value} onChange={spy} id="id">
                    <EbayLabel>radio</EbayLabel>
                </EbayRadio>,
            );
            fireEvent.click(screen.getByLabelText("radio"));

            expect(spy).toHaveBeenCalledWith(eventOfType("change"), { value });
        });
        it("should fire onFocus event", () => {
            const value = "test";
            const spy = vi.fn();
            render(
                <EbayRadio value={value} onFocus={spy} id="id">
                    <EbayLabel>radio</EbayLabel>
                </EbayRadio>,
            );
            fireEvent.focus(screen.getByLabelText("radio"));

            expect(spy).toHaveBeenCalledWith(eventOfType("focus"), { value });
        });
    });
    describe("on radio-button key down", () => {
        it("should fire onKeyDown event", () => {
            const value = "test";
            const spy = vi.fn();
            render(
                <EbayRadio value={value} onKeyDown={spy} id="id">
                    <EbayLabel>radio</EbayLabel>
                </EbayRadio>,
            );
            fireEvent.keyDown(screen.getByLabelText("radio"));

            expect(spy).toHaveBeenCalledWith(eventOfType("keydown"), { value });
        });
    });
});
