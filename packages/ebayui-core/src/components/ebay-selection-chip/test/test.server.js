import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../selection-chip.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-selection-chip", () => {
    it("renders static default", async () => {
        await htmlSnap(Default);
    });
    it("renders selected", async () => {
        await htmlSnap(Default, { selected: true });
    });
});
