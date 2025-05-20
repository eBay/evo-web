import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor, fireEvent } from "@marko/testing-library";
import * as stories from "../filter-input.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a filter input textbox", () => {
    beforeEach(async () => {
        component = await render(Default, {
            value: 1,
            a11yClearButton: "Clear the text",
        });
    });

    describe("clear is pressed", () => {
        beforeEach(async () => {
            const clear = component.getByLabelText("Clear the text");
            await fireEvent.click(clear);
        });

        it("it should clear the value", async () => {
            await waitFor(() => {
                expect(component.emitted("clear")).has.length(1);
            });
        });

        it("should trigger input-change", async () => {
            await waitFor(() => {
                const [[data]] = component.emitted("input-change");
                expect(data.value).toBe("");
            });
        });
        it("should clear textbox", async () => {
            const textbox = component.getByLabelText("Filter input");
            expect(textbox.value).toBe("");
        });
    });
});
