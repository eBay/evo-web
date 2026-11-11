import { composeStories } from "@storybook/marko";
import { cleanup, render, waitFor } from "@marko/testing-library";
import { userEvent, type UserEvent } from "vitest/browser";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  onTestFinished,
} from "vitest";
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

it("is not clipped by an overflow: hidden ancestor with a detached overlay", async () => {
  const container = document.createElement("div");
  container.style.cssText =
    "overflow: hidden; height: 24px; margin: 100px 0 0 150px;";
  document.body.appendChild(container);
  onTestFinished(() => {
    cleanup();
    container.remove();
  });
  await render(Default, { detachPopover: true, open: true }, { container });
  const overlay = container.querySelector(".infotip__overlay") as HTMLElement;
  await waitFor(() => expect(overlay.style.visibility).toBe("visible"));

  const { left, width, bottom } = overlay.getBoundingClientRect();
  expect(bottom).toBeGreaterThan(container.getBoundingClientRect().bottom);
  expect(
    overlay.contains(document.elementFromPoint(left + width / 2, bottom - 5)),
  ).toBe(true);
});
