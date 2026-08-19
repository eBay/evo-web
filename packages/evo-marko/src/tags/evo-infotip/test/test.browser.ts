import { composeStories } from "@storybook/marko";
import { cleanup, render } from "@marko/testing-library";
import { userEvent, type UserEvent } from "vitest/browser";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import * as stories from "../infotip.stories";

const { Default } = composeStories(stories);

let component: Awaited<ReturnType<typeof render>>;
let user: UserEvent;

describe("evo-infotip focus management", () => {
  beforeEach(async () => {
    user = userEvent.setup();
    component = await render(Default);
  });

  afterEach(() => {
    user.cleanup();
    cleanup();
  });

  it("returns focus to the trigger when the close button is clicked", async () => {
    const trigger = component.getByRole("button", {
      name: "Important information",
    });

    await user.click(trigger);
    await user.click(
      component.getByRole("button", { name: "Dismiss infotip" }),
    );

    expect(document.activeElement).toBe(trigger);
  });
});
