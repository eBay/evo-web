import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../pagination.stories";
import { getPaginationItems } from "../../../common/test-utils/shared";

const { Buttons, Links, Interactive } = composeStories(stories);

describe("pagination", () => {
    describe("with links", () => {
        it("renders basic version", async () => {
            await snapshotHTML(Links);
        });
        it("renders with last page visible", async () => {
            await snapshotHTML(Links, { variant: "show-last" });
        });

        it("renders with overflow", async () => {
            await snapshotHTML(Links, { variant: "overflow" });
        });

        it("renders empty version", async () => {
            await snapshotHTML(Links, { item: getPaginationItems(0, true, 3) });
        });

        it("renders with a selected item", async () => {
            await snapshotHTML(Links, { item: getPaginationItems(15, true, 3) });
        });

        it("renders with aria-disabled when navigation is disabled", async () => {
            await snapshotHTML(Links, {
                item: getPaginationItems(15, true, 3, true),
            });
        });

        it("renders with aria-disabled when navigation items missing", async () => {
            await snapshotHTML(Links, {
                item: getPaginationItems(15, true, 3, true, true),
            });
        });
    });

    describe("with buttons", () => {
        it("renders default button version", async () => {
            await snapshotHTML(Buttons);
        });

        it("renders buttons with last page visible", async () => {
            await snapshotHTML(Buttons, { variant: "show-last" });
        });

        it("renders default button with overflow", async () => {
            await snapshotHTML(Buttons, { variant: "overflow" });
        });

        it("renders empty button version", async () => {
            await snapshotHTML(Buttons, { item: getPaginationItems(0, false) });
        });

        it("renders button version", async () => {
            await snapshotHTML(Buttons, { item: getPaginationItems(15, false) });
        });

        it("renders button version selected items", async () => {
            await snapshotHTML(Buttons, {
                item: getPaginationItems(15, false, 3),
            });
        });
    });
    describe("Interactive", () => {
        it("renders defaults", async () => {
            await snapshotHTML(Interactive);
        });
    });
});
