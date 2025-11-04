import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../select.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

const { Floating } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("select", () => {
    it("renders basic version", async () => {
        await htmlSnap(Floating);
    });

    it("renders empty", async () => {
        await htmlSnap(Floating, { option: [] });
    });

    it("renders with second item selected", async () => {
        await htmlSnap(Floating, {
            option: [
                { text: "option 0", value: "0" },
                { text: "option 1", value: "1", selected: true },
                { text: "option 2", value: "2" },
            ],
        });
    });

    it("renders with borderless=true", async () => {
        await htmlSnap(Floating, { borderless: true });
    });

    it("renders with fluid=true", async () => {
        await htmlSnap(Floating, { fluid: true });
    });

    it("renders an input select with inline floating label", async () => {
        await htmlSnap(Floating);
    });

    it("renders an input select with inline floating label and an id", async () => {
        await htmlSnap(Floating, { id: "select-id" });
    });

    it("renders a disabled input select with disabled floating label", async () => {
        await htmlSnap(Floating, { disabled: true });
    });

    testPassThroughAttributes(Floating, {
        getClassAndStyleEl(component) {
            return component.getByRole("combobox").parentElement;
        },
    });
});
