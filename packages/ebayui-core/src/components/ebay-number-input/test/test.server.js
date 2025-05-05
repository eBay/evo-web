import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../number-input.stories";

const { Default, withDelete, withLabel } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("ebay-number-input", () => {
    it("renders default number input", async () => {
        await htmlSnap(Default);
    });

    it("renders number input with label", async () => {
        await htmlSnap(withLabel);
    });

    it("renders number input with delete", async () => {
        await htmlSnap(withDelete);
    });

    it("renders number input with delete hidden", async () => {
        await htmlSnap(withDelete, { value: "12" });
    });
});
