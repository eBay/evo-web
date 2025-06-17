import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import * as stories from "../panel-dialog.stories"; // import all stories from the stories file
const { Default, WithPrevButton, WithFooter } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("dialog", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders with previous button", async () => {
        await htmlSnap(WithPrevButton);
    });

    it("renders with footer", async () => {
        await htmlSnap(WithFooter);
    });

    testPassThroughAttributes(Default);
});
