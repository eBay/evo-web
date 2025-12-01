import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../video.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component;

describe("video", () => {
    beforeEach(async () => {
        component = await render(Default, { "aria-label": "video" });
    });
    describe("renders default", () => {
        it("should render", async () => {
            await waitFor(
                () => {
                    const data = component.emitted("loadstart");
                    expect(data).to.have.length(1);
                },
                { timeout: 5000 },
            );
        });
    });
});
