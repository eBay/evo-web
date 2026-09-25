import { afterEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../chips-combobox.stories";

const { Default, Controllable } = composeStories(stories);

afterEach(cleanup);

const chipTexts = (component: Awaited<ReturnType<typeof render>>) =>
  component.queryAllByRole("listitem").map((li) => li.textContent?.trim());

describe("evo-chips-combobox", () => {
  it("adds chips from option clicks and typed Enter, clearing the input", async () => {
    const component = await render(Default);
    const input = component.getByRole("combobox") as HTMLInputElement;
    expect(chipTexts(component)).toEqual([]);

    await fireEvent.focus(input);
    await fireEvent.click(component.getByText("Option 2"));
    expect(chipTexts(component)).toEqual(["Option 2"]);
    expect(input.value).toBe("");

    await fireEvent.input(input, { target: { value: "Custom Option" } });
    await fireEvent.keyDown(input, { key: "Enter" });
    expect(chipTexts(component)).toEqual(["Option 2", "Custom Option"]);
    expect(input.value).toBe("");
  });

  it("renders selected chips and hides them from the listbox", async () => {
    const component = await render(Controllable);
    expect(chipTexts(component)).toEqual(["Option 1", "Custom Option"]);
    await fireEvent.focus(component.getByRole("combobox"));
    expect(component.queryAllByRole("option")).toHaveLength(2);
  });

  it("deletes chips, moving focus to the next chip and finally the textbox", async () => {
    const component = await render(Controllable);

    await fireEvent.click(
      component.getByRole("button", { name: "Remove Option 1" }),
    );
    expect(chipTexts(component)).toEqual(["Custom Option"]);
    await vi.waitFor(() =>
      expect(document.activeElement).toBe(
        component.getByRole("button", { name: "Remove Custom Option" }),
      ),
    );

    await fireEvent.click(
      component.getByRole("button", { name: "Remove Custom Option" }),
    );
    expect(chipTexts(component)).toEqual([]);
    await vi.waitFor(() =>
      expect(document.activeElement).toBe(component.getByRole("combobox")),
    );
  });
});
