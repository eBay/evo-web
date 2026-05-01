import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../skeleton.stories";
const { Default } = composeStories(stories);

describe("skeleton", () => {
    it("renders default skeleton", async () => {
        await snapshotHTML(Default);
    });
});
