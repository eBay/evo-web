import React from "react";

import { waitFor, fireEvent, render, screen, act } from "@testing-library/react";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayCalendar } from "../index";

jest.useFakeTimers().setSystemTime(new Date("2024-01-05").getTime());

describe("<EbayCalendar />", () => {
    it("should change day focused as we navigate with keyboard", async () => {
        render(<EbayCalendar interactive selected="2024-01-01" />);
        const day = screen.getByText("1");
        act(() => {
            day.focus();
        });
        fireEvent.keyDown(day, { key: "ArrowRight" });
        await waitFor(() => expect(screen.getByText("2")).toHaveFocus());
        fireEvent.keyDown(day, { key: "ArrowDown" });
        await waitFor(() => expect(screen.getByText("9")).toHaveFocus());
        fireEvent.keyDown(day, { key: "ArrowLeft" });
        await waitFor(() => expect(screen.getByText("8")).toHaveFocus());
        fireEvent.keyDown(day, { key: "ArrowUp" });
        await waitFor(() => expect(screen.getByText("1")).toHaveFocus());
    });

    it("should call onFocus with the date that has focus", async () => {
        const onFocus = jest.fn();
        render(<EbayCalendar interactive selected="2024-01-01" onFocus={onFocus} />);
        const day = screen.getByText("1");
        day.focus();
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-01" }));
        fireEvent.keyDown(day, { key: "ArrowRight" });
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-02" }));
        fireEvent.keyDown(day, { key: "ArrowDown" });
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-09" }));
        fireEvent.keyDown(day, { key: "ArrowLeft" });
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-08" }));
        fireEvent.keyDown(day, { key: "ArrowUp" });
        await waitFor(() => expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { iso: "2024-01-01" }));

        await waitFor(() => expect(onFocus).toHaveBeenCalledTimes(5));
    });

    it("should call onSelect with event and passed iso date on selection", () => {
        const onSelect = jest.fn();
        render(<EbayCalendar interactive onSelect={onSelect} selected="2024-01-05" />);
        const day = screen.getByText("1");
        fireEvent.click(day);
        expect(onSelect).toHaveBeenCalledWith(eventOfType("click"), { iso: "2024-01-01" });
    });

    it("should go to next month on page down", () => {
        render(<EbayCalendar interactive selected="2024-01-01" />);
        const day = screen.getByText("1");
        expect(screen.queryByText("February 2024")).not.toBeInTheDocument();
        fireEvent.keyDown(day, { key: "PageDown" });
        expect(screen.getByText("February 2024")).toBeInTheDocument();
    });

    it("should go on previous month on page up", () => {
        render(<EbayCalendar interactive selected="2024-01-01" />);
        const day = screen.getByText("1");
        expect(screen.queryByText("December 2023")).not.toBeInTheDocument();
        fireEvent.keyDown(day, { key: "PageUp" });
        expect(screen.getByText("December 2023")).toBeInTheDocument();
    });

    it("should focus on first day of the month on home", async () => {
        render(<EbayCalendar interactive selected="2024-01-15" />);
        const day = screen.getByText("15");
        fireEvent.keyDown(day, { key: "Home" });
        await waitFor(() => expect(screen.getByText("1")).toHaveFocus());
    });

    it("should focus on last day of the month on end", async () => {
        render(<EbayCalendar interactive selected="2024-02-15" />);
        const day = screen.getByText("15");
        fireEvent.keyDown(day, { key: "End" });
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
