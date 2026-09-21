import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render } from "@marko/testing-library";
import * as stories from "../date-range-input.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-date-range-input", () => {
  const valueChange = vi.fn();
  const onInvalidDate = vi.fn();

  beforeEach(async () => {
    valueChange.mockReset();
    onInvalidDate.mockReset();
    component = await render(Default, {
      locale: "en-US",
      valueChange,
      onInvalidDate,
    });
  });

  it("commits each field to its side of the range", async () => {
    const [start, end] = component.getAllByRole(
      "textbox",
    ) as HTMLInputElement[];
    await fireEvent.input(start, { target: { value: "12082024" } });
    await fireEvent.blur(start);
    expect(valueChange).toHaveBeenCalledWith({
      from: "2024-12-08",
      to: undefined,
    });

    await fireEvent.input(end, { target: { value: "99/99/9999" } });
    await fireEvent.blur(end);
    expect(onInvalidDate).toHaveBeenCalledWith({
      value: "99/99/9999",
      index: 1,
    });
  });

  it("opens the shared calendar popover from the single trigger", async () => {
    const [trigger] = component.getAllByRole("button", {
      name: "Open calendar",
    });
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;
    expect(popover.hidden).toBe(true);
    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(false);
  });
});
