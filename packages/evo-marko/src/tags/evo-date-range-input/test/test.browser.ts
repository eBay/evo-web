import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { userEvent } from "vitest/browser";
import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render } from "@marko/testing-library";
import * as stories from "../date-range-input.stories";

const { Controllable } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let parts: HTMLInputElement[];
const selected = () => component.getByText(/^Selected:/).textContent;

describe("evo-date-range-input", () => {
  beforeEach(async () => {
    component = await render(Controllable, { locale: "en-US" });
    parts = component.getAllByRole("spinbutton") as HTMLInputElement[];
  });

  it("groups each date's parts under Start and End", () => {
    const field = component.getByRole("group", { name: "Purchase dates" });
    const start = component.getByRole("group", { name: "Start" });
    const end = component.getByRole("group", { name: "End" });
    expect(field).toContainElement(start);
    expect(field).toContainElement(end);
    expect(parts).toHaveLength(6);
    expect(start).toContainElement(parts[2]);
    expect(end).toContainElement(parts[3]);
  });

  it("types through all six parts", async () => {
    await userEvent.click(parts[0]);
    await userEvent.keyboard("0901202609302026");
    expect(parts.map((part) => part.value)).toEqual([
      "09",
      "01",
      "2026",
      "09",
      "30",
      "2026",
    ]);
    expect(selected()).toBe("Selected: 2026-09-01 – 2026-09-30");
  });

  it("marks the parts invalid when the start date is after the end", async () => {
    await userEvent.click(parts[0]);
    await userEvent.keyboard("1208202412012024");
    for (const part of parts) {
      expect(part).toHaveAttribute("aria-invalid", "true");
    }

    await userEvent.click(parts[4]);
    await userEvent.keyboard("25");
    for (const part of parts) {
      expect(part).not.toHaveAttribute("aria-invalid");
    }
  });

  it("opens the shared calendar popover", async () => {
    const popover = component.container.querySelector(
      ".date-textbox__popover",
    ) as HTMLElement;
    expect(popover.hidden).toBe(true);
    await fireEvent.click(
      component.getByRole("button", { name: "Open calendar" }),
    );
    expect(popover.hidden).toBe(false);
  });
});
