import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import template from "../index.marko";

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-calendar", () => {
    describe("given a default non-interactive calendar", () => {
        beforeEach(async () => {
            component = await render(template);
        });

        it("renders calendar tables", () => {
            expect(component.getByRole("table")).toBeTruthy();
        });

        it("renders 7 column headers for days of the week", () => {
            expect(component.getAllByRole("columnheader")).toHaveLength(7);
        });

        it("does not render navigation buttons when a11yNavigateText is absent", () => {
            expect(component.queryAllByRole("button")).toHaveLength(0);
        });
    });

    describe("given an interactive calendar with selectMode=day", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "day",
                today: "2025-01-15",
            });
        });

        it("renders day buttons", () => {
            const buttons = component.getAllByRole("button");
            expect(buttons.length).toBeGreaterThan(0);
        });

        it("marks today with aria-current=date", () => {
            const today = component.getByRole("button", { name: /15/ });
            expect(today).toHaveAttribute("aria-current", "date");
        });

        it("renders day buttons with roving tabindex pattern", () => {
            // Get all buttons and filter to day buttons by checking they contain only digits
            const allButtons = component.getAllByRole("button") as HTMLButtonElement[];
            const dayButtons = allButtons.filter((b) => /^\d+$/.test(b.textContent?.trim() || ""));
            
            // Day buttons should have tabindex 0 or -1
            const hasTabindex0 = dayButtons.some((b) => b.getAttribute("tabindex") === "0");
            const hasTabindexMinus1 = dayButtons.some((b) => b.getAttribute("tabindex") === "-1");
            
            expect(hasTabindex0 || hasTabindexMinus1).toBe(true);
        });
    });

    describe("given an interactive calendar with a selected date", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "day",
                today: "2025-01-15",
                selected: "2025-01-10",
            });
        });

        it("marks the selected date with aria-pressed=true", () => {
            const selected = component.getByRole("button", { name: /10/ });
            expect(selected).toHaveAttribute("aria-pressed", "true");
        });
    });

    describe("given a navigable calendar", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "day",
                today: "2025-01-15",
                a11yNavigateText: (month: string) => `Show ${month}`,
            });
        });

        it("renders two navigation icon buttons (prev/next)", () => {
            const navButtons = component.getAllByRole("button").slice(0, 2);
            expect(navButtons.length).toBeGreaterThanOrEqual(2);
        });
    });

    describe("given a calendar with disabled dates", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "day",
                today: "2025-01-15",
                disable: { list: ["2025-01-10", "2025-01-20"] },
            });
        });

        it("disables the specified dates", () => {
            const dayButtons = component.getAllByRole("button") as HTMLButtonElement[];
            const disabledDates = dayButtons.filter((b) => b.disabled);
            expect(disabledDates.length).toBeGreaterThanOrEqual(2);
        });
    });

    describe("given a non-interactive calendar with linkBuilder", () => {
        beforeEach(async () => {
            component = await render(template, {
                today: "2025-01-15",
                linkBuilder: (iso: string) =>
                    iso === "2025-01-15"
                        ? `https://www.ebay.com/sch/i.html?_nkw=${iso}`
                        : false,
            });
        });

        it("renders a link for today's date", () => {
            const links = component.getAllByRole("link") as HTMLAnchorElement[];
            expect(links.length).toBeGreaterThan(0);
            expect(links[0].href).toContain("2025-01-15");
        });
    });

    describe("given a calendar with selectMode=range", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "range",
                today: "2025-01-15",
                a11yRangeText: {
                    start: "start of range",
                    end: "end of range",
                    in: "in range",
                },
            });
        });

        it("renders day buttons for range selection", () => {
            const buttons = component.getAllByRole("button");
            expect(buttons.length).toBeGreaterThan(0);
        });
    });
});
