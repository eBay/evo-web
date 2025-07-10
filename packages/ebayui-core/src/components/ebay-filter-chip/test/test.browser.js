import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../filter-chip.stories"; // import all stories from the stories file
const { Default, MenuButton } = composeStories(stories);

afterEach(cleanup);

let component;

describe("ebay-filter-chip", () => {
    describe("default", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        describe("when button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole("button"));
            });

            it("then it emits the event with correct data", () => {
                const [[clickEvent]] = component.emitted("click");
                expect(clickEvent.selected).to.equal(true);
            });
        });
    });

    describe("default selected", () => {
        beforeEach(async () => {
            component = await render(Default, { selected: true });
        });

        describe("when button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole("button"));
            });

            it("then it emits the event with correct data", () => {
                const [[clickEvent]] = component.emitted("click");
                expect(clickEvent.selected).to.equal(false);
            });
        });
    });

    describe("menu button", () => {
        beforeEach(async () => {
            component = await render(MenuButton);
        });

        describe("when button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole("button"));
            });

            it("then it emits the event with correct data", () => {
                const [[clickEvent]] = component.emitted("click");
                expect(clickEvent.expanded).to.equal(true);
                expect(clickEvent.selected).to.equal(false);
            });
        });
    });
    describe("menu button selected", () => {
        beforeEach(async () => {
            component = await render(MenuButton, {
                selected: true,
                expanded: true,
            });
        });

        describe("when button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole("button"));
            });

            it("then it emits the event with correct data", () => {
                const [[clickEvent]] = component.emitted("click");
                expect(clickEvent.expanded).to.equal(false);
                expect(clickEvent.selected).to.equal(true);
            });
        });
    });
});
