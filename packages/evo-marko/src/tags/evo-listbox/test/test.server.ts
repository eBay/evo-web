import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../listbox.stories";

const { Default, withDescription } = composeStories(stories);

const option = [...Default.args.option];

describe("listbox", () => {
    it("renders basic version", async () => {
        await snapshotHTML(Default);
    });

    it("renders empty", async () => {
        await snapshotHTML(Default, { option: [] });
    });

    it("renders with second item selected", async () => {
        option[1] = Object.assign({ selected: true }, option[1]);

        await snapshotHTML(Default, { option });
    });

    it("renders with second item disabled", async () => {
        option[1] = Object.assign({ disabled: true }, option[1]);

        await snapshotHTML(Default, { option });
    });

    it("renders with description", async () => {
        await snapshotHTML(withDescription);
    });
});
