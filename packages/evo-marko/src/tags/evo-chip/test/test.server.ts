import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../chip.stories";

const { Default, WithDelete } = composeStories(stories);

describe("evo-chip SSR", () => {
    it("renders default", async () => {
        await snapshotHTML(Default);
    });

    it("renders with delete button", async () => {
        await snapshotHTML(WithDelete);
    });
});
