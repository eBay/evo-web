import React from "react";
import { vi, describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayCheckbox } from "../index";
import { EbayLabel } from "../../ebay-field";

const { getByRole, getByLabelText } = screen;

describe("<EbayCheckbox>", () => {
    describe("on checkbox-button click", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            render(<EbayCheckbox aria-label="checkbox" value="123" onChange={spy} />);
            const input = getByRole("checkbox");
            fireEvent.click(input);
            expect(spy).toHaveBeenCalledWith(eventOfType("change"), { value: "123", checked: true });
        });
    });
    describe("on checkbox-button focus", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            render(<EbayCheckbox aria-label="checkbox" value="123" onFocus={spy} />);
            const input = getByRole("checkbox");
            fireEvent.focus(input);
            expect(spy).toHaveBeenCalledWith(eventOfType("focus"), { value: "123", checked: false });
        });
    });
    describe("on checkbox-button key down", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            render(<EbayCheckbox aria-label="checkbox" value="123" onKeyDown={spy} />);
            const input = getByRole("checkbox");
            fireEvent.keyDown(input);
            expect(spy).toHaveBeenCalledWith(eventOfType("keydown"), { value: "123", checked: false });
        });
    });

    describe("keyboard interactions", () => {
        describe("when Space key is pressed on an enabled checkbox", () => {
            it("should call onChange with checked true", async () => {
                const spy = vi.fn();
                render(<EbayCheckbox aria-label="checkbox" value="123" onChange={spy} />);
                const input = getByRole("checkbox");
                input.focus();
                await userEvent.keyboard(" ");
                expect(spy).toHaveBeenCalledWith(eventOfType("change"), { value: "123", checked: true });
            });
        });

        describe("when Space key is pressed on a disabled checkbox", () => {
            it("should not call onChange", async () => {
                const spy = vi.fn();
                render(<EbayCheckbox aria-label="checkbox" value="123" disabled onChange={spy} />);
                const input = getByRole("checkbox");
                input.focus();
                await userEvent.keyboard(" ");
                expect(spy).not.toHaveBeenCalled();
            });
        });
    });

    // This test fails due to JSDOM issues, should we delete it?
    describe.skip("click interactions", () => {
        describe("when a disabled checkbox is clicked", () => {
            it("should not call onChange", () => {
                const spy = vi.fn();
                render(<EbayCheckbox aria-label="checkbox" value="123" disabled onChange={spy} />);
                fireEvent.click(getByRole("checkbox"));
                expect(spy).not.toHaveBeenCalled();
            });
        });
    });

    describe("ARIA attributes", () => {
        describe("given a default checkbox", () => {
            it("should have role checkbox", () => {
                render(<EbayCheckbox aria-label="checkbox" />);
                expect(getByRole("checkbox")).toBeTruthy();
            });

            it("should be unchecked by default", () => {
                render(<EbayCheckbox aria-label="checkbox" />);
                expect(getByRole("checkbox")).not.toBeChecked();
            });
        });

        describe("given checked={true}", () => {
            it("should render as checked", () => {
                render(<EbayCheckbox aria-label="checkbox" checked onChange={() => {}} />);
                expect(getByRole("checkbox")).toBeChecked();
            });
        });

        describe("given disabled={true}", () => {
            it("should have the disabled attribute", () => {
                render(<EbayCheckbox aria-label="checkbox" disabled />);
                expect(getByRole("checkbox")).toBeDisabled();
            });
        });
    });

    describe("controlled and uncontrolled behavior", () => {
        describe("given defaultChecked={true}", () => {
            it("should render initially checked", () => {
                render(<EbayCheckbox aria-label="checkbox" defaultChecked />);
                expect(getByRole("checkbox")).toBeChecked();
            });
        });

        describe("given a controlled checkbox with checked={true}", () => {
            it("should reflect the controlled checked state", () => {
                render(<EbayCheckbox aria-label="checkbox" checked onChange={() => {}} />);
                expect(getByRole("checkbox")).toBeChecked();
            });

            it("should not change state without prop update when clicked", () => {
                render(<EbayCheckbox aria-label="checkbox" checked onChange={() => {}} />);
                fireEvent.click(getByRole("checkbox"));
                expect(getByRole("checkbox")).toBeChecked();
            });
        });
    });

    describe("label association", () => {
        describe("given an id prop and an EbayLabel child", () => {
            it("should associate label htmlFor with the checkbox id", () => {
                render(
                    <EbayCheckbox id="cb-1" value="test">
                        <EbayLabel>My option</EbayLabel>
                    </EbayCheckbox>,
                );
                expect(getByLabelText("My option")).toBeTruthy();
                expect(getByLabelText("My option")).toHaveAttribute("id", "cb-1");
            });
        });
    });
});
