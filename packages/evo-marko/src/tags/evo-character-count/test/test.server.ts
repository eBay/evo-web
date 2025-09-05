import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../character-count.stories"; // import all stories from the stories file
const { Default, InField } = composeStories(stories);

describe("character-count", () => {
    it("renders default", async () => {
        await snapshotHTML(Default);
    });
    it("renders in field", async () => {
        await snapshotHTML(InField);
    });
});
