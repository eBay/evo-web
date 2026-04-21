import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../star-rating.stories";

const { Default, AllValues } = composeStories(stories);

describe("evo-star-rating SSR", () => {
    it("renders default", async () => {
        await snapshotHTML(Default);
    });

    it("renders all values", async () => {
        await snapshotHTML(AllValues);
    });
});
