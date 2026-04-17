import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../chip.stories";

const { Default, WithDelete } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-chip", () => {
    describe("default", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("should render chip text", () => {
            expect(component.getByText("chip text")).toBeTruthy();
        });

        it("should not render a delete button", () => {
            expect(component.queryByRole("button")).toBeNull();
        });
    });

    describe("with delete button", () => {
        beforeEach(async () => {
            component = await render(WithDelete);
        });

        it("should render a delete button", () => {
            expect(component.getByRole("button")).toBeTruthy();
        });

        it("should have aria-label on delete button", () => {
            expect(
                component.getByRole("button").getAttribute("aria-label"),
            ).toBe("Delete");
        });

        describe("when delete button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole("button"));
            });

            it("should emit click event", () => {
                expect(component.emitted("click")).has.length(1);
            });
        });
    });
});
