import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../skeleton.stories";
const { Default, Avatar, Tile, Text, TextMultiLine } = composeStories(stories);

describe("skeleton", () => {
    it("renders default skeleton", async () => {
        await snapshotHTML(Default);
    });

    it("renders avatar", async () => {
        await snapshotHTML(Avatar);
    });

    it("renders tile", async () => {
        await snapshotHTML(Tile);
    });

    it("renders text", async () => {
        await snapshotHTML(Text);
    });

    it("renders text multiLine", async () => {
        await snapshotHTML(TextMultiLine);
    });
});
