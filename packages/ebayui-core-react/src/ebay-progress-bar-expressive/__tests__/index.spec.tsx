import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act, waitFor } from "@testing-library/react";
import EbayProgressBarExpressive from "../progress-bar-expressive";
import EbayProgressBarExpressiveMessage from "../progress-bar-expressive-message";
import { useReducedMotion } from "../../utils";

jest.useFakeTimers();

jest.mock("../../utils", () => ({
    ...jest.requireActual("../../utils"),
    useReducedMotion: jest.fn(() => false),
}));

describe("EbayProgressBarExpressive", () => {
    it("should render without messages", () => {
        render(<EbayProgressBarExpressive aria-label="Progress" />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toBeInTheDocument();
    });

    it("should render with messages and show each message after default duration", async () => {
        render(
            <EbayProgressBarExpressive aria-label="Progress">
                <EbayProgressBarExpressiveMessage>Message 1</EbayProgressBarExpressiveMessage>
                <EbayProgressBarExpressiveMessage>Message 2</EbayProgressBarExpressiveMessage>
            </EbayProgressBarExpressive>,
        );

        // Next message has aria-hidden=true
        expect(screen.getByText("Message 1")).toHaveAttribute("aria-hidden", "true");

        act(() => {
            jest.advanceTimersByTime(1500); // Default duration
        });

        await waitFor(() => {
            expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");
            expect(screen.getByText("Message 2")).toHaveAttribute("aria-hidden", "true");
        });

        act(() => {
            jest.advanceTimersByTime(1500); // Default duration
        });

        await waitFor(() => {
            expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
            expect(screen.getByText("Message 1")).toHaveAttribute("aria-hidden", "true");
        });
    });

    it("should handle custom duration for each message", async () => {
        render(
            <EbayProgressBarExpressive aria-label="Progress">
                <EbayProgressBarExpressiveMessage duration={2000}>Message 1</EbayProgressBarExpressiveMessage>
                <EbayProgressBarExpressiveMessage duration={3000}>Message 2</EbayProgressBarExpressiveMessage>
            </EbayProgressBarExpressive>,
        );

        act(() => {
            jest.advanceTimersByTime(2000); // Custom duration for Message 1
        });

        await waitFor(() => {
            expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");
            expect(screen.getByText("Message 2")).toHaveAttribute("aria-hidden", "true");
        });

        act(() => {
            jest.advanceTimersByTime(3000); // Custom duration for Message 2
        });

        await waitFor(() => {
            expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
            expect(screen.getByText("Message 1")).toHaveAttribute("aria-hidden", "true");
        });
    });

    describe("Reduced Motion", () => {
        beforeEach(() => {
            (useReducedMotion as jest.MockedFunction<typeof useReducedMotion>).mockReturnValue(true);
        });

        it("should show the first message immediately and apply reduced motion multiplier to subsequent messages", async () => {
            render(
                <EbayProgressBarExpressive aria-label="Progress">
                    <EbayProgressBarExpressiveMessage>Message 1</EbayProgressBarExpressiveMessage>
                    <EbayProgressBarExpressiveMessage>Message 2</EbayProgressBarExpressiveMessage>
                </EbayProgressBarExpressive>,
            );

            // First message should appear immediately
            expect(screen.getByText("Message 1")).toBeInTheDocument();
            expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");

            act(() => {
                jest.advanceTimersByTime(1500); // Check before multiplier is applied
            });

            // Second message should not be rendered yet
            expect(screen.queryByText("Message 2")).not.toBeInTheDocument();

            act(() => {
                jest.advanceTimersByTime(1500 * 0.5); // Remaining time with multiplier
            });

            await waitFor(() => {
                expect(screen.getByText("Message 2")).toBeInTheDocument();
                expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
            });
        });

        it("should apply reduced motion multiplier to custom duration for subsequent messages", async () => {
            render(
                <EbayProgressBarExpressive aria-label="Progress">
                    <EbayProgressBarExpressiveMessage duration={2000}>Message 1</EbayProgressBarExpressiveMessage>
                    <EbayProgressBarExpressiveMessage duration={3000}>Message 2</EbayProgressBarExpressiveMessage>
                </EbayProgressBarExpressive>,
            );

            // First message should appear immediately
            expect(screen.getByText("Message 1")).toBeInTheDocument();
            expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");

            act(() => {
                jest.advanceTimersByTime(3000); // Check before multiplier is applied
            });

            // Second message should not be rendered yet
            expect(screen.queryByText("Message 2")).not.toBeInTheDocument();

            act(() => {
                jest.advanceTimersByTime(3000 * 0.5); // Remaining time with multiplier
            });

            await waitFor(() => {
                expect(screen.getByText("Message 2")).toBeInTheDocument();
                expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
            });
        });
    });
});
