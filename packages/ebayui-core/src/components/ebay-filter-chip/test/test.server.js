import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../filter-chip.stories"; // import all stories from the stories file
const { Default, Expressive, MenuButton } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-filter-chip", () => {
    it("renders static default", async () => {
        await htmlSnap(Default);
    });

    it("renders expressive", async () => {
        await htmlSnap(Expressive);
    });

    it("renders menu button", async () => {
        await htmlSnap(MenuButton);
    });

    it("renders static selected", async () => {
        await htmlSnap(Default, { selected: true });
    });

    it("renders expressive selected", async () => {
        await htmlSnap(Expressive, { selected: true });
    });

    it("renders menu button selected", async () => {
        await htmlSnap(MenuButton, { selected: true });
    });

    it("renders menu button expanded", async () => {
        await htmlSnap(MenuButton, { expanded: true });
    });

    it("renders menu button expanded and selected", async () => {
        await htmlSnap(MenuButton, { expanded: true, selected: true });
    });

    it("renders as link", async () => {
        await htmlSnap(Default, { href: "www.ebay.com" });
    });

    it("renders as link selected", async () => {
        await htmlSnap(Expressive, {
            href: "www.ebay.com",
            a11ySelectedText: "selected",
            selected: true,
        });
    });
});
