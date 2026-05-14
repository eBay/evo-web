import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../calendar.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-calendar", () => {
    describe("given a default (non-interactive) calendar", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("renders a calendar grid", () => {
            expect(component.getByRole("grid")).toBeTruthy();
        });

        it("renders 7 column headers for days of the week", () => {
            expect(component.getAllByRole("columnheader")).toHaveLength(7);
        });

        it("does not render navigation buttons when getA11yNavigateText is absent", () => {
            expect(component.queryAllByRole("button")).toHaveLength(0);
        });
    });

    describe("given an interactive calendar", () => {
        beforeEach(async () => {
            component = await render(Default, {
                interactive: true,
                todayISO: "2025-01-15",
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

        it("only one button has tabindex=0 (roving tabindex)", () => {
            const buttons = component.getAllByRole("button") as HTMLButtonElement[];
            const focusable = buttons.filter(
                (b) => b.getAttribute("tabindex") === "0",
            );
            expect(focusable).toHaveLength(1);
        });
    });

    describe("given an interactive calendar with a selected date", () => {
        beforeEach(async () => {
            component = await render(Default, {
                interactive: true,
                todayISO: "2025-01-15",
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
            component = await render(Default, {
                interactive: true,
                todayISO: "2025-01-15",
                getA11yNavigateText: (month: string) => `Show ${month}`,
            });
        });

        it("renders two navigation buttons", () => {
            // prev + next icon-buttons
            const buttons = component.getAllByRole("button");
            // at least 2 nav buttons + day buttons
            expect(buttons.length).toBeGreaterThan(2);
        });
    });

    describe("given a calendar with disabled dates", () => {
        beforeEach(async () => {
            component = await render(Default, {
                interactive: true,
                todayISO: "2025-01-15",
                disabled: { list: ["2025-01-10", "2025-01-20"] },
            });
        });

        it("disables the specified dates", () => {
            const dayButtons = component.getAllByRole("button") as HTMLButtonElement[];
            const disabled = dayButtons.filter((b) => b.disabled);
            // At least the two disabled dates should be disabled
            expect(disabled.length).toBeGreaterThanOrEqual(2);
        });
    });

    describe("given a non-interactive calendar with getHref", () => {
        beforeEach(async () => {
            component = await render(Default, {
                interactive: false,
                todayISO: "2025-01-15",
                getHref: (iso: string) =>
                    iso === "2025-01-15"
                        ? `https://www.ebay.com/sch/i.html?_nkw=${iso}`
                        : undefined,
            });
        });

        it("renders an anchor for today's date", () => {
            const links = component.getAllByRole("link") as HTMLAnchorElement[];
            expect(links).toHaveLength(1);
            expect(links[0].href).toContain("2025-01-15");
        });
    });
});
