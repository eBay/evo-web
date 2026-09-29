import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoTriStateCheckbox } from "../tri-state-checkbox";

describe("evo-tri-state-checkbox", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("cycles through mixed, checked, and unchecked with native change events", async () => {
    const onChange = vi.fn();
    const onCheckedChange = vi.fn();
    const screen = await render(
      <EvoTriStateCheckbox
        aria-label="Select all items"
        onChange={onChange}
        onCheckedChange={onCheckedChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Select all items" });

    await expect.element(checkbox).toHaveAttribute("aria-checked", "false");
    await user.click(checkbox);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "mixed");
    expect((checkbox.element() as HTMLInputElement).indeterminate).toBe(true);
    expect(onCheckedChange).toHaveBeenLastCalledWith("mixed");

    await user.click(checkbox);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "true");
    await expect.element(checkbox).toBeChecked();
    await user.click(checkbox);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "false");
    expect(onCheckedChange).toHaveBeenLastCalledWith("false");
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[0]).toHaveLength(1);
  });

  it("skips mixed when requested", async () => {
    const screen = await render(
      <EvoTriStateCheckbox aria-label="Select all items" skipMixed />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Select all items" });

    await user.click(checkbox);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "true");
    await user.click(checkbox);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "false");
  });

  it("supports controlled standalone state", async () => {
    function ControlledCheckbox() {
      const [checked, setChecked] = useState<"false" | "mixed" | "true">(
        "mixed",
      );
      return (
        <EvoTriStateCheckbox
          aria-label="Select all items"
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    }

    const screen = await render(<ControlledCheckbox />);
    const checkbox = screen.getByRole("checkbox", { name: "Select all items" });
    await expect.element(checkbox).toHaveAttribute("aria-checked", "mixed");
    await user.click(checkbox);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "true");
  });

  it("updates a controlled group and restores the previous partial selection", async () => {
    const onCheckedValuesChange = vi.fn();
    function GroupCheckbox() {
      const [checkedValues, setCheckedValues] = useState(["Camera"]);
      return (
        <EvoTriStateCheckbox
          aria-label="Select inventory"
          values={["Camera", "Lens", "Tripod"]}
          checkedValues={checkedValues}
          onCheckedValuesChange={(nextValues) => {
            onCheckedValuesChange(nextValues);
            setCheckedValues(nextValues);
          }}
        />
      );
    }

    const screen = await render(<GroupCheckbox />);
    const checkbox = screen.getByRole("checkbox", { name: "Select inventory" });
    await expect.element(checkbox).toHaveAttribute("aria-checked", "mixed");
    await user.click(checkbox);
    expect(onCheckedValuesChange).toHaveBeenLastCalledWith([
      "Camera",
      "Lens",
      "Tripod",
    ]);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "true");
    await user.click(checkbox);
    expect(onCheckedValuesChange).toHaveBeenLastCalledWith([]);
    await user.click(checkbox);
    expect(onCheckedValuesChange).toHaveBeenLastCalledWith(["Camera"]);
    await expect.element(checkbox).toHaveAttribute("aria-checked", "mixed");
  });

  it("forwards the ref and native input attributes", async () => {
    const ref = createRef<HTMLInputElement>();
    const screen = await render(
      <EvoTriStateCheckbox
        aria-label="Select all items"
        disabled
        name="inventory"
        ref={ref}
        size="large"
        value="all"
      />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Select all items" });

    expect(ref.current).toBe(checkbox.element());
    await expect.element(checkbox).toBeDisabled();
    await expect.element(checkbox).toHaveAttribute("name", "inventory");
    await expect.element(checkbox).toHaveAttribute("value", "all");
    expect(ref.current?.closest(".checkbox--large")).not.toBeNull();
  });
});
