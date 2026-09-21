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

  it("masks typed text into the locale format with independent parts", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;

    // A continuous digit run is chunked, with an eager trailing separator.
    await fireEvent.input(textbox, { target: { value: "12" } });
    expect(textbox.value).toBe("12/");
    await fireEvent.input(textbox, { target: { value: "12" } });
    expect(textbox.value).toBe("12"); // no re-append while deleting
    await fireEvent.input(textbox, { target: { value: "12082024" } });
    expect(textbox.value).toBe("12/08/2024");

    // Each part edits independently once separators exist.
    for (const step of ["12/8/2024", "12//2024", "12/15/2024"]) {
      await fireEvent.input(textbox, { target: { value: step } });
      expect(textbox.value).toBe(step);
    }
  });

  it("commits a parsed date on blur and flags unparseable text", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "12082024" } });
    await fireEvent.blur(textbox);
    expect(textbox.value).toBe("12/08/2024");
    expect(textbox).not.toHaveAttribute("aria-invalid");
    expect(onInvalidDate).not.toHaveBeenCalled();

    await fireEvent.input(textbox, { target: { value: "99/99/9999" } });
    await fireEvent.blur(textbox);
    expect(textbox).toHaveAttribute("aria-invalid", "true");
    expect(onInvalidDate).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "99/99/9999",
      0,
    );
  });

  it("opens and closes the calendar popover", async () => {
    const trigger = component.getByRole("button", { name: "Open calendar" });
    const root = component.container.querySelector(
      ".date-textbox",
    ) as HTMLElement;
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;
    expect(popover.hidden).toBe(true);
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(false);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAttribute("aria-controls", popover.id);

    // Pointerdown on non-interactive popover content keeps it open;
    // pointerdown outside the component closes it, as does Escape.
    await fireEvent.pointerDown(popover.querySelector("caption") as Element);
    expect(popover.hidden).toBe(false);
    await fireEvent.pointerDown(document.body);
    expect(popover.hidden).toBe(true);

    await fireEvent.click(trigger);
    await fireEvent.keyDown(root, { key: "Escape" });
    expect(popover.hidden).toBe(true);
    expect(document.activeElement).toBe(trigger);
  });

  it("disables the field and popover when disabled", async () => {
    component = await render(Default, { locale: "en-US", disabled: true });
    expect(component.getByRole("textbox")).toBeDisabled();
    await fireEvent.click(
      component.getByRole("button", { name: "Open calendar" }),
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
