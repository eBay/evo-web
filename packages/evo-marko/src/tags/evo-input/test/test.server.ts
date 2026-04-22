import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../input.stories";

const {
  Isolated,
  WithLabel,
  FloatingLabel,
  Disabled,
  PrefixIcon,
  BothIcons,
  PostfixIcon,
} = composeStories(stories);

describe("evo-input", () => {
  it("renders default input", async () => {
    await snapshotHTML(Isolated);
  });

  it("renders default input with an id", async () => {
    await snapshotHTML(Isolated, { id: "textbox-id" });
  });

  it("renders fluid input", async () => {
    await snapshotHTML(Isolated, { fluid: true });
  });

  it("renders a disabled input", async () => {
    await snapshotHTML(Disabled);
  });

  it("renders an input with invalid/error state", async () => {
    await snapshotHTML(Isolated, { invalid: true });
  });

  it("renders an input with external label", async () => {
    await snapshotHTML(WithLabel);
  });

  it("renders an input with prefix icon", async () => {
    await snapshotHTML(PrefixIcon);
  });

  it("renders an input with floating label and without prefix icon", async () => {
    await snapshotHTML(PrefixIcon, { floatingLabel: "test label" });
  });

  it("renders an input with postfix icon", async () => {
    await snapshotHTML(PostfixIcon);
  });

  it("renders an input with postfix icon button", async () => {
    await snapshotHTML(BothIcons);
  });

  it("renders an input with inline floating label", async () => {
    await snapshotHTML(FloatingLabel);
  });

  it("renders an input with opaque floating label", async () => {
    await snapshotHTML(FloatingLabel, { opaqueLabel: true });
  });

  it("renders an input with inline floating label and an id", async () => {
    await snapshotHTML(FloatingLabel, { id: "text-id" });
  });

  it("renders a disabled input with disabled floating label", async () => {
    await snapshotHTML(FloatingLabel, { disabled: true });
  });
});
