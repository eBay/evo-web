import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
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

  it("names both dates inside one labeled group", async () => {
    component = await render(Default, {
      locale: "en-US",
      startName: "from",
      endName: "to",
    });
    const group = component.getByRole("group", { name: "Purchase dates" });
    const [start, end] = component.getAllByRole("textbox");
    expect(group).toContainElement(start);
    expect(group).toContainElement(end);
    expect(start).toHaveAccessibleName("Start");
    expect(end).toHaveAccessibleName("End");

    await fireEvent.input(start, { target: { value: "12/08/2024" } });
    await fireEvent.change(start);
    const hidden =
      component.container.querySelectorAll<HTMLInputElement>(
        "input[type=hidden]",
      );
    expect([...hidden].map((el) => [el.name, el.value])).toEqual([
      ["from", "2024-12-08"],
      ["to", ""],
    ]);
  });

  it("moves to the end date once the start date is filled in", async () => {
    component = await render(Default, { locale: "en-US" });
    const [start, end] = component.getAllByRole("textbox");
    await userEvent.type(start, "12082024");
    expect(document.activeElement).toBe(end);
    await userEvent.keyboard("12152024");
    expect((start as HTMLInputElement).value).toBe("12/08/2024");
    expect((end as HTMLInputElement).value).toBe("12/15/2024");
  });

  it("focuses the nearer date when the box around them is clicked", async () => {
    const [start, end] = component.getAllByRole("textbox");
    const box = start.closest(".textbox") as HTMLElement;
    const { width, height } = box.getBoundingClientRect();
    await userEvent.click(box, { position: { x: width - 60, y: height / 2 } });
    expect(document.activeElement).toBe(end);
    await userEvent.click(box, { position: { x: 4, y: height / 2 } });
    expect(document.activeElement).toBe(start);
  });

  it("commits each field to its side of the range", async () => {
    const [start, end] = component.getAllByRole(
      "textbox",
    ) as HTMLInputElement[];
    await fireEvent.input(start, { target: { value: "12082024" } });
    await fireEvent.change(start);
    expect(valueChange).toHaveBeenCalledWith({
      from: "2024-12-08",
      to: undefined,
    });

    await fireEvent.input(end, { target: { value: "99/99/9999" } });
    await fireEvent.change(end);
    expect(onInvalidDate).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "99/99/9999",
      1,
    );
  });

  it("marks both fields invalid when the start date is after the end", async () => {
    component = await render(Default, { locale: "en-US" });
    const [start, end] = component.getAllByRole(
      "textbox",
    ) as HTMLInputElement[];
    await fireEvent.input(start, { target: { value: "12/08/2024" } });
    await fireEvent.change(start);
    await fireEvent.input(end, { target: { value: "12/01/2024" } });
    await fireEvent.change(end);
    expect(start).toHaveAttribute("aria-invalid", "true");
    expect(end).toHaveAttribute("aria-invalid", "true");

    await fireEvent.input(end, { target: { value: "12/25/2024" } });
    await fireEvent.change(end);
    expect(start).not.toHaveAttribute("aria-invalid");
    expect(end).not.toHaveAttribute("aria-invalid");
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
