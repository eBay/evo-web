import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../textbox.stories";

const {
  Isolated,
  WithLabel,
  FloatingLabel,
  Disabled,
  PrefixIcon,
  BothIcons,
  PostfixIcon,
} = composeStories(stories);

describe("evo-textbox", () => {
  it("renders default input textbox", async () => {
    await snapshotHTML(Isolated);
  });

  it("renders default input textbox with an id", async () => {
    await snapshotHTML(Isolated, { id: "textbox-id" });
  });

  it("renders fluid input textbox", async () => {
    await snapshotHTML(Isolated, { fluid: true });
  });

  it("renders a disabled input textbox", async () => {
    await snapshotHTML(Disabled);
  });

  it("renders a input textbox with invalid/error state", async () => {
    await snapshotHTML(Isolated, { invalid: true });
  });

  it("renders a input textbox with external label", async () => {
    await snapshotHTML(WithLabel);
  });

  it("renders a textarea element", async () => {
    await snapshotHTML(Isolated, { multiline: true });
  });

  it("renders a textarea element with prefix icon", async () => {
    await snapshotHTML(PrefixIcon);
  });

  it("renders a textbox element with floating label and without prefix icon", async () => {
    await snapshotHTML(PrefixIcon, { floatingLabel: "test label" });
  });

  it("renders a textarea element with postfix icon", async () => {
    await snapshotHTML(PostfixIcon);
  });

  it("renders a textarea element with postfix icon button", async () => {
    await snapshotHTML(BothIcons);
  });

  it("renders an input textbox with inline floating label", async () => {
    await snapshotHTML(FloatingLabel);
  });

  it("renders an input textbox with opaque floating label", async () => {
    await snapshotHTML(FloatingLabel, { opaqueLabel: true });
  });

  it("renders an input textbox with inline floating label and an id", async () => {
    await snapshotHTML(FloatingLabel, { id: "text-id" });
  });

  it("renders a disabled input textbox with disabled floating label", async () => {
    await snapshotHTML(FloatingLabel, { disabled: true });
  });
});
