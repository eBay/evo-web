import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
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

  it("leaves typed text alone and commits a parsed date on change", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "12-8" } });
    expect(textbox.value).toBe("12-8");

    await fireEvent.input(textbox, { target: { value: "12-8-24" } });
    await fireEvent.change(textbox);
    expect(textbox.value).toBe("12/08/2024");
    expect(textbox).not.toHaveAttribute("aria-invalid");
    expect(onInvalidDate).not.toHaveBeenCalled();

    await fireEvent.input(textbox, { target: { value: "99/99/9999" } });
    await fireEvent.change(textbox);
    expect(textbox.value).toBe("99/99/9999");
    expect(textbox).toHaveAttribute("aria-invalid", "true");
    expect(onInvalidDate).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "99/99/9999",
      0,
    );
  });

  it("reads ISO dates year-first and rejects parts with extra digits", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await userEvent.fill(textbox, "2024-12-25");
    await userEvent.keyboard("{Enter}");
    await expect.poll(() => textbox.value).toBe("12/25/2024");

    for (const text of [
      "112/08/2024",
      "12/108/2024",
      "12/08/12024",
      "12/08/202",
    ]) {
      await fireEvent.input(textbox, { target: { value: text } });
      await fireEvent.change(textbox);
      expect(textbox).toHaveAttribute("aria-invalid", "true");
    }
  });

  it("adds separators as parts are completed", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    expect(textbox.inputMode).toBe("numeric");
    await userEvent.type(textbox, "12");
    expect(textbox.value).toBe("12/");
    await userEvent.type(textbox, "/4");
    expect(textbox.value).toBe("12/4/");
    await userEvent.type(textbox, "2024");
    expect(textbox.value).toBe("12/4/2024");

    await userEvent.clear(textbox);
    await userEvent.type(textbox, "9");
    expect(textbox.value).toBe("9/");

    await userEvent.clear(textbox);
    await userEvent.type(textbox, "1/5/2024");
    expect(textbox.value).toBe("1/5/2024");
  });

  it("deletes a separator at the end with the digit before it", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(textbox, "12");
    expect(textbox.value).toBe("12/");
    await userEvent.keyboard("{Backspace}");
    expect(textbox.value).toBe("1");
    await userEvent.type(textbox, "1");
    expect(textbox.value).toBe("11/");
  });

  it("skips over separators inside the date with Backspace and Delete", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(textbox, "12/08/2024");
    textbox.setSelectionRange(3, 3);
    await userEvent.keyboard("{Backspace}");
    expect(textbox.value).toBe("12/08/2024");
    expect(textbox.selectionStart).toBe(2);
    await userEvent.keyboard("{Backspace}");
    expect(textbox.value).toBe("1/08/2024");

    textbox.setSelectionRange(4, 4);
    await userEvent.keyboard("{Delete}");
    expect(textbox.value).toBe("1/08/2024");
    expect(textbox.selectionStart).toBe(5);
    await userEvent.keyboard("{Delete}");
    expect(textbox.value).toBe("1/08/024");
  });

  it("focuses the date when the box around it is pressed", async () => {
    const textbox = component.getByRole("textbox");
    const { right } = textbox.getBoundingClientRect();
    await fireEvent.mouseDown(textbox.closest(".textbox")!, {
      clientX: right + 4,
    });
    expect(document.activeElement).toBe(textbox);
  });

  it("shows the rest of the format while typing", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    const ghost = () =>
      component.container.querySelector(".date-textbox__ghost")?.textContent;
    await userEvent.type(textbox, "120");
    await expect.poll(ghost).toBe("12/0D/YYYY");
    await userEvent.type(textbox, "8/2024");
    await expect.poll(ghost).toBeUndefined();

    await userEvent.clear(textbox);
    await userEvent.type(textbox, "12");
    await userEvent.tab();
    await expect.poll(ghost).toBeUndefined();
  });

  it("flags a day that does not exist in the month", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    await fireEvent.input(textbox, { target: { value: "02/30/2024" } });
    await fireEvent.change(textbox);
    expect(textbox).toHaveAttribute("aria-invalid", "true");
    expect(onInvalidDate).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "02/30/2024",
      0,
    );
  });

  it("replaces typed text with a date picked from the calendar for good", async () => {
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    const pick = async (i: number) => {
      await fireEvent.click(
        component.getByRole("button", { name: "Open calendar" }),
      );
      const days = component.container.querySelectorAll<HTMLElement>(
        ".date-textbox__popover td button:not([disabled])",
      );
      await fireEvent.click(days[i]);
    };
    await pick(0);
    const first = textbox.value;
    await fireEvent.input(textbox, { target: { value: "99/99/9999" } });
    await fireEvent.change(textbox);
    expect(textbox).toHaveAttribute("aria-invalid", "true");

    await pick(1);
    expect(textbox.value).not.toBe("99/99/9999");
    await pick(0);
    expect(textbox.value).toBe(first);
    expect(textbox).not.toHaveAttribute("aria-invalid");
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

    await fireEvent.pointerDown(popover.querySelector("caption") as Element);
    expect(popover.hidden).toBe(false);
    await fireEvent.pointerDown(document.body);
    expect(popover.hidden).toBe(true);

    await fireEvent.click(trigger);
    await fireEvent.keyDown(root, { key: "Escape" });
    expect(popover.hidden).toBe(true);
    expect(document.activeElement).toBe(trigger);
  });

  it("closes the calendar popover when focus leaves the component", async () => {
    const trigger = component.getByRole("button", { name: "Open calendar" });
    const textbox = component.getByRole("textbox") as HTMLInputElement;
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;

    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(false);

    await fireEvent.focusOut(trigger, { relatedTarget: textbox });
    expect(popover.hidden).toBe(false);

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    try {
      await fireEvent.focusOut(trigger, { relatedTarget: outside });
      expect(popover.hidden).toBe(true);
    } finally {
      outside.remove();
    }
  });

  it("disables the field, calendar trigger and form value when disabled", async () => {
    component = await render(Default, {
      locale: "en-US",
      disabled: true,
      name: "purchase",
      value: "2024-12-08",
    });
    expect(component.getByRole("textbox")).toBeDisabled();
    expect(
      component.getByRole("button", { name: "Open calendar" }),
    ).toBeDisabled();
    expect(
      component.container.querySelector("input[type=hidden]"),
    ).toBeDisabled();
  });

  it("puts a given id on the input so an outside label can name it", async () => {
    component = await render(Default, { locale: "en-US", id: "purchase" });
    expect(component.getByRole("textbox").id).toBe("purchase");
  });
});
