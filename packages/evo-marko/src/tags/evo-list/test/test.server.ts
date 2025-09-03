import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../list.stories";

const { Static, Interactive, WithSeparator } = composeStories(stories);

it("renders static list", async () => {
    await snapshotHTML(Static);
});

it("renders interactive list", async () => {
    await snapshotHTML(Interactive);
});

it("renders with separator element", async () => {
    await snapshotHTML(WithSeparator);
});
