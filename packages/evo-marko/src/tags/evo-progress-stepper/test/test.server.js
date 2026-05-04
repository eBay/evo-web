import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../progress-stepper.stories";

const { Default } = composeStories(stories);

it("renders default progress-stepper", async () => {
  await snapshotHTML(Default);
});
