import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../selection-chip.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

afterEach(cleanup);

let component;

describe("ebay-selection-chip", () => {
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

describe("ebay-selection-chip selected", () => {
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
