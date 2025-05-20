import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../filter-input.stories";

const { Default, Controls } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("ebay-filter-input", () => {
    it("renders default input", async () => {
        await htmlSnap(Default);
    });

    it("renders small", async () => {
        await htmlSnap(Default, { size: "small" });
    });

    it("renders large", async () => {
        await htmlSnap(Default, { size: "large" });
    });

    it("renders with aria-controls", async () => {
        await htmlSnap(Controls);
    });

    it("renders without clear button and no placeholder", async () => {
        await htmlSnap(Default, { a11yClearButton: "", placeholder: "" });
    });

    it("renders with custom placeholder and aria label", async () => {
        await htmlSnap(Default, {
            placeholder: "Custom placeholder",
            "aria-label": "Custom aria label",
            a11yClearButton: "Clear the text",
        });
    });
});
