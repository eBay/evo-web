import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../combobox.stories";

const { Default } = composeStories(stories);

describe("evo-combobox SSR", () => {
    it("renders default", async () => {
        await snapshotHTML(Default);
    });

    it("renders disabled", async () => {
        await snapshotHTML(Default, { disabled: true });
    });

    it("renders borderless", async () => {
        await snapshotHTML(Default, { borderless: true });
    });

    it("renders fluid", async () => {
        await snapshotHTML(Default, { fluid: true });
    });

    it("renders with pre-selected value", async () => {
        await snapshotHTML(Default, { value: "Basic Offer" });
    });

    it("renders with fixed strategy", async () => {
        await snapshotHTML(Default, { strategy: "fixed" });
    });
});
