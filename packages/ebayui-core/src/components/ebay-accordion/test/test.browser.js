import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { userEvent } from "vitest/browser";
import { fastAnimations } from "../../../common/test-utils/browser";
import { diffHTML, visualHTML } from "../../../common/test-utils/snapshots";
import { composeStories } from "@storybook/marko";
import * as stories from "../accordion.stories"; // import all stories from the stories file
const { Default, AutoCollapsed } = composeStories(stories);

beforeAll(() => fastAnimations.start(true));
afterAll(() => fastAnimations.stop());
afterEach(cleanup);
let component;
let user;

describe("accordion", () => {
    beforeEach(() => {
        user = userEvent.setup();
    });
    afterEach(() => {
        user.cleanup();
    });
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
                await user.click(component.getByText("Item 1"));
            });

            it("should open the clicked section", async () => {
                expect(initialHTML(component.container)).toMatchSnapshot();
            });

            describe("when another section is opened", () => {
                beforeEach(async () => {
                    await user.click(component.getByText("Item 1"));
                    await user.hover(component.getByText("Item 1"));
                });

                it("should close an open section when clicked again", async () => {
                    expect(initialHTML(component.container)).toMatchSnapshot(
                        "Should have no changes from initial",
                    );
                });
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
                await user.click(component.getByText("Item 1"));
                await user.hover(component.getByText("Item 1"));
            });

            it("should open as normal", async () => {
                expect(initialHTML(component.container)).toMatchSnapshot();
            });

            describe("when another section is opened", () => {
                beforeEach(async () => {
                    // Open second section
                    await user.click(component.getByText("Item 2"));
                    await user.hover(component.getByText("Item 1"));
                });
                it("should collapse previous section when new section is opened", async () => {
                    // Verify first section closed and second section opened
                    expect(initialHTML(component.container)).toMatchSnapshot();
                });
            });
        });
    });
});
