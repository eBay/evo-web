import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import { diffHTML, visualHTML } from "../../../common/test-utils/snapshots";
import { composeStories } from "@storybook/marko";
import * as stories from "../accordion.stories"; // import all stories from the stories file
const { Default, AutoCollapsed } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);
let component;

afterEach(cleanup);

describe("accordion", () => {
    describe("given the accordion in the default state", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });

        describe("when first section toggled", () => {
            let initialHTML;
            beforeEach(async () => {
                initialHTML = diffHTML(component.container);
                await fireEvent.click(component.getByText("Item 1"));
            });

            it("should open the clicked section", async () => {
                expect(initialHTML(component.container)).toMatchSnapshot();
            });

            it("should close an open section when clicked again", async () => {
                await fireEvent.click(component.getByText("Item 1"));
                expect(initialHTML(component.container)).toMatchSnapshot(
                    "Should have no changes from intial",
                );
            });
        });
    });

    describe("given the accordion with autocollapse enabled", () => {
        let initialHTML;
        beforeEach(async () => {
            component = await render(AutoCollapsed);
            initialHTML = diffHTML(component.container);
        });
        describe("when first section toggled", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByText("Item 1"));
                // Click does not trigger toggle event, need to manually fire it
                await fireEvent(
                    component.getByText("Item 1"),
                    new Event("toggle"),
                );
            });

            it("should open as normal", async () => {
                expect(initialHTML(component.container)).toMatchSnapshot();
            });

            describe("when another section is opened", () => {
                beforeEach(async () => {
                    initialHTML = diffHTML(component.container);
                    // Open second section
                    await fireEvent.click(component.getByText("Item 2"));
                    // Click does not trigger toggle event, need to manually fire it
                    await fireEvent(
                        component.getByText("Item 2"),
                        new Event("toggle"),
                    );
                });
                it("should collapse previous section when new section is opened", async () => {
                    // Verify first section closed and second section opened
                    expect(initialHTML(component.container)).toMatchSnapshot();
                });
            });
        });
    });
});
