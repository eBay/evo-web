import React from "react";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EbayFakeLink from "../fake-link";

describe("<EbayFakeLink>", () => {
    let component;
    const onClick = vi.fn();
    const onEscape = vi.fn();

    afterEach(vi.clearAllMocks);

    describe("given button is enabled", () => {
        beforeEach(async () => {
            component = await render(
                <EbayFakeLink onClick={onClick} onEscape={onEscape}>
                    Fake-Link
                </EbayFakeLink>,
            );
        });

        describe("when button is clicked", () => {
            beforeEach(async () => {
                await userEvent.click(component.getByRole("button"));
            });

            it("should emit the event with correct data", () => {
                expect(onClick).toHaveBeenCalledTimes(1);
            });
        });

        describe("when escape key is pressed", () => {
            beforeEach(async () => {
                component.getByRole("button").focus();
                await userEvent.keyboard("{escape}");
            });

            it("should emit the event with correct data", () => {
                expect(onEscape).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("given button is disabled", () => {
        beforeEach(async () => {
            component = await render(
                <EbayFakeLink onClick={onClick} onEscape={onEscape} disabled>
                    Fake-Link
                </EbayFakeLink>,
            );
        });

        describe("when button is clicked", () => {
            beforeEach(async () => {
                await userEvent.click(component.getByRole("button"));
            });

            it("should not emit the event", () => {
                expect(onClick).not.toHaveBeenCalled();
            });
        });

        describe("when escape key is pressed", () => {
            beforeEach(async () => {
                component.getByRole("button").focus();
                await userEvent.keyboard("{escape}");
            });

            it("should not emit the event", () => {
                expect(onEscape).not.toHaveBeenCalled();
            });
        });
    });
});
