import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render } from "@marko/testing-library";
import * as stories from "../date-input.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-date-input", () => {
  const onInvalidDate = vi.fn();

  beforeEach(async () => {
    onInvalidDate.mockReset();
    component = await render(Default, {
      locale: "en-US",
      onInvalidDate,
    });
  });

  it("renders a field and a calendar trigger button", () => {
    expect(component.getByRole("textbox")).toBeTruthy();
    expect(
      component.getByRole("button", { name: "Open calendar" }),
    ).toBeTruthy();
  });

  it("shows a locale placeholder while focused", async () => {
    // The floating label hides the placeholder until the field is focused.
    const textbox = component.getByRole("textbox");
    await fireEvent.focus(textbox);
    expect(textbox).toHaveAttribute("placeholder", "MM/DD/YYYY");
  });

  it("masks typed digits into the locale format", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "12082024" } });
    expect(textbox.value).toBe("12/08/2024");
  });

  it("appends the separator after a complete segment", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "12" } });
    expect(textbox.value).toBe("12/");
  });

  it("does not re-append a separator while deleting", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "12" } });
    expect(textbox.value).toBe("12/");
    await fireEvent.input(textbox, { target: { value: "12" } });
    expect(textbox.value).toBe("12");
  });

  it("formats the committed value on blur", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "12082024" } });
    await fireEvent.blur(textbox);
    expect(textbox.value).toBe("12/08/2024");
    expect(textbox).not.toHaveAttribute("aria-invalid");
    expect(onInvalidDate).not.toHaveBeenCalled();
  });

  it("flags unparseable text on blur", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "99/99/9999" } });
    await fireEvent.blur(textbox);
    expect(textbox).toHaveAttribute("aria-invalid", "true");
    expect(onInvalidDate).toHaveBeenCalledWith({
      value: "99/99/9999",
      index: 0,
    });
  });

  it("opens and closes the calendar popover from the trigger", async () => {
    const trigger = component.getByRole("button", { name: "Open calendar" });
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;
    expect(popover.hidden).toBe(true);
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(false);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAttribute("aria-controls", popover.id);

    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(true);
  });

  it("closes the popover on Escape", async () => {
    const trigger = component.getByRole("button", { name: "Open calendar" });
    await fireEvent.click(trigger);
    await fireEvent.keyDown(
      component.container.querySelector(".date-textbox") as HTMLElement,
      { key: "Escape" },
    );
    expect(
      (
        component.container.querySelector(
          ".date-textbox__popover",
        ) as HTMLElement
      ).hidden,
    ).toBe(true);
  });
});

describe("evo-date-input disabled", () => {
  beforeEach(async () => {
    component = await render(Default, { locale: "en-US", disabled: true });
  });

  it("disables the field and does not open the popover", async () => {
    expect(component.getByRole("textbox")).toBeDisabled();
    const trigger = component.getByRole("button", { name: "Open calendar" });
    await fireEvent.click(trigger);
    expect(
      (
        component.container.querySelector(
          ".date-textbox__popover",
        ) as HTMLElement
      ).hidden,
    ).toBe(true);
  });
});
