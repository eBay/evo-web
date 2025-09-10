import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../segmented-buttons.stories"; // import all stories from the stories file

const { Default, WithIcons } = composeStories(stories);

describe("evo-segmented-buttons", () => {
    it("renders defaults", async () => {
        await snapshotHTML(Default);
    });

    it("renders large", async () => {
        await snapshotHTML(Default, { size: "large" });
    });

    it("renders with menu items", async () => {
        await snapshotHTML(WithIcons);
    });
});
