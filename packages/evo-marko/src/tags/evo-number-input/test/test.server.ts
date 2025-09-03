import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../number-input.stories";

const { Default, withDelete, withLabel } = composeStories(stories);

describe("evo-number-input", () => {
    it("renders default number input", async () => {
        await snapshotHTML(Default);
    });

    it("renders number input with label", async () => {
        await snapshotHTML(withLabel);
    });

    it("renders number input with delete", async () => {
        await snapshotHTML(withDelete);
    });

    it("renders number input with delete hidden", async () => {
        await snapshotHTML(withDelete, { value: "12" });
    });
});
