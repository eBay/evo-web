import { expect, describe, it } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../card.stories"; // import all stories from the stories file
const { Default, Button, Anchor, Minimum } = composeStories(stories);
import visualHTML from "visual-html";

afterEach(cleanup);

describe("card", () => {
    let component;
    describe("default", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("default aspect 16:9", () => {
        beforeEach(async () => {
            component = await render(Default, { aspectRatio: "16:9" });
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("default aspect 5:4", () => {
        beforeEach(async () => {
            component = await render(Default, { aspectRatio: "5:4" });
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("button", () => {
        beforeEach(async () => {
            component = await render(Button);
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("anchor", () => {
        beforeEach(async () => {
            component = await render(Anchor);
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("minimum", () => {
        beforeEach(async () => {
            component = await render(Minimum);
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("button disabled", () => {
        beforeEach(async () => {
            component = await render(Button, { disabled: true });
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });

    describe("anchor disabled", () => {
        beforeEach(async () => {
            component = await render(Anchor, { disabled: true });
        });

        it("then it matches the snapshot", () => {
            const html = visualHTML(component.container);

            expect(html).toMatchSnapshot();
        });
    });
});
