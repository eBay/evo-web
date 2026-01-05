/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { EbayFilter } from "../index";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayFilter />", () => {
    describe("given filter is enabled", () => {
        const onClick = vi.fn();

        beforeEach(() => {
            render(<EbayFilter onClick={onClick}>Text</EbayFilter>);
        });

        it("then it is not selected", () => {
            expect(screen.getByRole("button")).not.toHaveAttribute("aria-pressed");
        });

        describe("when filter is clicked", () => {
            beforeEach(async () => {
                await userEvent.click(screen.getByRole("button"));
            });

            it("then it emits the event with correct data", () => {
                expect(onClick).toHaveBeenCalledWith(eventOfType("click"), {
                    selected: true,
                });
            });

            it("then it is selected", () => {
                expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
            });

            describe("when it is clicked again", () => {
                beforeEach(async () => {
                    await userEvent.click(screen.getByRole("button"));
                });

                it("then it is not selected", () => {
                    expect(screen.getByRole("button")).not.toHaveAttribute("aria-pressed");
                });
            });
        });
    });

    describe("given filter is disabled", () => {
        const onClick = vi.fn();
        beforeEach(() => {
            render(
                <EbayFilter disabled onClick={onClick}>
                    text
                </EbayFilter>,
            );
        });

        describe("when filter is clicked", () => {
            beforeEach(async () => {
                await userEvent.click(screen.getByRole("button"));
            });

            it("then it does not emit the event", () => {
                expect(onClick).not.toHaveBeenCalled();
            });
        });
    });
});
