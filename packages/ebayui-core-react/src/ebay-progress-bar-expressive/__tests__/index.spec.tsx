import React from "react";
import { vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import EbayProgressBarExpressive from "../progress-bar-expressive";
import EbayProgressBarExpressiveMessage from "../progress-bar-expressive-message";
import { useReducedMotion } from "../../utils";

vi.mock("../../utils", async () => ({
    ...(await vi.importActual("../../utils")),
    useReducedMotion: vi.fn(() => false),
}));

function advanceNextMessageTimers(duration = 1500) {
    act(() => {
        vi.advanceTimersByTime(duration + 834); // Default duration + fade-in time
    });
}

describe("EbayProgressBarExpressive", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.clearAllTimers();
        vi.resetAllMocks();
    });

    it("should render without messages", () => {
        render(<EbayProgressBarExpressive aria-label="Progress" />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toBeInTheDocument();
    });

    it("should render with messages and show each message after default duration", () => {
        render(
            <EbayProgressBarExpressive aria-label="Progress">
                <EbayProgressBarExpressiveMessage>Message 1</EbayProgressBarExpressiveMessage>
                <EbayProgressBarExpressiveMessage>Message 2</EbayProgressBarExpressiveMessage>
            </EbayProgressBarExpressive>,
        );

        // Next message has aria-hidden=true
        expect(screen.getByText("Message 1")).toHaveAttribute("aria-hidden", "true");

        advanceNextMessageTimers();

        expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");
        expect(screen.getByText("Message 2")).toHaveAttribute("aria-hidden", "true");

        advanceNextMessageTimers();

        expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
        expect(screen.getByText("Message 1")).toHaveAttribute("aria-hidden", "true");
    });

    it("should handle custom duration for each message", () => {
        render(
            <EbayProgressBarExpressive aria-label="Progress">
                <EbayProgressBarExpressiveMessage duration={2000}>Message 1</EbayProgressBarExpressiveMessage>
                <EbayProgressBarExpressiveMessage duration={3000}>Message 2</EbayProgressBarExpressiveMessage>
            </EbayProgressBarExpressive>,
        );

        advanceNextMessageTimers(2000); // Custom duration for Message 1

        expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");
        expect(screen.getByText("Message 2")).toHaveAttribute("aria-hidden", "true");

        advanceNextMessageTimers(3000); // Custom duration for Message 2

        expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
        expect(screen.getByText("Message 1")).toHaveAttribute("aria-hidden", "true");
    });

    describe("Reduced Motion", () => {
        beforeEach(() => {
            vi.mocked(useReducedMotion).mockReturnValue(true);
        });

        it("should show the first message immediately and apply reduced motion multiplier to subsequent messages", () => {
            render(
                <EbayProgressBarExpressive aria-label="Progress">
                    <EbayProgressBarExpressiveMessage>Message 1</EbayProgressBarExpressiveMessage>
                    <EbayProgressBarExpressiveMessage>Message 2</EbayProgressBarExpressiveMessage>
                </EbayProgressBarExpressive>,
            );

            // First message should appear immediately
            expect(screen.getByText("Message 1")).toBeInTheDocument();
            expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");

            advanceNextMessageTimers();

            // Second message should not be rendered yet
            expect(screen.queryByText("Message 2")).not.toBeInTheDocument();

            advanceNextMessageTimers(1500 * 0.5); // Remaining time with multiplier

            expect(screen.getByText("Message 2")).toBeInTheDocument();
            expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
        });

        it("should apply reduced motion multiplier to custom duration for subsequent messages", () => {
            render(
                <EbayProgressBarExpressive aria-label="Progress">
                    <EbayProgressBarExpressiveMessage duration={2000}>Message 1</EbayProgressBarExpressiveMessage>
                    <EbayProgressBarExpressiveMessage duration={3000}>Message 2</EbayProgressBarExpressiveMessage>
                </EbayProgressBarExpressive>,
            );

            // First message should appear immediately
            expect(screen.getByText("Message 1")).toBeInTheDocument();
            expect(screen.getByText("Message 1")).not.toHaveAttribute("aria-hidden", "true");

            advanceNextMessageTimers(3000);

            // Second message should not be rendered yet
            expect(screen.queryByText("Message 2")).not.toBeInTheDocument();

            advanceNextMessageTimers(3000 * 0.5);

            expect(screen.getByText("Message 2")).toBeInTheDocument();
            expect(screen.getByText("Message 2")).not.toHaveAttribute("aria-hidden", "true");
        });
    });
});
