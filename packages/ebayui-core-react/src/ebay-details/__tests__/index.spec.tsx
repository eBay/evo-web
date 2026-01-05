/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { EbayDetails } from "../index";
import userEvent from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayDetails>", () => {
    it("should render with open as false by default", () => {
        render(
            <EbayDetails text="details">
                <div>content</div>
            </EbayDetails>,
        );
        const details = screen.getByText("details").closest("details") as HTMLDetailsElement;
        expect(details.open).toBe(false);
    });

    it("should render with open as true when passed open=true", () => {
        render(
            <EbayDetails open text="details">
                <div>content</div>
            </EbayDetails>,
        );
        const details = screen.getByText("details").closest("details") as HTMLDetailsElement;
        expect(details.open).toBe(true);
    });

    it("should fire onToggle event", async () => {
        const spy = vi.fn();

        render(
            <EbayDetails onToggle={spy} text="detail">
                <div>content</div>
            </EbayDetails>,
        );

        await userEvent.click(screen.getByText("detail"));

        expect(spy).toHaveBeenCalledWith(eventOfType("toggle"), { open: true });

        await userEvent.click(screen.getByText("detail"));

        expect(spy).toHaveBeenCalledWith(eventOfType("toggle"), { open: false });
    });

    it("should fire onClick event", async () => {
        const spy = vi.fn();

        render(
            <EbayDetails onClick={spy} text="detail">
                <div>content</div>
            </EbayDetails>,
        );

        await userEvent.click(screen.getByText("detail"));

        expect(spy).toHaveBeenCalledWith(eventOfType("click"));
    });

    describe("rendering", () => {
        it("should render details with summary and content", () => {
            const wrapper = render(
                <EbayDetails text="details">
                    <div>content</div>
                </EbayDetails>,
            );

            expect(wrapper.getByText("details")).toBeInTheDocument();
            expect(wrapper.getByText("content")).toBeInTheDocument();
        });
    });
});
