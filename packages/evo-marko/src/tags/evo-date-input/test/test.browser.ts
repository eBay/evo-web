import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { userEvent } from "vitest/browser";
import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render } from "@marko/testing-library";
import * as stories from "../date-input.stories";

const { Controllable } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let month: HTMLInputElement;
let day: HTMLInputElement;
let year: HTMLInputElement;

const selected = () => component.getByText(/^Selected:/).textContent;

describe("evo-date-input", () => {
  beforeEach(async () => {
    component = await render(Controllable, { locale: "en-US" });
    [month, day, year] = component.getAllByRole(
      "spinbutton",
    ) as HTMLInputElement[];
  });

  it("names and orders the parts by locale", async () => {
    expect(component.getByRole("group", { name: "Purchase date" })).toBe(
      month.closest(".textbox"),
    );
    expect([month, day, year].map((part) => part.ariaLabel)).toEqual([
      "month",
      "day",
      "year",
    ]);
    expect([month, day, year].map((part) => part.placeholder)).toEqual([
      "MM",
      "DD",
      "YYYY",
    ]);

    cleanup();
    component = await render(Controllable, { locale: "de-DE" });
    expect(
      component.getAllByRole("spinbutton").map((part) => part.ariaLabel),
    ).toEqual(["Tag", "Monat", "Jahr"]);
  });

  it("pads digits and moves on when a part is full", async () => {
    await userEvent.click(month);
    await userEvent.keyboard("9");
    expect(month.value).toBe("09");
    expect(document.activeElement).toBe(day);

    await userEvent.keyboard("1");
    expect(day.value).toBe("01");
    expect(document.activeElement).toBe(day);
    await userEvent.keyboard("5");
    expect(day.value).toBe("15");
    expect(document.activeElement).toBe(year);

    await userEvent.keyboard("2026");
    expect(year.value).toBe("2026");
    expect(selected()).toBe("Selected: 2026-09-15");
  });

  it("moves on at a separator key and back at Backspace in an empty part", async () => {
    await userEvent.click(month);
    await userEvent.keyboard("1/");
    expect(month.value).toBe("01");
    expect(document.activeElement).toBe(day);

    await userEvent.keyboard("{Backspace}");
    expect(document.activeElement).toBe(month);
    await userEvent.keyboard("{Backspace}");
    expect(month.value).toBe("");
  });

  it("steps parts with the arrow keys, wrapping months and days", async () => {
    await userEvent.click(month);
    await userEvent.keyboard("{ArrowUp}");
    expect(month.value).toBe("01");
    await userEvent.keyboard("{ArrowDown}");
    expect(month.value).toBe("12");
    expect(month).toHaveAttribute("aria-valuenow", "12");

    await userEvent.click(year);
    await userEvent.keyboard("{ArrowUp}");
    expect(year.value).toBe(String(new Date().getFullYear()));
  });

  it("keeps a date that doesn't exist but marks it invalid", async () => {
    await userEvent.click(month);
    await userEvent.keyboard("02312026");
    expect([month.value, day.value, year.value]).toEqual(["02", "31", "2026"]);
    expect(month).toHaveAttribute("aria-invalid", "true");
    expect(selected()).toBe("Selected: none");
  });

  it("shows a date picked in the calendar", async () => {
    await userEvent.click(
      component.getByRole("button", { name: "Open calendar" }),
    );
    const [firstDay] = component.container.querySelectorAll(
      ".date-textbox__popover td button",
    ) as NodeListOf<HTMLButtonElement>;
    await fireEvent.click(firstDay);
    expect(selected()).toMatch(/-01$/);
    expect(day.value).toBe("01");
  });

  it("opens and closes the calendar popover", async () => {
    const trigger = component.getByRole("button", { name: "Open calendar" });
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;
    expect(popover.hidden).toBe(true);
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await fireEvent.click(trigger);
    expect(popover.hidden).toBe(false);
    expect(trigger).toHaveAttribute("aria-controls", popover.id);

    await fireEvent.pointerDown(document.body);
    expect(popover.hidden).toBe(true);

    await fireEvent.click(trigger);
    await fireEvent.keyDown(trigger, { key: "Escape" });
    expect(popover.hidden).toBe(true);
    expect(document.activeElement).toBe(trigger);
  });

  it("disables the parts and the calendar button when disabled", async () => {
    cleanup();
    component = await render(Controllable, { locale: "en-US", disabled: true });
    for (const part of component.getAllByRole("spinbutton")) {
      expect(part).toBeDisabled();
    }
    expect(
      component.getByRole("button", { name: "Open calendar" }),
    ).toBeDisabled();
  });
});
