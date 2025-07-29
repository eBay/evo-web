import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../card.stories"; // import all stories from the stories file

const { Default, Anchor, Button, Minimum } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-card", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with layout=vertical", async () => {
        await htmlSnap(Default, { layout: "vertical" });
    });

    it("renders anchor", async () => {
        await htmlSnap(Anchor);
    });

    it("renders button", async () => {
        await htmlSnap(Button);
    });

    it("renders minimum", async () => {
        await htmlSnap(Minimum);
    });

    it("renders anchor disabled", async () => {
        await htmlSnap(Anchor, { disabled: true });
    });

    it("renders button disabled", async () => {
        await htmlSnap(Button, { disabled: true });
    });
});
