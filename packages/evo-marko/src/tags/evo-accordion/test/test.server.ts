import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../accordion.stories"; // import all stories from the stories file
const { Default, AutoCollapsed } = composeStories(stories);

describe("accordion", () => {
    it("renders default accordion", async () => {
        await snapshotHTML(Default);
    });

    it("renders accordion with large size", async () => {
        await snapshotHTML(Default, { size: "large" });
    });

    it("renders accordion with auto-collapse true", async () => {
        await snapshotHTML(AutoCollapsed);
    });

    it("renders accordion with localized role description", async () => {
        await snapshotHTML(Default, {
            a11yRoleDescription: "Akkordeon",
        });
    });
});
