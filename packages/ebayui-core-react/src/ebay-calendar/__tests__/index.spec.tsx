import React from "react";
import { vi } from "vitest";

import { waitFor, render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayCalendar } from "../index";

describe("<EbayCalendar />", () => {
    beforeEach(() => {
        vi.useFakeTimers().setSystemTime(new Date("2024-01-05").getTime());

        // @ts-expect-error -- temporary workaround for user-event issue with fake timers in Vitest
        // https://github.com/testing-library/user-event/issues/1115
        globalThis.jest = {
            advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
        };
    });

    beforeAll(() => {
        vi.useRealTimers();
    });

    it("should change day focused as we navigate with keyboard", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        render(<EbayCalendar interactive selected="2024-01-01" />);
        const day = screen.getByText("1");
        act(() => {
            day.focus();
        });
        await user.keyboard("{ArrowRight}");
        await waitFor(() => expect(screen.getByText("2")).toHaveFocus());
        await user.keyboard("{ArrowDown}");
        await waitFor(() => expect(screen.getByText("9")).toHaveFocus());
        await user.keyboard("{ArrowLeft}");
        await waitFor(() => expect(screen.getByText("8")).toHaveFocus());
        await user.keyboard("{ArrowUp}");
        await waitFor(() => expect(screen.getByText("1")).toHaveFocus());
    });

    it("should call onFocus with the date that has focus", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        const onFocus = vi.fn();
        render(<EbayCalendar interactive selected="2024-01-01" onFocus={onFocus} />);
        const day = screen.getByText("1");
        act(() => {
            day.focus();
        });
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-01" }));
        await user.keyboard("{ArrowRight}");
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-02" }));
        await user.keyboard("{ArrowDown}");
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-09" }));
        await user.keyboard("{ArrowLeft}");
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-08" }));
        await user.keyboard("{ArrowUp}");
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-01" }));

        await waitFor(() => expect(onFocus).toHaveBeenCalledTimes(5));
    });

    it("should call onSelect with event and passed iso date on selection", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        const onSelect = vi.fn();
        render(<EbayCalendar interactive onSelect={onSelect} selected="2024-01-05" />);
        const day = screen.getByText("1");
        await user.click(day);
        expect(onSelect).toHaveBeenCalledWith(eventOfType("click"), { iso: "2024-01-01" });
    });

    it("should go to next month on page down", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        render(<EbayCalendar interactive selected="2024-01-01" />);
        const day = screen.getByText("1");
        act(() => {
            day.focus();
        });
        expect(screen.queryByText("February 2024")).not.toBeInTheDocument();
        await user.keyboard("{PageDown}");
        expect(screen.getByText("February 2024")).toBeInTheDocument();
    });

    it("should go on previous month on page up", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        render(<EbayCalendar interactive selected="2024-01-01" />);
        const day = screen.getByText("1");
        act(() => {
            day.focus();
        });
        expect(screen.queryByText("December 2023")).not.toBeInTheDocument();
        await user.keyboard("{PageUp}");
        expect(screen.getByText("December 2023")).toBeInTheDocument();
    });

    it("should focus on first day of the month on home", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        render(<EbayCalendar interactive selected="2024-01-15" />);
        const day = screen.getByText("15");
        act(() => {
            day.focus();
        });
        await user.keyboard("{Home}");
        await waitFor(() => expect(screen.getByText("1")).toHaveFocus());
    });

    it("should focus on last day of the month on end", async () => {
        const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
        render(<EbayCalendar interactive selected="2024-02-15" />);
        const day = screen.getByText("15");
        act(() => {
            day.focus();
        });
        await user.keyboard("{End}");
        await waitFor(() => expect(screen.getByText("29")).toHaveFocus());
    });

    it("should set aria-pressed for the selected day only", () => {
        render(<EbayCalendar interactive selected="2024-01-13" />);
        const day = screen.getByText("13");
        expect(day).toHaveAttribute("aria-pressed", "true");

        const nonSelected = screen.getByText("1");
        expect(nonSelected).not.toHaveAttribute("aria-pressed");
    });

    it("should support multiple selected dates", () => {
        render(<EbayCalendar interactive selected={["2024-01-13", "2024-01-14"]} />);
        const day1 = screen.getByText("13");
        expect(day1).toHaveAttribute("aria-pressed", "true");

        const day2 = screen.getByText("14");
        expect(day2).toHaveAttribute("aria-pressed", "true");
    });
});
