import React from "react";
import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DefaultTabs, ManuallyActivatedTabs } from "./index.stories";

describe("<EbayTabs>", () => {
    describe("on `tab` key press", () => {
        let tabs;

        beforeEach(async () => {
            render(<DefaultTabs />);

            tabs = screen.getAllByRole("tab");
            await userEvent.tab();
        });
        it("should focus on the first tab", () => {
            expect(tabs[0]).toHaveFocus();
        });
        it("should focus on the next tab on Right Arrow key press", () => {
            fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
            expect(tabs[1]).toHaveFocus();
        });
        it("should focus on the previous tab on Left Arrow key press", () => {
            fireEvent.keyDown(tabs[0], { key: "ArrowLeft" });
            expect(tabs[2]).toHaveFocus();
        });
        it("should loop focus on the first tab on Right Arrow key press", () => {
            fireEvent.keyDown(tabs[0], { key: "ArrowLeft" });
            fireEvent.keyDown(tabs[2], { key: "ArrowRight" });
            expect(tabs[0]).toHaveFocus();
        });
    });

    describe("after losing focus", () => {
        let tabs;

        beforeEach(async () => {
            render(<DefaultTabs />);

            tabs = screen.getAllByRole("tab");
            await userEvent.tab();
        });

        it("should refocus on the latest focused tab", async () => {
            expect(tabs[0]).toHaveFocus();
            fireEvent.keyDown(tabs[0], { key: "ArrowRight" });

            expect(tabs[1]).toHaveFocus();
            await userEvent.tab();

            expect(tabs[0]).not.toHaveFocus();
            expect(tabs[1]).not.toHaveFocus();

            await userEvent.tab({ shift: true });
            expect(tabs[1]).toHaveFocus();
        });
    });

    describe("on tab click", () => {
        let spy, tabs;

        beforeEach(() => {
            spy = vi.fn();

            render(<DefaultTabs onSelect={spy} />);
            tabs = screen.getAllByRole("tab");
        });

        it("should fire an event", () => {
            const selectedIndex = 0;
            fireEvent.click(tabs[selectedIndex]);
            expect(spy).toHaveBeenCalledWith({ selectedIndex });
        });

        it("should select the new tab on click", () => {
            fireEvent.click(tabs[1]);

            expect(tabs[1]).not.toHaveFocus();
            expect(screen.getByText("Panel 1")).not.toBeVisible();
            expect(screen.getByText("Panel 2")).toBeVisible();
            expect(screen.getByText("Panel 3")).not.toBeVisible();
        });

        it("should change the selected/focused tab with keyboard", () => {
            expect(tabs[0]).not.toHaveFocus();

            fireEvent.click(tabs[1]);
            fireEvent.keyDown(tabs[1], { key: "ArrowLeft" });

            expect(tabs[0]).toHaveFocus();
        });
    });

    describe("in `manual` mode", () => {
        describe("on tab click", () => {
            let spy, tabs;

            beforeEach(() => {
                spy = vi.fn();
                render(<ManuallyActivatedTabs onSelect={spy} />);
                tabs = screen.getAllByRole("tab");
            });

            it("should fire an event", () => {
                fireEvent.click(tabs[0]);
                expect(spy).toHaveBeenCalled();
            });

            it("should select the new tab on click", () => {
                fireEvent.click(tabs[1]);

                expect(tabs[0]).not.toHaveFocus();
                expect(tabs[1]).not.toHaveFocus();
                expect(tabs[2]).not.toHaveFocus();
                expect(screen.getByText("Panel 1")).not.toBeVisible();
                expect(screen.getByText("Panel 2")).toBeVisible();
                expect(screen.getByText("Panel 3")).not.toBeVisible();
            });

            it("should change the selected/focused tab with keyboard", () => {
                expect(tabs[0]).not.toHaveFocus();
                expect(screen.getByText("Panel 1")).toBeVisible();

                fireEvent.click(tabs[1]);
                expect(screen.getByText("Panel 2")).toBeVisible();
                expect(tabs[0]).not.toHaveFocus();
                expect(tabs[1]).not.toHaveFocus();
                expect(tabs[2]).not.toHaveFocus();

                fireEvent.keyDown(tabs[1], { key: "ArrowLeft" });
                expect(screen.getByText("Panel 1")).not.toBeVisible();
                expect(screen.getByText("Panel 2")).toBeVisible();
                expect(screen.getByText("Panel 3")).not.toBeVisible();

                expect(tabs[0]).toHaveFocus();
                fireEvent.keyDown(tabs[0], { key: "Enter" });
                expect(screen.getByText("Panel 1")).toBeVisible();
                expect(screen.getByText("Panel 2")).not.toBeVisible();
                expect(screen.getByText("Panel 3")).not.toBeVisible();

                expect(tabs[0]).toHaveFocus();
                fireEvent.keyDown(tabs[0], { key: "ArrowLeft" });
                expect(tabs[2]).toHaveFocus();
                fireEvent.keyDown(tabs[2], { key: " " });
                expect(screen.getByText("Panel 1")).not.toBeVisible();
                expect(screen.getByText("Panel 2")).not.toBeVisible();
                expect(screen.getByText("Panel 3")).toBeVisible();
            });
        });

        describe("on `tab` key press", () => {
            let tabs;

            beforeEach(async () => {
                render(<ManuallyActivatedTabs />);
                tabs = screen.getAllByRole("tab");
                await userEvent.tab();
            });
            it("should focus on the first tab", () => {
                expect(tabs[0]).toHaveFocus();
            });
            it("should focus on the next tab on Right Arrow key press", () => {
                fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
                expect(tabs[1]).toHaveFocus();
            });
            it("should loop focus on the first tab on Right Arrow key press", () => {
                fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
                fireEvent.keyDown(tabs[1], { key: "ArrowRight" });
                fireEvent.keyDown(tabs[2], { key: "ArrowRight" });
                expect(tabs[0]).toHaveFocus();
            });
            it("should focus on the previous tab on Left Arrow key press", () => {
                fireEvent.keyDown(tabs[0], { key: "ArrowLeft" });
                expect(tabs[2]).toHaveFocus();
            });
        });

        describe("after losing focus", () => {
            let tabs;

            beforeEach(async () => {
                render(<ManuallyActivatedTabs />);
                tabs = screen.getAllByRole("tab");
                await userEvent.tab();
            });

            it("should refocus on the latest focused tab", async () => {
                expect(tabs[0]).toHaveFocus();
                fireEvent.keyDown(tabs[0], { key: "ArrowRight" });

                expect(tabs[1]).toHaveFocus();
                await userEvent.tab();

                expect(tabs[0]).not.toHaveFocus();
                expect(tabs[1]).not.toHaveFocus();

                await userEvent.tab({ shift: true });
                expect(tabs[1]).toHaveFocus();
            });
        });
    });
});
