import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../layout-grid.stories"; // import all stories from the stories file

const { Default, WithCustomColumns } = composeStories(stories);

describe("evo-layout-grid", () => {
    it("renders default", async () => {
        await snapshotHTML(Default);
    });

    it("renders with custom columns", async () => {
        await snapshotHTML(WithCustomColumns);
    });
});
