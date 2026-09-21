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

  it("renders two fields and a single calendar trigger", () => {
    expect(component.getAllByRole("textbox")).toHaveLength(2);
    expect(
      component.getAllByRole("button", { name: "Open calendar" }),
    ).toHaveLength(1);
  });

  it("commits the start date from the first field", async () => {
    const [start] = component.getAllByRole("textbox") as HTMLInputElement[];
    await fireEvent.input(start, { target: { value: "12082024" } });
    await fireEvent.blur(start);
    expect(valueChange).toHaveBeenCalledWith({
      from: "2024-12-08",
      to: undefined,
    });
  });

  it("commits the end date from the second field", async () => {
    const [, end] = component.getAllByRole("textbox") as HTMLInputElement[];
    await fireEvent.input(end, { target: { value: "12202024" } });
    await fireEvent.blur(end);
    expect(valueChange).toHaveBeenCalledWith({
      from: undefined,
      to: "2024-12-20",
    });
  });

  it("reports the end field's index on invalid input", async () => {
    const [, end] = component.getAllByRole("textbox") as HTMLInputElement[];
    await fireEvent.input(end, { target: { value: "99/99/9999" } });
    await fireEvent.blur(end);
    expect(onInvalidDate).toHaveBeenCalledWith({
      value: "99/99/9999",
      index: 1,
    });
  });

  it("opens the shared calendar popover from the end field's trigger", async () => {
    const trigger = component.getByRole("button", { name: "Open calendar" });
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;
    expect(popover.hidden).toBe(true);
    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(false);
  });
});
