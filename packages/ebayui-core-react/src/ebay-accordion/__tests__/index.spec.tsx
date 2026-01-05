/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { EbayAccordion } from "../index";
import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { EbayDetails } from "../../ebay-details";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayAccordion />", () => {
    it("should trigger onToggle when a details element is toggled", async () => {
        const onToggle = vi.fn();
        const { getByText } = render(
            <EbayAccordion onToggle={onToggle}>
                <EbayDetails text="Summary 1">Details 1</EbayDetails>
                <EbayDetails text="Summary 2">Details 2</EbayDetails>
            </EbayAccordion>,
        );

        await userEvent.click(getByText("Summary 1"));

        expect(onToggle).toHaveBeenCalledWith(eventOfType("toggle"), {
            open: true,
            index: 0,
        });

        await userEvent.click(getByText("Summary 2"));

        expect(onToggle).toHaveBeenCalledWith(eventOfType("toggle"), {
            open: true,
            index: 1,
        });

        expect(onToggle).toHaveBeenCalledTimes(2);
    });

    it("should trigger the onToggle on the EbayDetails component", async () => {
        const onToggle = vi.fn();
        const { getByText } = render(
            <EbayAccordion>
                <EbayDetails text="Summary 1" onToggle={onToggle}>
                    Details 1
                </EbayDetails>

                <EbayDetails text="Summary 2" onToggle={onToggle}>
                    Details 1
                </EbayDetails>
            </EbayAccordion>,
        );

        await userEvent.click(getByText("Summary 1"));

        expect(onToggle).toHaveBeenCalledWith(eventOfType("toggle"), {
            open: true,
        });

        expect(onToggle).toHaveBeenCalledTimes(1);
    });

    describe("given autoCollapse is true", () => {
        it("should close other details elements when one is opened", async () => {
            const { getByText } = render(
                <EbayAccordion autoCollapse>
                    <EbayDetails text="Summary 1">Details 1</EbayDetails>
                    <EbayDetails text="Summary 2">Details 2</EbayDetails>
                </EbayAccordion>,
            );

            await userEvent.click(getByText("Summary 1"));

            expect(getByText("Details 1").closest("details")?.open).toBe(true);
            expect(getByText("Details 2").closest("details")?.open).toBe(false);

            await userEvent.click(getByText("Summary 2"));

            expect(getByText("Details 1").closest("details")?.open).toBe(false);
            expect(getByText("Details 2").closest("details")?.open).toBe(true);
        });

        it("should trigger onToggle when a details element is toggled", async () => {
            const onToggle = vi.fn();
            const { getByText } = render(
                <EbayAccordion autoCollapse onToggle={onToggle}>
                    <EbayDetails text="Summary 1">Details 1</EbayDetails>
                    <EbayDetails text="Summary 2">Details 2</EbayDetails>
                </EbayAccordion>,
            );

            await userEvent.click(getByText("Summary 1"));

            onToggle.mockClear();

            await userEvent.click(getByText("Summary 2"));

            // Check first details event is closed
            await waitFor(() => {
                expect(onToggle).toHaveBeenCalledWith(eventOfType("toggle"), {
                    open: false,
                    index: 0,
                });
            });

            // Check second details event is opened
            expect(onToggle).toHaveBeenCalledWith(eventOfType("toggle"), {
                open: true,
                index: 1,
            });

            expect(onToggle).toHaveBeenCalledTimes(2);
        });
    });

    it("should support passing a className", () => {
        const { container } = render(
            <EbayAccordion className="my-class">
                <EbayDetails text="Summary 1">Details 1</EbayDetails>
                <EbayDetails text="Summary 2">Details 2</EbayDetails>
            </EbayAccordion>,
        );

        expect(container.querySelector(".accordion")).toHaveClass("my-class");
    });

    it("should support passing aria-roledescription", () => {
        const { container } = render(
            <EbayAccordion aria-roledescription="my-accordion">
                <EbayDetails text="Summary 1">Details 1</EbayDetails>
                <EbayDetails text="Summary 2">Details 2</EbayDetails>
            </EbayAccordion>,
        );

        expect(container.querySelector(".accordion")).toHaveAttribute("aria-roledescription", "my-accordion");
    });
});
