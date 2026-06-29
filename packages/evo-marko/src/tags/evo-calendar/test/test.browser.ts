import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { userEvent, type UserEvent } from "vitest/browser";
import template from "../index.marko";

let component: Awaited<ReturnType<typeof render>>;
let user: UserEvent;

afterEach(() => {
    user?.cleanup();
    cleanup();
});

function getDayButton(iso: string) {
    const day = String(Number(iso.slice(8, 10)));
    return component.getByRole("button", { name: new RegExp(`^${day}$`) }) as HTMLButtonElement;
}

describe("evo-calendar", () => {
    beforeEach(() => {
        user = userEvent.setup();
    });
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

        it("starts the roving tabindex on today", () => {
            const today = getDayButton("2025-01-15");
            const firstDay = getDayButton("2025-01-01");

            expect(today.getAttribute("tabindex")).toBeNull();
            expect(firstDay.getAttribute("tabindex")).toBe("-1");
        });

        it("preserves focused day of month when PageDown navigates to next month", async () => {
            const today = getDayButton("2025-01-15");
            today.focus();
            await user.keyboard("{PageDown}");

            expect(component.getByText("February 2025")).toBeTruthy();
            expect(getDayButton("2025-02-15").getAttribute("tabindex")).toBeNull();
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

        it("moves to the next month with ArrowRight from the last day", async () => {
            const today = getDayButton("2025-01-15");
            today.focus();
            await user.keyboard("{End}");

            const lastDay = getDayButton("2025-01-31");
            expect(lastDay.getAttribute("tabindex")).toBeNull();

            await user.keyboard("{ArrowRight}");

            expect(component.getAllByText("February 2025").length).toBeGreaterThan(0);
            expect(getDayButton("2025-02-01").getAttribute("tabindex")).toBeNull();
        });
    });

    describe("given a navigable calendar with disable.before", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "day",
                today: "2025-02-15",
                a11yNavigateText: (month: string) => `Show ${month}`,
                disable: { before: "2025-02-01" },
            });
        });

        it("disables the prev button when navigating before disable.before", () => {
            const buttons = component.getAllByRole("button");
            const prevButton = buttons[0] as HTMLButtonElement;
            expect(prevButton.disabled).toBe(true);
        });
    });

    describe("given a navigable calendar with disable.after", () => {
        beforeEach(async () => {
            component = await render(template, {
                selectMode: "day",
                today: "2025-02-15",
                a11yNavigateText: (month: string) => `Show ${month}`,
                disable: { after: "2025-02-15" },
            });
        });

        it("disables the next button when navigating after disable.after", () => {
            const buttons = component.getAllByRole("button");
            const nextButton = buttons[buttons.length - 1] as HTMLButtonElement;
            expect(nextButton.disabled).toBe(true);
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

    describe("given a non-interactive calendar with getDayHref", () => {
        beforeEach(async () => {
            component = await render(template, {
                today: "2025-01-15",
                getDayHref: (iso: string) =>
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
